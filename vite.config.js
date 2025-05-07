import { defineConfig } from 'vite'
import path from 'node:path'

export default defineConfig({
  build: {
    target: 'es2017',
    lib: {
      name: 'cssrxp',
      entry: './src/index.js',
      formats: ['es', 'iife', 'cjs', 'umd'],
      fileName: (f) => `index.${f}.js`
    },
    rollupOptions: {
      output: {
        exports: 'named'
      }
    }
  }
})
