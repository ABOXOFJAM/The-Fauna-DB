
// pages/main/datebase/index.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
     winHeight:0,
     photosNum:0,
     speciesNum:0,
     cardList:[],//词条大类
     swiper_list:[],
    
  },
  toDetail(e){
    let item = e.currentTarget.dataset;
    console.log(item.name)
    wx.navigateTo({
      url: '/pages/main/handbook/second/index?name='+item.name,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    /*获取系统信息*/
    wx.getSystemInfo({
      success: (result) => {
        that.setData({
          winHeight:result.windowHeight+140
        })
      },
    })
    const db = wx.cloud.database()//初始化数据库
    /**获取物种记录数 */
    db.collection('etc').get({
      success(res){
        console.log(res)
        that.setData({
          speciesNum:res.data[0].value,
          photosNum:res.data[1].value
        })
      },
      fail(e){
        console.log(e)
      }
    })
    /**获取轮播图 */
    db.collection('swiper').get({
      success(res){
        that.setData({
          swiper_list:res.data
        })
      }
    })
    /**获取大类列表 */
    db.collection('heading').get({
      success(res){
        that.setData({
          cardList : res.data
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