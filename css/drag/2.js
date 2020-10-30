
// 回文
// 上海自来水来自海上
// true
// false
var isValid1 = function(str) {
    var array = str.split('').reverse().join('')
    return str == array
}
console.log(isValid1('123213'));


var isValid2 = function(str) {
    var i = 0
    var j = str.length - 1
    while (i < j) {
        // 是不是数字？ 字母？
        // 忽视
        if((!/[0-9a-zA-Z]/.test(str[i]))) {
            i++
            continue   // 跳过下面
        }
        if((!/[0-9a-zA-Z]/.test(str[j]))) {
            j--
            continue   // 跳过下面
        }
        if(str[i].toLowerCase() != str[j].toLowerCase())
            return false
        i++
        j--
    }
    return true
}
console.log(isValid2('A man, a plan, a canal: Panama'));