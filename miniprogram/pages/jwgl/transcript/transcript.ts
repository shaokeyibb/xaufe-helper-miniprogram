// pages/jwgl/transcript/transcript.ts
const transcript_relayModule = require('../../../utils/relay.js')
const transcript_jwglModule = require('../../../solutions/jwgl')

Page({

  /**
   * Page initial data
   */
  data: {
    years: [{
      key: "全部",
      value: ""
    }].concat(Array.from(new Array(new Date().getFullYear() + 1).keys()).slice(1970).map(it => {
      return {
        key: `${it} - ${it + 1}`,
        value: it.toString()
      }
    }).reverse()),

    terms: [
      {
        key: "全部",
        value: ""
      },
      {
        key: "1",
        value: "3"
      },
      {
        key: "2",
        value: "12"
      },
      {
        key: "3",
        value: "16"
      }
    ],

    tableHeader: [
      {
        prop: 'kcmc',
        label: '课程名称',
        width: 200,
        color: 'purple'
      },
      {
        prop: 'kcxzmc',
        label: '课程性质',
        width: 180
      },
      {
        prop: 'cj',
        label: '成绩',
        width: 60,
        color: 'black'
      },
      {
        prop: 'ksxz',
        label: '成绩性质',
        width: 100
      },
      {
        prop: 'xf',
        label: '学分',
        width: 50,
        color: 'black'
      },
      {
        prop: 'jd',
        label: '绩点',
        width: 70,
        color: 'black'
      },
      {
        prop: 'xfjd',
        label: '学分绩点',
        width: 90,
        color: 'black'
      }
    ],

    selectedYearIdx: 0,
    selectedTermIdx: 0
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad() {
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: '学生成绩查询'
    })
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  },

  async onSubmitQuery(e: any) {
    let data = e.detail.value;
    data = {
      "xnm": this.data.years[data.xnm].value,
      "xqm": this.data.terms[data.xqm].value,
      "_search": false,
      "nd": Date.now(),
      "queryModel.showCount": 1000,
      "queryModel.currentPage": 1,
      "queryModel.sortName": "",
      "queryModel.sortOrder": "asc",
      "time": 1
    }
    wx.showLoading({
      title: '请稍后',
      mask: true
    })

    try {
      const result = await transcript_relayModule.request({
        url: "http://jwgl.xaufe.edu.cn/jwglxt/cjcx/cjcx_cxXsgrcj.html?doType=query",
        method: "POST",
        header: {
          "Cookie": await transcript_jwglModule.getOrRequireTokenCookie(true, "/pages/jwgl/transcript/transcript"),
          "Content-Type": "application/x-www-form-urlencoded"
        },
        form: data,
        dataType: 'json'
      })

      this.setData({
        tableData: result.body.items
      })

      wx.hideLoading()
    } catch (e) {
      wx.showToast({
        title: "查询失败",
        icon: "error",
        mask: true
      })
      throw e;
    }
  },

  onYearChange(e: any) {
    this.setData({
      selectedYearIdx: e.detail.value
    })
  },

  onTermChange(e: any) {
    this.setData({
      selectedTermIdx: e.detail.value
    })
  }
})