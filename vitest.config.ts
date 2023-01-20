import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue()
  ],
  test: {
    include: ['src/**/__test__/**/*.{test,spec}.{ts,tsx}'],
    environment: 'happy-dom'
  }
})
