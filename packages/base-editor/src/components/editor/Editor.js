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
 *
 * return command callback to use command by function call
 *
 */
export function useGetCommand(key, ...args) {
  return useEditor()?.commands?.get(key, ...args);
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
 * shortcut manager
 *
 *
 */
export class Editor extends UIElement {
  initialize() {
    super.initialize();

    console.log("editor initialize");

    if (!this.$editor) {
      this.$editor = new EditorContext(this, this.props);
    }

    this.$store.set(KEY_EDITOR, this.$editor);
    this.$store.set(KEY_EDITOR_OPTION, this.props);
  }

  async load() {
    // start to load plugins
    const { configs } = this.props;
    this.$editor.updateConfigs(configs);
    console.warn("editor plugin load");
    await this.activate();
  }

  async activate() {
    // start to load plugins
    await this.$editor.activate();

    // send message
    this.$store.initValue("editor.plugin.activated", (v = 0) => v + 1);
    console.warn("editor.plugin.activated");
    this.render();
  }
}
