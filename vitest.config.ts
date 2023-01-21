import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    // @ts-expect-error
    vue()
  ],
  test: {
    include: ['src/**/__test__/**/*.{test,spec}.{ts,tsx}'],
    environment: 'happy-dom',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './test/unit/coverage'
    }
  }
})
