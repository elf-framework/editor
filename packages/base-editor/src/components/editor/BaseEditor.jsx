import { classnames } from "@elf-framework/sapa";

import { Editor } from "./Editor";

export class BaseEditor extends Editor {
  template() {
    const { content } = this.props;
    return (
      <div
        class={classnames("elf--base-editor", {
          "full-screen": this.props.fullScreen,
          ...this.props.editorClass,
        })}
      >
        {content}
      </div>
    );
  }
}
