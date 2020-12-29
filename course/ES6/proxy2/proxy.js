let proxy = new Proxy({}, {
  get: function() {

  },
  set: function(obj, prop, value) {
    
    obj[prop] = value
  }
})

proxy.time = 35