var addBinary = function(a, b) {
    let k = 0
    let length = a.length > b.length ? a.length : b.length
    let sum = []
    let t1 = a.split("").reverse()
    let t2 = b.split("").reverse()
    let i 
    for(i = 0; i < length; i++){
        t1[i] = t1[i] ? parseInt(t1[i]) : 0
        t2[i] = t2[i] ? parseInt(t2[i]) : 0
        sum[i] = ( t1[i] + t2[i] + k) % 2
        k = Math.floor( ( t1[i] + t2[i] + k) / 2 )  
    }
    sum[length] = k
    return sum.reverse().join("")
    
}

console.log(addBinary("1010", "1011"));