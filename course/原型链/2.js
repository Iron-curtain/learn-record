var obj = {}

var obj = new Object()

Object.create(原型)
var obj = {
    name: 'wn',
    age: 18
}

// 网易面试题
// 所有对象最终都会继承自 Object.prototype  ???
// 不是的   特例
var obj = Object.create(null)
obj.__proto__ = {name: 'wn'}