// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()
  console.log("开始调用云函数")
  try{
    return await db.collection(event._class).where({
      class_father:event._id
    }).get().then(res =>{
      console.log(res)
    })
  } catch(e){
    console.error(e)
    return e
  }
}