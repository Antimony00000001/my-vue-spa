import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],

  // 添加下面这行，把 'my-vue-spa' 换成你自己的仓库名
  base: '/my-vue-spa/', 

  server: {
    host: '127.0.0.1'
  }
})