import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import stylelintPlugin from "vite-plugin-stylelint"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    stylelintPlugin({
      fix: true,
    }),
  ],
})
