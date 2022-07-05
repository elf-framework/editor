const modules = import.meta.globEager("./icon_list/*.js");

let icons = {};

Object.entries(modules).forEach(([key, value]) => {
  key = key.replace("./icon_list/", "").replace(".js", "");
  icons[key] =
    typeof value.default === "function"
      ? value.default
      : `${value.default}`.trim();
});

function registIcon(obj = {}) {
  Object.entries(obj).forEach(([key, value]) => {
    icons[key] = value;
  });
}

export default {
  icons,
  registIcon,
};
