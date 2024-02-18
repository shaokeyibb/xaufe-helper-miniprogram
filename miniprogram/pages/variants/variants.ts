// pages/variants/variants.ts
Page({

  /**
   * Page initial data
   */
  data: {
    variants: [
      {
        "title": "教务管理",
        "entries": [
          {
            "title": "学生成绩查询",
            "icon": "mdi-light:table",
            "url": "/pages/jwgl/transcript/transcript"
          },
          {
            "title": "考试信息查询",
            "icon": "mdi-light:script",
            "url": "/pages/jwgl/examing/examing"
          },
          {
            "title": "学生课表查询",
            "icon": "mdi-light:calendar",
            "url": "/pages/jwgl/schedule/schedule"
          }
        ]
      }
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad() {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: '功能中心'
    })
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

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

  }
})