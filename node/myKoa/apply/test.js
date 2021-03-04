// koa 核心非常小，中间件，http服务封装req, res => ctx

// Koa 是一个类
let Koa = require('koa')
let app = new Koa()

app.use((ctx, next) => {
  console.log(ctx.req.url); // ctx.req = req
  console.log(ctx.request.url); // ctx.request是koa自己封装的属性
  console.log(ctx.request.req.url); // ctx.request.req = req
  console.log(ctx.url); // 用ctx来代理一下ctx.request
})

app.listen(3000)
