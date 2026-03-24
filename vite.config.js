import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Esto asegura que las rutas sean absolutas desde la raíz
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})