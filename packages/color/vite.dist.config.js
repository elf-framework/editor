import { defineConfig } from "vite";
import copy from "rollup-plugin-copy";


import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "color",
      manifest: true,
      fileName: (format) => `color.${format}.js`,
    },
  },
  plugins: [
    copy({
      targets: [{ src: "index.d.ts", dest: "dist/" }],
      hook: "writeBundle",
    })
  ],
});
