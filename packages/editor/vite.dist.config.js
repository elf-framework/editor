import { defineConfig } from "vite";
import copy from "rollup-plugin-copy";


import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: "createElementJsx",
    jsxFragment: "FragmentInstance",
    jsxInject: `import { createElementJsx, FragmentInstance } from "@elf-framework/sapa"`,
  },
  resolve: {
    alias: {
      "elf/ui": path.resolve(__dirname, "./src/elf/ui"),
      "elf/core": path.resolve(__dirname, "./src/elf/core"),      
      elf: path.resolve(__dirname, "./src/elf"), 
      style: path.resolve(__dirname, "./src/scss"),
      plugins: path.resolve(__dirname, "./src/plugins"),
      "export-library": path.resolve(__dirname, "./src/export-library"),
      "apps/common": path.resolve(__dirname, "./src/apps/common"),
      apps: path.resolve(__dirname, "./src/apps"),
    },
  },
  optimizeDeps: {
    include: ['@elf-framework/color', '@elf-framework/icon', '@elf-framework/sapa']
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
      include: [/@elf\/color/, /@elf\/icon/, /@elf\/sapa/, /node_modules/]
    },    
    emptyOutDir: false,    
    lib: {
      entry: path.resolve(__dirname, "src/apps/index.js"),
      name: "elf",
      manifest: true,
      fileName: (format) => `editor.${format}.js`,
    },
    rollupOptions: {
      // 라이브러리에 포함하지 않을 디펜던시를 명시해주세요
      external: [
        '@elf-framework/sapa',
        '@elf-framework/color',
        '@elf-framework/icon',
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          "@elf-framework/sapa": 'sapa',
          "@elf-framework/color": 'color',
          "@elf-framework/icon": 'icon',
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
