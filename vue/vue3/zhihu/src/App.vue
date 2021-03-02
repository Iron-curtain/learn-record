<template>
  <div>
    <global-header :user="currentUser"></global-header>
    <!-- loading -->
    <loading v-if="isLoding"></loading>
    <div class="column">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GlobalHeader from './components/GlobalHeader.vue'
import Loading from './components/Loading.vue'

export default defineComponent({
  name: 'App',
  setup () {
    const currentUser = {
      isLogin: false,
      nickName: '露西',
      _id: 1,
      column: 123,
      email: 123456
    }

    const isLoding = false

    return {
      currentUser,
      isLoding
    }
  },
  components: {
    GlobalHeader,
    Loading
  }
})
</script>

<style>
.column {
  padding-top: 70px;
  width: 500px;
  margin: 0 auto;
}
</style>
