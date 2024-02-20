// pages/jwgl/transcript/transcript.ts
// const transcript_relayModule = require('../../../utils/relay.js')
const transcript_jwglModule = require('../../../solutions/jwgl')
const transcript_dateModule = require('../../../utils/date')
const transcript_requestModule = require('../../../utils/request')
const transcript_cookieModule = require('../../../utils/cookie')

Page({

  /**
   * Page initial data
   */
  data: {
    years: [{
      key: "全部",
      value: ""
    }].concat(Array.from(new Array(transcript_dateModule.isInSecondTerm() ? new Date().getFullYear() : new Date().getFullYear() + 1).keys()).slice(1970).map(it => {
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

    selectedYearIdx: 1,
    selectedTermIdx: transcript_dateModule.isInSecondTerm() ? 2 : 1,

    tableData: []
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: '学生成绩查询'
    })
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
      "time": 0,
      "kcbj": ""
    }
    wx.showLoading({
      title: '请稍候',
      mask: true
    })

    try {
      const cookieJar: Record<string, string> = transcript_cookieModule.plainToCookieJar(await transcript_jwglModule.getOrRequireTokenCookie(true, "/pages/jwgl/transcript/transcript"))
      const result = await transcript_requestModule.request({
        url: "https://jwgl.xaufe.edu.cn/jwglxt/cjcx/cjcx_cxXsgrcj.html?doType=query&gnmkdm=N305005",
        method: "POST",
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data,
        dataType: 'json'
      }, true, -1, cookieJar)

      this.setData({
        tableData: result.data.items
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