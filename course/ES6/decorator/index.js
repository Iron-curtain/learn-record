@annotation
class MyClass {

}

function annotation(target) {
  target.annotated = true
}


function readonly(target, name, descriptor) {
  descriptor.writable = false
  return descriptor
}

function enumberable(target, name, descriptor) {
  descriptor.enumberable = false
  return descriptor
}