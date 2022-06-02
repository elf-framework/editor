import { defineConfig } from "vite";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: path.join(__dirname, "./docs"),
    rollupOptions: {
      input: {
        editor: path.resolve(__dirname, "index.html"),
      },
    },
  },
});
