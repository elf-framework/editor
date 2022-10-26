import chokidar from "chokidar";
import fm from "front-matter";
import * as glob from "glob";

import { existsSync, readFileSync, unlinkSync, writeFileSync } from "fs";
import path, { basename, dirname, extname } from "path";

function writeContent(file, content) {
  return writeFileSync(file, content, { encoding: "utf-8" });
}

function readContent(file) {
  return readFileSync(file, {
    encoding: "utf-8",
  });
}

function ucwords(str) {
  return str.replace(/_-/g, " ").replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
}

function getFilePath(realPath, ext) {
  const entryBaseName = basename(realPath, extname(realPath));
  const entryDirName = dirname(realPath);
  return path.resolve(entryDirName, entryBaseName + ext);
}

function getMetaFilePath(realPath) {
  return getFilePath(realPath, ".meta.json");
}

function getHtmlFilePath(realPath) {
  return getFilePath(realPath, ".html");
}

function getJsxFilePath(realPath) {
  return getFilePath(realPath, ".jsx");
}

function getTitle(realPath) {
  const entryBaseName = basename(realPath, extname(realPath));

  if (entryBaseName === "index") {
    return ucwords(basename(dirname(realPath)));
  }

  return ucwords(entryBaseName);
}

function removeFile(file) {
  if (existsSync(file)) {
    unlinkSync(file);
  }
}

// entryFilePath: realPath
// file: relative path
function generateMarkdownMetaFile(entryRelativeFileName, entryFilePath) {
  const mdxContent = readContent(entryFilePath);
  const mdxResult = fm(mdxContent);

  // github source link
  const metaFile = getMetaFilePath(entryFilePath);

  let metaResult = mdxResult.attributes;
  if (metaResult) {
    // meta auto generate

    if (existsSync(metaFile) === false) {
      writeContent(metaFile, JSON.stringify(metaResult));
    }
  } else {
    metaResult = {
      description: "",
      keywords: "",
    };
  }

  let hasChangedMetaInfo = false;

  if (!metaResult.title) {
    metaResult.title = getTitle(entryFilePath);

    hasChangedMetaInfo = true;
  }

  // layout 이 없을 때는 path 에 맞는 layout 을 미리 지정한다.
  if (!metaResult.layout) {
    metaResult.layout = "BlankLayout"; // default layout
    Object.entries(layouts).forEach(([key, value]) => {
      if (entryRelativeFileName.startsWith(key)) {
        metaResult.layout = value;
      }
    });

    hasChangedMetaInfo = true;
  }

  if (hasChangedMetaInfo) {
    writeContent(metaFile, JSON.stringify(metaResult));

    // update mdx frontmatter

    const newMdxContent = `---
${Object.entries(metaResult)
  .map(([key, value]) => {
    return `${key}: ${value}`;
  })
  .join("\n")}
---
  
${mdxResult.body}`;

    writeContent(entryFilePath, newMdxContent);
  }

  // meta 정보 읽어서 다시 갱신
  const { title, description, keywords, layout } = metaResult;
  const metaContent = readContent(metaFile);
  const oldMetaResult = JSON.parse(metaContent);

  if (
    oldMetaResult.title !== title ||
    oldMetaResult.description !== description ||
    oldMetaResult.keywords !== keywords ||
    oldMetaResult.layout !== layout
  ) {
    writeContent(metaFile, JSON.stringify(metaResult));
  }

  return metaResult;
}

function generateHtmlFile(realpath) {
  const docFile = realpath;
  const relativeDocFile = docFile.replace(PAGE_ROOT_DIR, "");

  let entryRelativeFileName = relativeDocFile;
  let entryFilePath = docFile;
  let entryDirName = dirname(entryRelativeFileName);
  let entryBaseName = basename(entryRelativeFileName);
  let entryFileName = basename(
    entryRelativeFileName,
    extname(entryRelativeFileName)
  );
  let entryExtName = extname(entryRelativeFileName);
  let htmlFile = getHtmlFilePath(entryFilePath);
  let jsxFile = getJsxFilePath(entryFilePath);

  // mdx 일 경우 meta.json 파일을 생성한다.
  if (entryExtName === ".mdx") {
    // create meta.json file
    const meta = generateMarkdownMetaFile(
      entryRelativeFileName,
      entryFilePath,
      entryDirName,
      entryBaseName,
      entryExtName
    );

    const { title, keywords, description } = meta;

    // create index.html file
    let content = indexTemplate;

    // title auto generate
    content = content.replace("{{title}}", title);
    content = content.replace("{{keywords}}", keywords);
    content = content.replace("{{description}}", description);
    content = content.replace(
      "{{entryFileName}}",
      "./" + entryFileName + ".jsx"
    );

    writeContent(htmlFile, content);

    // create page.jsx file
    //   if (!existsSync(pageFile)) {
    let page = pageTemplate;

    page = page.replace("{{filename}}", entryRelativeFileName);
    page = page.replace("{{mdxFilePath}}", "./" + entryBaseName);
    writeContent(jsxFile, page);
  } else if (entryExtName === ".jsx" || entryExtName === ".tsx") {
    // mdx 가 있으면 mdx 가 처리하도록 넘어간다.
    const mdxFile = getFilePath(entryFilePath, ".mdx");

    if (existsSync(mdxFile)) {
      return;
    }

    // mdx 가 없으면 jsx 를 기준으로 html 을 변화시킨다.

    // create index.html file
    let content = indexTemplate;
    const title =
      entryBaseName === "index"
        ? ucwords(basename(entryDirName))
        : ucwords(entryBaseName);
    // title auto generate
    content = content.replace("{{title}}", title);
    content = content.replace(
      "{{entryFileName}}",
      "./" + entryFileName + entryExtName
    );

    writeContent(htmlFile, content);
  } else if (entryExtName === ".html") {
    // noop
    // html 은 그대로를 표현하기 때문에 따로 파일을 생성하지 않는다.
  }
}

/**
 * @deprecated
 *
 * mdx 파일 이름을 기준으로 html 파일을 생성한다.
 *
 * 1. {filename}.html 을 생성한다.
 * 2. {filename}.meta.json 을 생성한다.
 * 3. {filename}.jsx 를 생성한다.
 *
 *
 * @returns
 */
function makeIndexEntries() {
  // index auto generate
  const entries = {};
  const files = glob.sync(PAGE_ROOT + "/pages/**/*.@(html|jsx|mdx)", {
    dot: true,
    // node_modules 은 검색대상에서 제외
    ignore: ["node_modules/**"],
  });

  files
    .filter((file) => {
      return file.includes("ui-component") === false;
    })
    .forEach((it) => {
      const docFile = it;

      const relativeDocFile = docFile.replace(PAGE_ROOT_DIR, "");

      const isIgnoreFile = ignoreFiles.some((ignoredFile) => {
        if (relativeDocFile.includes(ignoredFile)) {
          return true;
        }
      });

      if (isIgnoreFile) return;

      let entryRelativeFileName = relativeDocFile;
      let entryFilePath = docFile;
      let entryDirName = dirname(entryRelativeFileName);
      let entryBaseName = basename(entryRelativeFileName);
      let entryFileName = basename(
        entryRelativeFileName,
        extname(entryRelativeFileName)
      );
      let entryExtName = extname(entryRelativeFileName);
      let htmlFile = getHtmlFilePath(entryFilePath);
      let jsxFile = getJsxFilePath(entryFilePath);

      let entryTargetFileName = entryRelativeFileName;
      let entryTargetFilePath = entryFilePath;
      // mdx 일 경우 meta.json 파일을 생성한다.
      if (entryExtName === ".mdx") {
        // create meta.json file
        const meta = generateMarkdownMetaFile(
          entryRelativeFileName,
          entryFilePath,
          entryDirName,
          entryBaseName,
          entryExtName
        );

        const { title } = meta;

        // create index.html file
        let content = indexTemplate;

        // title auto generate
        content = content.replace("{{title}}", title);
        content = content.replace(
          "{{entryFileName}}",
          "./" + entryFileName + ".jsx"
        );

        writeContent(htmlFile, content);

        // create page.jsx file
        //   if (!existsSync(pageFile)) {
        let page = pageTemplate;

        page = page.replace("{{filename}}", entryRelativeFileName);
        page = page.replace("{{mdxFilePath}}", "./" + entryBaseName);
        writeContent(jsxFile, page);

        entryTargetFileName = entryRelativeFileName.replace(".mdx", ".html");
        entryTargetFilePath = htmlFile;
      } else if (entryExtName === ".jsx" || entryExtName === ".tsx") {
        // mdx 가 있으면 mdx 가 처리하도록 넘어간다.
        const mdxFile = getFilePath(entryFilePath, ".mdx");

        if (existsSync(mdxFile)) {
          return;
        }

        // mdx 가 없으면 jsx 를 기준으로 html 을 변화시킨다.

        // create index.html file
        let content = indexTemplate;
        const title =
          entryBaseName === "index"
            ? ucwords(basename(entryDirName))
            : ucwords(entryBaseName);
        // title auto generate
        content = content.replace("{{title}}", title);
        content = content.replace(
          "{{entryFileName}}",
          "./" + entryBaseName + entryExtName
        );

        writeContent(htmlFile, content);
      } else if (entryExtName === ".html") {
        // noop
        // html 은 그대로를 표현하기 때문에 따로 파일을 생성하지 않는다.
      }

      // update entry file name

      entries[entryTargetFileName] = entryTargetFilePath;
    });

  // filePath 가 .html 인 것만 entries 에 추가해준다.
  const newEntries = {};
  Object.entries(entries).forEach(([file, filePath]) => {
    if (file.endsWith(".html")) {
      newEntries[file] = filePath;
    }
  });

  return newEntries;
}

/**
 * pages/ 디렉토리를 가지고 있는지 체크
 */
function isPagesDirectory(path) {
  return path.replace(PAGE_ROOT_DIR, "").startsWith("pages/");
}

const PAGE_ROOT = path.resolve(__dirname, "..");
const PAGE_ROOT_DIR = PAGE_ROOT + "/";

// load template file contents
const indexTemplate = readContent("./template/index.html");
const pageTemplate = readContent("./template/page.jsx");

const layouts = {
  "pages/design-system": "DesignLayout",
  "pages/sapa": "SapaLayout",
  "pages/blog": "BlogLayout",
  "pages/introduction": "MainLayout",
  "pages/icon": "IconLayout",
  "pages/base-editor": "BaseEditorLayout",
};

const ignoreFiles = ["main/App.jsx", "main/AppBody.jsx", "main/data.jdx"];

export function mdxGenerator() {
  let command, config, rootDir;
  let watcher;
  return [
    {
      name: "sapa-router",
      enforce: "pre",
      async config(config) {
        // const entries = makeIndexEntries();

        config.build.rollupOptions.input = {
          ...config.build.rollupOptions.input,
          // ...entries,
        };

        return config;
      },
      configResolved(resolvedConfig) {
        config = resolvedConfig;
        rootDir = resolvedConfig.root;
        command = resolvedConfig.command;
      },
      buildStart() {
        // makeIndexEntries();

        if (command === "serve") {
          const watchDirFullPath = path.join(
            rootDir,
            config.watchDirectory || "."
          );

          watcher = chokidar.watch(watchDirFullPath, {
            ignoreInitial: true,
          });

          watcher
            .on("add", function (path) {
              if (isPagesDirectory(path) === false) return;

              console.log("File", path, "has been added");
              generateHtmlFile(path);
            })
            .on("change", function (path) {
              //   console.log("File", path, "has been changed");
              generateHtmlFile(path);
            })
            .on("unlink", function (path) {
              if (isPagesDirectory(path) === false) return;
              console.log("File", path, "has been removed");
              const dir = dirname(path);
              //   const filename = basename(path);
              const name = basename(path, extname(path));

              removeFile(dir + "/" + name + ".html");
              removeFile(dir + "/" + name + ".jsx");
              removeFile(dir + "/" + name + ".mdx");
              removeFile(dir + "/" + name + ".meta.json");

              //   makeIndexEntries();
            })
            .on("error", function (error) {
              console.error("Error happened", error);
            });
        }
      },
      buildEnd() {
        console.log("build end");
        watcher?.close();
      },
    },
  ];
}
