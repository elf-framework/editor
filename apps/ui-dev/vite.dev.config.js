import { defineConfig } from "vite";
import sapa from "vite-plugin-sapa";

import path from "path";

import { mdxGenerator } from "./build/mdx-generator";

export default defineConfig(async () => {
  const mdx = (await import("@mdx-js/rollup")).default;
  const remarkFrontmatter = (await import("remark-frontmatter")).default;
  const remarkGfm = (await import("remark-gfm")).default;
  const remarkMdxFrontmatter = (await import("remark-mdx-frontmatter")).default;
  // const remarkCodeMeta = (await import("remark-code-meta")).default;
  const rehypePrism = (await import("mdx-prism")).default;
  const rehypePrismPlus = (await import("rehype-prism-plus")).default;

  return {
    // appType: "mpa",
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
      manifest: true,
      rollupOptions: {
        input: {
          ui: path.resolve(__dirname, "index.html"),
        },
      },
    },
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./"),
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", "md", "mdx"],
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
    plugins: [
      sapa(),
      mdxGenerator(),
      mdx({
        jsxRuntime: "classic",
        pragma: "sapa.createElementJsx",
        pragmaFrag: "sapa.FragmentInstance",
        pragmaImportSource: "@elf-framework/sapa",
        remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
        rehypePlugins: [rehypePrism, rehypePrismPlus],
      }),
    ],
  };
});
