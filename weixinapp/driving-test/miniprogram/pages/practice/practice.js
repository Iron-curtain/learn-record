// pages/practice/practice.js
const app = getApp()
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
    stateIndex: 0
  },

  // 防止stateIndex越界
  standardStateIndex(stateIndex) {
    // if (stateIndex < 0) return 0
    // else if (stateIndex > ) 
  },

  // 下一题按钮的响应事件
  nextQuestion() {
    let stateIndex = this.data.stateIndex + 1
    this.setData({
      stateIndex
    })
    this.updateQuestion(stateIndex)
    this.updataPracticeInfo({stateIndex})
  },

  // 上一题按钮的响应事件
  preQuestion() {
    let stateIndex = this.data.stateIndex - 1
    this.setData({
      stateIndex
    })
    this.updateQuestion(stateIndex)
    this.updataPracticeInfo({stateIndex})
  },

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
    console.log(questionType, stateIndex);
    this.getQuestion(questionType, stateIndex)
  },

  // 更新练习状态信息
  updataPracticeInfo(params) {
    let questionType = this.data.questionType
    let practiceState = params.practiceState || this.data.practiceState
    let stateIndex = params.stateIndex || this.data.stateIndex
    let questionWrong = params.questionWrong || this.data.questionWrong
    wx.cloud.callFunction({
      name: 'practiceInfo',
      data: {
        questionType,
        isUpdate: true,
        questionWrong,
        practiceState,
        stateIndex
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
    wx.cloud.callFunction({
      name: 'getQuestion',
      data: {
        questionType,
        id: stateIndex + 1
      },
      success: (res) => {
        // console.log(res);
        let question = res.result.question.data[0]
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
    let practiceInfo = app.globalData.practiceInfo
    let {questionType, totalCount, practiceState, questionStar, questionWrong, stateIndex} = practiceInfo
    this.setData({
      questionType,
      totalCount,
      practiceState,
      questionStar,
      questionWrong,
      stateIndex
    })
    // console.log(this.data);
    this.getQuestion(questionType, stateIndex)
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