<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{state.count}} * 2 = {{double}}</h1>
  <h2>{{num}}</h2>
  <button @click="add">累加</button>
  <ul>
    <Fragment :data="[5, 3, 4, 1, 8, 9, 2]"></Fragment>
  </ul> -->
  <!-- <Teleportdemo /> -->
  <!-- <Suspense>
    <template #default>
      <AsyncComponent :timeout="3000"/>
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense> -->
  <TodoList />
</template>

<script>
// composition api
import { reactive, computed, ref, onMounted } from 'vue'
// import Fragment from './components/Fragment.vue'
// import Teleportdemo from './components/Teleport.vue'
// import AsyncComponent from './components/AsyncComponent.vue'
// import Loading from './components/Loading.vue'
import TodoList from './components/TodoList'
export default {
  components: {
    // AsyncComponent, Loading 
    TodoList
  },
  setup() { // 入口
    const state = reactive({
      count: 1
    })

    let num = ref(2)

    function add() {
      state.count++
      num.value += 10
    }
    
    const double = computed(() => 2 * state.count)

    onMounted(() => {
      console.log('onMounted');
    })

    return {state, add, double, num}
  }
}

// function useCounter (count, n) {
//   const state = reactive({
//     count
//   })
//   const double = computed(() => state.count * 2)
//   return {state, double}
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
