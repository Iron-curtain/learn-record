const Koa = require('koa')
const app = new Koa()
const user_router = require('./routes/api/user_router')
const cors = require('koa2-cors') // 解决跨域
const bodyParser = require('koa-bodyparser') // 帮助koa解析参数
const mongoose =require('mongoose') 
const config = require('./config')

// 建立mongodb的连接
mongoose.connect(config.db, { useNewUrlParser: true }, (err) => {
    if(err) {
      console.error(err)
    } else {
      console.log('connecting database successful!');
    }
})

app.use(cors())
app.use(bodyParser());
app.use(user_router.routes())

app.listen(3000)