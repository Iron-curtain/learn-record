// pages/randPractice.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionType: '',
    questionList: [],
    question: {},
    trueCount: 0,
    wrongCount: 0,
    current: 0,
    questionWrong: []
  },

  preQuestion() {
    let current = this.data.current - 1
    if (current < 0) current = 0
    this.setData({
      current
    })
  },

  nextQuestion() {
    let current = this.data.current + 1
    if (current >= 50) {
      current = 49
    }
    this.setData({
      current
    })
  },
  


  result(event) {
    let isTrue = event.detail.istrue
    if (isTrue) { // 选择正确
      let current = this.data.current
      let trueCount = this.data.trueCount
      let questionList = this.data.questionList
      this.setData({
        current: current + 1,
        trueCount: trueCount + 1
      })
      let question = questionList[current]
      question.flag = true
      questionList[current] = question
      let nextQuestion = questionList[current + 1]
      console.log(2);
      this.setData({
        questionList,
        question: nextQuestion
      })
      
    } else { // 选择错误
      let wrongCount = this.data.wrongCount
      let current = this.data.current
      let questionWrong = this.data.questionWrong
      let wrongQuestion = {id: questionList[current].id, myAnswer: event.detail.myAnswer}
      questionWrong.push(wrongQuestion)
      this.setData({
        questionWrong,
        wrongCount: wrongCount + 1
      })

      let questionList = this.data.questionList
      questionList[current].flag = true
      questionList[current].wrongAnswer = event.detail.myAnswer

      this.updataPracticeInfo({ questionWrong })
    }
  },



  updataPracticeInfo(params) {
    let questionType = this.data.questionType
    let questionWrong = params.questionWrong || this.data.questionWrong
    wx.cloud.callFunction({
      name: 'practiceInfo',
      data: {
        questionType,
        isUpdate: true,
        questionWrong,
      },
      success: (res) => {
        console.log(res);
      },
      fail: (err) => {
        console.log(err);
      }
    })
  },





  getQuestionList (params) {
    wx.request({
      url: 'http://v.juhe.cn/jztk/query',
      data: params,
      header: {'content-type': 'json'},
      success: (res) => {
        let questionList = res.data.result
        questionList = questionList.slice(0, 50)
        // console.log(questionList);
        this.setData({
          questionList,
          question: questionList[0]
        })
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
          // console.log(practiceInfo);
          let { questionWrong } = practiceInfo
          that.setData({
            questionWrong
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let questionType = ''
    let model = app.globalData.choice.model
    if (model == 1) {
      model = 'c1'
    } else if (model == 2) {
      model = 'a2'
    } else if (model == 3) {
      model = 'b1'
    }
    let subject = app.globalData.choice.subject
    if (subject === 4) questionType = 'm-4'
    else questionType = `m${model}-1`
    this.setData({ questionType })
    let params = {
      subject,
      model,
      key: '44f01556583d3bdfda9152f5d7d1e46a',
      Type: 'rand'
    }
    // console.log(params);
    this.getQuestionList(params)
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