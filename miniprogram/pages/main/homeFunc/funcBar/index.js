// miniprogram/pages/main/home_func/policy/index.js
let utils = require('../../../../utils/setList')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },
  toDetail(e){
    console.log(e)
    var md = e.currentTarget.dataset.md
    wx.navigateTo({
      url: '../funcDetail/index?md=' + md,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
   onLoad: function (options) {
    var key = options.key
    this.init(key)//以表名创建
  },
  // key为表的中文名
  async init(key){
    var _list = await utils.getList(key);
    this.setData({
      list : _list
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