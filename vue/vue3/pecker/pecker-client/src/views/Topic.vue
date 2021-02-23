<template>
  <Header></Header>
  <div class="content-wrap">
    <van-tabs  v-model:active="active" animated background="#7B68EE" color="#ffffff" 
      title-active-color="#ffffff" title-inactive-color="rgba(255,255,255,0.5)">
      <van-tab title="我的话题">
      </van-tab>
      <van-tab title="热门话题">
      </van-tab>
    </van-tabs>
  </div>
  <nav-bar></nav-bar>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '../components/NavBar.vue'
export default {
  name: 'topic',
  components: {
    Header,
    NavBar,
  },
  setup() {

  }
}
</script>

<style lang="less">
@import '../common/style/mixin';
.content-wrap {
  background-color: @bc1;
  .wh(100%, 100%);
  .boxSizing();
  padding: 50px 10px;
  .van-tabs__wrap {
    .wh(400px, 30px);
    margin-left: -10px;
  }
}

</style>