function Person(name, age) {
    this.name = name
    this.age = age
}
// let person = new Person('tom', '18')
// console.log(person);


function myNew() {
    let obj = {}
    // 取得外部传入的构造器
    let Constructor = Array.prototype.shift.call(arguments)
    // 实现继承
    obj.__proto__ = Constructor.prototype
    let result = Constructor.apply(obj, arguments)


    return typeof result === 'object' ? result : obj
}

let person = myNew(Person, 'tom', '18')
console.log(person);