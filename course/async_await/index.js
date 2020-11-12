// function a() {
//     setTimeout(() => {
//         console.log('aaaa');
//     }, 1000)
// }

// function b() {
//     console.log('bbb');
// }

// a()
// b()



// function a() {
//     return new Promise((resolve, reject) => {
//         resolve(setTimeout(() => {
//             console.log('aaaa');
//         }, 1000))
//     })   
// }
// a().then(b)



function timeout(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('nihao');
            resolve()
        }, ms)
    })
}

function a() {
    setTimeout(() => {
        console.log('aaaa');
    }, 1000)
}

// async声明该函数内部可能存在异步情况
async function asyncPrint(value, ms) {
    await timeout(ms)       // 阻塞后面的代码
    // await a()
    console.log(value);     // 去到微任务队列
}

asyncPrint('hello world', 1000)