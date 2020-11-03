function a() {
    function b(){
        var bbb = 234
        console.log(aaa);
    }
    b()
    aaa = 123
    return b
}
var fn = a()
fn()