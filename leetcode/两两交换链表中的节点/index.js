/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
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
            // first.next ? second = first.next : ((last.next = first) && (first.next = null))
            // second = null
            if(first.next) second = first.next
            else {
                last.next = first
                first.next = null
                second = null
            }
        } 
        else{
            // (last.next = null) && (second = null)
            last.next = null
            second = null
        }
    }
    return head
};