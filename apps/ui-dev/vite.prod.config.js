import * as glob from "glob";
import { defineConfig } from "vite";

import path from "path";

const entries = {};
const files = glob.sync("pages/**/*.html", {
  dot: true,
  // node_modules 은 검색대상에서 제외
  ignore: ["node_modules/**"],
});

files
  .filter((file) => {
    return file.includes("ui-component") === false;
  })
  .forEach((it) => {
    const file = it;
    entries[file] = path.resolve(__dirname, it);
  });

export default defineConfig(async () => {
  const mdx = (await import("@mdx-js/rollup")).default;
  const remarkFrontmatter = (await import("remark-frontmatter")).default;
  const remarkGfm = (await import("remark-gfm")).default;
  const remarkMdxFrontmatter = (await import("remark-mdx-frontmatter")).default;
  // const remarkCodeMeta = (await import("remark-code-meta")).default;
  const rehypePrism = (await import("mdx-prism")).default;
  const rehypePrismPlus = (await import("rehype-prism-plus")).default;

  return {
    esbuild: {
      jsxFactory: "createElementJsx",
      jsxFragment: "FragmentInstance",
      jsxInject: `import { createElementJsx, FragmentInstance } from "@elf-framework/sapa"`,
    },
    build: {
      outDir: path.join(__dirname, "./docs"),
      rollupOptions: {
        input: {
          ui: path.resolve(__dirname, "index.html"),
          ...entries,
        },
      },
    },
    resolve: {
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", "md", "mdx"],
    },
    plugins: [
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
