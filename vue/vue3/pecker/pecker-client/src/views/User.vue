<template>
  <div class="header">
    <span class="setting iconfont icon-setting"></span>
    <span class="publish iconfont icon-add-fill"></span>
  </div>
  <div class="infomation">
    <div class="user-info" @click.stop="toHomePage()">
      <div class="avatar">
        <img :src="userInfo.avatar" alt="">
      </div>
      <div class="info">
        <div class="nickName">{{userInfo.nickname}}</div>
        <div class="sign">{{userInfo.sign || '暂无个性签名'}}</div>
      </div>
      <div class="more iconfont icon-qianjin"></div>
    </div>
    <div class="other-info">
      <div class="item">
        <div class="num">3</div>
        <div class="desc">动态</div>
      </div>
      <div class="item">
        <div class="num">18</div>
        <div class="desc">关注</div>
      </div>
      <div class="item">
        <div class="num">1</div>
        <div class="desc">粉丝</div>
      </div>
    </div>
  </div>
  <div class="menu-warp">

  </div>
  <nav-bar></nav-bar>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
export default {
  name: 'home',
  components: {
    NavBar
  },
  setup() {
    const router = new useRouter()

    const state = reactive({
      userInfo: null
    })

    let userInfo = JSON.parse(localStorage.getItem('userInfo'))
    console.log(userInfo);
    if (!userInfo) {
      router.push('/login')
    } else {
      state.userInfo = userInfo
    }

    const toHomePage = () => {
      router.push('/homepage')
    }
    return {
      toHomePage,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../common/style/mixin';
.header {
  .fj(flex-end);
  line-height: 50px;
  background-color: @primary;
  padding: 0 15px;
  .iconfont {
    .sc(24px, #fff)
  }
  .setting {
    margin-right: 20px;
  }
}
.infomation {
  height: 150px;
  padding: 0 15px;
  background-image: linear-gradient(@primary, @bc1);
  .user-info {
    .fj();
    .avatar {
      margin-left: 20px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .info {
      width: 220px;
      color: #fff;
      .nickName {
        line-height: 30px;
      }
      .sign {
        font-size: 10px;
        line-height: 20px;
      }
    }
    .more {
      margin-right: 10px;
      text-align: right;
      color: #fff;
      line-height: 50px;
      width: 50px;
    }
  }
  .other-info {
    margin-top: 30px;
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    .fj();
    align-items: center;
    border-radius: 20px;
    .item {
      flex: auto;
      text-align: center;
      .num {
        font-size: 16px;
        font-weight: bold;
      }
      .desc {
        font-size: 10px;
        color: #666666;
      }
    }
  }
}
.menu-warp {
  width: 100%;
  height: 385px;
  background-color: @bc1;
}
</style>