export default {
  command: "editor.layout.toggle.right",
  execute: function (editor) {
    var isShow = editor.configs.get("editor.layout.show.right");
    editor.configs.set("editor.layout.show.right", !isShow);
  },
};
