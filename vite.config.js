import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Marketing-Website/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',      // or 'marketing.local' if you've set that in /etc/hosts
    port: 3000            // change to any port you prefer
  }
})