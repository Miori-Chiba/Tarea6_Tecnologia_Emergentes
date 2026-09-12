import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Tarea6_Tecnologia_Emergentes/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
