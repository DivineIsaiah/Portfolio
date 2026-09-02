import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Portfolio/',

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'projects.html'),
      }
    }
  }
})