<template>
  <div class="home">
    <p>num: {{num}}</p>
    <p>
      <button @click="add">add</button>
    </p>
  </div>
</template>

<script>
import { addLog, app } from './home.js'
// import addLog from './home.js'
export default {
  data () {
    return {
      num: 1
    }
  },
  mixins: [addLog], // 混入
  extends: app,
  methods: {
    add () {
      this.num++
      console.log(this.num ** 2)
    }
  }
}
</script>
<style>

</style>
