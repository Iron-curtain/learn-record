Function.prototype.bind = function(oThis) {
  if (typeof this !== 'function') {
    throw new TypeError('绑定的对象需要是函数')
  }
  const self = this
  const args = [].slice.call(arguments, 1)
  const func = function(){}

  fBound = function() {
    return self.apply(this instanceof func ? this : oThis, args.concat([].slice.call(arguments)))
  }

  if (this.prototype) {
    func.prototype = this.prototype
  }

  fBound.prototype = new func()
  return fBound
}