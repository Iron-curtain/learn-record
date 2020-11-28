<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :message="title" :fromHi='fromHi' @sendData='getData'></HelloWorld>
    {{fromChild}}
    <Hi @sendHi="getHi"></Hi> -->
    <A></A>
    <B></B>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Hi from './components/HI'
import A from './components/A'
import B from './components/B'
export default {
  name: 'App',
  data () {
    return {
      title: '我爱我的祖国',
      fromChild: '',
      fromHi: ''
    } 
  },
  methods: {
    getData (e) {
      this.fromChild = e
    },
    getHi (e) {
      this.fromHi = e
    }
  },
  components: {
    // HelloWorld,
    // Hi,
    A,
    B
  }
}
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
