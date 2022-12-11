export default {
  command: "keymap.keyup",
  execute: function (editor, e) {
    editor.keyboard.remove(e.code, e.keyCode);
    if (editor.shortcuts) {
      editor.shortcuts.execute(e, "keyup");
    }
  },
};
