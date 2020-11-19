// miniprogram/pages/list/list.js
const db = wx.cloud.database()
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookItem: []
  },



  navTo(e){
    // let {bookName, imgUrl, bookUrl} = e.currentTarget.dataset
    let bookName = e.currentTarget.dataset.name
    let imgUrl = e.currentTarget.dataset.imgUrl
    let bookUrl = e.currentTarget.dataset.url
    // console.log(bookName);
    wx.navigateTo({
      url: `../bookContent/bookContent?url=${bookUrl}&name=${bookName}&imgUrl=${imgUrl}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    let that = this
    db.collection('book').where({
      _openId: app.globalData.openid
    }).get().then(res => {
      // console.log(res);
      let books = []
      let result = res.data
      result.forEach(item => {
        let bookName = item.bookName
        let bookUrl = item.bookUrl
        let imgUrl = item.imgurl
        let book = {}
        book.bookName = bookName
        book.bookUrl = bookUrl
        book.imgUrl = imgUrl
        books.push(book)
      });
      that.setData({
        bookItem: books
      })
      // console.log(that.data.bookItem);
    })
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