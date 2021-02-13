wx.cloud.callFunction({
  name: 'choose',
  data: {
    model: that.data.model,
    subject: that.data.subject
  },
  success: (res) => {
    console.log(res);
  },
  fail: (err) => {
    console.log(err);
  }
})