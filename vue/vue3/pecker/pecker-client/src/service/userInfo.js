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