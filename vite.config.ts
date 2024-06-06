import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: './', // 基本パスの設定
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
