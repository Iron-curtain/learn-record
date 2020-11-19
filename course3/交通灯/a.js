const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

// fs.readFile('./index.html', 'utf8', (err, file) => {
//     console.log(file);  
// })
let url = 'index.html'
let p3 = (url) => new Promise((resolve, reject) => {
    fs.readFile(url, 'utf8', (err, file) => {  
        if(err) reject(err)
        else resolve(file)
    })
})
p3(url).then((res) => {
    console.log(res);
})
p3(url).catch((err) => {
    console.log(err);
})

