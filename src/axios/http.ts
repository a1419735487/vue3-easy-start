import request from './request'

const http = {
  get(url: string, params?: any) {
    const config: any = {
      method: 'get',
      url: url
    }
    if(params) config.params = params
    return request(config)
  },
  // 支持formdata
  post(url: string, params?: any) {
    const config: any = {
      method: 'post',
      url: url
    }
    if(params) config.data = params
    return request(config)
  },
  put(url: string, params?: any) {
    const config: any = {
      method: 'put',
      url: url
    }
    if(params) config.params = params
    return request(config)
  },
  delete(url: string, params?: any) {
    const config: any = {
      method: 'delete',
      url: url
    }
    if(params) config.params = params
    return request(config)
  }
}

export default http