// pages/jwgl/schedule_new/result.ts
Page<{
  data: any,
  mode: 0 | 1 | 2, // today | tomorrow | all
  towards: number
}, Record<string, any>>({

  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    mode: 0,
    towards: 0
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
  },

  switchMode(event: any & (0 | 1 | 2)){
    if(typeof event === "number"){
      this.setData({mode: event as (0 | 1 | 2)})
      return
    }
    this.setData({mode: event.currentTarget.dataset.mode})
  },

  onTouch(event: any){
    switch(event.type){
      case "touchstart": {
        this.setData({towards: event.changedTouches[0].clientX});
        break
      }
      case "touchend": {
        const moved = event.changedTouches[0].clientX - this.data.towards
        if(Math.abs(moved) < 100) return
        moved > 0 
        ? this.switchMode(Math.max(this.data.mode - 1, 0)) 
        : this.switchMode(Math.min(this.data.mode + 1, 2))
        break
      }
    }
  }
})