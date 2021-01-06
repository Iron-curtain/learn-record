function twoSum(arr, target) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return [i,j]
    }
  }
}

function twoSum(arr, target) {
  let map = {}
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      return [map[arr[i]], i]
    } else {
      map[target - arr[i]] = i
    }
  }
}


// 双指针
// 给定两个有序的整性数组Nums1 和 nums2, 请将nums2合并到nums1中
// 使得nums1成为一个有序的数组

// 1. 定义两个指针，分别指向两个数组生效的部分的尾部
// 2. 每次只对指针所指的元素进行比较，取其中较大的元素，把它从num1的末尾往前填补

function merge(nums1, )