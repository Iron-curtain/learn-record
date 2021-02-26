const { verifyToken } = require('../utils/jwt')
//验证token的方法
let tokenMiddlWare = (ctx, next) => {
  console.log('token拦截器', ctx.req.body)
  let token = ctx.req.body.token
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
  console.log(tokenState)
  if (tokenState) {
    ctx.req.body.username = tokenState.data
  } else {
    res.send({
      code: 10005,
      message: '登录失效'
    })
  }
}
module.exports = tokenMiddlWare