import axios from '@/utils/axios.js'

export function getAddressDetail(id) {
  return axios.get(`/address/${id}`)
}

export function getDefaultAddress() {
  return axios.get('/address/default')
}