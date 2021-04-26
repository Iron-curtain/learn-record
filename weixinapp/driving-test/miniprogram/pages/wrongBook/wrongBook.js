// pages/wrongBook/wrongBook.js
const getQuestionType = require('../../util/getQuestionType')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionType: '',
    questionWrong: [],
    wrongIndex: 0,
    totalCount: 0,
    question: {}
  },

  preQuestion() {
    let wrongIndex = this.data.wrongIndex
    if (wrongIndex <= 0) {
      wrongIndex = 0
    } else {
      wrongIndex--
    }
    this.setData({
      wrongIndex
    })

    let questionWrong = this.data.questionWrong
    let questionType = this.data.questionType
    let wrong = questionWrong[wrongIndex]
    this.getQuestion(questionType, wrong.id, wrong.wAnswer)
    
    this.updatePracticeInfo({ questionType, questionWrong, wrongIndex })
  },

  nextQuestion() {
    let wrongIndex = this.data.wrongIndex
    let totalCount = this.data.totalCount
    if (wrongIndex >= totalCount - 1) {
      wrongIndex = totalCount - 1
    } else {
      wrongIndex++
    }
    this.setData({
      wrongIndex
    })

    let questionWrong = this.data.questionWrong
    let questionType = this.data.questionType
    let wrong = questionWrong[wrongIndex]
    this.getQuestion(questionType, wrong.id, wrong.wAnswer)

    this.updatePracticeInfo({ questionType, questionWrong, wrongIndex })
  },

  result(event) {
    let wrongIndex = this.data.wrongIndex
    let questionWrong = this.data.questionWrong
    let wrong = questionWrong[wrongIndex]
    wrong.wAnswer = event.detail.myAnswer
    questionWrong[wrongIndex] = wrong

    let isTrue = event.detail.istrue
    if (isTrue) { // 选择正确
      let totalCount = this.data.totalCount
      let question = this.data.question
      if (wrongIndex >= totalCount - 1) {
        wrongIndex = totalCount - 1
      } else {
        wrongIndex++
      }
      wrong.wAnswer = question.answer
    } 
    this.setData({
      questionWrong,
      wrongIndex
    })
    console.log(questionWrong);
    let questionType = this.data.questionType
    let params = { questionType, questionWrong, wrongIndex }
    this.updatePracticeInfo(params)
  },

  updatePracticeInfo(params) {
    let questionType = this.data.questionType
    let questionWrong = params.questionWrong || this.data.questionWrong
    let wrongIndex = params.wrongIndex || this.data.wrongIndex
    wx.cloud.callFunction({
      name: 'practiceInfo',
      data: {
        questionType,
        questionWrong,
        wrongIndex,
        isUpdate: true
      },
      success: (res) => {
        console.log(res);
      },
      fail: (err) => {
        console.log(err);
      }
    })
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
          practiceInfo.questionWrong = JSON.parse(practiceInfo.questionWrong)
          let { questionWrong, wrongIndex } = practiceInfo
          let totalCount = questionWrong.length
          that.setData({
            questionWrong,
            wrongIndex,
            totalCount
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

  getQuestion(questionType, id, wAnswer = undefined) {
    const that = this
    wx.cloud.callFunction({
      name: 'getQuestion',
      data: {
        questionType,
        id: id
      },
      success: (res) => {
        let question = res.result.question.data[0]
        let answer = question.answer
        if (wAnswer !== undefined) {
          question.flag = true
          if (wAnswer !== answer) {
            question.wrongAnswer = wAnswer
          }
        }
        // if (this.data.questionStar.indexOf(question.id - 1) != -1) {
        //   this.setData({
        //     isStar: true,
        //     starStyle: "icon-shoucang1"
        //   })
        // } else {
        //   this.setData({
        //     isStar: false,
        //     starStyle: "icon-shoucang"
        //   })
        // }
        this.setData({
          question
        })
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
    const that = this
    let questionType = getQuestionType()
    this.setData({ questionType })
    this.getPracticeInfo().then(() => {
      let { questionType, questionWrong, wrongIndex } = this.data
      let wrong = questionWrong[wrongIndex]
      that.getQuestion(questionType, wrong.id, wrong.wAnswer)
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