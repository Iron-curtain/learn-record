// pages/orderPractice/orderPractice.js
const app = getApp();
const getQuestionType = require('../../util/getQuestionType')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    wrongCount: 0,
    unfinished: 0,
    rate: 0
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
    // console.log(questionType);
    wx.cloud.callFunction({
      name: 'practiceInfo',
      data: {
        questionType
      },
      success: (res) => {
        // console.log(res);
        let practiceInfo = res.result.practiceInfo.data[0]
        practiceInfo.practiceState = JSON.parse(practiceInfo.practiceState)
        practiceInfo.questionWrong = JSON.parse(practiceInfo.questionWrong)

        app.globalData.practiceInfo = practiceInfo

        let { totalCount, questionWrong, practiceState } = practiceInfo
        
        let wrongCount = 0
        for (let item of questionWrong) {
          if (item.myAnswer !== undefined) wrongCount++
        }

        let unfinished = 0
        for (let state of practiceState) {
          if (state == 0) unfinished++
        }

        let hasDone = totalCount - unfinished
        let rate = (hasDone - wrongCount) / hasDone * 100
        this.setData({
          wrongCount,
          unfinished,
          rate: rate.toFixed(2)
        })
        
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