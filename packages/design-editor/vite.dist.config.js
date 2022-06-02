import { defineConfig } from "vite";
import copy from "rollup-plugin-copy";


import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: "createElementJsx",
    jsxFragment: "FragmentInstance",
    jsxInject: `import { createElementJsx, FragmentInstance } from "@elf/sapa"`,
  },
  resolve: {
    alias: {
      "elf/ui": path.resolve(__dirname, "./src/elf/ui"),
      "elf/core": path.resolve(__dirname, "./src/elf/core"),      
      elf: path.resolve(__dirname, "./src/elf"),
      engine: path.resolve(__dirname, "./src/engine"),      
      style: path.resolve(__dirname, "./src/scss"),
      plugins: path.resolve(__dirname, "./src/plugins"),
      "export-library": path.resolve(__dirname, "./src/export-library"),
      "apps/common": path.resolve(__dirname, "./src/apps/common"),
      apps: path.resolve(__dirname, "./src/apps"),
    },
  },
  optimizeDeps: {
    include: ['@elf/editor']
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false
      }
    }
  },
  build: {
    minify: false,
    commonjsOptions: {
      include: [/@elf\/editor/, /node_modules/]
    },
    emptyOutDir: false,    
    lib: {
      entry: path.resolve(__dirname, "src/apps/index.js"),
      name: "elf",
      manifest: true,
      fileName: (format) => `design-editor.${format}.js`,
    },
    rollupOptions: {
      // 라이브러리에 포함하지 않을 디펜던시를 명시해주세요
      external: [
        '@elf/sapa',
        '@elf/color',
        '@elf/icon',
        '@elf/editor',
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          "@elf/sapa": 'sapa',
          "@elf/color": 'color',
          "@elf/icon": "icon",
          "@elf/editor": 'editor',
        }
      }      
    }    
  },
  plugins: [
    copy({
      targets: [{ src: "index.d.ts", dest: "dist/" }],
      hook: "writeBundle",
    })
  ],
});
