import { defineConfig } from "vite";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: "createElementJsx",
    jsxFragment: "FragmentInstance",
    jsxInject: `import { createElementJsx, FragmentInstance } from "@elf-framework/sapa"`,
  },
  build: {
    outDir: path.join(__dirname, "./docs"),
    rollupOptions: {
      input: {
        editor: path.resolve(__dirname, "index.html"),
      },
    },
  },
});
