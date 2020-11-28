<template>
  <div class="hi">
    <button @click="sendHI">发送</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hi: 'Hi! welcome',
      hiMsg: '我是hi组件里面的数据'
    }
  },
  methods: {
    sendHI () {
      this.$emit('sendHi', this.hiMsg)
    }
  }
}
</script>

<style>

</style>