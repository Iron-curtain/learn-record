let arr = [1, [2, [3, 4]]]


// function flatten(arr) {
//   let res = []
//   function fla(arr) {
//     for (item of arr) {
//       if (typeof item === 'object') {
//         fla(item)
//       } else {
//         res.push(item)
//       }
//     }
//   }
//   fla(arr)
//   return res
// }

// console.log(flatten(arr));




// let arr = [1, [2, [3, 4]]]
// function flatten(arr) {
//   let result = []
//   for (let i = 0, len = arr.length; i < len; i++) {
//     if (arr.isArray(arr[i])) {
//       result = result.concat(flatten(arr[i]))
//     } else {
//       result.push(arr[i])
//     }
//   }
//   return result
// }

// reduce
// function flatten(arr) {
//   return arr.reduce(function(pre, next) {
//     return pre.concat(Array.isArray(next) ? flatten(next) : next) 
//   } , [])
// }


function flatten(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

console.log(flatten(arr));