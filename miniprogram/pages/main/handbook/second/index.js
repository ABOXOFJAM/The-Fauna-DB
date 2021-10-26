// pages/main/handbook/second/index.js
let toast = require('../../../../utils/showLoading.js')
Page({
  /**
   * 页面的初始数据
   */
  /**以中文名为key */
  data: {
    latinName:"拉丁名",
    winWidth:0,
    winHeight:0,
    hidden:false,
    /*左侧列表*/
    navList:[],
    curNav:0,//当前选中
    /**选中的列表 */
    selectList:{},
    heading:""
  },
  /**点击左边返回 */
  selectClass(event){
    //点击左侧的某个将curNav改为他，并将到他为止的全部弹出
    console.log(event)
    var index = event.currentTarget.dataset.index
    console.log(index)
    var len = this.data.navList.length
    var obj = this.data.navList[index-1]
    for(var i = len;i>=index;i--){
      this.data.navList.pop()
    }
    if(index == 0){//跳回到物种卡
      this.setData({
        navList: this.data.navList
      })
      console.log(this.data.navList)
      this.getHeading()
      return 
    }
    else{
      console.log(obj)
      this.getList(obj)
    }
    
  },
 
  /**点击项目跳转 */
  selectItem(event){
    var item = event.currentTarget.dataset.item
    this.getList(item)
  },
   /**传入item获取表且设置 */
   getList(item){
    var temp
    console.log(this.data.navList.length)
    if( this.data.navList.length == 0) temp = "family_list"
    else if(this.data.navList.length == 1) temp = "genus_list"
    else if(this.data.navList.length == 2) temp = "specie_list"
    else {//携带物种对象跳转
      var obj = JSON.stringify(item)
      console.log("执行跳转")
      wx.navigateTo({
        url: '../third/index?obj=' + obj,
      })
      return
    }
    toast.showLoading()
    //console.log(this.data.selectList)
    wx.cloud.callFunction({
        name: "searchClass",//获取list的函数
        data:{//传入一个name和要查的表
          _id : item._id,//筛选条件上级的id
          _class : temp //查询的表
        },
        complete: res =>{
          this.data.navList.push(item)
          this.setData({
            selectList :res.result.data,
            navList :  this.data.navList,
            curNav : item._id
          })
          toast.showSuccess()
         // console.log(res)
          //console.log(this.data.navList)
          console.log("云函数请求成功")
        }
      })
     
 },
  getHeading(){
    var that = this
    toast.showLoading()
    const db = wx.cloud.database()
    db.collection('heading').where({
      name: this.data.heading
    }).get({
      success(res){
        console.log(res)
        var head = res.data[0]._id
        wx.cloud.callFunction({
          name:"searchClass",
          data:{
            _id: head,//筛选条件
            _class: "order_list",
          },
          complete: res =>{
            that.setData({
              selectList :res.result.data
            })
            toast.showSuccess()
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    /*获取系统信息*/
    wx.getSystemInfo({
      success: (result) => {
        that.setData({
          winWidth: result.windowWidth,
          winHeight:result.windowHeight,
          selectList: this.data.orderList
        })
      },
      fail:(r)=>{
        console.log("获取系统消息异常")
      }
    })
    //获取物种大类_id，并且传参调用
    var head = options.name;
    this.setData({
      heading: head
    })
    this.getHeading()
   
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