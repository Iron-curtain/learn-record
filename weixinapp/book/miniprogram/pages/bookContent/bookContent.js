// const { url } = require("inspector");
const db = wx.cloud.database()
const app = getApp();

// miniprogram/pages/bookContent/bookContent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: '',
    name: '',
    imgUrl: '',
    sectionName: '',
    contentH: '',
    pre: '',
    next: '',
    catalog: '',
  },

  getContent(url){
    wx.showLoading({
      title: '正在加载'
    })
    wx.cloud.callFunction({
      name: 'getContent',
      data: {url: url}
    }).then(res => {
      // console.log(res);
      wx.hideLoading()
      const result = res.result || {} 
      this.setData({
        contentH: result.contentH,
        pre: result.pre,
        next: result.next,
        catalog: result.catalog,
      })
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 0
      });
    })
  },

  prePage(e){
    let url = e.currentTarget.dataset.url
    if (url) {
      if (url.endsWith('.html')){
        this.getContent(url)
      }
      else{
        return
      }
    }
  },
  catalog(e) {
    let catalogUrl = e.currentTarget.dataset.url
    this.getContent(catalogUrl)
  },
  nextPage(e) {
    let url = e.currentTarget.dataset.url
    if (url) {
      if (url.endsWith('.html')){
        this.getContent(url)
      }
      else{
        return
      }
    }
  },

  joinBook(url) {
    db.collection('book').where({
      _openId: app.globalData.openid,
      bookName: this.data.name
    }).get().then(res => {
      const data = res.data || []
      if (data.length > 0) { //书架存在这本书
        if(data[0].bookUrl !== url) {
          const id = data[0]._id || ''
          db.collection('book').doc(id).update({
            data: {
              bookUrl: url
            }
          }).then(res => {
            console.log(res);
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    const {url, name, imgUrl} = options
    this.setData({
      url,
      name,
      imgUrl
    })
    this.getContent(url)
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