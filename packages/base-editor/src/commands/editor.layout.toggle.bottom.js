export default {
  command: "editor.layout.toggle.bottom",
  execute: function (editor) {
    var isShow = editor.configs.get("editor.layout.show.bottom");
    editor.configs.set("editor.layout.show.bottom", !isShow);
  },
};
