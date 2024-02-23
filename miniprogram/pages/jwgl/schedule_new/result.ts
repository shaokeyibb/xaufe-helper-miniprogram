// pages/jwgl/schedule_new/result.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const eventChannel = this.getOpenerEventChannel()
    const that = this;
    eventChannel.on('data', function (data) {
      that.setData({
        data: data.data
      })
    })
  },

  onReady() {
    wx.setNavigationBarTitle({
      title: '学生课表查询结果'
    })
  }
})