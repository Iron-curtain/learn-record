import axios from '../utils/axios'

export function publishArticle(params) {
  return axios.post('/article/publisharticle', params)
}

export function getArticleList() {
  return axios.post('/article/getarticlelist')
}

export function getUserArticleList (params) {
  return axios.post('/article/getuserarticlelist', params)
}

export function getArticleDetail (params) {
  return axios.post('/article/getarticledetail', params)
}