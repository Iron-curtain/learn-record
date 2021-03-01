const router = require('koa-router')()
const userService = require('../controllers/mysqlConfig')
const fs = require('fs');

router.prefix('/userInfo')

// 修改头像
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
    await userService.updateUserInfo('avatar', imgPath, username)
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

// 修改主页背景
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

// 修改信息
router.post('/updateInfo', async function (ctx, next) {
  let req = ctx.request.body
  
  let username = req.username

  let nickName = req.nickName
  let sex = req.sex
  let birthday = req.birthday
  let city = req.city
  let sign = req.sign
  let key = '', value = ''

  if (nickName !== undefined) {
    key = 'nickname',
    value = nickName
  } else if (sex !== undefined) {
    key = 'sex',
    value = sex
  } else if (birthday !== undefined) {
    key = 'birthday',
    value = birthday
  } else if (city !== undefined) {
    key = 'city',
    value = city
  } else if (sign !== undefined) {
    key = 'sign',
    value = sign
  }
  
  console.log(key, value);

  await userService.updateUserInfo(key, value, username).then(() => {
    ctx.body = {
      code: 200,
      message: '修改成功'
    }
  }, (err) => {console.log(err);})
})

module.exports = router