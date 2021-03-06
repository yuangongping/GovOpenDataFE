import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import DatasetInfo from '../pages/DatasetInfo'
import DatasetList from '../pages/DatasetList'
import Login from '../pages/Login'
import Register from '../pages/Register'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [{
            path: '/',
            name: 'index',

            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/dataset_list',
            name: 'DatasetList',
            component: DatasetList
        },
        {
            path: '/dataset_info',
            name: 'DatasetInfo',
            component: DatasetInfo
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/Register',
            name: 'register',
            component: Register
        },
    ]
})