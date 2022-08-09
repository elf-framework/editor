import * as glob from "glob";
import { defineConfig } from "vite";
import sapa from "vite-plugin-sapa";

import path from "path";

const entries = {};
const files = glob.sync("pages/**/*.html", {
  dot: true,
  // node_modules 은 검색대상에서 제외
  ignore: ["node_modules/**"],
});

files.forEach((it) => {
  const file = path.basename(it, ".html");
  entries[file] = path.resolve(__dirname, it);
});

export default defineConfig({
  server: {
    hmr: {
      protocol: "ws",
      host: "localhost",
    },
    watch: {
      usePolling: true,
      ignored: ["!**/node_modules/@elf-framework/**"],
    },
  },
  esbuild: {
    jsxFactory: "createElementJsx",
    jsxFragment: "FragmentInstance",
    jsxInject: `import { createElementJsx, FragmentInstance } from "@elf-framework/sapa"`,
  },
  build: {
    rollupOptions: {
      input: {
        ui: path.resolve(__dirname, "index.html"),
        ...entries,
      },
    },
  },
  optimizeDeps: {
    exclude: [
      "@elf-framework/design-tokens",
      "@elf-framework/sapa",
      "@elf-framework/ui",
      "@elf-framework/sapa-router",
      "@elf-framework/design-system",
    ],
  },
  plugins: [sapa()],
});
