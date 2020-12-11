const Router = require('koa-router')

const router = new Router()

const user_controller = require('./../../app/controllers/user_controller')
let login = user_controller.login

router.post('/login', (ctx) => {
  login(ctx)
}) // 拿到前端传过来的参数，去数据库里匹配是否存在

module.exports = router