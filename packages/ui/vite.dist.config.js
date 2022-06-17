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
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "ui",
      manifest: true,
      fileName: (format) => `ui.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["@elf-framework/sapa", "@elf-framework/design-system", "@elf-framework/color"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          "@elf-framework/sapa": "sapa",
          "@elf-framework/design-system": "designSystem",
          "@elf-framework/color": "color",
        },
      },
    },
  },
});
