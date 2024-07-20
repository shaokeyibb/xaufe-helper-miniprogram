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
  },

  onShareAppMessage(){
    const failed = this.data.items.filter(it=>it.cj < 60).length
    if(failed > 0){
      return {
        title: `我草，我这学期竟然挂了 ${failed} 门课，你也来查查看吧~`,
        path: "/pages/jwgl/transcript_new/transcript_new"
      }
    }
    return {
      title: `嘻嘻，我这学期一门课都没挂，你也来查查看吧~`,
      path: "/pages/jwgl/transcript_new/transcript_new"
    }
  },
})