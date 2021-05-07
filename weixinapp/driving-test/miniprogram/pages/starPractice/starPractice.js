// pages/starPractice/starPractice.js
const getQuestionType = require('../../util/getQuestionType')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalCount: 0,
    questionType: '',
    questionStar: [],
    starIndex: 0,
    question: {}
  },

  preQuestion() {
    let starIndex = this.data.starIndex
    if (starIndex <= 0) {
      starIndex = 0
    } else {
      starIndex--
    }
    this.setData({ starIndex })

    let questionType = this.data.questionType
    let star = this.data.questionStar[starIndex]
    if (typeof star == 'object') {
      this.getQuestion(questionType, star.id, star.myAnswer)
    } else {
      this.getQuestion(questionType, star)
    }

    let questionStar = this.data.questionStar
    let params = {
      questionType,
      questionStar,
      starIndex
    }
    this.updatePracticeInfo(params)
  },

  nextQuestion() {
    let starIndex = this.data.starIndex
    let totalCount = this.data.totalCount
    if (starIndex >= totalCount - 1) {
      starIndex = totalCount - 1
    } else {
      starIndex++
    }
    this.setData({ starIndex })

    let questionType = this.data.questionType
    let star = this.data.questionStar[starIndex]
    if (typeof star == 'object') {
      this.getQuestion(questionType, star.id, star.myAnswer)
    } else {
      this.getQuestion(questionType, star)
    }

    let questionStar = this.data.questionStar
    let params = {
      questionType,
      questionStar,
      starIndex
    }
    this.updatePracticeInfo(params)
  },

  result(event) {
    let starIndex = this.data.starIndex
    let questionStar = this.data.questionStar
    let star = questionStar[starIndex]
    let starInfo = {id: star, myAnswer: event.detail.myAnswer}
    questionStar[starIndex] = starInfo

    let isTrue = event.detail.istrue
    if (isTrue) { // 选择正确
      let totalCount = this.data.totalCount
      let question = this.data.question
      if (starIndex >= totalCount - 1) {
        starIndex = totalCount - 1
      } else {
        starIndex++
      }
      starInfo.myAnswer = question.answer
    } 
    this.setData({
      questionStar,
      starIndex
    })
    console.log(questionStar);
    let questionType = this.data.questionType
    let params = { questionType, questionStar, starIndex }
    this.updatePracticeInfo(params)
  },

  updatePracticeInfo(params) {
    // console.log(params);
    let questionType = this.data.questionType
    let questionStar = params.questionStar || this.data.questionStar
    let starIndex = params.starIndex || this.data.starIndex
    wx.cloud.callFunction({
      name: 'practiceInfo',
      data: {
        questionType,
        questionStar,
        starIndex,
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
          console.log(practiceInfo);
          practiceInfo.questionStar = JSON.parse(practiceInfo.questionStar)
          let { questionStar, starIndex } = practiceInfo
          let totalCount = questionStar.length
          that.setData({
            questionStar,
            starIndex,
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

  getQuestion(questionType, id, myAnswer = undefined) {
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
        if (myAnswer !== undefined) {
          question.flag = true
          if (myAnswer !== answer) {
            question.wrongAnswer = myAnswer
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
    this.getPracticeInfo(questionType).then(() => {
      let starIndex = this.data.starIndex
      let star = that.data.questionStar[starIndex]
      console.log(questionType, star);
      if (typeof star == 'object') {
        that.getQuestion(questionType, star.id, star.myAnswer)
      } else {
        that.getQuestion(questionType, star)
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