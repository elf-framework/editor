declare module "@elf/ui" {
  import { UIElement } from "@elf/sapa";

  /** button */
  type ButtonType = "primary" | "secondary" | "outline";
  type ButtonSize = "small" | "default" | "large";
  type ButtonShape = "square" | "round" | "circle";

  interface ButtonStyle {
    borderColor?: string;
    backgroundColor?: string;
    disabledColor?: string;
    color?: string;
    fontSize?: string;
    padding?: string;
    borderRadius?: string;
  }

  interface ButtonProps {
    type: ButtonType;
    size: ButtonSize;
    shape: ButtonShape;
    disabled?: boolean;
    onClick: (event: PointerEvent) => void;
    style: ButtonStyle;
  }

  export class Button extends UIElement {
    props: ButtonProps;
  }

  export class IconButton extends Button {
    props: ButtonProps & {
      icon: string;
    };
  }

  /** menu */
  export type MenuItemType = {
    type: "item";
    title: string;
    shortcut?: string;
    hover?: boolean;
    icon?: string;
    selectable?: boolean;
    selected?: boolean;
    selectedIcon?: string;
    onClick?: (event: PointerEvent) => void;
    onSelect?: (event: PointerEvent, context: MenuItem) => void;
    items?: ItemType[];
  };

  export type GroupMenuItemType = {
    type: "group";
    title: string;
  };

  export type DividerMenuItemType = {
    type: "divider";
    dashed: boolean;
  };

  export type CustomMenuItemType = {
    type: "custom";
    render?: (context: MenuItem) => UIElement;
  };

  export type ItemType =
    | MenuItemType
    | GroupMenuItemType
    | DividerMenuItemType
    | CustomMenuItemType
    | "-";

  interface MenuStyle {
    backgroundColor?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    height?: string;
    padding?: string;
    borderRadius?: string;
    borderColor?: string;
    boxShadow?: string;
    width?: string;
    maxWidth?: string;
    sectionTitleColor?: string;
    sectionTitleBackgroundColor?: string;
    dividerColor?: string;
    left?: string;
  }

  export type MenuDirectionType = "left" | "right" | "center";

  export interface MenuProps {
    items: ItemType[];
    type: "menu" | "contextmenu";
    x?: number;
    y?: number;
    direction?: MenuDirectionType;
    style: MenuStyle;
  }

  export class GroupMenuItem extends UIElement {
    props: GroupMenuItemType;
  }

  export class MenuItem extends UIElement {
    props: MenuItemType;
    get selected(): boolean;
  }

  export class Menu extends UIElement {
    props: MenuProps;
  }

  type DialogPositionType = "relative" | "absolute" | "fixed";

  interface DialogStyle {
    backgroundColor?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    height?: string;
    width?: number | string;
    boxShadow: string;
    borderRadius: string;
    borderColor: string;
    padding: string;
    position: DialogPositionType;
  }

  interface DialogProps {
    visible: boolean;
    tools: any[];
    footer: any[] | any;
    center?: boolean;
    style: DialogStyle;
    onOk: (event: Dialog) => void;
    onCancel: (event: Dialog) => void;
    onClose: (event: Dialog) => void;
  }
  export class Dialog extends UIElement {
    props: DialogProps;

    cancel: () => void;
    ok: () => void;
    close: () => void;
  }

  interface ToolbarStyle {
    backgroundColor?: string;
    color?: string;
    height?: string;
    align?: string;
  }  

  export type ToolbarAlignType = "start" | "center" | "end" | "space-around" | "space-evenly";
  export interface ToolbarProps {
    items: ToolsProps[];
    align?: ToolbarAlignType;
    style: ToolbarStyle;
  }

  export class Toolbar extends UIElement {
    props: ToolbarProps;
  }  

  /** menu */
  export type ToolsItemType = {
    type: "item";
    title: string;
    icon?: string;
    selected?: boolean;
    events?: string[];
    onClick?: (event: PointerEvent) => void;
  };

  export type ToolsMenuItemType = {
    type: "menu";
    items?: ItemType[];
    title: string;
    icon?: string;
    selected?: boolean;
    events?: string[];
    opened?: boolean;
    trigger: "click" | "hover";
    direction?: MenuDirectionType;
    onOpen?: (event: PointerEvent, item: ToolsMenuItemType) => void;
    onClick?: (event: PointerEvent, item: ToolsMenuItemType) => void;
  };

  export type ToolsCustomItemType = {
    type: "custom";
    render?: (item: ToolsCustomItemType) => UIElement;
  }

  export type ToolsType = ToolsItemType | ToolsMenuItemType | ToolsCustomItemType;

  interface ToolsStyle {
    backgroundColor?: string;
    color?: string;
    height?: string;
  }

  export interface ToolsProps {
    items: ToolsType[];
    style: ToolsStyle;
  }
  export class Tools extends UIElement {
    props: ToolsProps;
  }
}
