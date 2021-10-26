function showLoading(){
  wx.showToast({
    title:'加载中',
    mask:true,
    icon:'loading'
  })
}
function showSuccess(){
  wx.showToast({
    title:'加载成功',
    mask:true,
    icon:'success'
  })
  setTimeout(function(){
    wx.hideLoading()
  },1000)
}
module.exports = {
  showLoading :showLoading,
  showSuccess :showSuccess
}