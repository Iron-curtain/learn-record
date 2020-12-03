<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
          <li class="menu-item" @click="selectMenu(index)"
            v-for="(item, index) in goods" 
            :key="index" 
            :class="currentIndex === index && 'current'">
            <span class="text">
              <span class="icon"></span>
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getGoods } from '@/api'
export default {
  data() {
    return {
      goods: [],
      currentIndex: 0
    }
  },
  methods: {
    selectMenu(idx) {
      this.currentIndex = idx
    }
  },
  created() {
    getGoods().then(res => {
      console.log(res);
      this.goods = res
    })
  }
}
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/variable';
.goods
  display flex
  position absolute
  top: 171px;
  bottom: 46px;
  width: 100%;
  overflow: hidden;
  .menu-wrapper
    flex: 0 0 80px;
    width: 80px;
    background #f3f5f7
    .menu-item
      display flex
      width: 56px;
      height: 54px;
      padding 0 12px
      line-height: 14px;
      align-items center
      font-size $fontsize-small
      &.current
        background #fff
        font-weight 700
</style>