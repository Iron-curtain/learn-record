import axios, { AxiosRequestConfig } from 'axios'
import store from '../store'

axios.interceptors.request.use(config => {
  // 开启页面loading
  store.commit('setLoading', true)
  return config
})

axios.interceptors.response.use(config => {
  // 关闭页面loading
  store.commit('setLoading', false)
  return config
}, err => {
  const { error } = err.response.data
  // 提示错误
  // 关闭页面loading
  store.commit('setLoading', false)
  console.log(error)
})

export { axios, AxiosRequestConfig }
