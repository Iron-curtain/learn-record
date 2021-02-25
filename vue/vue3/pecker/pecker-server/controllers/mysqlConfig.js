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





module.exports = {
  userLogin,
  findUser,
  insertUser,
}