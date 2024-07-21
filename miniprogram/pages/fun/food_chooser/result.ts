// pages/fun/food_chooser/result.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {
      "1": [
        "男餐一楼黄焖鸡",
        "男餐一楼快餐",
        "男餐一楼回转小火锅",
        "男餐一楼自助餐",
        "男餐一楼包子",
        "男餐一楼水饺",
        "男餐一楼意大利面",
        "男餐一楼菠菜面",
        "男餐一楼臊子面",
        "男餐一楼菜夹馍",
        "男餐一楼山西饼",
        "男餐一楼粥",
        "男餐一楼渔粉",
        "男餐一楼天下好面",
        "男餐一楼汉堡",
        "男餐一楼鸡汤泡饼",
        "男餐一楼关东煮",
        "男餐一楼烤串",
        "男餐二楼自助餐",
        "男餐二楼瓦罐汤",
        "男餐二楼老兵尤面",
        "男餐二楼锡纸包饭",
        "男餐二楼擀面皮",
        "男餐二楼卤肉饭",
        "男餐二楼小锅米饭",
        "男餐二楼小火锅",
        "男餐二楼麻辣烫",
        "惜稼园（保餐）快餐",
        "惜稼园（保餐）纸包鱼",
        "惜稼园（保餐）大盘鸡",
        "惜稼园（保餐）麻辣烫"
      ],
      "2": [
        "女餐一楼快餐",
        "女餐一楼舌尖大师",
        "女餐一楼麻辣拌",
        "女餐一楼干锅饭",
        "女餐一楼土豆泥盖饭",
        "女餐一楼鸡捞面",
        "女餐一楼杂粮煎饼",
        "女餐一楼土豆泥拌粉",
        "女餐一楼煮馍",
        "女餐一楼砂锅",
        "女餐一楼水饺",
        "女餐一楼麻辣烫",
        "女餐一楼艾美士汉堡",
        "女餐一楼幸运咖",
        "女餐二楼螺蛳粉",
        "女餐二楼调剂餐",
        "女餐二楼锡纸花甲",
        "女餐二楼肠粉",
        "女餐二楼麻辣拌",
        "女餐二楼炒菜",
        "女餐二楼水煮肉片",
        "女餐二楼干锅",
        "女餐二楼烤馕",
        "女餐二楼大盘鸡",
        "女餐二楼炒面",
        "女餐二楼小火锅",
        "女餐二楼瑞幸",
        "女餐二楼 0090 汉堡",
        "女餐二楼粥",
        "民族餐厅来凤鱼",
        "民族餐厅米线",
        "民族餐厅快餐",
        "民族餐厅拉面",
        "民族餐厅麻辣拌",
      ],
      "3": [
        "天猫超市炸串",
        "天猫超市正新鸡排",
        "天猫超市炒粉",
        "天猫超市关东煮",
        "天猫超市麻辣烫",
        "天猫超市冷锅串串",
        "天猫超市绝味擀面皮",
        "天猫超市沙县小吃"
      ],
      "4": [
        "麦当劳",
        "唐小串",
        "蜜雪冰城"
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