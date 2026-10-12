import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Sophia-Han-Personal-Portfolio/',
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
})
