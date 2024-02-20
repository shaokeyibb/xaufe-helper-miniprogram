// pages/jwgl/transcript_new/transcript_new.ts
const transcript_new_jwglModule = require('../../../solutions/jwgl')
const transcript_new_dateModule = require('../../../utils/date')
const transcript_new_requestModule = require('../../../utils/request')
const transcript_new_cookieModule = require('../../../utils/cookie')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    years: [{
      key: "全部",
      value: ""
    }].concat(Array.from(new Array(transcript_new_dateModule.isInSecondTerm() ? new Date().getFullYear() : new Date().getFullYear() + 1).keys()).slice(1970).map(it => {
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

    error: '',

    formData: {
      selectedYearIdx: 1,
      selectedTermIdx: transcript_new_dateModule.isInSecondTerm() ? 2 : 1,
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: '学生成绩查询'
    })
  },

  onInput(e: any) {
    this.setData({
      [`formData.${e.target.id}`]: e.detail.value
    })
  },

  async onSubmitQuery() {
    wx.showLoading({
      title: '请稍候',
      mask: true
    })
    const data: any = {
      "xnm": this.data.years[this.data.formData.selectedYearIdx].value,
      "xqm": this.data.terms[this.data.formData.selectedTermIdx].value,
      "_search": false,
      "nd": Date.now(),
      "queryModel.showCount": 1000,
      "queryModel.currentPage": 1,
      "queryModel.sortName": "",
      "queryModel.sortOrder": "asc",
      "time": 0,
      "kcbj": ""
    }
    try {
      const cookieJar: Record<string, string> = transcript_new_cookieModule.plainToCookieJar(await transcript_new_jwglModule.getOrRequireTokenCookie(true, "/pages/jwgl/transcript_new/transcript_new"))
      const result: any = await transcript_new_requestModule.request({
        url: "https://jwgl.xaufe.edu.cn/jwglxt/cjcx/cjcx_cxXsgrcj.html?doType=query&gnmkdm=N305005",
        method: "POST",
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data,
        dataType: 'json'
      }, true, -1, cookieJar)

      const items = result.data.items

      if(items.length == 0){
        wx.navigateTo({
          url: "/pages/common/result_empty/result_empty"
        })
        return
      }

      wx.navigateTo({
        url: "/pages/jwgl/transcript_new/result"
      }).then(res => {
        res.eventChannel.emit('items', { items: items })
      })

    } catch (err: unknown) {
      this.setData({
        error: "发生了意料之外的错误，请联系开发者"
      })
      console.error(err)
    } finally {
      wx.hideLoading()
    }
  }
})