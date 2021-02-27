const queue = []
queue.push('a')
queue.push('b')
queue.push('c')
queue.push('d')

while (queue.length) {
  const top = queue[0]
  queue.shift()
}


// 链表
// 链表中的数据单位名称叫 结点 结点在内存中可以是离散的

// {
//   val: 1
//   next: {
//     val: 2,
//     next:...
//   }
// }

function ListNode(val) {
  this.val = val
  this.next = null
}

const node = new ListNode(1)
node.next = new ListNode(2)



const arr = ['haha', 1, {a: 1}] // 非连续的内存
