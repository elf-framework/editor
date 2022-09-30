import { defineConfig } from "vite";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // cssCodeSplit: true,
    emptyOutDir: false,
    minify: true,
    lib: {
      entry: path.resolve(__dirname, "src/scss/index.scss"),
      name: "DesignSystem",
    },
  },
});
