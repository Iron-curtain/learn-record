import { axios, AxiosRequestConfig } from '../http'
import { createStore, Commit } from 'vuex'
import { GlobalDataProps } from './types'
import { StorageHandler, storageType } from '../utils/storage'
import { objToArr, arrToObj } from '../utils/helper'
const storageHandler = new StorageHandler()

const asyncAndCommit = async (url: string, mutationName: string, commit: Commit, config: AxiosRequestConfig = { method: 'get' }, extraData?: any) => {
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
    token: '',
    isLoading: false,
    columns: { data: {}, currentPage: 0, total: 0 },
    posts: [],
    user: { isLogin: false }
  },
  mutations: {
    login (state, rawData) {
      const { token } = rawData.data
      state.token = token
      storageHandler.setItem(storageType, 'token', token)
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    setLoading (state, status) {
      state.isLoading = status
    },
    fetchCurrentUser (state, rawData) {
      state.user = { isLogin: true, ...rawData.data }
    },
    fetchColumns (state, rawData) {
      const { data } = state.columns
      const { list, count, currentPage } = rawData.data
      state.columns = {
        data: { ...data, ...arrToObj(list) },
        total: count,
        currentPage: currentPage * 1
      }
    }
  },
  actions: {
    register ({ commit }, payload) {
      return asyncAndCommit('/api/users', 'regesiter', commit, { method: 'post', data: payload })
    },
    // 登录并且获取用户信息
    loginAndFetch ({ dispatch }, loginData) {
      return dispatch('login', loginData).then(() => {
        return dispatch('fetchCurrentUser')
      })
    },
    login ({ commit }, payload) {
      return asyncAndCommit('/api/user/login', 'login', commit, { method: 'post', data: payload })
    },
    fetchCurrentUser ({ commit }) {
      return asyncAndCommit('/api/user/current', 'fetchCurrentUser', commit)
    },
    // 请求专栏列表
    fetchColumns ({ state, commit }, params = {}) {
      const { currentPage = 1, pageSize = 6 } = params
      if (state.columns.currentPage < currentPage) {
        return asyncAndCommit(`/api/columns?currentPage=${currentPage}&pageSize=${pageSize}`, 'fetchColumns', commit)
      }
    }
  },
  getters: {
    getColumns: (state) => {
      return objToArr(state.columns.data)
    }
  }
})

export default store
