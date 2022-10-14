import { defineConfig } from "vite";
import sapa from "vite-plugin-sapa";

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
  optimizeDeps: {
    exclude: [
      "@elf-framework/sapa",
      "@elf-framework/ui",
      "@elf-framework/icon",
      "@elf-framework/sapa-router",
      "@elf-framework/design-tokens",
      "@elf-framework/design-system",
    ],
  },
  plugins: [sapa()],
});
