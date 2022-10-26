export default {
  command: "keymap.keyup",
  execute: function (editor, e) {
    if (editor.shortcuts) {
      editor.shortcuts.execute(e, "keyup");
    }
  },
};
