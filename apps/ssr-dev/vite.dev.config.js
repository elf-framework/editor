import { defineConfig } from "vite";
import sapa from "vite-plugin-sapa";
import vike from 'vike/plugin'
export default defineConfig({
  server: {
    watch: { usePolling: true },
  },
  esbuild: {
    jsxFactory: "createElementJsx",
    jsxFragment: "FragmentInstance",
    jsxInject: `import { createElementJsx, FragmentInstance } from "@elf-framework/sapa"`,
  },
  plugins: [sapa(), vike()],
});
