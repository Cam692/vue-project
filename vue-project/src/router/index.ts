// 创建路由实例由createRouter实现
import {createRouter,createWebHashHistory,createWebHistory} from 'vue-router'

// 路由模式：
// history模式使用createWebHistory()
// hash模式使用createWebHsshHistory()
// 参数是基础路由的路径，默认/
const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes: []
})

export default router