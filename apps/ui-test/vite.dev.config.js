import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    jsxFactory: "createElementJsx",
    jsxFragment: "FragmentInstance",
    jsxInject: `import { createElementJsx, FragmentInstance } from "@elf-framework/sapa"`,
  },
  optimizeDeps: {
    link: [
      "@elf-framework/sapa",
      "@elf-framework/ui",
      "@elf-framework/color",
      "@elf-framework/design-system",
      "@elf-framework/icon",
    ],
  },
});
