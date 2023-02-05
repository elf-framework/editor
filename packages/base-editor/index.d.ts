declare module "@elf-framework/base-editor" {
  import { UIElement } from "@elf-framework/sapa";
  import type { ContentType } from "@elf-framework/sapa";
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

    /**
     * command 가 존재하는지 확인합니다.
     *
     * @param commandName
     *
     */
    has: (command: string) => boolean;
  }

  export interface ShortcutManager {
    registerShortcut: (shortcut: ShortcutType) => void;
  }

  export interface KeyboardManager {
    /**
     * 눌러진 키 체크하기
     */
    hasKey(keyOrKeyCode: string | number): boolean;

    /**
     * key, keycode 가 눌러져있는지 체크
     */
    check(args: any[]): boolean;
    isShift(): boolean;
    isCtrl(): boolean;
    isAlt(): boolean;
    isMeta(): boolean;
  }

  export interface EditorManager {
    [key: string]: unknown;
  }

  export interface EditorCommand {
    command: string;
    description: string;
    history?: boolean;
    execute: (editor: EditorContext, ...args: any[]) => void;
    undo: (editor: EditorContext, ...args: any[]) => void;
    redo: (editor: EditorContext, ...args: any[]) => void;
  }

  export type CommandType = EditorCommand;
  export type PluginType = (editor: EditorContext, options?: any) => void;
  export type ShortcutType = {
    key: string;
    command: string;
    args: unknown[];
    eventType: "keydown" | "keyup";
    when: () => boolean | string;
    mac: string;
    win: string;
    linux: string;
  };

  export interface ConfigManager {
    has: (key: string) => boolean;
    get: (key: string) => unknown;
    set: (key: string, value: unknown) => void;
    remove: (key: string) => void;
    clear: () => void;
  }

  interface UIListType {
    [key: string]: UIElement;
  }

  interface LocaleMessageType {
    [key: string]: string | (() => string);
  }

  interface LocaleType {
    [key: string]: LocaleMessageType;
  }

  export interface EditorContext {
    configs: ConfigManager;
    commands: CommandManager;
    shortcuts: ShortcutManager;
    keyboard: KeyboardManager;

    registerConfig(config: EditorConfig): void;
    registerManager(manager: EditorManager): void;
    registerCommand(command: CommandType): void;
    registerShortcut(shortcut: ShortcutType): void;

    registerI18nMessage(locale: string, messages: LocaleMessageType): void;
    registerI18nMessageWithLang(locales: LocaleType): void;

    registerUI(obj: UIListType): void;
    registerGroupUI(key: string, obj: UIListType): void;
    getCommand<T>(name: string): T | undefined;
    registerPlugin(plugin: PluginType): void;

    initializeConfigs(configList: EditorConfig[]): void;
    updateConfigs(configs: EditorConfig): void;
    initializeManager(managers: EditorManager[]): void;
    initializeCommand(commands: CommandType[]): void;
    initializePlugin(plugins: PluginType[]): void;
  }

  export type EditorPlugin = (editor: EditorContext) => void;

  export interface BaseEditorProps {
    context: EditorContext;
    configList: EditorConfig[];
    configs: {
      [key: string]: unknown;
    };
    managers: EditorManager;
    plugins: EditorPlugin[];
    editorClass: {
      [key: string]: boolean;
    };
    fullscreen: boolean;
    loading: ContentType;
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
  export function useGetCommand<T>(
    key: string,
    ...args: unknown[]
  ): (...args: unknown[]) => T;

  interface InjectViewProps {
    views: string[];
    groups: string[];
  }
  export class InjectView extends UIElement {
    props: InjectViewProps;
  }
}
