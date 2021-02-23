<template>
  <Header></Header>
  <div class="content-wrap">
    <card class="post"></card>
  </div>
  <nav-bar></nav-bar>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '../components/NavBar.vue'
import Card from '../components/Card.vue'
export default {
  name: 'home',
  components: {
    Header,
    NavBar,
    Card
  },
  setup() {

  }
}
</script>

<style lang="less" scoped>
@import '../common/style/mixin';
.content-wrap {
  background-color: @bc1;
  .wh(100%, 500px);
  .boxSizing();
  margin: 50px 0;
  padding: 7px 10px;
  .post {
    .borderRadius(10px);
    background: #fff;
  }
}

</style>