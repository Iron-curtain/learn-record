const mime = require('mime-types')
const fs = require('fs')
const path = require('path')

let imgMiddleWare = async (ctx, next) => {
  // 生成图片默认路径
  let pathArr = __dirname.split('\\')
  pathArr.pop()
  let defaultImgPath = pathArr.join('\\')

  if (ctx.url.startsWith('/img')) {
    let filePath = path.join(defaultImgPath, ctx.url); //图片地址
    console.log(filePath);
    let file = null;
    try {
        file = fs.readFileSync(filePath); //读取文件
    } catch (error) {
      //如果服务器不存在请求的图片，返回默认图片
        filePath = path.join(defaultImgPath, './img/homeimg.png'); //默认图片地址
        file = fs.readFileSync(filePath); //读取文件	    
    }

    let mimeType = mime.lookup(filePath); //读取图片文件类型
    ctx.set('content-type', mimeType); //设置返回类型
    ctx.body = file; //返回图片
  } else {
    await next()
  }
}

module.exports = imgMiddleWare
