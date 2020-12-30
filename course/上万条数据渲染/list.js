document.getElementById('button').addEventListener('click', function() {
  let now = Date.now()
  const total = 100000;
  let ul = document.getElementById('container')
  for (let i = 0; i < total; i++) {
    let li = document.createElement('li')
    li.innerText = ~~(Math.random() * total)
    ul.appendChild(li)
  }
  console.log('js 运行时间', Date.now() - now);
  setTimeout(() => {
    console.log('js 总运行时间', Date.now() - now);
  },0)
})