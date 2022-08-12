import { defineConfig } from "vite";
import sapa from "vite-plugin-sapa";
import ssr from "vite-plugin-ssr/plugin";
export default defineConfig({
  server: {
    watch: { usePolling: true },
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
      "@elf-framework/design-system",
    ],
  },
  plugins: [sapa(), ssr()],
});
