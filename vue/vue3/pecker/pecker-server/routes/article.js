const router = require('koa-router')()
const userService = require('../controllers/mysqlConfig')
const fs = require('fs');

router.prefix('/article')

let storageImg = async function (imgList) {
  let imgUrl = []
  for (let img of imgList) {
    let imgName = img.imgName
    let imgData = img.imgData
    let dataBuffer = Buffer.from(imgData, 'base64')
    let imgPath = './img/' + imgName + '.png'
    let writePromise = new Promise((resolve, reject) => {
      fs.writeFile(imgPath, dataBuffer, function (err) {
        if (err) {
          reject()
        } else {
          resolve()
        }
      })
    })
    await writePromise.then(() => {
      let url = 'http://localhost:3000' + imgPath.slice(1)
      imgUrl.push(url)
    })
  }
  return imgUrl
}

router.post('/publisharticle', async (ctx, next) => {
  let req = ctx.request.body
  const username = req.username
  let imgList = req.imgList
  let topicId = req.topicId
  let content = req.content
  let imgUrl = await storageImg(imgList)
  console.log(imgUrl, content, topicId, username);
  await userService.publishArticle([topicId, content, JSON.stringify(imgUrl), username]).then(() => {
    ctx.body = {
      code: 200,
      message: '发布成功'
    }
  }, (err) => {
    console.log(err);
  })
})

module.exports = router
