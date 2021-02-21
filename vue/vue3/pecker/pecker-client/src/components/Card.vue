<template>
  <div class="card">
    <div class="publish-info">
      <div class="avatar">
        <img src="https://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E5%A4%B4%E5%83%8F&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=undefined&latest=undefined&copyright=undefined&cs=3065335715,4197701299&os=2881999140,2042603032&simid=4139949256,547552291&pn=13&rn=1&di=117260&ln=3832&fr=&fmq=1614004056372_R&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fdiy.qqjay.com%252Fu%252Ffiles%252F2012%252F0217%252Fb693a3b6d232ffe861da22287c888729.jpg%26refer%3Dhttp%253A%252F%252Fdiy.qqjay.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1616596057%26t%3D588471529d6626335ba1ae03fa99d382&rpstart=0&rpnum=0&adpicid=0&force=undefined" alt="">
      </div>
      <div class="info">
        <div class="nickname">Somerice</div>
        <div class="publis-time">一小时前</div>
      </div>
      <div class="menu"></div>
    </div>
    <div class="content">
      <span class="topic-name">#我在这里看春天#</span>
      {{content}}
      <span class="more">查看更多</span>
    </div>
    <div class="picture"></div>
    <div class="about">
      <span class="like"></span>
      <span class="comment"></span>
      <span class="share"></span>
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
}
</style>