import { createStore, Commit } from 'vuex'
import { GlobalDataProps, GlobalErrorProps } from './types'
import { axios, AxiosRequestConfig } from '../http'

const asyncAndCommit = async (url: string, mutationName: string,
  commit: Commit, config: AxiosRequestConfig = { method: 'get' }, extraData?: any ) => {
  const { data } = await axios(url, config)
  if (extraData) {
    commit(mutationName, { data, extraData })
  } else {
    commit(mutationName, data)
  }
  return data
}

const store = createStore<GlobalDataProps>({
  state: {
    error: { status: true },
    token: 'dsdsd',
    isLoading: false,
    columns: [],
    posts: [],
    user: { isLogin: false }
  },
  mutations: {},
  actions: {
    register ({ commit }, payload) {
      return asyncAndCommit('/api/users', 'register', commit, { method: 'post', data: payload })
    }
  },
  getters: {}
})

export default store
