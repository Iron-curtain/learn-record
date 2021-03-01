import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';
import { Tab, Tabs, Icon, Toast, Form, Field, Button, Uploader, Popup, Picker, DatetimePicker, Area } from 'vant';


const app = createApp(App)
app.use(Tab).use(Tabs).use(Icon).use(Toast).use(Form).use(Field).use(Button).use(Uploader).use(Popup).use(Picker)
   .use(DatetimePicker).use(Area)
app.use(store).use(router).mount('#app')
