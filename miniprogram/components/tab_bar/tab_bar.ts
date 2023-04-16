// components/tab_bar/tab_bar.ts
Component({
  /**
   * Component properties
   */
  properties: {
    currentKey: {
      type: String,
    }
  },

  /**
   * Component initial data
   */
  data: {
    tabData: [
      {
        key: "index",
        title: "主页",
        icon: "mdi-light:home",
        path: "/pages/index/index",
        color: "#000"
      },
      {
        key: "variants",
        title: "应用中心",
        icon: "mdi-light:sitemap",
        path: "/pages/variants/variants",
        color: "#000"
      },
      {
        key: "space",
        title: "我的",
        icon: "mdi-light:account",
        path: "/pages/space/space",
        color: "#000"
      }
    ]
  },

  /**
   * Component methods
   */
  methods: {
    onHitTab(e: any) {
      if(e.currentTarget.dataset.item.key===this.properties.currentKey)return
      wx.redirectTo({
        url: e.currentTarget.dataset.item.path
      })
    }
  },
  lifetimes: {
    attached: function() {
      this.setData({
        tabData: this.data.tabData.map(it=>{
          if(it.key===this.properties.currentKey)it.color = "#66CCFF"
          return it
        })
      })
    },
  },
})
