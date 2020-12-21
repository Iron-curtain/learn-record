function sortedIndex(array, obj) {
  let start = 0, end = array.length;
  while (start < end) {
    let mid = Math.floor((start + end) / 2)
    console.log(start, mid, end);
    if (obj <= array[mid]) {
      end = mid
    } else {
      start = mid + 1
    }
  }
  return start
}


 // 2
console.log(sortedIndex([1, 2, 3, 3, 3, 4, 5], 3));