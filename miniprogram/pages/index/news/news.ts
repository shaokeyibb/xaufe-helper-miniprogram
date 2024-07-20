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

  copyToClipboard(event: any){
    wx.setClipboardData({
      data: event.currentTarget.dataset.url
    })
  },

  onShareAppMessage(){
    return {
      title: this.data.title!,
      path: "/pages/index/news/news?url=" + encodeURI(this.data.url!) + "&title=" + encodeURI(this.data.title!) + "&date=" + encodeURI(this.data.date!)
    }
  },

  onShareTimeline(){
    return {
      title: this.data.title!,
      query: "url=" + encodeURI(this.data.url!) + "&title=" + encodeURI(this.data.title!) + "&date=" + encodeURI(this.data.date!)
    }
  },
})