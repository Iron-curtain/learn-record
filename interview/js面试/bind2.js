Function.prototype.mybind = function (context) {
  if (typeof this != 'function') {
    throw new Error('Type Error')
  }

  let self = this
  let context = context || window
  let args = Array.from(arguments).slice(1)

  let nop = function () {}
 
}