/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    var i = 0, top = -1
    var stack = [] 
    while(s[i]){
        if(s[i] != ']'){
            stack[++top] = s[i]   
        }
        else{
            var temp = []
            var top1 = -1
            var k = 0
            let t = 1
            while(stack[top] != '['){
                temp[++top1] = stack.pop()
                top--
            }
            top-- 
            stack.pop()          
            while(/[0-9]/.test(stack[top])){
                k += stack[top--] * t 
                t *= 10
                stack.pop()
            }
            for(var j = 0; j < k; j++){
                var t1 = top1
                while(t1 != -1){
                    stack[++top] = temp[t1--]  
                }
            }
        }
        i++  
    }
    return stack.join('')
};
console.log(decodeString("2[a]"));
