function throttle (fn, interval) {
  let start = 0
  
  return function () {
    let now = Date.now()
    if (now - start >= interval) {
      last = now
      fn.apply(this, arguments)
    }
  }
}


function throttle (fn, interval) {
  let timer = null
  
  return function () {
    let context = this
    let args = arguments
    if (timer === null) {
      timer = setTimeout(function () {
        fn.apply(context, args)
        clearTimeout(timer)
      }, interval)
    }
  }
}


function throttle (fn, interval) {
  let start = 0
  let timer = null

  return function () {
    let remaining = interval - ( Date.now() - start )
    let args = arguments
    let context = this
    if (remaining <= 0) {
      fn.apply(context, args)
    } else {
      timer = setTimeout(function () {
        fn.apply(context, args)
        clearTimeout(timer)
      }, remaining)
    }
  }
}