import modal from './modal'


export default {
    install(Vue) {
        // // 页签操作
        // Vue.prototype.$tab = tab
        // // 认证对象
        // Vue.prototype.$auth = auth
        // // 缓存对象
        // Vue.prototype.$cache = cache
        // 模态框对象
        Vue.prototype.$modal = modal
        // 下载文件
        // Vue.prototype.$download = download
    }
}