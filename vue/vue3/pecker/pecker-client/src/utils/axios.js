import axios from 'axios'
import { Toast } from 'vant'
import router from '../router'

axios.defaults.baseURL = 'http://localhost:3000/'
axios.defaults.headers['token'] = localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'


axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    Toast.fail('服务端异常')
    return Promise.reject(res)
  }
  if (res.data.code !== 200) {
    if (res.data.message) Toast.fail(res.data.message)
    if (res.data.code == 10001) {
      router.push({ path: '/login' })
    }
    return Promise.reject(res.data)
  }
  return res.data
})

export default axios