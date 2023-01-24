import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),    ],
  resolve: {
    alias: {
      "@web3-react/walletconnect-connector": "@web3-react/walletconnect-connector/dist/walletconnect-connector.esm.js"
    }
  }
})
