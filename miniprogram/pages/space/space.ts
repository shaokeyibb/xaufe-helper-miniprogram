// const space_relayModule = require('../../utils/relay.js')
const space_myModule = require("../../solutions/my")
const space_tgcModule = require("../../utils/tgc")
const space_requestModule = require("../../utils/request")
const space_cookieModule = require('../../utils/cookie')

// pages/space/space.ts
Page({

  /**
   * Page initial data
   */
  data: {
    isLogin: false,
    personalInfomation: {},
    miniProgramInfo: {},
    cachedBackgroundImageUrl: {}
  },

  /**
   * Lifecycle function--Called when page load
   */
  async onLoad() {
    this.setData({ miniProgramInfo: wx.getAccountInfoSync().miniProgram })

    const cachedBackgroundImageUrl = wx.getStorageSync<string>("cached_background_image_url")
    if (cachedBackgroundImageUrl) this.setData({ cachedBackgroundImageUrl: cachedBackgroundImageUrl })
    else
      wx.downloadFile({
        url: "https://cas.xaufe.edu.cn/themes/loginNew/images/xc/bg.png",
        success: (res) => {
          this.setData({ cachedBackgroundImageUrl: res.tempFilePath })
          wx.setStorage({
            key: "cached_background_image_url",
            data: this.data.cachedBackgroundImageUrl
          })
        }
      })

    wx.showLoading({
      title: "加载中",
      mask: true
    })
    try {
      try {
        await space_tgcModule.checkAndGetTGC(false)
        this.setData({
          isLogin: true
        })
      } catch {
        this.setData({
          isLogin: false
        })
      }
      if (this.data.isLogin) {
        try {
          const personalInfomation = await wx.getStorage({
            key: "personal_info",
            encrypt: true
          })
          this.setData({
            personalInfomation: personalInfomation.data
          })
        } catch {
          this.setData({
            personalInfomation: await this.getPersonalInformation()
          })
          wx.setStorage({
            key: "personal_info",
            data: this.data.personalInfomation,
            encrypt: true
          })
        }
      }
    } finally {
      wx.hideLoading()
    }
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: '我的'
    })
  },
  
  onHitLogin() {
    wx.redirectTo({
      url: "/pages/authority/authority?to=" + encodeURI("/pages/space/space") + "&fromTabBar=true"
    })
  },

  async onHitLogout() {
    const userChoose = await wx.showModal({
      title: "确定要注销吗？",
      content: "小程序部分功能可能无法使用（如成绩查询）。您仍可在注销后重新登录。"
    })
    if (!userChoose.confirm) return
    await space_tgcModule.logoutTGC()
    this.setData({
      isLogin: false,
      personalInfomation: {}
    })
    wx.removeStorage({
      key: "personal_info"
    })
    wx.removeStorage({
      key: "schedule"
    })
  },

  async getPersonalInformation(): Promise<PersonalInfomation> {
    const cookieJar: Record<string, string> = space_cookieModule.plainToCookieJar(await space_myModule.getOrRequireTokenCookie())
    const result = await space_requestModule.request({
      url: "https://my.xaufe.edu.cn/cjmh/xsindex/xsjcxx?_t=" + Date.now().toString(),
      method: "GET",
      dataType: "json"
    }, true, -1, cookieJar)
    return result.data.info
  },

  onHitMenu(e: any) {
    wx.navigateTo({
      url: e.currentTarget.dataset.to
    })
  }
})