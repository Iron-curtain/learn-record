const fs = require('fs')
const AipImageClassifyClient = require('baidu-aip-sdk').ocr

const APP_ID = "23083064"
const API_KEY = "AGzaapE12Ncr8wzkSU6jCgj9"
const SECRET_KEY = "iMid7bgNXyGEE0QGE4Uuf9aTSu3GDS9v"
// sync I/O Async 同步
const image = fs.readFileSync('label2.jpg').toString("base64")
// console.log(image);

const options = {};
options["multi_detect"] = "true"

const client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY)

client.licensePlate(image, options).then(result => {
  console.log(result);
}).catch(err => {
  console.log(err);
})
