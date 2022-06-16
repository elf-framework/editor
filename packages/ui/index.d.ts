declare module "@elf/ui" {
  import { UIElement } from "@elf/sapa";


  /** base */
  type ContentType = string | UIElement | string[] | UIElement[];

  /** theme */

  type ThemeType = "dark" | "light" | string;

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
    closable?: boolean;
    rootClose?: () => void;    
  };

  export type GroupMenuItemType = {
    type: "group";
    rootClose?: () => void;    
    title: string;
  };

  export type DividerMenuItemType = {
    type: "divider";
    rootClose?: () => void;    
    dashed: boolean;
  };

  export type CustomMenuRenderFunctionType = Function;

  export type CustomMenuItemType = {
    type: "custom";
    rootClose?: () => void;    
    render?: (context: MenuItem) => UIElement;
  } | CustomMenuRenderFunctionType;

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
    root?: ToolsMenuItem;
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

  export class ToolsMenuItem extends UIElement {
    open(): void;
    close(): void;
  } 

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

  interface NotificationStyle {
    backgroundColor?: string;
    hoverColor?: string;
    borderColor?: string;
    boxShadow?: string;
    toolsBorderColor?: string;
    toolsBorderRadius?: string;
    color?: string;
  }

  export type NotificationDirectionType = "left" | "right" | "center" | "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right";

  export interface NotificationProps {
    icon?: string | UIElement | UIElement[];
    content?: string| string[] | UIElement | UIElement[];
    style: NotificationStyle;
    direction?: NotificationDirectionType;

  }
  export class Notification extends UIElement {
    props: NotificationProps;
  }


  interface VisualBellStyle {
    backgroundColor?: string;
    hoverColor?: string;
    borderColor?: string;
    boxShadow?: string;
    toolsBorderColor?: string;
    toolsBorderRadius?: string;
    color?: string;
  }

  export type VisualBellDirectionType = "left" | "right" | "center" | "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right";

  export interface VisualBellProps {
    icon?: string | UIElement | UIElement[];
    content?: string| string[] | UIElement | UIElement[];
    style: VisualBellStyle;
    direction?: VisualBellDirectionType;

  }
  export class VisualBell extends UIElement {
    props: VisualBellProps;
  }


  interface TooltipStyle {
    backgroundColor?: string;
    hoverColor?: string;
    borderColor?: string;
    boxShadow?: string;
    toolsBorderColor?: string;
    toolsBorderRadius?: string;
    color?: string;
    hgap?: number;
    vgap?: number;
    delay?: string;
  }

  export interface TooltipProps {
    content: string | UIElement | string[] | UIElement[];
    position: "top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
    trigger: "hover" | "click";
    show: boolean;
    style: TooltipStyle;
  }
  export class Tooltip extends UIElement {
    props: TooltipProps;
  }

  interface PanelStyle {
    backgroundColor: string;
    color: string;
    fontSize: string;
    fontWeight: string;
    height: string|number;
    width: string|number;
    boxShadow: string;
    borderRadius: string;
    borderColor: string;
    padding: string;
  }

  export type PanelModeType = "default" | "stroke";

  export interface PanelProps {
    title?: ContentType;
    content: ContentType;
    tools?: ContentType;
    footer?: ContentType;
    mode?: PanelModeType;
    theme?: ThemeType;
    style?: PanelStyle;
  }
  export class Panel extends UIElement {
    props: PanelProps;
  }
}



