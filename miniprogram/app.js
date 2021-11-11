// app.js
const app = getApp()
App({
  // 引入`towxml3.0`解析方法
  towxml:require('./towxml/index'),
  "cloud":true,
  onLaunch() {//第一次初始化时候调用
    wx.cloud.init({
      env:"chonglin-handbook-2eqkoc6c5771ee"  //这里为云环境ID
    })
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  //onshow 从外面进来时候触发
  globalData: {
    userInfo: null
  }
})
