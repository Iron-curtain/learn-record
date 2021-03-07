const Koa = require('koa')
const cors = require('koa-cors')

const app = new Koa()

app.use(cors())

app.use((ctx, next) => {
  if (ctx.url === '/list') {
    console.log(ctx.url);
    ctx.body = ['hello', 'zhou', 'ceo']
  }
})

app.listen(3001)