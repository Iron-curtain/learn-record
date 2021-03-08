import axios from '../utils/axios'

export function publishArticle(params) {
  return axios.post('/article/publisharticle', params)
}

export function getArticleList() {
  return axios.post('/article/getarticlelist')
}