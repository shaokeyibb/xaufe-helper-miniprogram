// pages/jwgl/examing_new/result.ts
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
      title: '考试信息查询结果'
    })
  },

  onShareAppMessage(){
    return {
      title: `我趣，我这学期竟然要考 ${this.data.items.length} 门试，你也来查查看吧~`,
      path: "/pages/jwgl/examing_new/examing_new"
    }
  },
})