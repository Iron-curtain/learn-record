<template>
  <div class="header-wrap">
    <router-link class="avatar iconfont icon-admin-user" tag="span" to="./login" v-if="!isLogin"></router-link>
    <router-link class="avatar" tag="span" to="./homepage" v-else>
      <img :src="userInfo.avatar" alt="">
    </router-link>
    <div class="header-search">
      <span class="iconfont icon-fangdajing"></span>
      <span class="search-title">加班碎碎念</span>
    </div>
    <span class="publish iconfont icon-add-fill" @click="toPublish"></span>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'header',
  setup () {
    const router = useRouter()

    const state = reactive({
      isLogin: false,
      userInfo: null
    })
    let userInfo = JSON.parse(localStorage.getItem('userInfo'))
    console.log(userInfo);
    if (!userInfo) {
      state.isLogin = false
    } else {
      state.isLogin = true
      state.userInfo = userInfo
    }

    const toPublish = () => {
      router.push('/publish')
    }

    return {
      ...toRefs(state),
      toPublish
    }
  }
}
</script>

<style lang="less" scoped>
@import '../common/style/mixin';
.header-wrap {
  position: absolute;
  left: 0;
  top: 0;
  .wh(100%, 50px);
  .fj();
  line-height: 50px;
  padding: 0 15px;
  .boxSizing();
  font-size: 15px;
  z-index: 10000;
  color: white;
  background: @primary;
  align-items: center;
  .avatar {
    .sc(24px, #fff);
    img {
      margin-top: 12px;
      width: 26px;
      height: 26px;
      .borderRadius(50%);
    }
  }
  .header-search {
    .wh(250px, 26px);
    background-color: rgba(255,255,255,0.5);
    line-height: 26px;
    .borderRadius(12px);
    padding: 0 10px;
    .sc(18px, #fff);
    .search-title {
      font-size: 14px;
    }
  }
  .publish {
    .sc(24px, #fff)
  }
}
</style>