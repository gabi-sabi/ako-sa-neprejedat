import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const getBackEndUrl = () => {
  return (
    process.env.ENVIRONMENT === "PRODUCTION" ? "https://ako-sa-neprejedat.onrender.com" : 'http://localhost:3500' // Express server's port
  )
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: getBackEndUrl(),
        changeOrigin: true,
        secure: false,
      },
    },
  },
})


