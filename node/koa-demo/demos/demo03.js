// const Koa = require('koa')

// const app = new Koa()

// var main = (ctx) => {
//     if (ctx.request.accepts('xml')) {
//         ctx.response.type = 'xml'
//         ctx.response.body = '<data>Hello World!</data>'
//     }
//     else if(ctx.request.accepts('html')){
//         ctx.response.body = '<p>Hello World!</p>'
//     }
//     else if(ctx.request.accepts('json')){
//         ctx.response.body = "{data: 'Hello world'}"
//     }
//     else{
//         ctx.response.body = "Hello World"
//     }
// }

// app.use(main)

// app.addListener(3000, () => {

// })

// //图解http


const Koa = require('koa')

const app = new Koa()

const main = (ctx) => {
        if (ctx.request.accepts('xml')) {
        ctx.response.type = 'xml'
        ctx.response.body = '<data>Hello World!</data>'
    }
    else if(ctx.request.accepts('html')){
        ctx.response.body = '<p>Hello World!</p>'
    }
    else if(ctx.request.accepts('json')){
        ctx.response.body = "{data: 'Hello world'}"
    }
    else{
        ctx.response.body = "Hello World"
    }
}

app.use(main)

app.listen(3000, () => {
    console.log("项目启动成功！");
})