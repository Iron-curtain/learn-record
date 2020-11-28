<template>
  <div>
    BBBBBBBBBB  {{msg}}
  </div>
</template>

<script>
import Bus from '@/bus/index.js'
export default {
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    Bus.$on('sendA', (e) => {
      this.msg = e
    })
  }
}
</script>

<style>

</style>