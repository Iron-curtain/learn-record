// 云函数入口文件
const cloud = require('wx-server-sdk')
const rq = require('request-promise') // http模块
const cheerio = require('cheerio') 
let charset = require('superagent-charset') // 解决乱码
let superagent = require('superagent') // 发起请求
charset(superagent) 
cloud.init()  


// 云函数入口函数
exports.main = async (event, context) => {
  let serverUrl = `https://wap.biqiuge8.com/${event.url}`
  const result = await superagent.get(serverUrl).charset('gb2312') // 取决于网页的编码方式
  const data = result.text || '' 
  const $ = cheerio.load(data) // 读取整份html文件
  const bookDetail = $('#chaptercontent')
  return bookDetail
}