import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Home from '../views/Home.vue'
import UserInfo from '../views/UserInfo.vue'
import Form from '../views/form.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/Home',
            name: 'Home',
            component: Home,
            children: [
                {
                    path: 'UserInfo',
                    name: 'UserInfo',
                    component: UserInfo
                },
                {
                    path: 'Form',
                    name: 'Form',
                    component: Form
                }
            ]
        }
    ]
})