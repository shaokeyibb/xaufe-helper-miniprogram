// pages/jwgl/schedule_new/schedule_new.ts
const schedule_new_jwglModule = require('../../../solutions/jwgl')
const schedule_new_dateModule = require('../../../utils/date')
const schedule_new_requestModule = require('../../../utils/request')
const schedule_new_cookieModule = require('../../../utils/cookie')

Page<{
  cache: any | null
  years: {
    key: string,
    value: string
  }[],
  terms: {
    key: string,
    value: string
  }[],
  error: string,
  formData: {
    selectedYearIdx: number,
    selectedTermIdx: number,
  }
}, Record<string, any>>({

  /**
   * 页面的初始数据
   */
  data: {
    years: Array.from(new Array(schedule_new_dateModule.isInSecondTerm() ? new Date().getFullYear() : new Date().getFullYear() + 1).keys()).slice(1970).map(it => {
      return {
        key: `${it} - ${it + 1}`,
        value: it.toString()
      }
    }).reverse(),

    terms: [
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

    cache: null,

    error: '',

    formData: {
      selectedYearIdx: 0,
      selectedTermIdx: schedule_new_dateModule.isInSecondTerm() ? 1 : 0,
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: '学生课表查询'
    })
  },

  onLoad() {
    const cache = wx.getStorageSync("schedule")
    if (cache) {
      const cacheYearIdx = this.data.years.findIndex((it) => it.value == cache.metadata["year_id"])
      const cachedTermIdx = this.data.terms.findIndex((it) => it.value == cache.metadata["term_id"])
      this.setData({ cache })
      if (cacheYearIdx != -1) {
        this.setData({ [`formData.selectedYearIdx`]: cacheYearIdx })
      }
      if (cachedTermIdx != -1) {
        this.setData({ [`formData.selectedTermIdx`]: cachedTermIdx })
      }
    }
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
      "kzlx": "ck",
      "xsdm": ""
    }
    const metadata = {
      "year_id": data.xnm,
      "term_id": data.xqm,
    }
    try {
      const cache = this.data.cache
      if (cache != null
        && cache.metadata["year_id"] == metadata["year_id"] && cache.metadata["term_id"] == metadata["term_id"]) {
        wx.navigateTo({
          url: "/pages/jwgl/schedule_new/result"
        }).then(res => {
          res.eventChannel.emit('data', cache)
        })
        return
      }

      const cookieJar: Record<string, string> = schedule_new_cookieModule.plainToCookieJar(await schedule_new_jwglModule.getOrRequireTokenCookie(true, "/pages/jwgl/schedule_new/schedule_new"))
      const result: any = await schedule_new_requestModule.request({
        url: "https://jwgl.xaufe.edu.cn/jwglxt/kbcx/xskbcx_cxXsgrkb.html",
        method: "POST",
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data,
        dataType: 'json'
      }, true, -1, cookieJar)

      const rst = result.data

      wx.navigateTo({
        url: "/pages/jwgl/schedule_new/result"
      }).then(res => {
        const send = {
          data: rst,
          metadata
        }
        wx.setStorage({
          key: "schedule",
          data: send
        })
        res.eventChannel.emit('data', send)
      })

    } catch (err: unknown) {
      this.setData({
        error: "发生了意料之外的错误，请联系开发者"
      })
      console.error(err)
    } finally {
      wx.hideLoading()
    }
  },

  onShareAppMessage(){
    return {
      title: `我正在“智慧仙财”小程序查询我的课表，你也来试试看吧~`
    }
  },

  onShareTimeline(){
    return {
      title: `我正在“智慧仙财”小程序查询我的课表，你也来试试看吧~`
    }
  },
})