import { UIElement, useStore } from "@elf-framework/sapa";

import { EditorContext } from "../../managers/EditorContext";

const KEY_EDITOR = "editor";

export class EditorPlugin {
  constructor(editor, props = {}) {
    this.editor = editor;
    this.props = props;
  }

  initialize() {}

  load() {}

  activate() {}

  deactivate() {}
}

export function useEditor() {
  return useStore(KEY_EDITOR);
}

/**
 * Editor
 *
 * plugin manager
 * config manager
 * content manager
 * children manager
 * command manager
 *
 *
 */
export class Editor extends UIElement {
  initialize() {
    super.initialize();

    this.$editor = new EditorContext(this, this.props);

    this.$store.set(KEY_EDITOR, this.$editor);

    this.activate();
  }

  async activate() {
    await this.$editor.activate();
  }
}
