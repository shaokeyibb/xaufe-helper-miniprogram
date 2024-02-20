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
            "url": "/pages/jwgl/transcript_new/transcript_new"
          },
          {
            "title": "考试信息查询(Legacy)",
            "icon": "mdi-light:script",
            "url": "/pages/jwgl/examing/examing"
          },
          {
            "title": "学生课表查询(Legacy)",
            "icon": "mdi-light:calendar",
            "url": "/pages/jwgl/schedule/schedule"
          }
        ]
      },
      {
        "title": "实用工具",
        "entries": [
          {
            "title": "GPA 计算",
            "icon": "mdi-light:spellcheck",
            "url": "/pages/utilities/gp_calc/gp_calc"
          },
        ]
      }
    ]
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: '功能中心'
    })
  }
})