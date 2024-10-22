import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    // <-- config de vitest
    environment: 'happy-dom',
  },
})
