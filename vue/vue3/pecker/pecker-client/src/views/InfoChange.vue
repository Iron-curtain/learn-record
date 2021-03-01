<template>
  <div class="wrap">
    <simple-header :name="'编辑资料'"></simple-header>
    <div class="info-wrap">
      <div class="info-item" @click="changeAvatar">
        <div class="des">头像</div>
        <div class="content">
          <img class="avatar" src="../assets/avator.jpg" alt="">
        </div>
      </div>
      <div class="info-item" @click="changeBackground">
        <div class="des">个人主页背景</div>
        <div class="content">
          <img class="bg" src="../assets/homeimg.jpeg" alt="">
        </div>
      </div>
      <div class="info-item" @click="showChangeNickname">
        <div class="des">用户名</div>
        <div class="content">梦乘着风去远航</div>
      </div>
      <div class="info-item" @click="showSexSelect = true">
        <div class="des">性别</div>
        <div class="content">男</div>
      </div>
      <div class="info-item" @click="showBirSelect = true">
        <div class="des">生日</div>
        <div class="content">1999-12-5</div>
      </div>
      <div class="info-item" @click="showCitySelect = true">
        <div class="des">城市</div>
        <div class="content">江西 赣州</div>
      </div>
      <div class="info-item" @click="showSignChange">
        <div class="des">签名</div>
        <div class="content">玉树临风胜潘安</div>
      </div>
    </div>
  </div>
  <!-- 修改昵称 -->
  <van-popup v-model:show="showNicknameInput" position="bottom" @close="ChangeNickname" >
    <div class="space"></div>
    <van-field v-model="nickName" label="用户名" placeholder="请输入用户名" />
    <div class="space"></div>
  </van-popup>

  <!-- 修改性别 -->
  <van-popup v-model:show="showSexSelect" round position="bottom">
    <van-picker
      :columns="sexColumn"
      @cancel="showSexSelect = false"
      @confirm="sexSelect"
    />
  </van-popup>

  <!-- 选择生日 -->
  <van-popup v-model:show="showBirSelect" round position="bottom">
    <van-datetime-picker
      v-model="currentDate "
      type="date"
      title="选择生日"
      :min-date="minDate"
      :max-date="maxDate"
      @cancel="showBirSelect = false"
      @confirm="birthdaySelect"
    />
  </van-popup>

  <!-- 选择城市 -->
  <van-popup v-model:show="showCitySelect" round position="bottom">
    <van-area title="选择城市" :area-list="areaList" :columns-num="2" @cancel="showCitySelect = false" @confirm="selectCity" />
  </van-popup>

  <!-- 修改个性签名 -->
  <van-popup v-model:show="showSignInput" position="bottom" @close="ChangeSign" >
    <div class="space"></div>
    <van-field v-model="sign" label="个性签名" placeholder="展示更好的自己" />
    <div class="space"></div>
  </van-popup>
</template>

<script>
import SimpleHeader from '../components/SimpleHeader.vue'
import { useRouter } from 'vue-router'
import { reactive, toRefs, ref } from 'vue'
import { changeInfo } from '../service/userInfo'
import area from '../utils/area'
export default {
  components: { SimpleHeader },
  setup () {
    const router = new useRouter()
    const areaList = area
    const sexColumn = ['男', '女']
    const currentDate  = ref(new Date());
    const minDate = new Date(1990, 0, 1)
    const maxDate = new Date(2021, 2, 1)

    const state = reactive({
      showNicknameInput: false,
      showSignInput: false,
      showSexSelect: false,
      showBirSelect: false,
      showCitySelect: false,
      nickName: '',
      sign: ''
    })

    // 跳转至修改头像页面
    const changeAvatar = () => {
      router.push('/changeavatar')
    }

    // 跳转至修改背景图片页面
    const changeBackground = () => {
      router.push('/changebackground')
    }
    
    // 展示修改昵称输入框
    const showChangeNickname = () => {
      state.showNicknameInput = true
    }

    // 修改昵称
    const ChangeNickname = async () => {
      let nickName = state.nickName
      if (nickName.length === 0) return
      try {
        await changeInfo('nickName', nickName)
      } catch (err) {
        console.log(err);
      }
    }
    
    // 展示修改个性签名输入框
    const showSignChange = () => {
      state.showSignInput = true
    }

    // 修改个性签名
    const ChangeSign = async () => {
      let sign = state.sign
      if (sign.length === 0) return
      try {
        await changeInfo('sign', sign)
      } catch (err) {
        console.log(err);
      }
    }

    // 修改性别
    const sexSelect = async (res) => {
      console.log(res);
      try {
        await changeInfo('sex', res)
      } catch (err) {
        console.log(err);
      }
      state.showSexSelect = false
    }

    // 修改生日
    const birthdaySelect = async (val) => {
      let year = val.getFullYear()
      let month = val.getMonth() + 1
      let day = val.getDate()
      let birthday = `${year}-${month}-${day}`
      // console.log(birthday);
      try {
        await changeInfo('birthday', birthday)
      } catch (err) {
        console.log(err);
      }
      state.showBirSelect = false
    }

    // 选择城市
    const selectCity = async (val) => {
      let city = val[0].name + ' ' + val[1].name
      try {
        await changeInfo('city', city)
      } catch (err) {
        console.log(err);
      }
      this.showCitySelect = false
    }

    return {
      ...toRefs(state),
      sexColumn,
      currentDate ,
      minDate,
      maxDate,
      changeAvatar,
      changeBackground,
      showChangeNickname,
      ChangeNickname,
      showSignChange,
      ChangeSign,
      sexSelect,
      birthdaySelect,
      selectCity,
      areaList
    }
  }
}
</script>

<style lang="less" scoped>
@import '../common/style/mixin';
.wrap {
  .wh(100%, 100%);
  .info-wrap {
    padding-top: 50px;
    line-height: 40px;
    .info-item {
      .fj();
      padding: 0 15px;
      .des {
        .sc(14px, #000)
      }
      .content {
        .sc(12px, #666);
        .avatar {
          .wh(50px, 50px);
          .borderRadius(50%);
        }
        .bg {
          .wh(50px, 50px);
          .borderRadius(10px);
        }
      }
    }
  }
}
.space {
  height: 40px;
}
</style>