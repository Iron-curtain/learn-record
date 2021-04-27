// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 格式化日期
function getCurrentTime() {
  let now = new Date()
  let year = now.getFullYear()
  let month = now.getMonth() + 1
  let day = now.getDate()
  let hour = now.getHours()
  let min = now.getMinutes()
  return `${year}年${month}月${day}日${hour}时${min}分`
}

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  // 获取所有的参数
  const openId = wxContext.OPENID
  const questionType = event.questionType
  const score = event.score
  const time = getCurrentTime()

  insertResult = await db.collection('score').add({
    data: { 
      openId,
      questionType,
      score,
      time
    }
  })
  return insertResult
}