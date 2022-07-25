import { UIElement, useStore } from "@elf-framework/sapa";

import { EditorContext } from "../../managers/EditorContext";

const KEY_EDITOR = "editor";
const KEY_EDITOR_OPTION = "editorOption";

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

/**
 * EditorContext 조회
 */
export function useEditor() {
  return useStore(KEY_EDITOR);
}

/**
 * Editor Option 조회
 *
 */
export function useEditorOption(key) {
  return useStore(KEY_EDITOR_OPTION)?.[key];
}

/**
 * Editor Config 조회
 */
export function useConfig(key) {
  return useEditor()?.configs?.get(key);
}

/**
 * Editor Config 값 설정
 *
 */
export function useSetConfig(key, value) {
  return useEditor()?.configs?.set(key, value);
}

/**
 * Editor Command 실행
 *
 */
export async function useCommand(key, ...args) {
  return await useEditor()?.commands?.emit(key, ...args);
}

/**
 * 다국어 메세지 조회
 */
export function useI18n(key, params = {}) {
  return useEditor()?.i18n?.get(key, params);
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
    this.$store.set(KEY_EDITOR_OPTION, this.props);

    this.activate();
  }

  async activate() {
    await this.$editor.activate();
  }
}
