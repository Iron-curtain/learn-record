<template>
  <simple-header></simple-header>
  <div class="article-wrap">
    <div class="publish-user">
      <img :src="avatar" alt="" @click.stop="showPageHome">
      <div class="info">
        <div class="nickname">{{nickName}}</div>
        <div class="publish-time">{{article.createTime}}</div>
      </div>
      <div class="menu iconfont icon-xiala1"></div>
    </div>
    <div class="content">
      {{article.content}}
    </div>
  </div>
</template>

<script>
import SimpleHeader from '../components/SimpleHeader.vue'
import { useRoute, useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { getArticleDetail } from '../service/article'
import { getOtherUserInfo } from '../service/userInfo'
export default {
  components: { SimpleHeader },
  setup (props) {
    const router = useRouter()
    const route = useRoute()

    const state = reactive({
      userInfo: {},
      article: {},
      comment: {}
    })

    
    
    let p = new Promise((resolve, reject) => {
      let articleId = route.params.id
      console.log(articleId);
      let res = getArticleDetail({ articleId })
      resolve(res)
    })

    p.then((res) => {
      console.log(res.data);
      let article = res.data
      state.article = article
      let userId = article.user_id
      return Promise.resolve(userId)
    }).then((userId) => {
      console.log(userId);
      let userInfo = getOtherUserInfo({ userId })
      re
    })


    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../common/style/mixin.less';
.article-wrap {
  background-color: @bc1;
  padding-top: 44px;
  min-height: 591px;
  .publish-user {
    .wh(100%, 60px);
    padding: 10px 15px;
    img {
      border-radius: 50%;
      .wh(50px, 50px);

    }
  }
}
</style>