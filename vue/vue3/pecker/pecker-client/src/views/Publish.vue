<template>
  <div class="header">
    <div class="back iconfont icon-cha" @click="goBack"></div>
    <div class="title">发布动态</div>
    <div class="publish-btn" @click="publish">发布</div>
  </div>
  <div class="publish-wrap">
    <div class="select-topic" @click="showSelectTopicPop">
      <span class="topic-add-icon iconfont icon-tianjia"></span>
      <span class="select-title">发布到</span>
      <span class="select-desc" v-if="topicSelected.topic_id == undefined">请选择合适的板块</span>
      <div v-else>
        <img :src="topicSelected.topic_img" alt="">
        <span class="selected-topic-title">{{topicSelected.topic_name}}</span>
      </div>
      <span class="select-icon iconfont icon-qianjin"></span>
    </div>
    <div class="content-input">
      <van-field v-model="content" type="textarea" autosize="true" placeholder="分享你此刻的想法..." />
    </div>
    <div class="img-input">
      <van-uploader v-model="imgList"  :before-read="beforeRead" multiple  />
    </div>
  </div>
  <van-popup round="true" v-model:show="showSelectTopic" position="bottom">
    <div class="topic-item" v-for="topic in topicList" :key="topic.topic_id" @click="selectTopic(topic)">
      <img :src="topic.topic_img" alt="">
      <span class="topic-title">{{topic.topic_name}}</span>
    </div>
  </van-popup>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { getTopicList } from '../service/topic'
import { publishArticle } from '../service/article'
export default {
  name: 'publish',
  setup() {
    const router = useRouter()

    const state = reactive({
      showSelectTopic: false,
      topicList: [],
      topicSelected: {},
      content: '',
      imgList: []
    })

    const beforeRead = (file) => {
      if (file.type !== 'image/jpeg') {
        Toast('请上传 jpg 格式图片');
        return false;
      }
      return true;
    };

    // const afterRead = async (file) => {
    //   const img = {
    //     imgData: file.content.replace(/^data:image\/\w+;base64,/, ""), //分解base64代码
    //     imgName: file.file.name.split(".")[0], //取出文件名
    //   }

    //   console.log(state.imgList);
    //   // Toast({
    //   //   type: 'success',
    //   //   duration: 500,
    //   //   message: res.message,
    //   //   onClose: () => {
    //   //     router.back()
    //   //   }
    //   // })
    // }

    const goBack = () => {
      router.back()
    }
    
    const showSelectTopicPop = () => {
      state.showSelectTopic = true
      let p = new Promise((resolve, reject) => {
        let topicList = getTopicList()
        resolve(topicList)
      })
      p.then((res) => {
        state.topicList = res.data
      })
    }

    const selectTopic = (topic) => {
      state.topicSelected = topic
      state.showSelectTopic = false
    }

    const publish = async () => {
      let topicId = state.topicSelected.topic_id
      let content = state.content
      let imgList = state.imgList.map((file) => {
        let img = {}
        img.imgName = file.file.name.split(".")[0]
        img.imgData = file.content.replace(/^data:image\/\w+;base64,/, "")
        return img
      })
      let data = {topicId, content, imgList}
      console.log(data);
      await publishArticle(data)
    }

    return {
      ...toRefs(state),
      goBack,
      showSelectTopicPop,
      selectTopic,
      beforeRead,
      publish
    }
  }
}
</script>

<style lang="less" scoped>
@import '../common/style/mixin.less';
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 50px;
  color: #666;
  padding: 0 20px;
  padding-top: 10px;
  .title {
    text-align: left;
    width: 260px;
    padding: 0, 10px;
  }
  .publish-btn {
    border: 1px solid #666;
    border-radius: 5px;
    text-align: center;
    width: 60px;
    height: 30px;
    line-height: 32px;
    color: @primary;
  }
}
.publish-wrap {
  background-color: @bc1;
  overflow: hidden;
  .select-topic {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    margin-top: 1px;
    line-height: 60px;
    .topic-add-icon {
      color: @primary;
      font-size: 30px;
    }
    .select-title {
      width: 80px;
    }
    .select-desc {
      flex: auto;
      font-size: 12px;
      text-align: right;
      margin-right: 10px;
    }
    .select-icon {
      font-size: 13px;
    }
    img {
      width: 30px;
      height: 30px;
      border-radius: 5px;
      vertical-align: middle;
    }
    .selected-topic-title {
      margin-left: 20px;
    }
  }
  .content-input {
    margin-top: 8px;
  }
  .img-input {
    padding: 20px 15px;
    background-color: #fff;
  }
}
.topic-item {
  margin: 20px 0;
  padding: 0 16px;
  line-height: 50px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    vertical-align: middle;
  }
  .topic-title {
    display: inline-block;
    margin-left: 20px;
  }
}
</style>