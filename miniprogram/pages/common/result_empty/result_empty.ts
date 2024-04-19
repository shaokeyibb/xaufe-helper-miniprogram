// pages/jwgl/transcript_new/result_empty.ts
let result_empty_interstitialAd = null

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    if (wx.createInterstitialAd) {
      result_empty_interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-8b7dab22c98f5e21'
      })
      result_empty_interstitialAd.onLoad(() => {})
      result_empty_interstitialAd.onError((err) => {
        console.error('插屏广告加载失败', err)
      })
      result_empty_interstitialAd.onClose(() => {})
    }

    if (result_empty_interstitialAd) {
      result_empty_interstitialAd.show().catch((err) => {
        console.error('插屏广告显示失败', err)
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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

  }
})