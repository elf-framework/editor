import { defineConfig } from "vite";

export default defineConfig({
  server: {
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
      "@elf-framework/sapa-router",
      "@elf-framework/icon",
      "@elf-framework/design-system",
    ],
  },
});
