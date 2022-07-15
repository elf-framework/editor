import { classnames } from "@elf-framework/sapa";

import { Editor } from "./Editor";

export class BaseEditor extends Editor {
  template() {
    const { sampleText } = this.$editor.for("sample.text");
    return (
      <div
        class={classnames("elf--base-editor", {
          "full-screen": this.props.fullScreen,
          ...this.props.editorClass,
        })}
      >
        Base Editor2
        {sampleText}
      </div>
    );
  }
}
