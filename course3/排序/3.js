arr2.sort((a, b) => {
    return a.age - b.age
})





var findKthLargest = function(nums, k) {
    var i = 0, j = 0
    for(i = 0; i < k; i++){
        for(j = i + 1; j < nums.length; j++){
            if(nums[j] > nums[i]){
                nums[i] = nums[i] + nums[j]
                nums[j] = nums[i] - nums[j]
                nums[i] = nums[i] - nums[j]
            }
        }
    }
    return k-1
};