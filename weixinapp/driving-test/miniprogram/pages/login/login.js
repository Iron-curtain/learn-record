// pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用
    canIuse: wx.canIUse('button.open-type.getUserInfo'),
  },

  getUserProfile(e) {
    wx.getUserProfile({
      desc: '用于完善用户资料', // 声明获取用户个人信息后的用途
      success: (res) => {
        // 将用户信息保存到小程序全局变量globalData中
        app.globalData.userInfo = res.userInfo  
        new Promise((resolve, reject) => {
          // 触发getUserChoice函数，获取用户的题库选择
          this.getUserChoice(resolve) 
        }).then(() => {
          // 获取成功后跳转到用户页personal中
          wx.switchTab({ 
            url: '../personal/personal'
          })
        })
      }
    })
  },

  getUserChoice(cb) {
    const that = app
    wx.cloud.callFunction({
      name: 'getChoice',
      success: res => {
        let result = res.result.choice.data[0]
        if (result.length === 0) {
          wx.cloud.callFunction({
            name: 'choose',
            data: {
              model: 1,
              subject: 1
            },
            success: message => {
              console.log("insert success!");
              that.globalData.choice = {
                model: 1,
                subject: 1
              }
            }
          })
        } else {
          that.globalData.choice = {
            model: result.model,
            subject: result.subject
          }
        }
        cb()
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this;
    // //查看是否授权
    // wx.getSetting({
    //   success: function (res) {
    //     if (res.authSetting['scope.userInfo']) {
    //       console.log("用户授权了");
    //     } else {
    //       //用户没有授权
    //       console.log("用户没有授权");
    //     }
    //   }

    // });
  },
  bindGetUserInfo: function (res) {
    if (res.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      // 获取到用户的信息了，打印到控制台上看下
      // console.log("用户的信息如下：");
      // console.log(e.detail.userInfo);
      
      wx.getUserInfo({    //获取用户信息
        success(infoRes){
          app.globalData.userInfo = infoRes.userInfo
          wx.cloud.callFunction({
            name: 'getChoice',
            success: res => {
              let result = res.result.choice.data[0]
              // console.log(res);
              console.log(result)
              if (result.length === 0) {
                wx.cloud.callFunction({
                  name: 'choose',
                  data: {
                    model: 1,
                    subject: 1
                  },
                  success: message => {
                    console.log("insert success!");
                    app.globalData.choice = {
                      model: 1,
                      subject: 1
                    }
                  }
                })
              } else {
                app.globalData.choice = {
                  model: result.model,
                  subject: result.subject
                }
              }
            }
          })
        }
      })
      wx.redirectTo({
        url: "pages/personal/personal"
      })
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”');
          }
        }
      });
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