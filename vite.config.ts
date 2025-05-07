import { defineConfig } from 'vite'
import path from 'node:path'

export default defineConfig({
  build: {
    target: 'es2017',
    lib: {
      name: 'cssrxp',
      entry: './src/index.ts',
      formats: ['es', 'iife', 'cjs', 'umd']
    },
    rollupOptions: {
      output: {
        exports: 'named'
      }
    }
  }
})
