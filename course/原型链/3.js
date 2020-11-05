var num = 123
// var num = new Number(123).toString()
num.toString()

// Number.prototype.__proto__ = Object.prototype

var str = 'hello'   // new String('hello')
console.log(str.length);


//  方法重写
Object.prototype.toString