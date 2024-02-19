// pages/index/index.ts
const index_requestModule = require("../../utils/request")

const annotataionUrl = "https://www.xaufe.edu.cn/xxgg1.htm"
const annotataionElementsRegex = /<li><a href="(.+)" target="_blank" title="(.+)"><span class="date">(.+)<\/span>.+<\/a><\/li>/g

Page<{
  annotations: {
    url: string,
    title: string,
    date: string
  }[]
}, Record<string, any>>({

  /**
   * Page initial data
   */
  data: {
    annotations: []
  },

  /**
   * Lifecycle function--Called when page load
   */
  async onLoad() {
    const res = await index_requestModule.request({
      url: annotataionUrl
    }, true, -1, {
      "vsb_screen_set_device": "pc"
    })
    const rst = []
    const regExp = new RegExp(annotataionElementsRegex)
    let match;
    while (match = regExp.exec(res.data)) {
      rst.push({
        url: "https://www.xaufe.edu.cn/" + match[1],
        title: match[2],
        date: match[3]
      })
    }
    this.setData({
      annotations: rst
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {
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

  openNews(event: any) {
    const id = event.currentTarget.id
    const annotation = this.data.annotations.find(it => it.url === id)!
    if(annotation.url.startsWith("https://www.xaufe.edu.cn/content.jsp")){
      wx.navigateTo({
        url: "/pages/index/news/err_internal_only"
      })
      return
    }
    wx.navigateTo({
      url: "/pages/index/news/news?url=" + encodeURI(annotation.url) + "&title=" + encodeURI(annotation.title) + "&date=" + encodeURI(annotation.date)
    })
  }
})