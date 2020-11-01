function digital_root(n) {
    while(n >= 10){
        let sum = 0
        while(n > 0){
          sum += n % 10
          n = Math.floor(n / 10)
        }
        n = sum

    }
    return n
}
console.log(digital_root(10));




function digital_root2(n) {
    return (n - 1) % 9 + 1;
}
console.log(digital_root(10));