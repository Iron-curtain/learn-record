const fs = require('fs')
const AipImageClassifyClient = require('baidu-aip-sdk').imageClassify

const APP_ID = "23082458"
const API_KEY = "jYUAE4r82LXGm344rlyNsCbU"
const SECRET_KEY = "9xOGt3y5YmMemy2TPklyapV76HmUMW5O"
// sync I/O Async 同步
const image = fs.readFileSync('index.jpg').toString("base64")
// console.log(image);

const client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY)

// http 协议    // 云端
client.carDetect(image).then((result) => {
  console.log(result.result[0]);
}).catch(err => {
  console.log(err);
})