// pages/utilities/gp_calc/gp_calc.ts
const gp_calc_jwglModule = require('../../../solutions/jwgl')
const gp_calc_requestModule = require('../../../utils/request')
const gp_calc_cookieModule = require('../../../utils/cookie')

const emotions = new Map([...Object.entries({
  4.5: {
    emoji: "😍",
    text: "优秀",
    description: "学霸级别的人物！",
    color: "#B3EE3A"
  },
  3.5: {
    emoji: "🥰",
    text: "良好",
    description: "实际上已经赢了大多数人。",
    color: "#48D1CC"
  },
  2.5: {
    emoji: "😀",
    text: "中等",
    description: "不好也不坏。",
    color: "#FFC125"
  },
  1.5: {
    emoji: "😐",
    text: "及格",
    description: "及格万岁！！！",
    color: "#FF8C00"
  },
  0: {
    emoji: "💀",
    text: "不及格",
    description: "不是兄弟，你怎么做到的？？？",
    color: "#EE2C2C"
  },
  "-1": {
    emoji: "🗿",
    text: "无数据",
    description: "你来到了没有知识的荒原",
    color: "#000"
  }
})].sort((a, b) => Number.parseFloat(b[0]) - Number.parseFloat(a[0])))

Page<{
  tableData: any[],
  bestScores: any[],
  worstScores: any[],
  gpa: string | null,
  emotion: {
    emoji: string,
    text: string,
    description: string,
    color: string
  } | null,
  time: string,
  modes: {
    name: string,
    filter?: (value: any, index: number, array: any[]) => unknown,
    nextIdx: number
  }[],
  modeIdx: number,
  error: string
}, Record<string, any>>({

  /**
   * 页面的初始数据
   */
  data: {
    tableData: [],
    bestScores: [],
    worstScores: [],

    gpa: null,
    emotion: null,
    time: "",
    modes: [
      {
        name: "综合 GPA",
        nextIdx: 1
      },
      {
        name: "专业 GPA",
        filter: (value: any) => value.kcxzdm == 21 || value.kcxzdm == 22 || value.kcxzdm == 23, // 专业基础 || 专业必修 || 专业选修
        nextIdx: 0
      }
    ],
    modeIdx: 0,

    error: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    wx.showLoading({
      title: '请稍候',
      mask: true
    })

    try {
      const cookieJar: Record<string, string> = gp_calc_cookieModule.plainToCookieJar(await gp_calc_jwglModule.getOrRequireTokenCookie(true, "/pages/utilities/gp_calc/gp_calc"))
      const result = await gp_calc_requestModule.request({
        url: "https://jwgl.xaufe.edu.cn/jwglxt/cjcx/cjcx_cxXsgrcj.html?doType=query&gnmkdm=N305005",
        method: "POST",
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          "xnm": "", // require all
          "xqm": "", // require all
          "_search": false,
          "nd": Date.now(),
          "queryModel.showCount": 1000,
          "queryModel.currentPage": 1,
          "queryModel.sortName": "",
          "queryModel.sortOrder": "asc",
          "time": 0,
          "kcbj": ""
        },
        dataType: 'json'
      }, true, 1, cookieJar)

      this.setData({
        tableData: result.data.items
          .filter(it => it.ksxzdm == "01") // 仅计算正常考试绩点
          .filter(it => !isNaN(Number.parseInt(it.cj))), // 仅包含已评价课程
        // god damn why wechat not support Intl.DateTimeFormat
        time: new Date().toLocaleString()
      })

      if (this.data.tableData.length == 0) {
        this.setData({
          error: "有效数据不足，无法进行计算",
          gpa: "-1"
        })
        return
      }

      this.updateGradePointAverage()
      this.updateEmotion()
      this.updateBestScores()
      this.updateWorstScores()
    } catch (e) {
      this.setData({
        error: "发生了意料之外的错误，请联系开发者"
      })
      throw e;
    } finally {
      wx.hideLoading()
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: 'GPA 计算'
    })
  },

  updateGradePointAverage(predicate: ((value: any, index: number, array: any[]) => unknown) | null | undefined = null) {
    let filteredTests = this.data.tableData
    predicate && (filteredTests = filteredTests.filter(predicate))

    if (filteredTests.length == 0) {
      this.setData({
        error: "有效数据不足，无法进行计算",
        gpa: "-1"
      })
      return
    }

    // 平均学分绩点=各门课程学分绩点之和÷各门课程学分数之和
    const xfjd = filteredTests.map(it => Number(it.xfjd)).reduce((prev, cur) => prev + cur)
    const xf = filteredTests.map(it => Number(it.xf)).reduce((prev, cur) => prev + cur)
    this.setData({
      gpa: (xf == 0 ? 0 : xfjd / xf).toFixed(2) // if the total grade point is 0 (wtf really?), just make gpa to 0.
    })
  },

  updateEmotion() {
    const gpa = this.data.gpa
    if (!gpa) return
    for (const [key, value] of emotions) {
      if (Number.parseFloat(gpa) >= Number.parseFloat(key)) {
        this.setData({
          emotion: value
        })
        return
      }
    }
  },

  updateBestScores(predicate: ((value: any, index: number, array: any[]) => unknown) | null | undefined = null) {
    let filteredTests = this.data.tableData
    predicate && (filteredTests = filteredTests.filter(predicate))
    this.setData({
      bestScores: filteredTests
        .sort((a, b) => a.cj != b.cj
          ? Number.parseInt(b.cj) - Number.parseInt(a.cj) // 优先按照成绩排序
          : Number.parseInt(b.xfjd) - Number.parseInt(a.xfjd)) // 当成绩相同时，按照学分绩点排序
        .slice(0, 5)
    })
  },

  updateWorstScores(predicate: ((value: any, index: number, array: any[]) => unknown) | null | undefined = null) {
    let filteredTests = this.data.tableData
    predicate && (filteredTests = filteredTests.filter(predicate))
    this.setData({
      worstScores: filteredTests
        .sort((b, a) => a.cj != b.cj
          ? Number.parseInt(b.cj) - Number.parseInt(a.cj) // 优先按照成绩排序
          : Number.parseInt(b.xfjd) - Number.parseInt(a.xfjd)) // 当成绩相同时，按照学分绩点排序
        .slice(0, 5)
    })
  },

  changeMode() {
    this.setData({
      modeIdx: this.data.modes[this.data.modeIdx].nextIdx
    })
    const filter = this.data.modes[this.data.modeIdx].filter
    this.updateGradePointAverage(filter)
    this.updateEmotion()
    this.updateBestScores(filter)
    this.updateWorstScores(filter)
  },

  onShareAppMessage(){
    if(this.data.gpa != null){
      return {
        title: `我刚刚在“智慧仙财”小程序查询到我的绩点（${this.data.modes[this.data.modeIdx].name}）为 ${this.data.gpa}，你也来查查看吧~`
      }
    }
    return {
      title: "我刚刚在“智慧仙财”小程序查询了我的绩点（GPA），你也来查查看吧~"
    }
  },

  onShareTimeline(){
    if(this.data.gpa != null){
      return {
        title: `我刚刚在“智慧仙财”小程序查询到我的绩点（${this.data.modes[this.data.modeIdx].name}）为 ${this.data.gpa}，你也来查查看吧~`
      }
    }
    return {
      title: "我刚刚在“智慧仙财”小程序查询了我的绩点（GPA），你也来查查看吧~"
    }
  },
})