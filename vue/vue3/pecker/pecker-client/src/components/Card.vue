<template>
  <div class="card" @click="toArticleDetail">
    <div class="publish-info">
      <img :src="avatar" alt="" @click.stop="showPageHome">
      <div class="info">
        <div class="nickname">{{nickName}}</div>
        <div class="publish-time">{{article.createTime}}</div>
      </div>
      <div class="menu iconfont icon-xiala1"></div>
    </div>
    <div class="content">
      {{article.content}}
      <span class="more">查看更多</span>
    </div>
    <div class="picture">
      <img class="pic-pre" v-for="(img, index) in article.imgUrls" :key="index" v-lazyLoad="img" alt="" :style="imgStyle">
    </div>
    <div class="about">
      <div class="like">
        <span class="iconfont icon-zanpress"></span>
        666
      </div>
      <div class="comment">
        <span class="iconfont icon-pinglun"></span>
        66
      </div>
      <div class="share">
        <span class="iconfont icon-share"></span>
        6
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { getOtherUserInfo } from '../service/userInfo'
import { useRouter } from 'vue-router'
export default {
  props: {
    article: {
      type: Object,
      default: {}
    }
  },
  directives: {
    lazyLoad: {
      mounted (el, binding) {
        let lazyImageObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry, index) => {
            let lazyImage = entry.target;
            // 相交率，默认是相对于浏览器视窗
            if (entry.intersectionRatio > 0) {
              lazyImage.src = binding.value;
              // 当前图片加载完之后需要去掉监听
              lazyImageObserver.unobserve(lazyImage);
            }
          })
        })
        lazyImageObserver.observe(el)
      }
    }
  },
  setup (props) {
    console.log(props.article);
    const router = useRouter()
    const state = reactive({
      avatar: '',
      nickName: '',
      userId: '',
      imgStyle: {
        width: 0,
        height: 0
      }
    })
    let getUserInfoPromise = new Promise((resolve, reject) => {
      let userId = props.article.userId
      let userInfo = getOtherUserInfo({userId: userId})
      resolve(userInfo)
    })
    getUserInfoPromise.then((res) => {
      let userInfo = res.data
      state.avatar = userInfo.avatar
      state.nickName = userInfo.nickname
      state.userId = userInfo.user_id
    });
    
    (function() {
      let imgUrls = props.article
      if (imgUrls.imgUrls == undefined) return
      let imgNum = Array.from(props.article.imgUrls).length
      let width = state.imgStyle.width
      let height = state.imgStyle.height
      if (imgNum == 1) {
        width = '100%'
        height = '200px'
      } else if(imgNum == 2){
        width = '49%'
        height = '150px'
      } else if (imgNum == 3) {
        width = '32%'
        height = '120px'
      } else if (imgNum == 4) {
        width = '49%'
        height = '100px'
      } else if (imgNum == 6) {
        width = '32%'
        height = '100px'
      } else if (imgNum == 9) {
        width = '32%'
        height = '100px'
      }
      state.imgStyle.width = width
      state.imgStyle.height = height
    }())

    const showPageHome = () => {
      router.push(`/homepage/${state.userId}`)
    }

    const toArticleDetail = () => {
      router.push(`/article/${props.article.id}`)
    }

    return {
      ...toRefs(state),
      showPageHome,
      toArticleDetail
    }
  }
}
</script>

<style lang="less" scoped>
@import '../common/style/mixin';
.card {
  background-color: #fff;
  margin-top: 7px;
  padding: 8px 16px;
  .publish-info {
    height: 50px;
    img {
      display: inline-block;
      .wh(45px, 45px);
      .borderRadius(50%);
    }
    .info {
      display: inline-block;
      overflow: hidden;
      margin-left: 10px;
      width: 262px;
      height: 50px;
      .nickname {
        margin-top: 10px;
      }
      .publish-time {
        line-height: 20px;
        .sc(12px, #bdbdbd)
      }
    }
    .menu {
      width: 26px;
      text-align: right;
      display: inline-block;
      vertical-align: top;
      line-height: 50px;
      color: #666666;
    }
  }
  .content {
    font-size: 14px;
    line-height: 1.6em;
    letter-spacing: 0.1em;
    margin-top: 10px;
    .topic-name, .more {
      color: @primary;
    }
  }
  .picture {
    .fj();
    margin: 10px 0;
    width: 100%;
    flex-wrap: wrap;
    .pic-pre {
      object-fit: cover;
    }
  }
  .about {
    width: 380px;
    margin-left: -16px;
    font-size: 16px;
    .fj();
    .like, .comment, .share {
      flex: auto;
      line-height: 40px;
      text-align: center;
      color: #999999;
    }
    .iconfont {
      font-size: 18px;
    }
  }
}
</style>