function partition(arr, left, right){
    privt = arr[left]
    var i = left, j = right
    while(i < j){
        while(arr[j] <= privt && i < j){
            j--
        }
        arr[i] = arr[j]
        while(arr[i] >= privt && i < j){
            i++
        }
        arr[j] = arr[i]
        arr[i] = privt
    }
}


var findKthLargest = function(nums, k) {
    let left = 0, right = nums.length - 1
    let target = nums.length - k
    let i = partition(nums, left, right)
    while(i !== target){
        
    }
}