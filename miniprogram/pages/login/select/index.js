// pages/login/select/select.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  toMailLogin(){
    wx.navigateTo({
      url: '../pwd-login/index',
    })
   
  },
  toLogin(){
   wx.switchTab({
     url: '/pages/main/home/index',
     success: (res) => {console.log("跳转成功");},
     fail: (res) => {console.log("跳转失败");},
     complete: (res) => {console.log("已执行跳转");},
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideTabBar({
      animation: true,
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
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