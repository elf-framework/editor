export default {
  command: "toggle.theme",
  execute: function (editor) {
    var theme = editor.configs.get("editor.theme");
    editor.configs.set("editor.theme", theme === "light" ? "dark" : "light");
  },
};
