//app.js
App({
  onLaunch: function (options) {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'liuyangbao-8gwhwy0b2f93e90e',
        traceUser: true,
      })
    }

    // 查看是否获得用户授权
    const self = this
    // console.log(options);
    wx.getSetting({
      success(settingRes){
        if(settingRes.authSetting['scope.userInfo']){
          wx.getUserInfo({    //获取用户信息
            success(infoRes){
              self.globalData.userInfo = infoRes.userInfo
              console.log(self.globalData.userInfo);
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
                        self.globalData.choice = {
                          model: 1,
                          subject: 1
                        }
                        if (self.userInfoReadyCallback(self.globalData)) {
                          self.userInfoReadyCallback()
                        }
                        console.log('onLaunch finished!');
                      }
                    })
                  } else {
                    self.globalData.choice = {
                      model: result.model,
                      subject: result.subject
                    }
                    if (self.userInfoReadyCallback) {
                      self.userInfoReadyCallback()
                    }
                    console.log('onLaunch finished!');
                  }
                }
              })
            }
          })
        }
        else{
          wx.redirectTo({
            url: `pages/login/login?back=${options.path.split('/')[1]}`
          })
        } 
      }
    })

    this.globalData = {
    }  
  }
})
