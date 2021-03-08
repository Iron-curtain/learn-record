import axios from '../utils/axios'

export function changeAvatar(params) {
  return axios.post('/userInfo/changeAvatar', params)
}

export function changeBackground(params) {
  return axios.post('/userInfo/changeBackground', params)
}

export function changeInfo(key, value) {
  return axios.post('/userInfo/updateInfo', {[key] : value })
}

export function getUserInfo() {
  return axios.post('/userInfo/getUserInfo')
}

export function getOtherUserInfo(params) {
  return axios.post('/users/getUserInfo', params)
}