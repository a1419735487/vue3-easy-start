import { createApp } from 'vue'
import App from './App.vue'

// 全局样式
import './assets/css/global.less'
// 路由
import router from './router'
// 状态管理
import { createPinia } from 'pinia'
// axios
import * as api from './axios/api.js'

const app = createApp(App)

app.config.globalProperties.$api = api

app
  .use(createPinia())
  .use(router)
  .mount('#app')
