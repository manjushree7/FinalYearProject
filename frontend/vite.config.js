import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@stallOwner': path.resolve(__dirname, '../StallOwner/client/src'),  // go one level up
      '@frontend': path.resolve(__dirname, 'src'),                         // local src
    },
  },
  server: {
    fs: {
      allow: ['..'],  // still needed if importing outside this folder
    },
  },
})
