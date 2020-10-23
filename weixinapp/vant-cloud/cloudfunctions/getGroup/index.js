// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'liuyangbao-8gwhwy0b2f93e90e'

cloud.init()
const db = cloud.database({env})  //指明云函数生效的环境

// 云函数入口函数
exports.main = async (event, context) => {
  const openId = cloud.getWXContext().OPENID
  // 查找user-group这个库里面是否具有该openId
  // 按照这个openId把user-group里对应的数据取出
  // 去group这个库里面查找所有的_id和groupId相同的数据
  db.collection('user-group').get(openId)
}