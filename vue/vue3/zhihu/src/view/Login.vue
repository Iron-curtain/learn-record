<template>
  <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="邮箱地址" v-bind="validateInfos.email">
      <a-input v-model:value="modelRef.email" />
    </a-form-item>
    <a-form-item label="密码" v-bind="validateInfos['sub.name']">
      <a-input v-model:value="modelRef.password" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click.prevent="onSubmit">登录</a-button>
      <a-button style="margin-left: 10px" @click="register">还没有账户？注册一个吧</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue'
import { useForm } from '@ant-design-vue/use'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup () {
    const router = useRouter()
    const modelRef = reactive({
      email: '',
      password: ''
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
        password: [
          {
            required: true,
            message: '请输入密码'
          }
        ]
      })
    )
    const onSubmit = () => {
      validate()
        .then(res => {
          console.log(res, toRaw(modelRef))
        })
        .catch(err => {
          console.log('error', err)
        })
    }

    const register = () => {
      router.push('/register')
    }
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      validateInfos,
      register,
      modelRef,
      onSubmit
    }
  }
})
</script>
