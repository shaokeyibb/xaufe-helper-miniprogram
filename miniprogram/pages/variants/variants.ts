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
            "title": "考试信息查询",
            "icon": "mdi-light:script",
            "url": "/pages/jwgl/examing_new/examing_new"
          },
          {
            "title": "学生课表查询",
            "icon": "mdi-light:calendar",
            "url": "/pages/jwgl/schedule_new/schedule_new"
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
      },
      {
        "title": "趣味功能",
        "entries": [
          {
            "title": "财 er 今天吃什么（beta）",
            "icon": "mdi-light:lightbulb-on",
            "url": "/pages/fun/food_chooser/food_chooser"
          }
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
  },

  onShareAppMessage(){
    return {
      path: "/pages/index/index"
    }
  },
})