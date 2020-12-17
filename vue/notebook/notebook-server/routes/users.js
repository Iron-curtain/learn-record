const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')
const util = require('../util/getTime')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/insertNote', async(ctx, next) => {
  let _head_img = ctx.request.body.head_img
  let _title = ctx.request.body.title
  let _note_content = ctx.request.body.note_content
  let _note_type = ctx.request.body.note_type
  let _userId = ctx.request.body.userId
  let _nickname = ctx.request.body.nickname
  let _c_time = util.getDate()
  let _m_time = util.getDate()
  console.log(_c_time);
  await userService.insertNote([_userId, _title, _note_type, _note_content, _c_time, _m_time, _head_img, _nickname]).then(res => {
    let r = ''
    if (res.affectedRows != 0) {
      r = 'ok'
      ctx.body = {
        code: '80000',
        data: r,
        mess: '发布成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        mess: '发布失败'
      }
    }
  })
})

router.post('/getNoteDetailByType', async(ctx, next) => {
  let _note_id = ctx.request.body.note_id
  await userService.getNoteDetailByType(_note_id).then(res => {
    console.log(res.length);
    if(res.length) {
      r = 'ok'
      ctx.body = {
        code: '80000',
        data: res,
        mess: '查询成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        mess: '查询失败'
      }
    }
  }).catch(err => {
    console.log(err);
  })
})

router.post('/findNoteListByType', async(ctx, next) => {
  let _note_type = ctx.request.body.note_type
  // console.log(_note_type);
  await userService.findNoteListByType(_note_type).then(res => {
    if(res.length) {
      r = 'ok'
      ctx.body = {
        code: '80000',
        data: res,
        mess: '查询成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        mess: '查询失败'
      }
    }

  }).catch(err => {
    console.log(err);
  })
})

router.post('/userRegister', async(ctx, next) => {
  let _nickname = ctx.request.body.nickname
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd;
  // console.log(_nickname, _username, _userpwd);
  if(!_nickname || !_username || !_userpwd) {
    ctx.body = {
      code: '80001',
      mess: '用户名或密码为空'
    }
    return
  }
  await userService.findUser(_username).then(async (res) => {
    console.log(res);
    if (res.length) {
      ctx.body = {
        code: '80003',
        mess: '用户名已存在'
      }
    } else {
      await userService.insertUser([_username, _userpwd, _nickname]).then(res => {
        console.log(res);
        let r = ''
        if (res.affectedRows != 0) {
          r = 'ok'
          ctx.body = {
            code: '80000',
            data: r,
            mess: '注册成功'
          }
        } else {
          r = 'error'
          ctx.body = {
            code: '80000',
            data: r,
            mess: '注册失败'
          }
        }
      })
    }
  })
})

router.post('/userLogin', async(ctx, next) => {
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd;
  await userService.userLogin(_username, _userpwd).then((res) => {
    console.log(res);
    let r = '';
    if(res.length) {
      r = 'ok';
      let result = {
        id: res[0].id,
        nickname: res[0].nickname,
        username: res[0].username
      }
      ctx.body = {
        code: '80000',
        data: result,
        mess: '登录成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        mess: '账号或密码错误'
      }
    }
  }).catch(err => {
    ctx.body = {
      code: '80002',
      data: err
    }
  })
})

module.exports = router
