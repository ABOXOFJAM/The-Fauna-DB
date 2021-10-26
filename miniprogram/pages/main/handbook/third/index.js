// miniprogram/pages/main/handbook/third/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    speciesDetail:{
    }
  },
  clickImg(e){
    var imgUrl = e.currentTarget.dataset.url
    wx.previewImage({
    urls: [imgUrl], //需要预览的图片http链接列表，注意是数组
    current: '', // 当前显示图片的http链接，默认是第一个
    success: function (res) { },
    fail: function (res) { },
    complete: function (res) { },
  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //接收物种对象并赋值  
    var obj = JSON.parse(options.obj)
    console.log(obj)
    this.setData({
      speciesDetail:obj
    })
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