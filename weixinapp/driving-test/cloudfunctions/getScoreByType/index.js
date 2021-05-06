// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const questionType = event.questionType

  const score = await db.collection('score').where({
    questionType
  }).get()

  return {
    score
  }
}