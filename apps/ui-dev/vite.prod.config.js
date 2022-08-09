import * as glob from "glob";
import { defineConfig } from "vite";

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
        ui: path.resolve(__dirname, "index.html"),
        ...entries,
      },
    },
  },
});
