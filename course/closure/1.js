function test() {
    var arr = [];
    for(var i = 0; i < 10; i++){
        arr[i] = function(i) {
            return function(){
                console.log(i);
            }
        }(i)
    }
    return arr
}
test()
for(var j = 0; j < 10 ; j++){
    test()[j]()
}