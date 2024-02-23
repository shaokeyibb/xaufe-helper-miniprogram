// app.ts
App<IAppOption>({
  globalData: {},
  async onLaunch() {
    if (!wx.getStorageSync("read_welcome"))
      await wx.showModal({
        title: "欢迎使用“智慧仙财”小程序！",
        content: "本小程序仍处于测试阶段，如您有任何问题或功能建议，请务必通过右上角的菜单的“反馈与投诉”栏目告诉我们！",
        showCancel: false,
        confirmText: "好"
      })
    wx.setStorage({
      key: "read_welcome",
      data: true
    })
  }
})