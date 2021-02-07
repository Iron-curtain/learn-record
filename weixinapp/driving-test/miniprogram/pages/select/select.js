// pages/select/select.js
const app =  getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    model: 1,
    subject: 1,
    subjectStyle1: '',
    subjectStyle2: ''
  },

  selectSubject1() {
    this.setData({
      subject: 1,
      subjectStyle1: 'background-color: #2a82e4; color: white',
      subjectStyle2: ''
    })
  },
  selectSubject4() {
    this.setData({
      subject: 4,
      subjectStyle1: '',
      subjectStyle2: 'background-color: #2a82e4; color: white'
    })
  },
  selectModel1() {
    this.setData({
      model: 1
    })
  },
  selectModel2() {
    this.setData({
      model: 2
    })
  },
  selectModel3() {
    this.setData({
      model: 3
    })
  },

  submit() {
    app.globalData.choice.model = this.data.model
    app.globalData.choice.subject = this.data.subject
    console.log(app.globalData.choice);
    const that = this
    wx.cloud.callFunction({
      name: 'choose',
      data: {
        model: that.data.model,
        subject: that.data.subject
      },
      success: () => {
        console.log("update success!");
      }
    })
    wx.navigateBack ({
      url: '../personal/personal'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let select = app.globalData.choice
    this.setData({
      model: select.model,
      subject: select.subject
    })
    // console.log(select);
    if (select.subject === 1) {
      this.setData({
        subjectStyle1: 'background-color: #2a82e4; color: white',
        subjectStyle2: ''
      })
    } else {
      this.setData({
        subjectStyle1: '',
        subjectStyle2: 'background-color: #2a82e4; color: white'
      })
    }

    

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