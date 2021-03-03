function updateLocalUserInfo (key, value) {
  let userInfo = JSON.parse(localStorage.getItem('userInfo')) 
  userInfo[key] = value
  localStorage.setItem('userInfo', JSON.stringify(userInfo))
}

export default updateLocalUserInfo