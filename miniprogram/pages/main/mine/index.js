// pages/main/mine/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    func_list:[{
      icon:"../../../static/icon_star.png",
      text:"我的收藏",
      url:""
    },
    {
      icon:"../../../static/icon_download.png",
      text:"我的下载",
      url:""
    },
    {
      icon:"../../../static/icon_info.png",
      text:"关于我们",
      url:""
    },
    {
      icon:"../../../static/icon_help.png",
      text:"帮助反馈",
      url:""
    }],
    achievement_list:[
      {
        name:"自然爱好者",
        color:"#257BB3"
      }
    ]
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