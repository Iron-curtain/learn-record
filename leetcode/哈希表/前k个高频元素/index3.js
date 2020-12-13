let arr = [ [ 3, 1 ], [ 0, 2 ], [ 1, 1 ] ]
let res = arr.sort(function(a, b) {
    return b[1] - a[1]
})
console.log(res);

// var arr = [ [ 3, 1 ], [ 0, 2 ], [ 1, 1 ] ]

// var res = arr.sort(function(x, y){
//   return x[1] - y[1]
// });

// console.log(res);