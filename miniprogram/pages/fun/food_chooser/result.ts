// pages/fun/food_chooser/result.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {
      "1": [
        "男餐一楼黄焖鸡",
        "男餐一楼快餐"
      ],
      "2": [
        "女餐一楼快餐",
        "女餐麦当劳",
        "女餐唐小串",
        "女餐舌尖大师"
      ],
      "10": [],
      "20": [],
      "-1": [
        "去校外吃"
      ],
      "-2": [
        "点外卖吃"
      ],
    },
    campus: "",
    items: [],

    selected: null,
    rolling: "",

    timerId: -1
  },

  onLoad() {
    const eventChannel = this.getOpenerEventChannel()
    const that = this;
    eventChannel.on('data', function (data) {
      that.setData({
        campus: data.campus,
        items: data.items
      })
    })

    that.onRoll();
  },

  onReady() {
    wx.setNavigationBarTitle({
      title: '财 er 今天吃什么'
    })
  },

  onRoll() {
    this.setData({
      selected: null,
      timerId: setInterval(() => {
        const arr = this.data.items.flatMap(it => this.data.data[it]);
        this.setData({
          rolling: arr[Math.floor(Math.random() * arr.length)]
        })
      }, 100)
    })
  },

  onStop() {
    clearInterval(this.data.timerId)
    this.setData({
      selected: this.data.rolling as string,
      rolling: ""
    })
  },

  onUnload() {
    this.onStop()
  },

  onShareAppMessage() {
    if (!this.data.selected) {
      return {
        title: `我正在用“财 er 今天吃什么”决定我今天吃什么，你也来试试看吧~`,
        path: "/pages/fun/food_chooser/food_chooser"
      }
    }
    return {
      title: `我今天决定吃${this.data.campus}的${this.data.selected}，你也来抽签看看今天吃什么吧~`,
      path: "/pages/fun/food_chooser/food_chooser"
    }
  },
})