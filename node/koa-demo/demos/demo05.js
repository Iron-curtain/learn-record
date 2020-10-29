const Koa = require("koa")
const fs = require("fs")
const app = new Koa()

const main = (ctx) => {
    ctx.response.type = "html"
    if(ctx.request.url !== '/') {  
        ctx.response.body = '<a href="/">Index page</a>'
    }
    else{
        ctx.response.body = fs.createReadStream('./template.html')
    }
    console.log(ctx);
}

app.use(main)

app.listen(3000, () => {
    console.log('3000端口已启动');
})