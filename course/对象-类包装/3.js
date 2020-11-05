// 类包装
// 原始值是不能有属性和方法的，属性和方法是对象独有的
// var num = 123
// num.abc = 'aaa'
// console.log(typeof num);

var num = new Number(123)
num.abc = 'aaa'
console.log(num * 2);   // 246  当参与运算时，又会变回数字          不参与运算时，是对象        字符串同理          undefine和null不行


var num = 4
num.len

// new Number(4).len = 3
// delete num.len

console.log(num.len);       // new Number(4).len

// 以上这种隐式的过程称为包装类

var b = num.len + 3



var arr = [1, 2, 3, 4, 5]
arr.length = 2
console.log(arr);   // [1,2]
var str = 'abcd'
str.length = 2
// new String('abcd')
console.log(str); //



// 面试题
//  面试题
var str = 'abc'
str += 1  // 'abc1'
var test = typeof(str)   // 'String'
if (test.length == 6) {
  test.sign = 'typeOf的返回结果可能是String'
}
console.log(test.sign);