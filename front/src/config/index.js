export default {
    /**
     * @description 配置显示在浏览器标签的title
     */
    title: '',
    /**
     * @description token在Cookie中存储的天数，默认1天
     */
    cookieExpires: 1,

    baseUrl: {
        dev: '',
        pro: ''
    },
    /**
     * @description 默认打开的首页的路由name值，默认为home
     */
    homeName: 'home',
    getBaseUrl:function () {
        let env = (process.env.NODE_ENV === 'development') ? 'dev' :'pro';
        return this.baseUrl[env];
    }
}
