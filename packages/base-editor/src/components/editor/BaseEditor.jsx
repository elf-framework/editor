import { classnames, useComponentRender } from "@elf-framework/sapa";

import { Editor, useEditor } from "./Editor";

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
}
