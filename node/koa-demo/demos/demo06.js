const Koa = require("koa")
const router = require("koa-route")
const app = new Koa()

const about = (ctx) => {
    ctx.response.type = "html"
    ctx.response.body = '<a href="/">Index page</a>'
}

const main = (ctx) => {
    ctx.response.body = "Hello World!"
}

app.use(main)

app.use(router.get('/about', about))
app.use(router.get('/', main))

app.listen(3000, () => {
    console.log('3000端口已启动');
})