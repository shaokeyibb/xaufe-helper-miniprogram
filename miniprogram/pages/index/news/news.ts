// pages/index/news/news.ts
const news_requestModule = require("../../../utils/request")

const newsContentRegex = /<div class="article-text">[\s]*?<div id="vsb_content"><div class="v_news_content">\n?([\s\S]*?)\n?<\/div>[\s]*?<\/div>[\s]*?<\/div>/gm

Page<{
  url: string,
  title: string | null,
  date: string | null,
  content: string,
}, Record<string, any>>({

  /**
   * 页面的初始数据
   */
  data: {
    url: "",
    title: "",
    date: "",
    content: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    this.setData({
      url: options.url ? decodeURI(options.url) : "",
      title: options.title ? decodeURI(options.title) : null,
      date: options.date ? decodeURI(options.date) : null
    })
    const res = await news_requestModule.request({
      url: this.data.url
    }, true, -1, {
      "vsb_screen_set_device": "pc"
    })
    const regExp = new RegExp(newsContentRegex).exec(res.data)
    regExp && this.setData({
      content: regExp[1]
    })
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