export default {
  command: "keymap.keydown",
  execute: function (editor, e) {
    editor.keyboard.add(e.code, e.keyCode, e);

    if (editor.shortcuts) {
      editor.shortcuts.execute(e, "keydown");
    }
  },
};
