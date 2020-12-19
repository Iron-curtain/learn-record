// let array = [1, 3, 4, 0, 5]
// console.log(Math.max(...array));
// console.log(Math.min(...array));


let array = [1, 3, 4, 0, 5, 1]
function maxium(arr) {
  let max = -Infinity
  for (num of arr) {
    if(num > max) max = num
  }
  return max
}
console.log(maxium(array));


function minium(arr) {
  let min = Infinity
  for (num of arr) {
    if(num < min) min = num
  }
  return min
}
console.log(minium(array));



function max(pre, next) {
  return Math.max(pre, next)
}
array.reduce(max)


array.sort(function(a, b) {
  return b - a
})


// eval
let max = eval("Math.max(" + array + ")")

// apply
Math.max.apply(null, array)