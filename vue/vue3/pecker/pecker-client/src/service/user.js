import axios from '../utils/axios'

export function register(params) {
  return axios.post('/users/register', params)
}

export function login(params) {
  return axios.post('/users/login', params)
}
