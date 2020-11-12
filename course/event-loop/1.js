//  1    7    3     2      5     6     4

console.log(1);
async function bar() {
  await fn()        // 立即执行
  console.log(6);   // 进入微任务队列
}
function fn() {
  console.log(7);
}
function foo() {
  return new Promise((resolve) => {
    console.log(2);
    resolve()
  })
}
bar()
console.log(3);

foo().then(() => {
  console.log(4);       // 进入微任务队列
})
console.log(5);

