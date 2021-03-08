const getDateValue = (date) => {
  if (!(date instanceof Date)) return
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minutes = date.getMinutes()
  return {
    year,
    month,
    day,
    hour,
    minutes
  }
}

const formatDate = (date) => {
  let now = new Date()
  date = getDateValue(date)
  now = getDateValue(now)
  let res = ''
  if ((date.year === now.year) && (date.month === now.month) && (date.day === now.day)) {
    if (date.hour === now.hour) {
      let difference = ( now.minutes - date.minutes ) || 1
      res = difference + '分钟前'
    } else {
      res = now.hour - date.hour + '小时前'
    }
  } else {
    res = `${date.year}年${date.month}月${date.day}日`
  }
  return res
}

module.exports = formatDate