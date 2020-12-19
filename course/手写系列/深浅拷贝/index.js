let arr = [{old: 'old'}, 1, true, null, undefined]
let new_arr = JSON.parse(JSON.stringify(arr))
arr[0].old = 'new'
console.log(new_arr);

arr = [function() { console.log('a');}, function() {console.log('b');}]