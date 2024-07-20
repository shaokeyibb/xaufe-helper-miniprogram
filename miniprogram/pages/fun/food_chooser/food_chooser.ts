// pages/fun/food_chooser.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    step: 0,
    campus: [
      {
        id: "changan",
        name: "长安校区",
        checked: false
      },
      {
        id: "cuixi",
        name: "翠华西校区",
        checked: false
      },
      {
        id: "yanta",
        name: "雁塔校区",
        checked: false
      }
    ],
    canteen: {
      changan: [
        {
          id: "1",
          name: "知味苑（男餐）",
          checked: true,
          disabled: false,
        },
        {
          id: "2",
          name: "双穗苑（女餐）",
          checked: true,
          disabled: false,
        },
        {
          id: "-1",
          name: "去校外吃",
          checked: true,
          disabled: false,
        },
        {
          id: "-2",
          name: "点外卖吃",
          checked: true,
          disabled: false,
        },
      ],
      cuixi: [
        {
          id: "10",
          name: "翠西校区食堂",
          checked: true,
          disabled: false,
        },
        {
          id: "-1",
          name: "去校外吃",
          checked: true,
          disabled: false,
        },
        {
          id: "-2",
          name: "点外卖吃",
          checked: true,
          disabled: false,
        },
      ],
      yanta: [
        {
          id: "20",
          name: "雁塔校区食堂",
          checked: true,
          disabled: false,
        },
        {
          id: "-1",
          name: "去校外吃",
          checked: true,
          disabled: false,
        },
        {
          id: "-2",
          name: "点外卖吃",
          checked: true,
          disabled: false,
        },
      ]
    },

    error: '',
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: '财 er 今天吃什么'
    })
  },

  campusChange(e: any) {
    this.setData({
      campus: this.data.campus.map(it => {
        return {
          ...it,
          checked: e.detail.value == it.id
        }
      })
    })
  },

  canteenChange(e: any) {
    const campus = this.data.campus.find(it => it.checked).id!;
    this.setData({
      [`canteen.${campus}`]: this.data.canteen[campus].map(it => {
        return {
          ...it,
          checked: e.detail.value.indexOf(it.id) !== -1
        }
      })
    })
  },

  onNextStep() {
    if (this.data.step == 0) {
      if (!this.data.campus.find(it => it.checked)) {
        this.setData({
          error: "请先选择校区"
        })
        return
      }
    }
    if (this.data.step == 1) {
      if (!this.data.canteen[this.data.campus.find(it => it.checked).id!].find(it => it.checked)) {
        this.setData({
          error: "请选择至少一个食堂"
        })
        return
      }
      wx.navigateTo({
        url: "/pages/fun/food_chooser/result"
      }).then(res => {
        const campus = this.data.campus.find(it => it.checked);
        const canteen = this.data.canteen[campus!.id]
        res.eventChannel.emit('data', {
          campus: campus!.name,
          items: canteen.filter(it => it.checked).map(it => it.id)
        })
      })
      this.setData({
        step: 0,
        error: ''
      })
      return
    }
    this.setData({
      step: this.data.step + 1,
      error: ''
    })
  },

  onShareAppMessage() {
    return {
      title: `我正在用“财 er 今天吃什么”决定我今天吃什么，你也来试试看吧~`
    }
  },

  onShareTimeline() {
    return {
      title: `我正在用“财 er 今天吃什么”决定我今天吃什么，你也来试试看吧~`
    }
  },
})