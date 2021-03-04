let proto = {

}
// proto.url = ctx.req.url
function defineGetter(property, name) {
  // 自定义获取器
  proto.__defineGetter__(name, function () { // 对象代理
    return this[property][name]
  })
}
defineGetter('request', 'url')
defineGetter('request', 'path')
defineGetter('response', 'body')

function defineSetter(property, name) {
  proto.__defineSetter__(name, function(value) {
    this[property][name] = value
  })
}

defineSetter('response', 'body')

module.exports = proto