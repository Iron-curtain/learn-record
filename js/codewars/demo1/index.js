function generateCapitalStringWithHashTag(str){
    // 1. 是否为空 .length == 0  null  ""
    // 2. 是否超过140字  .length
    // 3. #  #+
    // 4. 每个单词都大写
    // if(str.length == 0 || str.length > 140){
    //     return false
    // }
    return (str.length != 0 || str.length < 140) ? '#'+
        str
            .split(' ')
            // es6 数组的新方法，遍历数组的每一项
            // 并用一个函数处理，返回新的数组
            .map(function(word) {
                // console.log(word)
                // return word.toUpperCase()
                return word.charAt(0).toUpperCase() + word.slice(1)
            }).join(' ') : false
    
}

function generateCapitalStringWithHashTag(str){
    return str.length > 140 || str === '' ? false : '#'
        + str.split().map(capitalize(word)).join(' ')
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}


 console.log(generateCapitalStringWithHashTag('hello world'));






