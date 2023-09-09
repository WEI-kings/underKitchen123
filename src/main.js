import './assets/main.css'
// 导入vue创建cue实例的方法
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 创建vue实例
const app = createApp(App)
//配置路由
app.use(router)
//挂在到标签
app.mount('#app')
