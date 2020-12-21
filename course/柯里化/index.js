// function add(a, b) {
//   return a + b
// }

// add(1, 2)

// let addCurry = curry(add)
// addCurry(1)(2)


// function ajax(type, url, data) {
//   let xhr = new XMLHttpRequest()
//   xhr.open(type, url, true)
//   xhr.send(data)
// }


// ajax('POST', 'www.test.com', 'name="wn')
// ajax('POST', 'www.test.com', 'name="wn')
// ajax('POST', 'www.test.com', 'name="wn')

// // 利用curry
// let ajaxCurry = curry(ajax)

// // 以post类型请求
// let post = ajaxCurry('POST')
// // post('www.test.com', 'name="wn')

// let postFormTest = post('www.test.com')
// postFormTest('name="wn"')




function sub_curry(fn) {
  let args = [].slice.call(arguments, 1)
  return function() {
    // let newArgs = args.concat([].slice.call(arguments))
    return fn.apply(this, args.concat([].slice.call(arguments)))
  }
}


function curry(fn, length) {
  length = length || fn.length;
  let slice = Array.prototype.slice
  return function() { 
    if (arguments.length < length) {
      let combined = [fn].concat(slice.call(arguments))
      return curry(sub_curry.apply(this, combined), length - arguments.length)
    } else {
      return fn.apply(this, arguments)
    }
  }
}