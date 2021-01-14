import axios from '../utils/axios'

export function addCart(params) {
  console.log(params);
  return axios.post('/shop-cart', params)
}

export function getCart(params) {
  return axios.get('/shop-cart', { params })
}

export function modifyCart(params) {
  return axios.put('/shop-cart', params)
}

export function deleteCart(id) {
  return axios.delete(`/shop-cart/${id}`)
}