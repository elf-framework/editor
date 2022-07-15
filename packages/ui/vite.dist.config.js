import { defineConfig } from "vite";
// import { sapa } from "vite-plugin-sapa";
import { viteStaticCopy } from "vite-plugin-static-copy";

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
      name: "ui",
      fileName: (format) => `ui.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["@elf-framework/sapa", "@elf-framework/color"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          "@elf-framework/sapa": "sapa",
          "@elf-framework/color": "color",
        },
      },
    },
  },
  plugins: [
    // sapa(),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(
            "../../node_modules",
            "@elf-framework/design-system/dist/index.css"
          ),
          dest: ".",
        },
      ],
    }),
  ],
});
