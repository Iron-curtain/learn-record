var maxDepth = function(root) {
  let deep = 0
  queue = root ? [root] : []
  while(queue.length !== 0) {
      let temp = queue
      queue = []
      for(item of temp) {
          item && queue.push(item.left)
          item && queue.push(item.right)
      }
      deep++
      console.log(queue);
  }
  return deep > 0 ? deep - 1 : deep
};

let root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 3 },
    right: { val: 4 }
  },
  right: {
    val: 3,
    left: { val: 5 },
    right: { val: 6 }
  }
}

maxDepth(root)