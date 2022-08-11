import { defineConfig } from "vite";
import ssr from "vite-plugin-ssr/plugin";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: "createElementJsx",
    jsxFragment: "FragmentInstance",
    jsxInject: `import { createElementJsx, FragmentInstance } from "@elf-framework/sapa"`,
  },
  build: {
    outDir: "docs/",
  },
  plugins: [ssr()],
});
