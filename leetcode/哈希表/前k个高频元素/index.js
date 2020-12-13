var topKFrequent = function(nums, k) {
    let map = new Map()
    nums.forEach(item => {
        if(map.get(item) !== undefined){
            map.set(item, map.get(item) + 1)
        }
        else{
            map.set(item, 1)
        }
    })
    let arr = Array.from(map).sort(function(a, b){
        return b[1] - a[1]
    })
    return arr.slice(0, k).reduce((count, cur) => {
        count.push(cur[0])
        return count
    }, [])
};


console.log(topKFrequent([3,0,1,0], 1));