// 求取数组中最大连续子序列的和
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// 暴力破解
var maxSubArray = function (nums) {
  const len = nums.length
  let max = -Infinity
  
  for (let i = 0; i < len; i++) {
    let sum = 0
    for (let j = i; j < len; j++) {
      sum += nums[j]
      if (sum > max) {
        max = sum
      }
    }
  }
  return max
}

console.log(maxSubArray(nums));



var helper = function(list, m, n) {
  if (m == n) return list[m]
  let sum = 0;
  let lmax = -Infinity;
  let rmax = -Infinity;
  const mid = ((n - m) >> 1) + m;
  const l = helper(list, m, mid)
  const r = helper(list, mid + 1, n)

  // 如果最大值出现在左数组
  for (let i = mid; i >= m; i--) {
    sum += list[i] 
    if (sum > lmax) {
      lmax = sum
    }
  }

  sum = 0;

  // 如果最大值出现在右数组
  for (let i = mid + 1; i <= n; i++) {
    sum += list[i] 
    if (sum > rmax) {
      rmax = sum
    }
  }

  return Math.max(l, r, lmax + rmax)
}

var maxSubArray2 = function(nums) {
  return helper(nums, 0, nums.length - 1)
};