export default {
  command: "editor.layout.toggle.top",
  execute: function (editor) {
    var isShow = editor.configs.get("editor.layout.show.top");
    editor.configs.set("editor.layout.show.top", !isShow);
  },
};
