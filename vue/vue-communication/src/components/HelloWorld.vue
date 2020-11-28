<template>
  <div class="hello">
    {{message}}
    {{fromHi}}
    

    <button @click="send">发送</button>
    <hr/>
  </div>
</template>

<script>
export default {
  props: ['message', 'fromHi'],
  data () {
    return {
      msg: 'hello vue'
    }
  },
  methods: {
    send () {
      this.$emit('sendData', this.msg)
    }
  }
}
</script>

<style>
.hello {
  color: brown;
  font-size: 20px;
  /* width: 100px; */
  /* height: 50px; */
  /* border: 2px dotted darkturquoise; */
  margin: 0 auto;
}
</style>