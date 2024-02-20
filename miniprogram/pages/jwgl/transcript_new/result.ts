// pages/jwgl/transcript_new/result.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const eventChannel = this.getOpenerEventChannel()
    const that = this;
    eventChannel.on('items', function (data) {
      that.setData({
        items: data.items
      })
    })
  },

  onReady() {
    wx.setNavigationBarTitle({
      title: '学生成绩查询结果'
    })
  }
})