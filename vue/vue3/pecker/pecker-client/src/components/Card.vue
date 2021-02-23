<template>
  <div class="card">
    <div class="publish-info">
      <div class="avatar">
      </div>
      <div class="info">
        <div class="nickname">Somerice</div>
        <div class="publish-time">1小时前</div>
      </div>
      <div class="menu iconfont icon-xiala1"></div>
    </div>
    <div class="content">
      <span class="topic-name">#我在这里看春天#</span>
      {{content}}
      <span class="more">查看更多</span>
    </div>
    <div class="picture"></div>
    <div class="about">
      <span class="like iconfont icon-zanpress"></span>
      <span class="comment iconfont icon-pinglun"></span>
      <span class="share iconfont icon-share"></span>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const content = "盈一抹领悟，收藏点点滴滴的快乐，经年流转，透过指尖的温度，期许岁月静好，这一路走来，你会发现，生活于我们，温暖，一直是一种牵引，不是吗？于生活的海洋中踏浪，云帆尽头，轻回眸，处处是别有洞天，云淡风轻。有一种经年叫历尽沧桑，有一种远眺叫含泪微笑，有一种追求叫浅行静思，有一种美丽叫淡到极致。给生命一个微笑的理由吧，别让自己的心承载太多的负重；给自己一个取暖的方式吧，以风的执念求索，以莲的姿态恬淡，盈一抹微笑，将岁月打磨成人生枝头最美的风景。心中若有桃花源，何处不是水云间。"
    return {
      content
    }
  }
}
</script>

<style lang="less" scoped>
@import '../common/style/mixin';
.card {
  padding: 8px;
  .publish-info {
    height: 50px;
    .avatar {
      display: inline-block;
      .wh(50px, 50px);
      .bis("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3520910162,3063201140&fm=26&gp=0.jpg");
      .borderRadius(50%);
    }
    .info {
      display: inline-block;
      overflow: hidden;
      margin-left: 10px;
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
      display: inline-block;
      margin-top: 0;
      margin-right: 0;
      
    }
  }
}
</style>