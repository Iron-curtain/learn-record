<template>
  <!-- <img src="" alt=""> -->
  <div class="background" :style="`background-image: url(${url});`"></div>
  <div class="wrap">
    <div class="header"></div>
    <div class="info-wrap">
      <div class="avatar-wrap">
        <div class="avatar"></div>
        <div class="btn"></div>
      </div>
      <div class="nickname"></div>
      <div class="user-data">
        <span style="color=#ffffff">629获赞</span>
        <span>3关注</span>
        <span>456粉丝</span>
      </div>
      <div class="other-info">
        <div class="sex"></div>
        <div class="label">江苏 扬州</div>
        <div class="label">魔羯座</div>
      </div>
    </div>
    dasfasdfjsdakfjksdj
  </div>
  
  <div class="page">
    
  </div>
</template>

<script>

export default {
  setup() {
    return {
      url: require('../assets/homeimg.jpeg')
    }
  }
}
</script>

<style lang="less" scoped>
@import '../common/style/mixin';
.background {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
}

.wrap {
  // background: rgba(154, 154, 154, 0.5);
  color: white;
  height: 300px;
  z-index: 1000;
}
</style>