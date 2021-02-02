// pages/personal/personal.js
const app =  getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    sexStyle: ''
  },

  toSelect() {
    wx.navigateTo({
      url: '../select/select'
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userInfo = app.globalData.userInfo
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