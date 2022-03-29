import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path"
// 组件无需导入注册
import Components from 'unplugin-vue-components/vite'
// 引入所需的UI框架（这里用NaiveUi举例，更多支持详见目录）
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [NaiveUiResolver()],
    })
  ],
  resolve: {
    // 别名配置
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      }
    ]
  },
  server: {
    // 代理配置
    proxy: {
      '/API': {
        target: 'http://api:port',
        rewrite: path => path.replace(/^\/API/, ''),
        changeOrigin: true
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // less全局变量
        modifyVars: {}
      }
    }
  }
})
