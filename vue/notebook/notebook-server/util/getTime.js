let getDate = function () {
  const date = new Date()
  let time = date.toLocaleDateString()
  let time1 = time.replace('/', '年')
  let time2 =  time1.replace('/', '月')
  console.log(time2);
  return time2
}

module.exports = {
  getDate
}