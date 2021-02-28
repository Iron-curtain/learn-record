const { verifyToken } = require('../utils/jwt')
//验证token的方法
let tokenMiddlWare = async (ctx, next) => {
  let token = ctx.request.header.token
  //验证用户有没有传token
  if (!token) {
    ctx.body = {
      code: 10001,
      message: '未登录'
    }
    return
  }
  //获取验证token的状态
  let tokenState = verifyToken(token)
  // console.log(token)
  if (tokenState) {
    ctx.request.body.username = tokenState
    await next()
  } else {
    res.send({
      code: 10005,
      message: '登录失效'
    })
  }
}
module.exports = tokenMiddlWare