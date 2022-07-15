import { UIElement } from "@elf-framework/sapa";

declare module "@elf-framework/base-editor" {
  export interface EditorConfig {
    [key: string]: unknown;
  }

  export interface BaseEditorProps {
    config: EditorConfig;
    editorClass: {
      [key: string]: boolean;
    };
    fullscreen: boolean;
  }
  export class BaseEditor extends UIElement {
    props: BaseEditorProps;
  }
}
