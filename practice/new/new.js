function myNew () {
  let obj = {}

  let constructor = Array.prototype.shift.call(arguments)

  if (typeof constructor !== 'function')
    throw new Error('Type Error')

  obj.__proto__ = constructor.prototype

  let res = constructor.apply(obj, arguments)
  
  return typeof res === 'object' ? res : obj
}