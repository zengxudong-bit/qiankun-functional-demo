import { handleRouter } from "./js/handle-router.js"
import { rewriteRouter } from "./js/rewrite-router.js"
// 暂存的apps，主要考虑到外部要拿这个要注册的子应用
let _apps = [];
// 外部拿到子应用列表所要执行的方法
const getApps = function () {
    return _apps
}

// 注册子应用的方法
const registerMicroApps = function (apps) {
    _apps = apps
    console.log(apps,'apps');
}

// 启动子应用的方法
const start = function () {
    console.log('start!');
    // 微前端的运行原理，1. 监听路由变化 2.匹配子应用 3.加载子应用 4.渲染子应用

    // 1. 监听路由变化
    rewriteRouter();

    // 初始执行匹配
    handleRouter();

    // 2.匹配子应用
    // 3.加载子应用
    // 4.渲染子应用
}

registerMicroApps([
    {
        name: 'vueApp',
        entry: 'http://172.20.10.2:7101',
        container: '#container',
        activeRule: '/vue',
    }
]);
  // 启动 qiankun
start();

// 导出
export { registerMicroApps, start, getApps }
