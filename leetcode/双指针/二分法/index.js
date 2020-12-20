/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let head = 0
  let end = nums.length - 1
  let mid = Math.floor((nums.length - 1) / 2)
  while (head < end) {
        console.log(head + '----' + end + '----' + mid);
        if (nums[mid] === target) {
          return mid
        }
        else if (nums[mid] < target) {
            head = mid + 1
        }
        else {
            end = mid - 1
        }
        mid = Math.floor((head + end) / 2)
  }
  return nums[mid] >= target ? mid : mid + 1
};


console.log(searchInsert([1, 3], 0));