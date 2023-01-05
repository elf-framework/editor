const modules = import.meta.glob(
  ["../pages/**/*.meta.json", "../pages/**/*.mdx"],
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
