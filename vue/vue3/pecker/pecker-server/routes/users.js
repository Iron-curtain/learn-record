const router = require('koa-router')()
const userService = require('../controllers/mysqlConfig')
const { generateToken } = require('../utils/jwt')
const test = require('../test/test')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
  test()
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})


// 用户注册
router.post('/register', async function (ctx, next) {
  let req = ctx.request.body
  let username = req.loginName
  let password = req.passwordMd5

  if(!username || !password) {
    ctx.body = {
      code: 10000,
      message: '用户名或密码为空'
    }
    return
  }
  await userService.findUser(username).then(async (res) => {
    console.log(res);
    if (res.length) {
      ctx.body = {
        code: 10002,
        message: '用户名已存在'
      }
    } else {
      await userService.insertUser([username, password]).then(res => {
        console.log(res);
        if (res.affectedRows != 0) {
          ctx.body = {
            code: 200,
            data: {},
            message: '注册成功'
          }
        } else {
          ctx.body = {
            code: 10003,
            data: {},
            message: '注册失败'
          }
        }
      })
      await userService.insertUserInfo(username).then(undefined, err => {
        console.log(err);
      })
    }
  })
})

// 用户登录
router.post('/login', async function (ctx, next) {
  let req = ctx.request.body
  let username = req.loginName
  let password = req.passwordMd5
  console.log(username, password);
  await userService.userLogin(username, password).then((res) => {
    console.log(res);
    if(res.length) {
      r = 'ok';
      let token = generateToken(username)
      ctx.body = {
        code: 200,
        data: {
          token
        },
        message: '登录成功'
      }
    } else {
      ctx.body = {
        code: 10004,
        data: {},
        message: '账号或密码错误'
      }
    }
  })
})


module.exports = router
