// pages/orderPractice/orderPractice.js
const app = getApp();
const getQuestionType = require('../../util/getQuestionType')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },


  toPractice() {
    wx.redirectTo({
      url: '../practice/practice'
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo
    })
    let questionType = getQuestionType()
    app.globalData.questionType = questionType
    console.log(questionType);
    wx.cloud.callFunction({
      name: 'practiceInfo',
      data: {
        questionType
      },
      success: (res) => {
        console.log(res);
        let practiceInfo = res.result.practiceInfo.data[0]
        practiceInfo.practiceState = JSON.parse(practiceInfo.practiceState)
        practiceInfo.questionWrong = JSON.parse(practiceInfo.questionWrong)
        practiceInfo.questionStar = JSON.parse(practiceInfo.questionStar)
        console.log(practiceInfo);
        app.globalData.practiceInfo = practiceInfo
        
      },
      fail: (err) => {
        console.log(err);
      }
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