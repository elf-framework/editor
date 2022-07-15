import { defineConfig } from "vite";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "color",
      fileName: (format) => `color.${format}.js`,
    },
  },
});
