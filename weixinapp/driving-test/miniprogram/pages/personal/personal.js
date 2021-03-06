// pages/personal/personal.js
const app =  getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    choice: {},
    sexStyle: '',
    subject: 1,
    modelName: '',
    subjectStyle1: '',
    subjectStyle4: ''
  },


  // 跳转到驾照类型选择页面
  toSelect() {
    wx.navigateTo({
      url: '../select/select'
    })
  },

  // 选择科目一
  selectSubject1() {
    app.globalData.choice.subject = 1
    this.data.choice.subject = 1
    this.setData({
      subjectStyle1: 'color: white; background-color: #2a82e4',
      subjectStyle4: '',
    })
    wx.cloud.callFunction({
      name: 'choose',
      data: {
        subject: 1
      },
      success: () => {
        console.log("update success!");
      },
      fail: (err) => {
        console.log(err);
      }
    })
  },


  // 选择科目四
  selectSubject4() {
    app.globalData.choice.subject = 4
    this.data.choice.subject = 4
    this.setData({
      subjectStyle4: 'color: white; background-color: #2a82e4',
      subjectStyle1: '',
    })
    wx.cloud.callFunction({
      name: 'choose',
      data: {
        subject: 4
      },
      success: () => {
        console.log("update success!");
      }
    })
  },


  // 获取驾照类型名称
  getModelName() {
    switch (this.data.choice.model) {
      case 1: 
        this.setData({
          modelName: '小车'
        })
        break;
      case 2:
        this.setData({
          modelName: '货车'
        })
        break;
      case 3:
        this.setData({
          modelName: '客车'
        })
    }
  },

  // 渲染科目选择图标
  renderSubjectChoice() {
    if (this.data.choice.subject === 1) {
      this.setData({
        subjectStyle1: 'color: white; background-color: #2a82e4',
        subjectStyle4: ''
      })
      
    } else if (this.data.choice.subject === 4) {
      this.setData({
        subjectStyle4: 'color: white; background-color: #2a82e4',
        subjectStyle1: ''
      })
    }
  },

  // 渲染性别图标
  renderSexIcon() {
    if (this.data.userInfo.gender === 1) {
      this.setData({
        sexStyle: 'sex iconfont icon-nan'
      })
    } else if (this.data.userInfo.gender === 2) {
      this.setData({
        sexStyle: 'sex iconfont icon-nv'
      })
    }
  },


  // 渲染用户信息
  loadInfo() {
    let userInfo = this.userInfo
    this.renderSexIcon()
  },

  // 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 先判断app.globalData是否含有数据
    // 如果没有数据，则说明onlaunch还没执行完，onload就开始执行了，此时调用回调函数
    if (!app.globalData.userInfo) {
      app.userInfoReadyCallback = (data) => {
        this.setData({
          userInfo: data.userInfo,
          
        })
        this.loadInfo()
      }
    } else {
      this.setData({
        userInfo: app.globalData.userInfo,
        
      })
      this.loadInfo()
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
    if (!app.globalData.choice) {
      app.userChoiceCallback = (data) => {
        this.setData({
          choice: data.choice
        })
        this.getModelName()
        this.renderSubjectChoice()
      }
    } else {
      this.setData({
        choice: app.globalData.choice
      })
      this.getModelName()
      this.renderSubjectChoice()
    }
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