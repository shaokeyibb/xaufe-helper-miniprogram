// pages/jwgl/examing_new/examing_new.ts
const examing_new_jwglModule = require('../../../solutions/jwgl')
const examing_new_dateModule = require('../../../utils/date')
const examing_new_requestModule = require('../../../utils/request')
const examing_new_cookieModule = require('../../../utils/cookie')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    years: [{
      key: "全部",
      value: ""
    }].concat(Array.from(new Array(examing_new_dateModule.isInSecondTerm() ? new Date().getFullYear() : new Date().getFullYear() + 1).keys()).slice(1970).map(it => {
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
        key: "全部",
        value: ""
      }
    ],

    error: '',

    formData: {
      selectedYearIdx: 1,
      selectedTermIdx: examing_new_dateModule.isInSecondTerm() ? 2 : 1,
      selectedExamNameIdx: 0,
    }
  },

  onLoad() {
    this.onQueryExamName()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: '考试信息查询'
    })
  },

  onInput(e: any) {
    this.setData({
      [`formData.${e.target.id}`]: e.detail.value
    })
    if (e.target.id == "selectedYearIdx" || e.target.id == "selectedTermIdx") {
      this.setData({
        ["formData.selectedExamNameIdx"]: 0 // all
      })
      this.onQueryExamName()
    }
  },

  async onQueryExamName() {
    wx.showLoading({
      title: '请稍候',
      mask: true
    })
    const data: any = {
      "xnm": this.data.years[this.data.formData.selectedYearIdx].value,
      "xqm": this.data.terms[this.data.formData.selectedTermIdx].value
    }
    try {
      const cookieJar: Record<string, string> = examing_new_cookieModule.plainToCookieJar(await examing_new_jwglModule.getOrRequireTokenCookie(true, "/pages/jwgl/examing_new/examing_new"))
      const result: any = await examing_new_requestModule.request({
        url: "https://jwgl.xaufe.edu.cn/jwglxt/ksglcommon/common_cxKsmcByXnxq.html",
        method: "POST",
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data,
        dataType: 'json'
      }, true, -1, cookieJar)

      this.setData({
        examNames: this.data.examNames.slice(0, 1).concat(result.data.map((it: { [x: string]: any }) => {
          return {
            key: it["KSMC"],
            value: it["KSMCDMB_ID"]
          }
        }))
      })

    } catch (err: any) {
      this.setData({
        error: "无法获取考试名称，请稍后再试；如此问题持续发生，请联系开发者：" + err.errMsg
      })
      console.error(err)
    } finally {
      wx.hideLoading()
    }
  },

  async onSubmitQuery() {
    wx.showLoading({
      title: '请稍候',
      mask: true
    })
    const data: any = {
      "xnm": this.data.years[this.data.formData.selectedYearIdx].value,
      "xqm": this.data.terms[this.data.formData.selectedTermIdx].value,
      "ksmcdmb_id": this.data.examNames[this.data.formData.selectedExamNameIdx].value ?? "",
      "kch": "",
      "kc": "",
      "ksrq": "",
      "kkbm_id": "",
      "_search": false,
      "nd": Date.now(),
      "queryModel.showCount": 1000,
      "queryModel.currentPage": 1,
      "queryModel.sortName": "kssj", // sort by exam time
      "queryModel.sortOrder": "asc",
      "time": 1
    }
    try {
      const cookieJar: Record<string, string> = examing_new_cookieModule.plainToCookieJar(await examing_new_jwglModule.getOrRequireTokenCookie(true, "/pages/jwgl/examing_new/examing_new"))
      const result: any = await examing_new_requestModule.request({
        url: "https://jwgl.xaufe.edu.cn/jwglxt/kwgl/kscx_cxXsksxxIndex.html?doType=query",
        method: "POST",
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data,
        dataType: 'json'
      }, true, -1, cookieJar)

      const items = result.data.items

      if (items.length == 0) {
        wx.navigateTo({
          url: "/pages/common/result_empty/result_empty"
        })
        return
      }

      wx.navigateTo({
        url: "/pages/jwgl/examing_new/result"
      }).then(res => {
        res.eventChannel.emit('items', { items: items })
      })

    } catch (err: any) {
      this.setData({
        error: "发生了意料之外的错误，请联系开发者：" + err.errMsg
      })
      console.error(err)
    } finally {
      wx.hideLoading()
    }
  },

  onShareAppMessage(){
    return {
      title: `我正在“智慧仙财”小程序查询我的考试信息，你也来试试看吧~`
    }
  },

  onShareTimeline(){
    return {
      title: `我正在“智慧仙财”小程序查询我的考试信息，你也来试试看吧~`
    }
  },
})