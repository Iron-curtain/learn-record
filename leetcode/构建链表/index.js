function Node(val){
    this.val = val
    this.next = null
}

function LinkedList(arr) {
    let head
    let current = head
    arr.forEach(item => {
        let node = new Node(item)
        if(!head){
            head = node
            current = head
        }
        else{
            current.next = node
            current = current.next
        }
    });
    return head
}


var l1 = LinkedList([1,2,4])
var l2 = LinkedList([1,3,4])

var mergeTwoLists = function(l1, l2) {
    var current1 = l1, current2 = l2
    var head = null
    var current = head
    // console.log(current1);
    while(current1 || current2){
        if(current1 && current2){
            if (current1.val <= current2.val) {
                if(!head){
                    head = current1
                    current = head
                    current1 = current.next
                }
                else{
                    current.next = current1
                    // console.log('cuowu1');
                    current= current.next
                    current1 = current.next
                }
            }
            else{  
                if(head == null){
                    head = current2
                    current = head
                    current2 = current2.next     
                }
                else{
                    current.next = current2
                    current= current.next
                    current2 = current2.next   
                }
            }
        }
        else if(current2){
            if(head == null){
                head = current2
                current = head
                current2 = current2.next     
            }
            else{
                current.next = current2
                current2 = current2.next
                current = current.next
            }
        }
        else{
            if(!head){
                head = current1
                current = head
                current1 = current.next
            }else{
                current.next = current1
                current1 = current1.next
                current = current.next
            }   
        }     
    }
    return head
};

console.log(mergeTwoLists(l1, l2)); 