import { defineConfig } from "vite";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: "createElementJsx",
    jsxFragment: "FragmentInstance",
    jsxInject: `import { createElementJsx } from "@elf-framework/sapa"`,
  },
  build: {
    emptyOutDir: false,
    minify: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "sapa-router",
      fileName: (format) => `sapa-router.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["@elf-framework/sapa"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          "@elf-framework/sapa": "sapa",
        },
      },
    },
  },
});
