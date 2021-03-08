<template>
  <Header></Header>
  <div class="content-wrap">
    <van-tabs  v-model:active="active" animated background="#7B68EE" color="#ffffff" 
      title-active-color="#ffffff" title-inactive-color="rgba(255,255,255,0.5)" @click="changPage">
      <van-tab title="广场">
        <card class="post" v-for="article in articleList" :key="article.id" :article="article"></card>
      </van-tab>
      <van-tab title="我的关注">
        <!-- <card class="post"></card> -->
      </van-tab>
    </van-tabs>
  </div>
  <nav-bar></nav-bar>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '../components/NavBar.vue'
import Card from '../components/Card.vue'
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { getArticleList } from '../service/article.js'
export default {
  name: 'home',
  components: {
    Header,
    NavBar,
    Card
  },
  setup() {
    const router = useRouter

    const state = reactive({
      articleList: []
    })

    let getListPromise = new Promise((resolve, reject) => {
      let list = getArticleList()
      resolve(list)
    })
    getListPromise.then((res) => {
      state.articleList = res.data
    })

    const changPage = (name) => {
      console.log(name);
      // if (name == 0) {

      // } else {

      // }
    }

    return {
      ...toRefs(state),
      changPage
    }
    
  }
}
</script>

<style lang="less">
@import '../common/style/mixin';
.content-wrap {
  background-color: @bc1;
  .wh(100%, auto);
  min-height: 100%;
  .boxSizing();
  padding: 50px 10px;
  .post {
    .borderRadius(10px);
    background: #fff;
  }
  .van-tabs__wrap {
    .wh(400px, 30px);
    margin-left: -10px;
  }
}

</style>