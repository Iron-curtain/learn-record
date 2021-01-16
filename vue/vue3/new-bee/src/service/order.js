import axios from '@/utils/axios.js'

export function createOrder(params) {
  return axios.post('/saveOrder', params)
}

export function payOrder(params) {
  return axios.get('/paySuccess', { params })
}