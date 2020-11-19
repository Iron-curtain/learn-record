function add(num1, num2) {
    let carry = 0, res = ''
    for(let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0; i--, j--){
        let a = num1.charAt(i) || 0
        let b = num2.charAt(j) || 0
        let sum = Number(a) + Number(b) + carry
        carry = Math.floor(sum / 10)
        res = sum % 10 + res
    }
    carry && (res = carry + res)
    return res
}

console.log(add('999', '9'));