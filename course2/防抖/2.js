function linkList() {
    this.data = null
    this.next = null
}
linkList.prototype.add = function(node){
    var current = head
    while(current.next){
        current = current.next
        if(!current.next)
            current.next = node
    }
}
