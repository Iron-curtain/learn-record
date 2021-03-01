<template>
  <div>
    <global-header :user="currentUser"></global-header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GlobalHeader from './components/GlobalHeader.vue'

export default defineComponent({
  name: 'App',
  setup () {
    const currentUser = {
      isLogin: true,
      nickName: '露西',
      // _id: number,
      // column: number,
      // email: number
    }
    return {
      currentUser
    }
  },
  components: {
    GlobalHeader
  }
})
</script>

<style>

</style>
