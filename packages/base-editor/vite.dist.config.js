import { defineConfig } from "vite";
// import { sapa } from "vite-plugin-sapa";
// import { viteStaticCopy } from "vite-plugin-static-copy";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: "createElementJsx",
    jsxFragment: "FragmentInstance",
    jsxInject: `import { createElementJsx, FragmentInstance } from "@elf-framework/sapa"`,
  },
  build: {
    emptyOutDir: false,
    minify: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "baseEditor",
      fileName: (format) => `base-editor.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        "@elf-framework/sapa",
        "@elf-framework/color",
        "@elf-framework/ui",
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          "@elf-framework/sapa": "sapa",
          "@elf-framework/color": "color",
          "@elf-framework/ui": "ui",
        },
      },
    },
  },
});
