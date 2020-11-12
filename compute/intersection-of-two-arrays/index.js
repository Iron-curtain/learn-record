var intersection = function(nums1, nums2) {
    let map = new Map()
    let set = new Set()
    nums1.forEach(item => {
        map.set(item, true)
    });
    for(let num of nums2){
        if(map.has(num)){
            set.add(num)
        }
    }
    return Array.from(set.values())
};