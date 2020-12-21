// indexOf
// console.log([1, 2, 3, 4].IndexOf(3));
// console.log([1, 2, 3, 4].lastIndexOf(2));


function findLastIndex(array, predicate, context) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (predicate.call(context, array[i], i, array)) return true
  }
  return -1
}

console.log(findeLastIndex([1, 2, 3, 4], function(item, index, array) {
  if (item === 1) return true
}));