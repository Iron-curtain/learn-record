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
    <div class="picture">
      <img class="pic-pre" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3055708143,1547617921&fm=26&gp=0.jpg" alt="">
      <img class="pic-pre" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3071491099,318794994&fm=26&gp=0.jpg" alt="">
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
export default {
  setup() {
    const content = "盈一抹领悟，收藏点点滴滴的快乐，经年流转，透过指尖的温度，期许岁月静好，这一路走来，你会发现，生活于我们，温暖，一直是一种牵引，不是吗？于生活的海洋中踏浪，云帆尽头，轻回眸，处处是别有洞天，云淡风轻。有一种经年叫历尽沧桑，有一种远眺叫含泪微笑，有一种追求叫浅行静思，有一种美丽叫淡到极致。"
    return {
      content
    }
  }
}
</script>

<style lang="less" scoped>
@import '../common/style/mixin';
.card {
  margin-top: 7px;
  padding: 8px 16px;
  .publish-info {
    height: 50px;
    .avatar {
      display: inline-block;
      .wh(45px, 45px);
      .bis("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3520910162,3063201140&fm=26&gp=0.jpg");
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
    width: 100%;
    .pic-pre {
      width: 49%;
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