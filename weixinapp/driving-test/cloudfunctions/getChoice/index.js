// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()


// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  // 获取用户当前选择的题库
  const choice = await db.collection('choice').where({
    openId: wxContext.OPENID
  }).get()

  return {
    choice
  }
}