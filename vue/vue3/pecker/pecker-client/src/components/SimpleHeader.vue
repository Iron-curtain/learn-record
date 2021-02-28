<template>
  <header class="simple-header">
    <van-icon name="arrow-left" @click="goBack" v-if="back" />
    <i v-else>&nbsp;</i>
    <div class="simple-header-name">{{name}}</div>
    <van-icon name="weapp-nav" />
  </header>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    back: {
      type: Boolean,
      default: true
    },
    backUrl: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    // const name = ref(props.name)
    const router = useRouter()
    const goBack = () => {
      if (props.backUrl) {
        router.push({ path: props.backUrl })
      }
      router.go(-1)
    }
    return {
      // name,
      goBack
    }
  }
}
</script>

<style lang="less" scoped>
@import '../common/style/mixin.less';
.simple-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  .fj();
  .wh(100%, 44px);
  line-height: 44px;
  padding: 0 10px;
  .boxSizing();
  color: #fff;
  background: @primary;
  border-bottom: 1px solid #dcdcdc;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1em;
  .van-icon{
    line-height: 44px;
  }
}
</style>