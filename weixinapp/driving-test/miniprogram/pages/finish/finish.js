// pages/finish/finish.js
const app = getApp();
const getQuestionType = require('../../util/getQuestionType')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    score: 0
  },

  uploadScore(score) {
    let questionType = getQuestionType()
    let userInfo = app.globalData.userInfo
    let avatar = userInfo.avatarUrl
    let nickName = userInfo.nickName
    wx.cloud.callFunction({
      name: 'addScore',
      data: {
        avatar,
        nickName,
        questionType,
        score
      },
      success: () => {
        console.log("upload success!");
      },
      fail: (err) => {
        console.log(err);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let score = options.trueCount * 20
    this.setData({
      score
    })
    
    // 上传成绩
    this.uploadScore(score)
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