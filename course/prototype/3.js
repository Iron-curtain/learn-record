Person.prototype.lastName = 'Liu'
function Person(name){
    this.name = name
}

var person = new Person('zhipeng')
console.log(person.constructor);    // constructor指的是Person(), 目的是让Person()构造出来的对象能够指向Person()

// console.log(person.lastName);

// person.lastName = 'Wang'        // 只是在自己的对象中添加了lastName属性
// console.log(person.__proto__);
// // person.__proto__.lastName = 'Wang'
// console.log(person.__proto__);
// console.log(Person.prototype);


// var person2 = new Person("zz")
// console.log(person2.lastName);
// delete person2.__proto__.lastName
// console.log(Person.prototype);
