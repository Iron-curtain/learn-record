<template>
  <simple-header :name="'修改头像'"></simple-header>
  <div class="change-avatar-wrap">
    <img class="my-avatar" src="../assets/avator.jpg" alt="">
    
    <van-uploader :after-read="onRead" :max-size="5 * 1024 * 1024" @oversize="onOversize" :before-read="beforeRead">
      <div class="submit-btn">选择图片</div>
    </van-uploader>
  </div>
</template>

<script>
import SimpleHeader from '../components/SimpleHeader.vue'
import { Toast } from 'vant';
import { changeAvatar } from '../service/userInfo'
import { useRouter } from 'vue-router'
export default {
  components: { SimpleHeader },
  setup() {
    const router = new useRouter()

    const onOversize = (file) => {
      console.log(file);
      Toast('文件大小不能超过 5mb');
    };

    const beforeRead = (file) => {
      if (file.type !== 'image/jpeg') {
        Toast('请上传 jpg 格式图片');
        return false;
      }
      return true;
    };

    const onRead = async (file) => {
      console.log(file);
      const img = {
        imgData: file.content.replace(/^data:image\/\w+;base64,/, ""), //分解base64代码
        imgName: file.file.name.split(".")[0], //取出文件名
      }
      console.log(img);
      let res = await changeAvatar(img)
      console.log(res);
      Toast({
        type: 'success',
        duration: 500,
        message: res.message,
        onClose: () => {
          router.back()
        }
      })
    }
    return {
      onOversize,
      beforeRead,
      onRead
    }
  }
}
</script>

<style lang="less">
@import '../common/style/mixin.less';
.change-avatar-wrap {
  padding: 44px 15px 0 15px;
  text-align: center;
  .my-avatar {
    margin-top: 50px;
    width: 150px;
  }
  .van-uploader {
    display: block;
    .van-uploader__wrapper {
      justify-content: center;
      .submit-btn {
        width: 150px;
        height: 50px;
        margin: 40px auto;
        background-color: @primary;
        .borderRadius(5px);
        line-height: 50px;
        color: #fff;
        font-weight: bold;
      }
    }
    
  } 
}
</style>