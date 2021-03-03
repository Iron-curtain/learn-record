<template>
  <div>
    <GlobalHeader :user="currentUser"></GlobalHeader>
    <Loading v-if="isLoading"></Loading>
    <div class="column">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import GlobalHeader from './components/GlobalHeader.vue'
import Loading from './components/Loading.vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from './store/types'
import { StorageHandler, storageType } from './utils/storage'
import { axios, AxiosRequestConfig } from './http'
const storageHandler = new StorageHandler()
export default defineComponent({
  name: 'App',
  setup () {
    const store = useStore<GlobalDataProps>()
    const currentUser = computed(() => store.state.user)
    const isLoading = computed(() => store.state.isLoading)

    onMounted(() => {
      const token = storageHandler.getItem(storageType, 'token')
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
      store.dispatch('fetchCurrentUser').then((res) => {
        console.log(res)
      })
    })
    return {
      currentUser,
      isLoading
    }
  },
  components: {
    GlobalHeader,
    Loading
  }
})
</script>

<style>
.column{
  padding-top: 70px;
  width: 100%;
  margin: 0 auto;
}
</style>
