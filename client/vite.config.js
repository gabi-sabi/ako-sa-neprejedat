import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173, // Vite's port
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3500', // Express server's port
        changeOrigin: true,
        secure: false,
      },
    },
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
})
