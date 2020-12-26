function Archiver() {
  let value = null, arr = []
  Object.defineProperty(this, 'num', {
    get: function() {
      console.log('执行get 操作');
      return value
    },
    set: function(newValue) {
      console.log('set')
      value = newValue
      arr.push({val: newValue})
    }
  })
  this.getArchive = function() {
    return arr
  }
}

let arc = new Archiver()
arc.num // get
arc.num = 11 
arc.num = 22
arc.getArchive() // [{val:11}, {val:22}]