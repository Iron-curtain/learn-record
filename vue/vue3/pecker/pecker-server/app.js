const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors') // 解决跨域
const koaBody = require('koa-body'); // 修改服务器配置，解决文件上传大小限制
const tokenMiddlWare = require('./middlewares/tokenMiddleWare')
const imgMiddleWare = require('./middlewares/imgMiddleWare')

const index = require('./routes/index')
const users = require('./routes/users')
const userInfo = require('./routes/userInfo')

// error handler
onerror(app)

// middlewares
app.use(cors())
app.use(koaBody({
  multipart: true,
  formLimit: "10mb",
  jsonLimit: "10mb",
  textLimit: "10mb",
  enableTypes: ['json', 'form', 'text']
}));
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(imgMiddleWare)

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

app.use(tokenMiddlWare)
app.use(userInfo.routes(), userInfo.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
