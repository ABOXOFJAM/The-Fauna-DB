// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

// 输入要查询表的名字，返回表
exports.main = async (event, context) => {
  //获取要得到的表
  const db = cloud.database()
  var key = event._name
  console.log("要查询的表",key)
  try{
        return await db.collection(key).get().then(res =>{
        console.log(res)
      })
    }catch(e){
      console.log("查询失败")
      console.error("错误信息",e)
      return e
    }
  }

