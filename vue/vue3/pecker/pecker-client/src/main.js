import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';
import { Tab, Tabs, Icon, Toast, Form, Field, Button, Uploader } from 'vant';


const app = createApp(App)
app.use(Tab).use(Tabs).use(Icon).use(Toast).use(Form).use(Field).use(Button).use(Uploader)
app.use(store).use(router).mount('#app')
