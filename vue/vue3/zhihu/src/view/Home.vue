<template>
  <div class="home-page">
    <section class="container">
      <div class="img">
        <img src="../assets/callout.svg" alt="">
        <h2 class="font-weight-light">随心写作，自由表达</h2>
        <p>
          <a-button type="primary" @click="toCreate">开始写文章</a-button>
        </p>
      </div>
    </section>
    <h4>发现精彩</h4>
    <ColunmList :list="list"></ColunmList>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import ColunmList from '../components/ColumnList.vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'Home',
  setup () {
    const router = useRouter()
    const store = useStore()
    onMounted(() => {
      store.dispatch('fetchColumns', { pageSize: 3 })
    })

    const list = computed(() => store.getters.getColumns)
    console.log(list)
    const toCreate = () => {
      router.push('/create')
    }
    return {
      toCreate,
      list
    }
  },
  components: {
    ColunmList
  }
})
</script>

<style scoped>
.home-page{
  padding: 0 50px;
  text-align: center;
}
.container{
  width: 350px;
  margin: 0 auto;
}
.container img{
  width: 100%;
}
</style>
