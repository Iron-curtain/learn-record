import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';
import { Tab, Tabs } from 'vant';


const app = createApp(App)
app.use(Tab).use(Tabs)
app.use(store).use(router).mount('#app')
