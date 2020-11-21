// for (let i = 0; i < Object.keys(obj).length; i++){
//     console.log(obj[Object.keys(obj)[i]]);
// }


// 用for  of 遍历数组           不能遍历对象，因为for of只能识别迭代器，对象天生不具备迭代器
// 用for  in 遍历对象           也可以遍历数组，但不建议使用，会把数组原型上的属性也遍历出来

function Foo() {
  this[100] = 'test-100'
  this[1] = 'test-1'
  this['b'] = 'bar-B'
  this[50] = 'test-50'
  this[9] = 'test-9'
  this[8] = 'test-8'
  this[3] = 'test-3'
  this[5] = 'test-5'
  this['A'] = 'bar-A'
  this['C'] = 'bar-C'
}
let bar = new Foo() 
// console.log(foo);

for (let key in bar) {
    console.log(`index: ${key} value: ${bar[key]}`);
}

// ECMAScript  规范规定，数字属性应该按照索引值的大小升序排列，字符串的属性根据创建时的顺序排列

array.forEach((item, index) => {        // item值       index下标
});