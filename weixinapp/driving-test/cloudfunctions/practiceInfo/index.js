// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()


// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  // 获取所有的参数
  const openId = wxContext.OPENID
  const questionType = event.questionType
  const isCreate = event.isCreate || true
  const isUpdate = event.isUpdate || false
  const practiceState = event.practiceState
  const questionWrong = event.questionWrong
  const questionStar = event.questionStar

  // 查询是否有相关的练习记录信息
  const practiceInfo = await db.collection('practice-info').where({
    openId: openId,
    questionType: questionType
  }).get()


  // 如果没有，并且允许创建，则创建记录
  if (practiceInfo.data.length === 0 && isCreate === true) {
    const practiceInfo = await db.collection('question-count').where({
      questionType: questionType
    }).get()
    let count = practiceInfo.data[0].count
    let practiceState = new Array(count).fill(0)
    let questionWrong = []
    let questionStar = []
    const insertResult = await db.collection('practice-info').add({
      data: { 
        openId,
        questionType,
        totalCount: count,
        practiceState: JSON.stringify(practiceState),
        questionWrong: JSON.stringify(questionWrong),
        questionStar: JSON.stringify(questionStar)
      }
    })
    return {
      insertResult
    }
  } else if (isUpdate) {  // 更新相关记录
    const updateResult =  await db.collection('practice-info').doc(choice.data[0]._id)
      .update({
        data: {
          model: model,
          subject: subject,
          practiceState: JSON.stringify(practiceState),
          questionWrong: JSON.stringify(questionWrong),
          questionStar: JSON.stringify(questionStar)
        }
      })
    return {
      updateResult
    }
  } else {
    // 返回
    return {
      practiceInfo
    }
  }
}