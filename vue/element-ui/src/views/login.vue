<template>
  <div class="login">
    <div class="login-container">
      <h2>旅梦后台管理系统</h2>
      <div class="wrap">
        <el-input
          placeholder="请输入用户名"
          prefix-icon="el-icon-user"
          v-model="username">
        </el-input>

        <el-input 
          placeholder="请输入密码" 
          prefix-icon="el-icon-lock"
          v-model="password" 
          show-password>
        </el-input>
         <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        onSubmit() {
            if (this.username === 'admin' && this.password === '123456')
            this.$router.push({path: '/Home', params: {username: this.username, password: this.password}})
        }
    }
};
</script>
<style>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-container {
  width: 300px;
  height: 260px;
  box-shadow: 0px 0px 5px #999;
}
</style>