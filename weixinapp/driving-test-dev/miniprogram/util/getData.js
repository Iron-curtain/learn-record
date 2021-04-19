const fs = require('fs')
const axios = require('axios')

let params = { 
    key: '44f01556583d3bdfda9152f5d7d1e46a',
    subject: 1,
    model: 'c1',
    testType: 'order'
}

axios.get(`http://v.juhe.cn/jztk/query?subject=${params.subject}&model=${params.model}&testType=${params.testType}&key=${params.key}`).then((res) => {
    // console.log(res);
    if (res.data.error_code === 0) {
        let data = res.data.result
        let questionBank = ''
        data.forEach(item => {
            questionBank += JSON.stringify(item)
        })
        fs.writeFile('./miniprogram/assets/c11.json', questionBank, (err) => {
            if(!err){
                console.log('文件写入完成！')
            } else {
                console.log(err);
            }
        })
    }
})