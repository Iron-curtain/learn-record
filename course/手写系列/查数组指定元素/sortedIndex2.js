function cb(func, context) {
  if (context === void 0) return func
  return function() {
    return func.apply(context, arguments)
  }
}



function sortedIndex(array, obj, iteratee, context) {
  iteratee = cb(iteratee, context)
  let start = 0, end = array.length;
  while (start < end) {
    let mid = Math.floor((start + end) / 2)
    if (iteratee(obj) <= iteratee(array[mid])) {
      end = mid
    } else {
      start = mid + 1
    }
  }
  return start
}

let persons = [{"name": "aaa", "age": 1}, {"name": "aaa", "age": 3}, {"name": "aaa", "age": 4}]
let result = sortedIndex(persons, {"name": "aaa", "age": 2}, function (obj) {
  return obj.age
})
console.log(result);

