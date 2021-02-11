// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  // 获取所有需要的参数
  const openId = wxContext.OPENID
  const model = event.model
  const subject = event.subject

  // 定义返回的查询结果
  let updateResult, insertResult




  const choice = await db.collection('choice').where({
    openId: openId
  }).get()
  // 已经存在该用户
  if(choice.data.length > 0) {
    updateResult =  await db.collection('choice').doc(choice.data[0]._id)
      .update({
        data: {
          model: model,
          subject: subject
        }
      })
  }
  else{
    insertResult = await db.collection('choice').add({
      data: { 
        openId: openId,
        model: model,
        subject: subject
      }
    })
  }
  return {
    updateResult,
    insertResult
  }
}