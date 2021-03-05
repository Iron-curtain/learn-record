import axios from '../utils/axios'

export function getTopicList() {
  return axios.get('/topic/gettopiclist')
}