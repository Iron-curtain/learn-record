Function.prototype.myapply = function () {
  if (typeof this !== 'function') {
    throw new Error('type error')
  }
  let context = Array.prototype.shift.call(arguments)
  let args = arguments

  let fn = Symbol('fn')
  context[fn] = this ||  window

  let res = context[fn]([...args])
  delete context[fn]
  
  return res
}
