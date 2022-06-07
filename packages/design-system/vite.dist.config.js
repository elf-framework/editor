import { defineConfig } from "vite";

import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        charset: false
      }
    }
  },
  build: {
    emptyOutDir: false,
    minify: false,
    lib: {
      entry: path.resolve(__dirname, "src/scss/index.scss"),
      name: "DesignSystem",
      manifest: true,
      fileName: (format) => `design-system.${format}.js`,
    }
  }
});
