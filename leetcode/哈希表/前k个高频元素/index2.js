let arr = [ [ 1, 2 ], [ 2, 1 ] ]
let arr2 = arr.reduce((pre, cur) => {
    console.log(pre instanceof Array);
    pre.push(cur[1])
    return pre
}, [])
console.log(arr2);

// let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
 
// let nameNum = names.reduce(function(pre,cur){
//   if(cur in pre){
//     pre[cur]++
//   }else{
//     pre[cur] = 1
//   }
//   return pre
// },[])
// console.log(nameNum); //{Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}