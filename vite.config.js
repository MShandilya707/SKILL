import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // This allows external access
    port: process.env.PORT || 4173,  // Use Railway's assigned port
  }
})
