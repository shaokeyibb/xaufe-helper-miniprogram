const space_relayModule = require('../../utils/relay.js')
const space_myModule = require("../../solutions/my")
const space_tgcModule = require("../../utils/tgc")

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