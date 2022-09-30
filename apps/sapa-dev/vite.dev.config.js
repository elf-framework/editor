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
  const file = it;
  entries[file] = path.resolve(__dirname, it);
});

export default defineConfig(async () => {
  return {
    // appType: "mpa",
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
    resolve: {
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", "md", "mdx"],
    },
    optimizeDeps: {
      exclude: ["@elf-framework/sapa"],
    },
    plugins: [sapa()],
  };
});
