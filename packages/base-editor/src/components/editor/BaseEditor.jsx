import { classnames } from "@elf-framework/sapa";

import { Editor } from "./Editor";

export class BaseEditor extends Editor {
  template() {
    console.log("base editor render");
    const { content } = this.props;
    const View = this.$editor.getUI("view");
    return (
      <div
        class={classnames("elf--base-editor", {
          "full-screen": this.props.fullScreen,
          ...this.props.editorClass,
        })}
      >
        {content}
        <View type="view" />
      </div>
    );
  }
}
