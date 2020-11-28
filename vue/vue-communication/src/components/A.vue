<template>
    <div>
      AAAAAAAAAAAAAAAA
      <button @click="sendA">aaa</button>
    </div>
</template>

<script>
import Bus from '@/bus/index.js'
export default {
  data () {
    return {
      item: '我是组件A里面的数据'
    }
  },
  methods: {
    sendA () {
      Bus.$emit('sendA', this.item)
    }
  }
}
</script>

<style>

</style>