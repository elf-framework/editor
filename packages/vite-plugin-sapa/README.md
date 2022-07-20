# vite-plugin-sapa

## support sapa hmr 

sapa is supporting hmr feature at vite;
Use hmr(Hot Module Reloading) feature in develop environment 

```js
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
  plugins: [
    sapa({
      hmr: true,
    }),
  ],
});



```