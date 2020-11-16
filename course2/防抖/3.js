var hasCycle = function(head) {
    let current = head
    let map = new Map()
    while(current){
        if (map.has(current)) {
            return true
        }
        map.set(current, true)
        current = current.next
    }
    return false
};