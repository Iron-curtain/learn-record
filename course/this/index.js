function identify(context) {
    return this.name.toUpperCase()
}

function speak(context) {
    var greeting = "Hello I am " + identify.call(this)
    console.log(greeting);
}

var me = {
    name: 'wn'
}

var you = {
    name: 'yangbao'
}

speak.call(you)


// 严格模式下，foo的调用，与位置无关

function foo(){
    console.log(this.a);
}

var obj1 = {
    a : 2,
    obj2: obj2
}

