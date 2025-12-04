import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/', // TODO: Replace 'portfolio' with your GitHub repository name
  plugins: [
    react(),
    tailwindcss(),
  ],
})
