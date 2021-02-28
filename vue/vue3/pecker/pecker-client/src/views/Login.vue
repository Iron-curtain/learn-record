<template>
  <div class="login">
    <!-- 头部 -->
    <s-header class="header" :name="state.type === 'login' ? '登录' : '注册'"></s-header>
    <div class="login-body login" v-if="state.type === 'login'">
      <van-form @submit="onSubmit">
        <van-field
          v-model="state.username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="state.password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="state.verify"
          label="验证码"
          placeholder="验证码"
        >
          <template #button>
            <vueImgVerify ref="verifyRef"/>
          </template>
        </van-field>
        <div style="margin: 16px">
          <div class="link-register" @click="toggle('register')">立即注册</div>
          <van-button round block color="#7B68EE" type="info" native-type="submit"
            >登录</van-button
          >
        </div>
      </van-form>
    </div>
    <div class="login-body login register" v-else>
      <van-form @submit="onSubmit">
        <van-field
          v-model="state.username1"
          name="username1"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="state.password1"
          type="password"
          name="password1"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="state.verify"
          label="验证码"
          placeholder="验证码"
        >
          <template #button>
            <vueImgVerify ref="verifyRef"/>
          </template>
        </van-field>
        <div style="margin: 16px">
          <div class="link-register" @click="toggle('login')">已有账号登录</div>
          <van-button round block color="#7B68EE" type="info" native-type="submit"
            >注册</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import sHeader from "@/components/SimpleHeader";
import { reactive, ref } from 'vue';
import vueImgVerify from '@/components/VueImgVerify'
import { register, login } from '@/service/user.js'
import md5 from 'js-md5'
import { Toast } from 'vant';
import { useRouter } from 'vue-router'
export default {
  components: {
    sHeader,
    vueImgVerify
  },
  setup() {
    const router = new useRouter()
    const verifyRef = ref(null)
    const state = reactive({
      username: '',
      password: '',
      username1: '',
      password1: '',
      verify: '',
      type: 'login'
    });

    const toggle = (v) => {
      state.type = v
      state.verify = ''
    }
    // 登录 注册
    const onSubmit = async(values) => {
      console.log(verifyRef.value.imgCode); // 通过ref.value可以取到组件内setup函数的返回值
      state.imgCode = verifyRef.value.imgCode || ''
      if (state.verify.toLowerCase() !== state.imgCode.toLowerCase()) {
        Toast.fail('验证码有误')
        return
      }
      if (state.type == 'login') { //登录
        try {
          let res = await login({
            'loginName': values.username,
            'passwordMd5': md5(values.password)
          })
          console.log(res);
          let token = res.data.token
          console.log(token);
          localStorage.setItem('token', token)
          Toast({
            type: 'success',
            message: res.message,
            duration: 500,
            onClose: () => {
              router.push('/home')
            }
          })
        } catch (err) {
          Toast.fail(err.message)
        }
      } else { //注册
        try{
          console.log(values);
          let res = await register({
            'loginName': values.username1,
            'passwordMd5': md5(values.password1)
          })
          console.log(res);
          Toast.success('注册成功')
          state.type = 'login'
          state.verify = ''
        } catch (err) {
          Toast.fail(err.message)
        }
        
      }
    }

    return {
      state,
      onSubmit,
      verifyRef,
      toggle
    };
  },
}
</script>

<style lang="less">
@import '../common/style/mixin';
.login {
  background: url('../assets/login-background.jpeg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .header {
    background: url('../assets/login-background.jpeg');
    border: 0;
    color: @primary;
  }
  .login-body {
    background-color: rgba(255,255,255,0.5);
    margin-top: 200px;
    padding: 0 20px;
    border: 0;
  }
  .login {
    .link-register {
      font-size: 14px;
      margin-bottom: 20px;
      color: @primary;
      display: inline-block;
    }
  }
  .register {
    .link-login {
      font-size: 14px;
      margin-bottom: 20px;
      color: @primary;
      display: inline-block;
    }
  }
  .verify-bar-area {
    margin-top: 24px;
    .verify-left-bar {
      border-color: #1baeae;
    }
    .verify-move-block {
      background-color: @primary;
      color: #fff;
    }
  }
  .verify {
    > div {
      width: 100%;
    }
    display: flex;
    justify-content: center;
    .cerify-code-panel {
      margin-top: 16px;
    }
    .verify-code {
      width: 40% !important;
      float: left !important;
    }
    .verify-code-area {
      float: left !important;
      width: 54% !important;
      margin-left: 14px !important;
      .varify-input-code {
        width: 90px;
        height: 38px !important;
        border: 1px solid #e9e9e9;
        padding-left: 10px;
        font-size: 16px;
      }
      .verify-change-area {
        line-height: 44px;
      }
    }
  }
}
</style>