<template>
  <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="邮箱地址" v-bind="validateInfos.email">
      <a-input v-model:value="modelRef.email" />
    </a-form-item>
    <a-form-item label="昵称" v-bind="validateInfos.nickName">
      <a-input v-model:value="modelRef.nickName" />
    </a-form-item>
    <a-form-item label="密码" v-bind="validateInfos.password">
      <a-input v-model:value="modelRef.password" />
    </a-form-item>
    <a-form-item label="重置密码" v-bind="validateInfos.rePassword">
      <a-input v-model:value="modelRef.rePassword" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click.prevent="onSubmit">注册</a-button>
      <a-button style="margin-left: 10px" @click="toLogin">已有账户？去登录</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue'
import { useForm } from '@ant-design-vue/use'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default defineComponent({
  setup () {
    const router = useRouter()
    const store = useStore()
    const modelRef = reactive({
      email: '',
      nickName: '',
      password: '',
      rePassword: ''
    })
    const { validate, validateInfos } = useForm(
      modelRef,
      reactive({
        email: [
          {
            required: true,
            message: '请输入邮箱地址'
          }
        ],
        nickName: [
          {
            required: true,
            message: '请输入昵称'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          }
        ],
        rePassword: [
          {
            required: true,
            message: '请再次输入密码'
          }
        ]
      })
    )

    // 注册
    const onSubmit = () => {
      validate()
        .then(res => {
          // console.log(res, toRaw(modelRef))
          const result = toRaw(modelRef)
          const payload = {
            email: result.email,
            nickName: result.nickName,
            password: result.password
          }
          // 发起接口请求
          store.dispatch('register', payload).then((res) => {
            console.log(res)
          })
        })
        .catch(err => {
          console.log('error', err)
        })
    }

    const toLogin = () => {
      router.push('/login')
    }

    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      validateInfos,
      toLogin,
      modelRef,
      onSubmit
    }
  }
})
</script>
