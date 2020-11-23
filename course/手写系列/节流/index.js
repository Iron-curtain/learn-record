//  规定的时间值触发一次

function throttle(fn, delay) {
    let prev = Date.now() - delay   //  上一次点击
    let context = this
    return function() {
        let now = Date.now()    //  这一次点击
        if (now - prev >= delay) {
            fn.apply(context, arguments)
            prev = Date.now()
        }
    }
}