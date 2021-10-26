// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()
  console.log("开始调用云函数")
  try{
    const c = await db.collection('specie_list')
    const total = await(await c.count()).total
    console.log("总数",total)
    return await cloud.database().collection("etc")
    .doc("8937eaa9615efc710ffd6a3759839f67")
    .update({
      data:{
      value: total
      }
    })
  } catch(e){
    console.error(e)
    return e
  }
  
}