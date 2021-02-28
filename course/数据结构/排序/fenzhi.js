let arr = [2, 5, 1, 7, 4, 3]

function mergeSort(arr) {
  const len = arr.length
  // 边界情况
  if (len <= 1) {
    return arr
  }

  // 分割点
  const mid = Math.floor(len / 2)
  console.log(arr.slice(0, mid + 1 ), arr.slice(mid , len + 1));
  // 递归分割左子数组
  const leftArr = mergeSort(arr.slice(0, mid ))
  // 递归分割右子数组
  const rightArr = mergeSort(arr.slice(mid , len))
  // console.log(leftArr, rightArr);
  // 合并左右两个有序数组
  arr = mergeArr(leftArr, rightArr)
  return arr
}

function mergeArr(arr1, arr2) {
  // console.log(arr1, arr2);
  let i = 0, j = 0
  const res = []
  const len1 = arr1.length
  const len2 = arr2.length

  while (i < len1 || j < len2) {
    if (arr1[i] === undefined) {
      res.push(arr2[j])
      j++
    } else if  (arr2[j] === undefined) {
      res.push(arr1[i])
      i++
    } else {
      if (arr1[i] <= arr2[j]) {
        res.push(arr1[i])
        i++
      } else {
        res.push(arr2[j])
        j++
      }
    }
  }
  // console.log(res);
  return res
}

console.log(mergeSort(arr));