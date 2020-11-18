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
  const bookDetail = $('.book_info')

  let bookDetailData = {} // 装书的详情
  bookDetailData['name'] = $(bookDetail).find('.cover').find('img').attr('alt')
  bookDetailData['imgurl'] = $(bookDetail).find('.cover').find('img').attr('src');
  bookDetailData['author'] = $(bookDetail).find('.book_box').find('.dd_box').eq(0).find('span').eq(0).text();
  bookDetailData['status'] = $(bookDetail).find('.book_box').find('.dd_box').eq(1).find('span').eq(0).text();//状态
  bookDetailData['lastTime'] = $(bookDetail).find('.book_box').find('dd').eq(2).find('span').text();
  bookDetailData['lastSection'] = $(bookDetail).find('.book_box').find('dd').eq(3).find('span').find('a').text();//最新章节
  bookDetailData['lastSectionUrl'] = $(bookDetail).find('.book_box').find('dd').eq(3).find('span').find('a').attr('href');//最新章节地址
  bookDetailData['bookDetail'] = $('.book_about').find('dd').text();//小说介绍

  // 上一页 和 下一页地址
  let pre = $('.listpage').find('.left').find('a').attr('href')|| '';
  let next = $('.listpage').find('.right').find('a').attr('href');

  // 取到所有的分页
  let pageArray = []
  const pageNum = $('.listpage').find('.middle').find('select').find('option');
  for (let j = 0; j < pageNum.length;j++){
    let obj = {};
    obj['name'] = $(pageNum[j]).attr('value');
    obj['num'] = j+1;
    pageArray.push(obj);
  }
  // 取最新章节
  const lastsection = $('.book_last').eq(0).find('dd')
  let lastData = [] 
  for (let i = 0; i < lastsection.length; i++) {
    let obj = {}
    obj['sectionName'] = $(lastsection[i]).find('a').text()
    obj['sectionUrl'] = $(lastsection[i]).find('a').attr('href')
    lastData.push(obj)
  }
  // 本页章节
  const pagesection = $('.book_last').eq(1).find('dd');
  let pageData = [];
  for (let i = 0; i < pagesection.length; i++) {
    let obj = {};
    obj['sectionName'] = $(pagesection[i]).find('a').text();
    obj['sectionUrl'] = $(pagesection[i]).find('a').attr('href');
    pageData.push(obj);
  }
  return {
    bookDetailData,
    pre,next,
    pageArray,
    lastData,
    pageData
  }
}