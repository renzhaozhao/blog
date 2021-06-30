/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-react-deploy/',
  // 路径别名
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  plugins: [reactRefresh()],
  // css预处理
  css: {
    postcss: {
      plugins: [require('autoprefixer')],
    },
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve(
            'src/less/config.less'
          )}";`,
          'primary-color': '#26334d',
        },
        // additionalData: '@font-color: black;@main-color:red;',
        javascriptEnabled: true,
      },
    },
  },
})
