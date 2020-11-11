// 什么是浅拷贝？如何实现一个浅拷贝？什么是深拷贝？如何实现一个深拷贝？

let a = {
    age: 1,
    info: {
        name: "wn"
    }
}
// let b = a  // 浅拷贝
// let b = JSON.parse(JSON.stringify(a))   // 深拷贝            undefine 和 Symbol 会被忽略
let b = Object.assign({}, a)
// a.age = 2
b.age = 2
b.info.name = '蜗牛'
console.log(b.age); 
console.log(a.info.name);   




let c = {
    age: 1,
    jobs: {
        first: 'Coding'
    }
}
let d = {...c}
c.age = 2
c.jobs.first = 'waiter'
console.log(d.age);     




let c = {
    age: 1,
    jobs: {
        first: 'Coding'
    }
}
let d = JSON.parse(JSON.stringify(c))
c.age = 2
c.jobs.first = 'waiter'
console.log(d.age);     



let obj = {
    a: 1,
    b: {
        c: 2,
        d: 3
    }
}
obj.c = obj.b
obj.e = obj.a
obj.b.c = obj.c
obj.b.d = obj.b
obj.b.e = obj.b.c

let newObj = JSON.parse(JSON.stringify(obj))




let test = {
    age: undefined,
    sex: Symbol('man'),
    jobs: function(){},
    name: 'wn'
}
let o = JSON.parse(JSON.stringify(test))
console.log(o);



// Lodash.js   cloneDeep