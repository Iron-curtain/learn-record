// pages/rank/rank.js
const getQuestionType = require('../../util/getQuestionType')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rankList: []
  },


  getScore() {
    let questionType = getQuestionType()
    wx.cloud.callFunction({
      name: 'getScoreByType',
      data: {
        questionType
      }
    }).then((res) => {
      let data = res.result.score.data
      let users = {}
      let maxScore = {}
      for (let score of data) {
        if (users[score.openId] == undefined) {
          let info = {}
          info.avatar = score.avatar
          info.nickName = score.nickName
          users[score.openId] = info
        }
        let num = score.score
        if (maxScore[score.openId] == undefined || maxScore[score.openId] < num) {
          maxScore[score.openId] = num
        }
      }
      let rankList = []
      for (let item in maxScore) {
        if (maxScore.hasOwnProperty(item)) {
          let obj = users[item]
          obj.score = maxScore[item]
          rankList.push(obj)
        }
      }
      rankList.sort((a, b) => {
        return b.score - a.score
      })
      this.setData({
        rankList
      })
      console.log(this.data.rankList, this.data.rankList instanceof Array);
    }).catch((err) => {
      console.log(err);
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getScore()
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