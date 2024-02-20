// pages/jwgl/examing/examing.ts

// const examing_relayModule = require('../../../utils/relay.js')
const examing_jwglModule = require('../../../solutions/jwgl')
const examing_dateModule = require('../../../utils/date')
const examing_requestModule = require('../../../utils/request')
const examing_cookieModule = require('../../../utils/cookie')

Page({

  /**
   * Page initial data
   */
  data: {
    years: [{
      key: "全部",
      value: ""
    }].concat(Array.from(new Array(examing_dateModule.isInSecondTerm() ? new Date().getFullYear() : new Date().getFullYear() + 1).keys()).slice(1970).map(it => {
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

    examNames: [
      {
        KSMC: "全部",
        KSMCDMB_ID: ""
      }
    ],

    tableHeader: [
      {
        prop: 'kcmc',
        label: '课程名称',
        width: 250,
        color: 'purple'
      },
      {
        prop: 'kssj',
        label: '考试时间',
        width: 250,
        color: 'black'
      },
      {
        prop: 'cdmc',
        label: '考试地点',
        width: 200,
        color: 'black'
      },
      {
        prop: 'cdxqmc',
        label: '考试校区',
        width: 100,
        color: 'black'
      },
      {
        prop: 'ksfs',
        label: '考试方式',
        width: 70,
        color: 'black'
      }
    ],

    selectedYearIdx: 1,
    selectedTermIdx: examing_dateModule.isInSecondTerm() ? 2 : 1,
    selectedExamNameIdx: 0,

    tableData: []
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad() {
    this.onQueryExamName()
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: '考试信息查询'
    })
  },

  async onSubmitQuery(e: any) {
    let data = e.detail.value;
    data = {
      "xnm": this.data.years[data.xnm].value,
      "xqm": this.data.terms[data.xqm].value,
      "ksmcdmb_id": this.data.examNames[data["ksmcdmb_id"]].KSMCDMB_ID ?? "",
      "kch": "",
      "kc": "",
      "ksrq": "",
      "kkbm_id": "",
      "_search": false,
      "nd": Date.now(),
      "queryModel.showCount": 1000,
      "queryModel.currentPage": 1,
      "queryModel.sortName": "",
      "queryModel.sortOrder": "asc",
      "time": 1
    }
    wx.showLoading({
      title: '请稍候',
      mask: true
    })

    try {
      const cookieJar: Record<string, string> = examing_cookieModule.plainToCookieJar(await examing_jwglModule.getOrRequireTokenCookie(true, "/pages/jwgl/examing/examing"))
      const result = await examing_requestModule.request({
        url: "https://jwgl.xaufe.edu.cn/jwglxt/kwgl/kscx_cxXsksxxIndex.html?doType=query",
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

  async onQueryExamName() {
    let data = {
      "xnm": this.data.years[this.data.selectedYearIdx].value,
      "xqm": this.data.terms[this.data.selectedTermIdx].value
    }
    wx.showLoading({
      title: '请稍候',
      mask: true
    })

    try {
      const cookieJar: Record<string, string> =examing_cookieModule.plainToCookieJar(await examing_jwglModule.getOrRequireTokenCookie(true, "/pages/jwgl/examing/examing"))
      const result = await examing_requestModule.request({
        url: "https://jwgl.xaufe.edu.cn/jwglxt/ksglcommon/common_cxKsmcByXnxq.html",
        method: "POST",
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data,
        dataType: 'json'
      }, true, -1, cookieJar)

      this.setData({
        examNames: this.data.examNames.slice(0,1).concat(result.data)
      })

      wx.hideLoading()
    } catch (e) {
      wx.showToast({
        title: "加载失败",
        icon: "error",
        mask: true
      })
      throw e;
    }
  },

  onYearChange(e: any) {
    this.setData({
      selectedYearIdx: e.detail.value,
      selectedExamNameIdx: 0
    })
    this.onQueryExamName()
  },

  onTermChange(e: any) {
    this.setData({
      selectedTermIdx: e.detail.value,
      selectedExamNameIdx: 0
    })
    this.onQueryExamName()
  },

  onExamNameChange(e: any) {
    this.setData({
      selectedExamNameIdx: e.detail.value
    })
  }
})