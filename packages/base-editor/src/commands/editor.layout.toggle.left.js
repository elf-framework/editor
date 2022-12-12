export default {
  command: "editor.layout.toggle.left",
  execute: function (editor) {
    var isShow = editor.configs.get("editor.layout.show.left");
    editor.configs.set("editor.layout.show.left", !isShow);
  },
};
