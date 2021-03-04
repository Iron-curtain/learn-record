<template>
  <Header></Header>
  <div class="topic-content-wrap">
    <van-tabs  v-model:active="active" animated background="#7B68EE" color="#ffffff" 
      title-active-color="#ffffff" title-inactive-color="rgba(255,255,255,0.5)">
      <van-tab title="我的话题">
        <div class="topic-wrap">
          <div class="topic-item">
            <img src="../assets/night.jpeg" alt="">
            <div class="topic-title">
              <div class="topic-name">星辰夜语</div>
              <div class="topic-hot">
                <span class="hot iconfont icon-icon-test"></span>
                <span class="hot-content">56.9w热度 15.7w讨论</span>
              </div>
            </div>
            <div class="topic-icon iconfont icon-qianjin"></div>
          </div>
        </div>
      </van-tab>
      <van-tab title="热门话题">
        <div class="topic-wrap">
          <div class="topic-item" v-for="topic in topicList" :key="topic.topic_id">
            <img :src="topic.topic_img" alt="">
            <div class="topic-title">
              <div class="topic-name">{{topic.topic_name}}</div>
              <div class="topic-hot">
                <span class="hot iconfont icon-icon-test"></span>
                <span class="hot-content">{{topic.hot}}w热度 {{topic.hot_cmt}}w讨论</span>
              </div>
            </div>
            <div class="topic-icon iconfont icon-qianjin"></div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
  <nav-bar></nav-bar>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '../components/NavBar.vue'
import { getTopicList } from '../service/topic'
import { reactive, toRefs } from 'vue'
export default {
  name: 'topic',
  components: {
    Header,
    NavBar,
  },
  setup () {
    let state = reactive({
      topicList: []
    })

    let p = new Promise((resolve, reject) => {
      let topicList = getTopicList()
      resolve(topicList)
    })
    p.then((res) => {
      state.topicList = res.data
      console.log(res);
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="less">
@import '../common/style/mixin';
.topic-content-wrap {
  background-color: @bc1;
  .wh(100%, 100%);
  .boxSizing();
  padding: 50px 10px;
  .van-tabs__wrap {
    .wh(400px, 30px);
    margin-left: -10px;
  }
  .topic-wrap {
    padding: 5px 5px;
    margin-top: 10px;
    .borderRadius(10px);
    background-color: #fff;
    .topic-item {
      margin: 20px 0;
      display: flex;
      padding: 0 16px;
      justify-content: space-between;
      line-height: 50px;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        border-radius: 10px;
      }
      .topic-title {
        width: 220px;
        .topic-name {
          line-height: 30px;
        }
        .topic-hot {
          line-height: 20px;
          font-size: 13px;
          color: #696969;
          .hot {
            color: red;
          }
        }
      }
      .topic-icon {
        color: #999999;
      }
    }
  }
}

</style>