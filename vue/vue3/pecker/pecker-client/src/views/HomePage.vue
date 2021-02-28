<template>
  <div class="bg-wrap" :style="`background-image: url(${url})`">
    <div class="homepage-wrap">
      <simple-header></simple-header>
      <div class="header"></div>
      <div class="homepage-info-wrap">
        <div class="avatar-wrap">
          <div class="avatar" :style="`background-image: url(${avatar})`"></div>
          <div class="btn" @click="changeInfo">编辑资料</div>
        </div>
        <div class="nickname">梦乘着风去远航</div>
        <div class="user-data">
          <span><span class="num">629 </span>获赞</span>
          <span><span class="num">3 </span>关注</span>
          <span><span class="num">456 </span>粉丝</span>
        </div>
        <div class="other-info">
          <div class="label iconfont icon-man"></div>
          <div class="label">江苏 扬州</div>
          <div class="label">魔羯座</div>
        </div>
      </div>
    </div>
  </div>
  <div class="content-warp">
    <card></card>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import SimpleHeader from '../components/SimpleHeader.vue'
import { useRouter } from 'vue-router'
export default {
  components: { SimpleHeader, Card },
  setup() {
    const router = new useRouter()

    const changeInfo = () => {
      router.push('/changeinfo')
    }

    return {
      changeInfo,
      url: require('../assets/homeimg.jpeg'),
      avatar: require('../assets/avator.jpg')
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
  position: absolute;
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