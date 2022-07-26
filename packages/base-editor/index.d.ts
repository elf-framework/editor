declare module "@elf-framework/base-editor" {
  import { UIElement } from "@elf-framework/sapa";
  type EditorConfigValueType =
    | "string"
    | "number"
    | "boolean"
    | "object"
    | "array"
    | "enum"
    | "date"
    | "time"
    | "datetime";

  export interface EditorConfig {
    key: string;
    defaultValue: unknown;
    title: string;
    description: string;
    type: EditorConfigValueType;
  }

  export interface CommandManager {
    registerCommand: (command: CommandType) => void;
  }

  export interface EditorManager {
    [key: string]: unknown;
  }

  interface EditorCommand {
    name: string;
    description: string;
    history?: boolean;
    execute: (editor: EditorContext, ...args: any[]) => void;
    undo: (editor: EditorContext, ...args: any[]) => void;
    redo: (editor: EditorContext, ...args: any[]) => void;
  }

  type CommandType = EditorCommand;
  type PluginType = (editor: EditorContext) => void;

  interface ConfigManager {
    has: (key: string) => boolean;
    get: (key: string) => unknown;
    set: (key: string, value: unknown) => void;
    remove: (key: string) => void;
    clear: () => void;
  }

  interface UIListType {
    [key: string]: UIElement;
  }

  interface EditorContext {
    configs: ConfigManager;

    registerConfig(config: EditorConfig): void;
    registerManager(manager: EditorManager): void;
    registerCommand(command: CommandType): void;
    registerUI(obj: UIListType): void;
    registerGroupUI(key: string, obj: UIListType): void;
    getCommand<T>(name: string): T | undefined;
    registerPlugin(plugin: PluginType): void;

    initializeConfig(configs: EditorConfig[]): void;
    initializeManager(managers: EditorManager[]): void;
    initializeCommand(commands: CommandType[]): void;
    initializePlugin(plugins: PluginType[]): void;
  }

  type EditorPlugin = (editor: EditorContext) => void;

  export interface BaseEditorProps {
    context: EditorContext;
    configs: EditorConfig;
    managers: EditorManager;
    plugins: EditorPlugin[];
    editorClass: {
      [key: string]: boolean;
    };
    fullscreen: boolean;
  }

  export class Editor extends UIElement {
    $editor: EditorContext;
  }
  export class BaseEditor extends Editor {
    props: BaseEditorProps;
  }

  export function useEditor(): EditorContext;
  export function useEditorOption<T>(key: string): T;
  export function useConfig<T>(key: string): T;
  export function useSetConfig<T>(key: string, value: T): void;
  export function useCommand<T>(key: string, ...args: unknown[]): Promise<T>;

  interface InjectViewProps {
    views: string[];
    groups: string[];
  }
  export class InjectView extends UIElement {
    props: InjectViewProps;
  }
}
