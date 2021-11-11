// miniprogram/pages/main/homeFunc/funcDetail/index.js
let utils = require('../../../../utils/helpDocument')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    md : "",
    isLoading: true,
    article: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _md = options.md
    console.log(_md)
    this.initMD(_md)
  },
  initMD(md){
    //console.log("初始化md")
    let result = app.towxml(md,'markdown',{
		//	base: md,				// 相对资源的base路径
			theme:'light',					// 主题，默认`light`
			events:{					// 为元素绑定的事件方法
				tap:(e)=>{
          console.log('tap',e);
          try{
            if(e.currentTarget.dataset.data.attrs.href){
              //在这里添加允许跳转的种类
              let temp = e.currentTarget.dataset.data
              if(temp.children[0].text == "_.pdf"){
                console.log("执行跳转")
                utils.helpDocument(temp.attrs.href)
              }
            }
          }catch(e){
            console.log(e)
          }
				}
      }
    });
    // 更新解析数据
		this.setData({
			article:result,
			isLoading: false
		});
  },
  //查看文献
  
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