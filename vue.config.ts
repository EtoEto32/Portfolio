import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
  base: '/Portfolio/',  // 必ずリポジトリ名を置き換えてください
  plugins: [
    vue(),
    vuetify({ autoImport: true })
  ]
});
