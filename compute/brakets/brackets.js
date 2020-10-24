var isValid = function(s) {
    var bks = []
    var top = -1
    for(var i = 0; i < s.length; i++){
        (s[i] == '{' || s[i] == '[' || s[i] == '(') && (bks[++top] = s[i]);
        if((s[i] == '}' || s[i] == ']' || s[i] == ')') && top == -1)  return false;
        ((bks[top] == '{' && s[i] == '}') || (bks[top] == '[' && s[i] == ']') || (bks[top] == '(' && s[i] == ')') || top < 0) && top-- ;
        console.log(top);
    }
    return top == -1 
};
console.log(isValid("(])"));