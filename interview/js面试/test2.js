//主线程直接执行
console.log('1');
//丢到宏事件队列中
(function() {
    console.log('2');
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
}());
// 丢到宏事件队列中
(function() {
    console.log('9');
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
}())
