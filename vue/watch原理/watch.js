// 能独立监听某个数据的变化
// 提供可执行函数的场所

class watcher {
  constructor (opts) {
    for (let key in opts.data) {
      this.$data = this.getBaseType(opts.data) === 'Object' ? opts.data : {}
      this.$watch = this.getBaseType(opts.watch) === 'Object' ? opts.watch : {}
      this.setData(key)
    }
  }


  getBaseType(target) {
    const typeStr = Object.prototype.toString.call(target) // "[Object object]"
    return typeStr.slice(8, -1)
  }

  setData(_key) {
    Object.defineProperty(this, _key, { // Object.definedProperty(this) 把上下文指向当前的对象
      get: function () {
        return this.$data[_key]
      },
      set: function(newVal) {
        const oldVal = this.$data[_key]
        if (newVal === oldVal) return newVal
        this.$data[_key] = newVal
        this.$watch[_key] && this.getBaseType(this.$watch[_key]) === 'function' && (
          this.$watch[_key].call(this, newVal, oldVal)
        )
      }
    })
  }
}

let vm = new watcher({
  data: {
    a: 0,
    b: 'hello'
  },
  watch: {
    a (newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  }
})

vm.a = 1
console.log(vm.a);