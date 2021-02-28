<template>
  <div class="wrap">
    <simple-header :name="'编辑资料'"></simple-header>
    <div class="info-wrap">
      <div class="info-item" @click="changeAvatar">
        <div class="des">头像</div>
        <div class="content">
          <img class="avatar" src="../assets/avator.jpg" alt="">
        </div>
      </div>
      <div class="info-item" @click="changeBackground">
        <div class="des">个人主页背景</div>
        <div class="content">
          <img class="bg" src="../assets/homeimg.jpeg" alt="">
        </div>
      </div>
      <div class="info-item">
        <div class="des">用户名</div>
        <div class="content">梦乘着风去远航</div>
      </div>
      <div class="info-item">
        <div class="des">性别</div>
        <div class="content">男</div>
      </div>
      <div class="info-item">
        <div class="des">生日</div>
        <div class="content">1999-12-5</div>
      </div>
      <div class="info-item">
        <div class="des">城市</div>
        <div class="content">江西 赣州</div>
      </div>
      <div class="info-item">
        <div class="des">签名</div>
        <div class="content">玉树临风胜潘安</div>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleHeader from '../components/SimpleHeader.vue'
import { useRouter } from 'vue-router'
export default {
  components: { SimpleHeader },
  setup () {
    const router = new useRouter()
    const changeAvatar = () => {
      router.push('/changeavatar')
    }
    const changeBackground = () => {
      router.push('/changebackground')
    }
    return {
      changeAvatar,
      changeBackground
    }
  }
}
</script>

<style lang="less" scoped>
@import '../common/style/mixin';
.wrap {
  .wh(100%, 100%);
  .info-wrap {
    padding-top: 50px;
    line-height: 40px;
    .info-item {
      .fj();
      padding: 0 15px;
      .des {
        .sc(14px, #000)
      }
      .content {
        .sc(12px, #666);
        .avatar {
          .wh(50px, 50px);
          .borderRadius(50%);
        }
        .bg {
          .wh(50px, 50px);
          .borderRadius(10px);
        }
      }
    }
  }
}
</style>