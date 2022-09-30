import { defineConfig } from "vite";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    minify: false,
    esbuild: {
      keepNames: true,
    },
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "sapa",
      manifest: true,
      fileName: (format) => `sapa.${format}.js`,
    },
    rollupOptions: {
      output: {
        exports: "named",
      },
    },
  },
});
