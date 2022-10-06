import { defineConfig } from "vite";
import sapa from "vite-plugin-sapa";

import path from "path";

export default defineConfig(async () => {
  return {
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
        },
      },
    },
    optimizeDeps: {
      exclude: ["@elf-framework/sapa"],
    },
    plugins: [sapa()],
  };
});
