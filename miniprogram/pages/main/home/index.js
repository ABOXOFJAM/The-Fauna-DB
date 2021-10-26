// pages/main/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navIcon1:[
      {
        'bgc':'#01826E',
        'img':'../../../static/icon_bug.png',
        'text':'昆虫',
      },
      {
        'bgc':'#3694C3',
        'img':'../../../static/icon_house.png',
        'text':'大类检索',
      },
      {
        'bgc':'#CE542A',
        'img':'../../../static/icon_love.png',
        'text':'概述'
      }
    ],
    swiper_list:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    const db = wx.cloud.database()//初始化数据库
    /**获取轮播图 */
    db.collection('swiper').get({
      success(res){
       // console.log(res.data)
        that.setData({
          swiper_list:res.data
        })
      }
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