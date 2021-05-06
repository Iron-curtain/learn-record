console.log('init');
let p1 = new Promise((resovle, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log(3);
    resovle()
  }, 500)
})
let p2 = new Promise((resovle, reject) => {
  console.log(2);
  setTimeout(() => {
    console.log(5);
    resovle()
  }, 500)
})
p1.then(() => {
  console.log(4);
})
p2.then(() => {
  console.log(6);
})
console.log('start');