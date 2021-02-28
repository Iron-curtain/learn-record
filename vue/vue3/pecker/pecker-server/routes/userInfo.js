const router = require('koa-router')()
const userService = require('../controllers/mysqlConfig')
const fs = require('fs');

router.prefix('/userInfo')

router.post('/changeAvatar', async function (ctx, next) {
  let req = ctx.request.body;
  const username = req.username;
  const imgData = req.imgData;
  const imgName = req.imgName;
  var dataBuffer = Buffer.from(imgData, 'base64');
  let imgPath = './img/' + imgName + '.png'
  console.log(imgPath);
  let writePromise = new Promise((resolve, reject) => {
    fs.writeFile(imgPath, dataBuffer, function (err) {
      if (err) {
        console.log(err);
        reject(false)
      } else {
        console.log('success');
        resolve(true)
      }
    })
  })
  let writeResult = await writePromise
  if (writeResult) {
    console.log(username);
    await userService.updateUserInfo('avatar', imgPath)
    ctx.body = {
      code: 200,
      message: '上传成功'
    }
  } else {
    ctx.body = {
      code: 10006,
      message: '上传失败'
    }
  }
})

router.post('/changeBackground', async function (ctx, next) {
  let req = ctx.request.body;
  const username = req.username;
  const imgData = req.imgData;
  const imgName = req.imgName;
  var dataBuffer = Buffer.from(imgData, 'base64');
  let imgPath = './img/' + imgName + '.png'
  console.log(imgPath);
  let writePromise = new Promise((resolve, reject) => {
    fs.writeFile(imgPath, dataBuffer, function (err) {
      if (err) {
        console.log(err);
        reject(false)
      } else {
        console.log('success');
        resolve(true)
      }
    })
  })
  let writeResult = await writePromise
  if (writeResult) {
    console.log(username);
    await userService.updateUserInfo('bg_url', imgPath, username)
    ctx.body = {
      code: 200,
      message: '上传成功'
    }
  } else {
    ctx.body = {
      code: 10006,
      message: '上传失败'
    }
  }
})

module.exports = router