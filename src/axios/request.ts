import axios from 'axios';
// 从ui框架中导入的消息提醒
import { message } from 'ant-design-vue';

export const instance = axios.create({
  baseURL: '/',
  // 超时报错
  timeout: 1000 * 60 * 5,
  headers: {
    'Content-Type': 'application/json'
  },
  // *是否开启cookies
  withCredentials: true
})

// 请求拦截器
instance.interceptors.request.use(config => {
  // 添加请求token（权限校验）
  // let userToken = window.localStorage.getItem('-token-');
  // if (userToken && config.headers) {
  //   config.headers.token = userToken;
  // }
  return Promise.resolve(config);
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use(response => {
  return response
}, error => {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break;
      case 401:
        error.message = '未授权，请重新登录'
        break;
      case 403:
        error.message = '拒绝访问'
        break;
      case 404:
        error.message = '请求错误,未找到该资源'
        break;
      case 405:
        error.message = '请求方法未允许'
        break;
      case 408:
        error.message = '请求超时'
        break;
      case 500:
        error.message = '服务器端出错'
        break;
      case 501:
        error.message = '网络未实现'
        break;
      case 502:
        error.message = '网络错误'
        break;
      case 503:
        error.message = '服务不可用'
        break;
      case 504:
        error.message = '网络超时'
        break;
      case 505:
        error.message = 'http版本不支持该请求'
        break;
      default:
        error.message = `连接错误${error.response.status}`
    }
    message.error(error.message)
  } else if (JSON.stringify(error).includes('timeout')) {
    // 超时处理
    error.message = '服务器响应超时'
    message.error(error.message)
  }
  return Promise.resolve(error.response)
})

export default instance;