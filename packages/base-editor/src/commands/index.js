import editorLayoutToggleBottom from "./editor.layout.toggle.bottom";
import editorLayoutToggleLeft from "./editor.layout.toggle.left";
import editorLayoutToggleRight from "./editor.layout.toggle.right";
import editorLayoutToggleTop from "./editor.layout.toggle.top";
import keymapKeydown from "./keymap.keydown";
import keymapKeyup from "./keymap.keyup";
import toggleTheme from "./toggle.theme";

export default [
  keymapKeydown,
  keymapKeyup,
  toggleTheme,

  editorLayoutToggleTop,
  editorLayoutToggleRight,
  editorLayoutToggleLeft,
  editorLayoutToggleBottom,
];
