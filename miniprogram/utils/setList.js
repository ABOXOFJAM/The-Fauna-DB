let toast = require("./showLoading.js")
/**
 * 传入表中文名，返回条目
 * @param {表中文名} key 
 */
async function getList(key){
  var name = changeName(key);//将中文转为英文表名
  try{//先从网络获取表
    console.log("开始从网络获取")
    var list =await getListfromNet(name)
    console.log(list)
    toast.showLoading()
  }catch(e){
    console.log(e)
  
  }
   switch(key){
     case "政策背景" :{
       return getPolicy(list)
     }
     case "保护区" :{
       return getLand(list)
     }
     case "物种新闻":{
       return getNews(list)
     }
   }
}
function getNews(list){
  //console.log("开始获取新闻")
  return list
}
function getPolicy(list){
  console.log("开始获取政策")
  return list
}
function getLand(list){
  console.log("开始获取保护区")
  return list
}
function getListfromNet(name){
  return new Promise(function (resolve,reject){
    try{
       wx.cloud.callFunction({
          name: "getList",
          data:{
            _name: name//要查的表
          },
          complete: res =>{
            console.log("成功")
            console.log(res)
            resolve(res.result)
          },
          fail: res =>{
            console.log(res)
            reject(res)
          }
       })}catch(e){
         console.log("访问getList出错",e)
       }
  })
  
  }
function changeName(e){
  switch(e){
    case "政策背景":{
      return "policy_list"
    }
    case "保护区":{
      return "lands_list"
    }
    case "物种新闻":{
      return "news_list"
    }
  }
}
module.exports = {
  getList : getList
}