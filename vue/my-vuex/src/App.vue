<template>
  <div id="app">
    <div>{{this.$store.state.num}}</div>
    <div>{{this.$store.getters.getNum}}</div>
    <button></button>
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      this.$store.commit('add', 1)
    }
  }
}
</script>

<style>

</style>