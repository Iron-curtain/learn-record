// pages/personal/personal.js
const app =  getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    sexStyle: '',
    subject: 1,
    modelName: '' 
  },

  toSelect() {
    wx.navigateTo({
      url: '../select/select'
    })
  },

  getModelName(model) {
    switch (model) {
      case 1: 
        this.setData({
          modelName: '小车'
        })
        break;
      case 2:
        this.setData({
          modelName: '货车'
        })
        break;
      case 3:
        this.setData({
          modelName: '客车'
        })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userInfo = app.globalData.userInfo
    let choice = app.globalData.choice
    let subject = choice.subject
    let model = choice.model
    this.getModelName(model)
    if (userInfo.gender === 1) {
      this.setData({
        sexStyle: 'sex iconfont icon-nan'
      })
    } else if (userInfo.gender === 2) {
      this.setData({
        sexStyle: 'sex iconfont icon-nv'
      })
    }
    this.setData({
      userInfo: userInfo
    })
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