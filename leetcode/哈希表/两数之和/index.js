var twoSum = function(nums, target) {
    var hash = []
    for(let i = 0; i < nums.length; i++){
        if(hash[nums[i]] + 1){
            return [hash[nums[i]], i]
        }
        else{
            hash[target - nums[i]] = i
        }
        console.log(hash);
    }
};
var res = twoSum([2, 7, 11, 15], 9)
console.log(res);