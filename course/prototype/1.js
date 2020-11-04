// Person.prototype     ---原型
console.log(Person.prototype);      // 函数被定义出来的那一刻就一定具有prototype属性
Person.prototype.age = 18
function Person(name) {
    this.name = name
}
var person = new Person()

console.log(Person.prototype); 
console.log(person.__proto__.age);