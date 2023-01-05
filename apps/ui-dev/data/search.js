const modules = import.meta.glob(
  [
    "../pages/introduction/**/*.meta.json",
    "../pages/introduction/**/*.mdx",
    "../pages/sapa/**/*.meta.json",
    "../pages/sapa/**/*.mdx",
    "../pages/design-system/**/*.meta.json",
    "../pages/design-system/**/*.mdx",
    "../pages/base-editor/**/*.meta.json",
    "../pages/base-editor/**/*.mdx",
  ],
  { eager: true }
);

const searchSet = {};

Object.entries(modules).forEach(([key, it]) => {
  const searchPath = key
    .replace("../pages", "")
    .replace(".meta.json", "")
    .replace(".mdx", "");

  const category = searchPath.split("/")[1];

  const path = "/pages" + searchPath + ".html";

  if (!searchSet[path]) {
    searchSet[path] = {
      path,
      category,
    };
  }

  if (key.endsWith(".meta.json")) {
    searchSet[path] = {
      ...searchSet[path],
      ...it,
    };
  } else {
    searchSet[path] = {
      ...searchSet[path],
      content: it.default,
    };
  }
});

export const searchData = Object.values(searchSet);
