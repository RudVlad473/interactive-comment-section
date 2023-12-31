import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import stylelintPlugin from "vite-plugin-stylelint"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    stylelintPlugin({
      fix: true,
    }),
    tsconfigPaths({
      
    }),
  ],
})
