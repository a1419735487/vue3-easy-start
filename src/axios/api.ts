import http from './http'

// 多个url区分
const API1 = '/API1'
const API2 = '/API2'

export const testAPI = {
  getNoData () {
    return http.get(API1 + '/xxx')
  },
  post (params) {
    return http.post(API2 + '/xxx', params)
  },
}

// ***在vue3中全局挂载***
// import { getCurrentInstance } from 'vue'
// import * as api from './axios/api.js'
// const app = createApp(App)
// app.config.globalProperties.$api = api

// ***使用***
// const { proxy } = getCurrentInstance()
// proxy.$api.testApi.getNoData()