// pages/practice/practice.js
const app = getApp()
const getQuestionType = require('../../util/getQuestionType')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    question: {},
    questionType: '',
    totalCount: 0,
    practiceState: [],
    questionStar: [],
    questionWrong: [],
    stateIndex: 0,
    starStyle: 'icon-shoucang',
    isStar: false
  },

  // 收藏题目
  star () {
    let stateIndex = this.data.stateIndex
    let questionStar = this.data.questionStar
    let isStar = this.data.isStar
    if (isStar) {
      isStar = false
      let index = questionStar.indexOf(stateIndex)
      if (index != -1) {
        questionStar.splice(index, 1)
      }
      this.setData({
        starStyle: 'icon-shoucang',
        isStar
      })
    } else {
      isStar = true
      questionStar.push(stateIndex)
      questionStar.sort()
      this.setData({
        starStyle: "icon-shoucang1",
        isStar
      })
    }
    this.updataPracticeInfo(questionStar)
    this.setData(
      questionStar
    )
  },

  // 下一题按钮的响应事件
  nextQuestion() {
    let stateIndex = this.data.stateIndex + 1
    if (stateIndex >= this.data.totalCount) {
      stateIndex = this.data.totalCount - 1
    }
    this.setData({
      stateIndex
    })
    this.updateQuestion(stateIndex)
    this.updataPracticeInfo({stateIndex})
  },

  // 上一题按钮的响应事件
  preQuestion() {
    let stateIndex = this.data.stateIndex - 1
    if (stateIndex < 0) stateIndex = 0
    this.setData({
      stateIndex
    })
    this.updateQuestion(stateIndex)
    this.updataPracticeInfo({stateIndex})
  },

  // 选择答案
  result(event) {
    let isTrue = event.detail.istrue
    if (isTrue) { // 选择正确
      let practiceState = this.data.practiceState
      let stateIndex = this.data.stateIndex
      practiceState[stateIndex] = 1
      stateIndex += 1
      this.setData({
        practiceState,
        stateIndex
      })
      this.updataPracticeInfo({practiceState, stateIndex})
      this.updateQuestion(stateIndex)
    } else { // 选择错误
      let practiceState = this.data.practiceState
      let stateIndex = this.data.stateIndex
      let questionWrong = this.data.questionWrong
      let wrongQuestion = {id: stateIndex, myAnswer: event.detail.myAnswer}
      questionWrong.push(wrongQuestion)
      practiceState[stateIndex] = 2
      this.setData({
        practiceState,
        questionWrong
      })
      this.updataPracticeInfo({practiceState, questionWrong})
    }
  },

  // 更新至下一题
  updateQuestion(stateIndex) {
    let questionType = this.data.questionType
    // console.log(questionType, stateIndex);
    this.getQuestion(questionType, stateIndex)
  },

  // 获取练习信息
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
          practiceInfo.practiceState = JSON.parse(practiceInfo.practiceState)
          practiceInfo.questionWrong = JSON.parse(practiceInfo.questionWrong)
          practiceInfo.questionStar = JSON.parse(practiceInfo.questionStar)
          // console.log(practiceInfo);
          let {questionType, totalCount, practiceState, questionStar, questionWrong, stateIndex} = practiceInfo
          that.setData({
            questionType,
            totalCount,
            practiceState,
            questionStar,
            questionWrong,
            stateIndex
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

  // 更新练习状态信息
  updataPracticeInfo(params) {
    let questionType = this.data.questionType
    let practiceState = params.practiceState || this.data.practiceState
    let stateIndex = params.stateIndex || this.data.stateIndex
    let questionWrong = params.questionWrong || this.data.questionWrong
    let questionStar = params.questionStar || this.data.questionStar
    wx.cloud.callFunction({
      name: 'practiceInfo',
      data: {
        questionType,
        isUpdate: true,
        questionWrong,
        practiceState,
        stateIndex,
        questionStar
      },
      success: (res) => {
        console.log(res);
      },
      fail: (err) => {
        console.log(err);
      }
    })
  },

  // 获取题目
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
          question.flag = true
          question.wrongAnswer = wrongAnswer
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
    // console.log(questionType);
    this.getPracticeInfo(questionType).then(() => {
      let questionType = this.data.questionType
      let stateIndex= this.data.stateIndex
      this.getQuestion(questionType, stateIndex)
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