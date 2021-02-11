// pages/index/index.js
const app =  getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subject: 1
  },

  // 科目切换
  onClick(event) {
    let subject = Number(event.detail.name)
    app.globalData.choice.subject = subject
    this.setData({
      subject: event.detail.name
    })
    wx.cloud.callFunction({
      name: 'choose',
      data: {
        subject
      },
      success: () => {
        console.log("update success!");
      },
      fail: (err) => {
        console.log(err);
      }
    })
  },







  // 初始化用户科目选择
  initSubjectSelect(choice) {
    let subject = choice.subject.toString()
    this.setData({
      subject
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (!app.globalData.choice) {
      app.userChoiceCallback2 = (data) => {
        this.initSubjectSelect(data.choice)
      }
    } else {
      this.initSubjectSelect(app.globalData.choice)
    }
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})