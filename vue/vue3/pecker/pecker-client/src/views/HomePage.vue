<template>
  <div class="bg-wrap" :style="`background-image: url(${userInfo.bg_url})`">
    <div class="homepage-wrap">
      <simple-header></simple-header>
      <div class="header"></div>
      <div class="homepage-info-wrap">
        <div class="avatar-wrap">
          <div class="avatar" :style="`background-image: url(${userInfo.avatar})`"></div>
          <div class="btn" @click="changeInfo" v-if="isMyself">编辑资料</div>
          <div class="btn" v-else>关注</div>
        </div>
        <div class="nickname">{{userInfo.nickname}}</div>
        <div class="user-data">
          <span><span class="num">629 </span>获赞</span>
          <span><span class="num">3 </span>关注</span>
          <span><span class="num">456 </span>粉丝</span>
        </div>
        <div class="other-info">
          <div class="label iconfont " :class="userInfo.sex == '女' ? 'icon-female' : 'icon-man'"></div>
          <div class="label">{{userInfo.city}}</div>
          <div class="label">魔羯座</div>
        </div>
      </div>
    </div>
  </div>
  <div class="content-warp">
    <card v-for="article in articleList" :key="article.id" :article="article"></card>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import SimpleHeader from '../components/SimpleHeader.vue'
import { useRoute, useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { getOtherUserInfo } from '../service/userInfo'
import { getUserArticleList } from '../service/article'
export default {
  components: { SimpleHeader, Card },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const state = reactive({
      userInfo: {},
      articleList: [],
      isMyself: false
    })

    const userId = route.params.id
    let userInfo = JSON.parse(localStorage.getItem('userInfo'))
    if (userId == userInfo.user_id) {
      state.userInfo = userInfo
      state.isMyself = true
      let articlePromise = new Promise((resolve, reject) => {
        let articleList = getUserArticleList({userId: userInfo.user_id})
        resolve(articleList)
      })
      articlePromise.then((res) => {
        let articleList = res.data
        console.log(res.data);
        state.articleList = articleList
      })
    } else {
      let p = new Promise((resolve, reject) => {
        let userInfo = getOtherUserInfo({ userId: userId })
        resolve(userInfo)
      })
      p.then((res) => {
        let userInfo = res.data
        state.userInfo = userInfo
        return new Promise((resolve, reject) => {
          let articleList = getUserArticleList({userId: userInfo.user_id})
          resolve(articleList)
        })
      }).then ((res) => {
        state.articleList = res.data
      })
    }

    const changeInfo = () => {
      router.push('/changeinfo')
    }

    return {
      ...toRefs(state),
      changeInfo
    }
  }
}
</script>

<style lang="less" scoped>
@import '../common/style/mixin';
.bg-wrap {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  .homepage-wrap {
    height: 290px;
    background: rgba(0, 0, 0, 0.2);
    color: white;
    .simple-header {
      background: rgba(0, 0, 0, 0);
      color: white;
      border: 0;
      margin: 0;
    }
    .homepage-info-wrap {
      padding: 44px 15px 10px 15px;
      padding-top: 50px;
      .avatar-wrap {
        .fj();
        align-items: center;
        .avatar {
          overflow: hidden;
          .wh(70px, 70px);
          .borderRadius(50%);
          background-size: cover;
          background-repeat: no-repeat;
        }
        .btn {
          width: 100px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.4);
          .borderRadius(20px);
          text-align: center;
          font-size: 14px;
          line-height: 40px;
        }
      }
    }
    .nickname {
      margin-top: 20px;
      .sc(18px, #ffffff);
      font-weight: bold;
      letter-spacing: 0.1em;
      line-height: 30px;
    }
    .user-data {
      margin: 15px 0;
      width: 200px;
      .fj();
      .sc(14px, #ffffff);
      font-weight: 500;
      .num {
        font-size: 18px;
      }
    }
    .other-info {
      margin: 15px 0;
      .label {
        display: inline-block;
        padding: 0 5px;
        margin-right: 14px;
        .borderRadius(10px);
        .sc(12px, #ffffff);
        background-color: rgba(255, 255, 255, 0.4);
        line-height: 20px;
      }
      .iconfont {
        text-align: center;
        width: 20px;
        .sc(14px, #ffffff);
      }
      .icon-man {
        background-color: rgba(65, 105, 255, 0.4);
      }
      .icon-female {
        background-color: rgba(255, 20, 147, 0.4);
      }
    }
  }
}
.content-warp {
  min-height: 365px;
  margin-top: -20px;
  padding: 10px 10px;
  width: 100%;
  top: 280px;
  bottom: 0;
  background-color: @bc1;
  .wh(100%, auto);
  .boxSizing();
  .borderRadius(15px);
  .card {
    .borderRadius(10px);
  }
}

</style>