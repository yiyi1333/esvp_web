import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), WindiCSS()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '~': path.resolve(__dirname, 'src'),
        }
    },


    server: {
        // 端口号
        port: 5173,
        // 是否自动在浏览器打开
        open: true,
        // 是否开启 https
        https: false
    }
})
