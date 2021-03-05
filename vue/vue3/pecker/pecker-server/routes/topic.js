const router = require('koa-router')()
const userService = require('../controllers/mysqlConfig')

router.prefix('/topic')

router.get('/gettopiclist', async function (ctx, next) {
  await userService.getTopicList().then((res) => {
    ctx.body = {
      code: 200,
      data: res,
      message: '查询成功'
    }
  })
})

module.exports = router
