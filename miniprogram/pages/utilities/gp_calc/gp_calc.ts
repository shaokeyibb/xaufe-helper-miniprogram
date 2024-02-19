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

    error: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    wx.showLoading({
      title: '请稍后',
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
        tableData: result.data.items,
        // god damn why wechat not support Intl.DateTimeFormat
        time: new Date().toLocaleString()
      })

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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  updateGradePointAverage(predicate: ((value: any, index: number, array: any[]) => unknown) | null = null) {
    // 仅计算正常考试绩点
    let commonTests = this.data.tableData.filter(it => it.ksxzdm == "01")
    predicate && (commonTests = commonTests.filter(predicate))
    // 平均学分绩点=各门课程学分绩点之和÷各门课程学分数之和
    this.setData({
      gpa: (commonTests.map(it => Number(it.xfjd)).reduce((prev, cur) => prev + cur) /
        commonTests.map(it => Number(it.xf)).reduce((prev, cur) => prev + cur)).toFixed(2)
    })
  },

  updateEmotion(){
    const gpa = this.data.gpa
    if(!gpa) return
    for(const [key, value] of emotions){
      if(Number.parseFloat(gpa) >= Number.parseFloat(key)){
        this.setData({
          emotion: value
        })
        return
      }
    }
  },

  updateBestScores(){
    this.setData({
      bestScores: this.data.tableData
      .filter(it => it.ksxzdm == "01")
      .sort((a,b)=>Number.parseInt(b.cj) - Number.parseInt(a.cj)).slice(0,5)
    })
  },

  updateWorstScores(){
    this.setData({
      worstScores: this.data.tableData
      .filter(it => it.ksxzdm == "01")
      .sort((a,b)=>Number.parseInt(a.cj) - Number.parseInt(b.cj)).slice(0,5)
    })
  }
})