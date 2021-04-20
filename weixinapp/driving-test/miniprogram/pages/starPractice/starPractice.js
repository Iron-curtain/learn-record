// pages/starPractice/starPractice.js
const getQuestionType = require('../../util/getQuestionType')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionType: '',
    questionStar: [],
    starIndex: 0
  },

  getPracticeInfo (questionType) {
    let that = this
    return new Promise((resovle, reject) => {
      wx.cloud.callFunction({
        name: 'practiceInfo',
        data: {
          questionType
        },
        success: (res) => {
          // console.log(res);
          let practiceInfo = res.result.practiceInfo.data[0]
          practiceInfo.questionStar = JSON.parse(practiceInfo.questionStar)
          let { questionStar, starIndex } = practiceInfo
          that.setData({
            questionStar,
            starIndex
          })
          resovle()
        },
        fail: (err) => {
          console.log(err);
          reject(err)
        }
      })
    })
  },

  getQuestion(questionType, stateIndex) {
    const that = this
    let questionState = this.data.practiceState[stateIndex]
    wx.cloud.callFunction({
      name: 'getQuestion',
      data: {
        questionType,
        id: stateIndex + 1
      },
      success: (res) => {
        // console.log(res);
        let question = res.result.question.data[0]
        if (questionState === 1) {
          question.flag = true
        } else if (questionState === 2) {
          let questionWrongList = that.data.questionWrong
          let questionWrong = questionWrongList.find(question => question.id == stateIndex)
          let wrongAnswer = questionWrong && questionWrong.myAnswer
          if (wrongAnswer != undefined) {
            question.flag = true
            question.wrongAnswer = wrongAnswer
          }
        }
        if (this.data.questionStar.indexOf(question.id - 1) != -1) {
          this.setData({
            isStar: true,
            starStyle: "icon-shoucang1"
          })
        } else {
          this.setData({
            isStar: false,
            starStyle: "icon-shoucang"
          })
        }
        this.setData({
          question
        })
        // console.log(this.data.question);
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
    let questionType = getQuestionType()
    this.setData({ questionType })
    this.getPracticeInfo()

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