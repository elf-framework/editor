import {
  classnames,
  IF,
  KEYDOWN,
  KEYUP,
  useComponentRender,
} from "@elf-framework/sapa";

import { Editor, useEditor } from "./Editor";
const formElements = ["TEXTAREA", "INPUT", "SELECT"];
export class BaseEditor extends Editor {
  template() {
    useComponentRender("editor.plugin.activated");

    const editor = useEditor();

    return (
      <div
        class={classnames("elf--base-editor", {
          "full-screen": this.props.fullScreen,
          ...this.props.editorClass,
        })}
      >
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

  [KEYDOWN("document") + IF("isNotFormElement")](e) {
    this.$editor.commands.execute("keymap.keydown", e);
  }

  [KEYUP("document") + IF("isNotFormElement")](e) {
    this.$editor.commands.execute("keymap.keyup", e);
  }
}
