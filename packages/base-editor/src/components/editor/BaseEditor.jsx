import {
  classnames,
  DEBOUNCE,
  IF,
  KEYDOWN,
  KEYUP,
  RESIZE,
  SUBSCRIBE,
  SUBSCRIBE_SELF,
  useComponentRender,
  useMemo,
} from "@elf-framework/sapa";

import { Editor, useEditor } from "./Editor";
const formElements = ["TEXTAREA", "INPUT", "SELECT"];
export class BaseEditor extends Editor {
  template() {
    const { editorClass, fullScreen } = this.props;

    useComponentRender("editor.plugin.activated");

    const editor = useEditor();

    const localClass = useMemo(() => {
      return classnames("elf--base-editor", {
        "full-screen": fullScreen,
        [editorClass]: true,
      });
    }, [editorClass, fullScreen]);

    return (
      <div class={localClass}>
        {/* 렌더링 영역 중간에 보여지는 UI 는 renderView 로 지정한다. */}
        {editor.isPluginActivated ? editor.getUIList("renderView") : undefined}
      </div>
    );
  }

  isNotFormElement(e) {
    var tagName = e.target.tagName;

    if (formElements.includes(tagName)) return false;
    else if (e.target.getAttribute("contenteditable") === "true") return false;

    return true;
  }

  updateTheme() {
    const isDark =
      this.$editor.configs.get("editor.theme") === "light" ? false : true;
    document.body.classList.toggle("theme-dark", isDark);
  }

  [SUBSCRIBE_SELF("editor.plugin.activated")]() {
    this.updateTheme();
  }

  [SUBSCRIBE("config:editor.theme")]() {
    this.updateTheme();
  }

  [KEYDOWN("document") + IF("isNotFormElement")](e) {
    this.$editor.commands.execute("keymap.keydown", e);
  }

  [KEYUP("document") + IF("isNotFormElement")](e) {
    this.$editor.commands.execute("keymap.keyup", e);
  }

  [RESIZE("window") + DEBOUNCE(10)]() {
    this.$editor.emit("resize.window");
  }
}
