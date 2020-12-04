import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/',
            component: () =>
                import ('./views/Shouye.vue')
        },
        {
            path: '/tuijian',
            component: () =>
                import ('./views/Tuijian.vue')
        },
        {
            path: '/fenlei',
            component: () =>
                import ('./views/Fenlei.vue')
        },
        {
            path: '/wode',
            component: () =>
                import ('./views/Wode.vue')
        },
        {
            path: '/shezhi',
            component: () =>
                import ('./views/Shezhi.vue')
        },
        {
            path: '/keben',
            component: () =>
                import ('./views/Kebenshezhi.vue')
        },
        {
            path: '/shijuan',
            name: 'childView',
            component: () =>
                import ('./views/Shijuan.vue')
        }
    ]
})