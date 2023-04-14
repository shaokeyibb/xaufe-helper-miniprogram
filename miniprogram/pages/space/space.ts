const space_relayModule = require('../../utils/relay.js')
const space_myModule = require("../../solutions/my")
const space_tgcModule = require("../../utils/tgc")
const space_jwglModule = require('../../solutions/jwgl')

// pages/space/space.ts
Page({

  /**
   * Page initial data
   */
  data: {
    isLogin: false,
    personalInfomation: {}
  },

  /**
   * Lifecycle function--Called when page load
   */
  async onLoad() {
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

  /**
   * Lifecycle function--Called when page show
   */
  async onShow() {
    const tgc = space_tgcModule.checkAndGetTGC(false)
    const myToken = space_myModule.getOrRequireToken(false)
    const jwglToken = space_jwglModule.getOrRequireToken(false)
    this.setData({
      tgc: await tgc,
      myToken: await myToken,
      jwglToken: JSON.stringify(await jwglToken)
    })
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

  onHitLogin() {
    wx.redirectTo({
      url: "/pages/authority/authority?to=" + encodeURI("/pages/space/space")
    })
  },

  async onHitLogout() {
    await space_tgcModule.logoutTGC()
    this.setData({
      isLogin: false,
      personalInfomation: {}
    })
    wx.removeStorage({
      key: "personal_info"
    })
  },

  async getPersonalInformation(): Promise<PersonalInfomation> {
    const result = await space_relayModule.request({
      url: "http://my.xaufe.edu.cn/cjmh/xsindex/xsjcxx?_t=" + Date.now().toString(),
      method: "GET",
      header: {
        "Cookie": await space_myModule.getOrRequireTokenCookie()
      },
      dataType: "json"
    })
    return result.body.info
  }
})