import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import copy from "rollup-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    rollupOptions:{
      input: ["index.html", "src/background.ts", "src/content.ts"],
      output: {
        chunkFileNames: "[name].[hash].js",
        assetFileNames: "[name].[hash].[ext]",
        entryFileNames: "[name].js",
        dir: "dist",
      }
    }
  },
  plugins: [
    react(),    
    copy({
      targets: [
        { src: "src/manifest.json", dest: "dist" },
        { src: "src/assets", dest: "dist" },
      ],
      hook: "writeBundle"})
    ],
})
