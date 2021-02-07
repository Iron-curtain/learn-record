// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  // 获取所有需要的参数
  const openId = wxContext.OPENID
  const model = event.model
  const subject = event.subject

  const choice = await db.collection('choice').where({
    openId: openId
  }).get()
  // 已经存在该用户
  if(choice.data.length > 0) {
    await db.collection('choice').doc(choice.data[0]._id)
      .update({
        data: {
          model: model,
          subject: subject
        }
      })
  }
  else{
    await db.collection('choice').add({
      data: { 
        openId: openId,
        model: model,
        subject: subject
      }
    })
  }
}