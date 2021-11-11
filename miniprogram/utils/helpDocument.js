/**
 * 传入文档地址，打开
 * @param {文档的地址}} url 
 */
function helpDocument(url){
  var _url = url
  wx.downloadFile({
    url: _url,
    success(res){
      console.log(res)
      var filePath = res.tempFilePath
      wx.openDocument({
        filePath: filePath,
        success(res){
          console.log('打开文件成功')
        },
        fail(res){
          console.log('打开文件失败')
          console.log(res)
        },
        complete(res){
          console.log("openDocument完成")
        }
      })
    },
    fail(res){
      console.log('下载文件失败')
    },
    complete(res){
      console.log('文件下载完成')
    }
  })
}
module.exports = {
  helpDocument:helpDocument
}