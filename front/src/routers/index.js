import Vue from 'vue';
import VueRouter from 'vue-router';
import Store from '@/store';
import UserObject from "../util/user";
import routes from './routers.js';

Vue.use(ViewUI);
Vue.use(VueRouter)

const LOGIN_PAGE_NAME = 'login';



const router = new VueRouter({
    mode: 'history',
    routes
})

const getCrumb = function (path, route) {
    let crumb = [];
    for (let index in route) {
        if (route[index].path != path) {
            if (route[index].children) {
                getCrumb(path, route[index].children);
            }
        } else {
            crumb.push(route[index]);
        }
    }
    crumb.unshift({
        title: '主页',
        path: null
    })
    return crumb;
}

router.beforeEach((to, from, next) => {
    const User = new UserObject();
    const token = User.getToken();
    if (!token && to.name !== LOGIN_PAGE_NAME) {
        // 未登录且要跳转的页面不是登录页
        next({
            name: LOGIN_PAGE_NAME // 跳转到登录页
        })
    }
    if (token && to.name === LOGIN_PAGE_NAME) {
        // 已登录且要跳转的页面是登录页
        next({
            name: '/' // 跳转到homeName页
        })
    }
    Store.commit('updateCrumb', getCrumb(to.path, routes[0].children));
    next();

})

router.afterEach(route => {
    ViewUI.LoadingBar.finish();
});


export default router
