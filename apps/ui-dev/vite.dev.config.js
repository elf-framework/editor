import fm from "front-matter";
import * as glob from "glob";
import { defineConfig } from "vite";
import sapa from "vite-plugin-sapa";

import { existsSync, readFileSync, writeFileSync } from "fs";
import { readFile } from "fs/promises";
import path, { basename, dirname } from "path";

const layouts = {
  "pages/design-system": "DesignLayout",
  "pages/sapa": "SapaLayout",
  "pages/blog": "BlogLayout",
};

function ucwords(str) {
  return str.replace(/_-/g, " ").replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
}

function generateMarkdownMetaFile(entryFilePath, file) {
  // console.log(file);
  // mdx frontmatter check with @mdx-js/rollup
  const mdxContent = readFileSync(entryFilePath, { encoding: "utf-8" });
  // console.log(mdxContent);

  const mdxResult = fm(mdxContent);

  // title:   1. frontmatter title, 2. file name, 3. file name with ucwords, 4. file name with ucwords and replace _-, 5. file name with ucwords and replace _- and remove number
  // description
  // keywords

  let metaResult = mdxResult.attributes;
  if (metaResult) {
    // meta auto generate
    const metaFile = path.resolve(".", dirname(file), "meta.json");

    // console.log(metaResult);

    if (existsSync(metaFile) === false) {
      writeFileSync(metaFile, JSON.stringify(metaResult), {
        encoding: "utf-8",
      });
    }
  } else {
    metaResult = {
      description: "",
      keywords: "",
    };
  }

  let hasChangedMetaInfo = false;

  if (!metaResult.title) {
    metaResult.title = ucwords(basename(dirname(file)));
    hasChangedMetaInfo = true;
  }

  // layout 이 없을 때는 path 에 맞는 layout 을 미리 지정한다.
  if (!metaResult.layout) {
    metaResult.layout = "BlankLayout"; // default layout
    Object.entries(layouts).forEach(([key, value]) => {
      if (file.startsWith(key)) {
        metaResult.layout = value;
      }
    });

    hasChangedMetaInfo = true;
  }

  if (metaResult.filename != file) {
    metaResult.filename = file;
    hasChangedMetaInfo = true;
  }

  if (hasChangedMetaInfo) {
    const metaFile = path.resolve(".", dirname(file), "meta.json");
    writeFileSync(metaFile, JSON.stringify(metaResult), {
      encoding: "utf-8",
    });

    // update mdx frontmatter

    const newMdxContent = `---
${Object.entries(metaResult)
  .map(([key, value]) => {
    return `${key}: ${value}`;
  })
  .join("\n")}
---

${mdxResult.body}
`;

    writeFileSync(entryFilePath, newMdxContent, {
      encoding: "utf-8",
    });
  }

  const { title, description, keywords, layout, filename } = metaResult;
  const metaFile = path.resolve(".", dirname(file), "meta.json");
  const metaContent = readFileSync(metaFile, {
    encoding: "utf-8",
  });
  const oldMetaResult = JSON.parse(metaContent);

  if (
    oldMetaResult.title !== title ||
    oldMetaResult.description !== description ||
    oldMetaResult.keywords !== keywords ||
    oldMetaResult.layout !== layout ||
    oldMetaResult.filename !== filename
  ) {
    writeFileSync(metaFile, JSON.stringify(metaResult), {
      encoding: "utf-8",
    });
  }

  return metaResult;
}

function makeIndexEntries(indexTemplate, pageTemplate) {
  // index auto generate
  const entries = {};
  const files = glob.sync("pages/**/*.@(html|mdx)", {
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
      let entryFileName = file;
      let entryFilePath = path.resolve(__dirname, file);

      // mdx 일 경우 meta.json 파일을 생성한다.
      if (file.includes(".mdx")) {
        const indexFile = path.resolve(".", dirname(file), "index.html");
        const pageFile = path.resolve(".", dirname(file), "page.jsx");

        // create meta.json file
        const meta = generateMarkdownMetaFile(entryFilePath, file);

        const { title } = meta;

        // create index.html file
        if (!existsSync(indexFile)) {
          let content = indexTemplate;

          // title auto generate
          content = content.replace("{{title}}", title);
          writeFileSync(indexFile, content, { encoding: "utf-8" });
        }

        // create page.jsx file
        if (!existsSync(pageFile)) {
          writeFileSync(pageFile, pageTemplate, { encoding: "utf-8" });
        }

        // update entry file name
        entryFileName = file.replace(".mdx", ".html");
        entryFilePath = indexFile;
      }

      entries[entryFileName] = entryFilePath;
    });

  return entries;
}

export default defineConfig(async () => {
  const mdx = (await import("@mdx-js/rollup")).default;
  const remarkFrontmatter = (await import("remark-frontmatter")).default;
  const remarkGfm = (await import("remark-gfm")).default;
  const remarkMdxFrontmatter = (await import("remark-mdx-frontmatter")).default;
  // const remarkCodeMeta = (await import("remark-code-meta")).default;
  const rehypePrism = (await import("mdx-prism")).default;
  const rehypePrismPlus = (await import("rehype-prism-plus")).default;

  // load template file contents
  const indexTemplate = await readFile("./template/index.html", {
    encoding: "utf-8",
  });
  const pageTemplate = await readFile("./template/page.jsx", {
    encoding: "utf-8",
  });

  const entries = makeIndexEntries(indexTemplate, pageTemplate);

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
      rollupOptions: {
        input: {
          ui: path.resolve(__dirname, "index.html"),
          ...entries,
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
