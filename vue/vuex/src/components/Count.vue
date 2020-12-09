<template>
  <div class="count">
    <h3>{{$store.state.count}}</h3>
    <h2>{{newCount}}</h2>
    <h1>{{msg}}</h1>
    <p>
      <button @click="addAction">add</button>
      <button @click="$store.commit('reduce')">reduce</button>
    </p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  // computed: {
  //   newCount () {
  //     return this.$store.state.count * 2
  //   }
  // }
  data () {
    return {
      msg: ''
    }
  },
  // computed: mapState({
  //   newCount: state => state.count 
  // }),
  computed: {
    ...mapState(['state']),
    ...mapGetters(['newCount'])
  },
  // methods: mapMutations(['add', 'reduce']),
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction'])
  },
  mounted() {
    this.msg = mapState(['count'])
  }
}
</script>

<style>

</style>