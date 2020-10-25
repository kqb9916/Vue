import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import User from "../components/User";
import User_detail from "../components/User_detail";


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home,
        },
        {
            path: '/user',
            name: 'User',
            component: User,
        },
        {
            path: '/',
            name: '',
            redirect: "/home",
        },
        {
            path: '/detail/:id',
            name: 'User_detail',
            component: User_detail,
        },
    ]
})
