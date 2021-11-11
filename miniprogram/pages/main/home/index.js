// pages/main/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navIcon1:[
      {
        'bgc':'#01826E',
        'img':'../../../static/icon_policy.png',
        'text':'政策背景',
      },
      {
        'bgc':'#3694C3',
        'img':'../../../static/icon_tree.png',
        'text':'保护区',
      },
      {
        'bgc':'#CE542A',
        'img':'../../../static/icon_news.png',
        'text':'物种新闻'
      }
    ],
    swiper_list:[],
    DBtext:`&nbsp;&nbsp;本数据库记录福建省内本土生物多样性，其类群涵盖昆虫、软体动物、甲壳动物、大型真菌、少见植物等类群的视频、图片综合一体化的物种数据库。
    &nbsp;&nbsp;请点击下方检索标志即进入物种分类界面，也可通过关键字检索物种信息。`
  },
  iconMethods(e){
    let key = e.currentTarget.dataset.key
    wx.navigateTo({
      url: '../homeFunc/funcBar/index?key='+key
    })
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