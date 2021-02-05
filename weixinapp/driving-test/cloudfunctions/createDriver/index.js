// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const userInfo = event.userInfo

  // 查看user库里面有没有这个openId
  const checkUser = await db.collection('driver').where({
    openId: userInfo.openId
  }).get()
  // 已经存在该用户
  if(checkUser.data.length > 0) {
    await db.collection('user').doc(checkUser.data[0]._id)
      .update({
        data: {
          avatarUrl: event.avatarUrl,
          nickName: event.nickName,
          sex: event.sex
        }
      })
  }
  else{
    await db.collection('user').add({
      data: { 
        avatarUrl: event.avatarUrl,
        nickName: event.nickName,
        sex: event.sex,
        openId: event.userInfo.openId,
      }
    })
  }
}