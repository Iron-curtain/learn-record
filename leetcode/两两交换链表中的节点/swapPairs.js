var swapPairs = function(head) {
    var last, first, second, temp;
    if(!(head && (last = head) && (first = head) && (second = first.next))) return head
    while(second){
        temp = second.next
        last == head ? head = second : last.next = second
        second.next = first
        last = first
        first = temp
        
        if(temp){
            first = temp
            first.next ? second = first.next : ((last.next = first) && (first.next = null) && (second = null))
            
        } 
        else{
            // (last.next = null) && (second = null)
            last.next = null
            second = null
        }
    }
    return head
};
var n3 = {val: 3, next: null}
var n2 = {val: 2, next: n3}
var n1 = {val: 1, next: n2}
head = n1

console.log(swapPairs(head));


