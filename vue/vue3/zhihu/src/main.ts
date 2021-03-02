import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import store from './store'

const app = createApp(App)
app.use(router).use(store).use(Antd)
app.mount('#app')
