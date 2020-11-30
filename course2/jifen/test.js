function foo() {
    let person = {
        name: 'wn',
        age: 18
    }
    console.log(this);
}

function bar() {
    let person = {
        name: '蜗牛',
        age: 20
    }
    foo()
}
bar()