// var a = 1
// function fn(a){
//     var a = 2
//     function a() {}
//     var b = a
//     console.log(a);
// }
// fn(3)

// AO : {
//     a: undefined 1 function(){} 123
//     b: undefined  function(){}
//     d: undefined function(){} 123
// }

// var global = 100
// function fn(){
//     console.log(global);
// }
// fn()

// 编译后：
// GO: {
//     global: undefined 100;
//     fn: function() {...}
// }


global = 100
function fn(){
    console.log(global);
    global = 200
    console.log(global)
    var global = 300;
}
fn()
var global;