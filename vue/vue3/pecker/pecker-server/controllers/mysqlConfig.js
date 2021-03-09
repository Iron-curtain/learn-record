const mysql = require('mysql')
const config = require('./defaultConfig')
// 连接线程池
let pool = mysql.createPool({
  host: config.dataBase.HOST,
  user: config.dataBase.USERNAME,
  password: config.dataBase.PASSWORD,
  database: config.dataBase.DATABASE,
  port: config.dataBase.PORT
})

let allServices = {
  query: function(sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) {
        if (err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })
  }
}

// 注册用户
let insertUser = function(value) {
  let _sql = `insert into users set user_id=?,user_password=?;`
  return allServices.query(_sql, value)
}

// 用户登录
let userLogin = function(username, userpwd) {
  let _sql = `select * from users where user_id="${username}" and user_password="${userpwd}";`
  return allServices.query(_sql)
}

// 查找用户
let findUser = function(username) {
  let _sql = `select * from users where user_id="${username}";`
  return allServices.query(_sql)
}

// 新建用户信息表
let insertUserInfo = function(username) {
  let _sql = `insert into user_info set user_id="${username}";`
  return allServices.query(_sql)
}

// 修改用户信息
let updateUserInfo = function(key, value, username) {
  let _sql = `update user_info set ${key}="${value}" where user_id="${username}";`
  return allServices.query(_sql)
}

// 获取用户信息
let getUserInfo = function(username) {
  let _sql = `select * from user_info where user_id="${username}";`
  return allServices.query(_sql)
}


// 获取话题
let getTopicList = function () {
  let _sql = `select * from topic;`
  return allServices.query(_sql)
}

// 发布主题帖
let publishArticle = function (params) {
  let _sql = `insert into article set topic_id=?,content=?,img_url=?,user_id=?,create_time=now();`
  return allServices.query(_sql, params)
}

let getArticleList = function () {
  let _sql = `select * from article order by create_time desc;`
  return allServices.query(_sql)
}

let getUserArticleList = function (userId) {
  let _sql = `select * from article where user_id=${userId} order by create_time desc;`
  return allServices.query(_sql)
}

let getArticleDetail = function (articleId) {
  let _sql = `select * from article where id=${articleId};`
  return allServices.query(_sql)
}

module.exports = {
  userLogin,
  findUser,
  insertUser,
  insertUserInfo,
  updateUserInfo,
  getUserInfo,
  getTopicList,
  publishArticle,
  getArticleList,
  getUserArticleList,
  getArticleDetail
}