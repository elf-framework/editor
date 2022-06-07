declare module "@elf/ui" {
  import { UIElement } from "@elf/sapa";

  /** button */
  type ButtonType = "primary" | "secondary" | "outline";

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
    disabled?: boolean;
    onClick: (event: PointerEvent) => void;
    style: ButtonStyle;
  }

  export class Button extends UIElement {
    props: ButtonProps;
  }

  /** menu */
  export type MenuItemType = {
    type: "item";
    title: string;
    shortcut?: string;
    hover?: boolean;
    icon?: string;
    selected?: boolean;
    onClick: (event: PointerEvent) => void;
    onSelect: (event: PointerEvent, context: MenuItem) => void;
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

  export type ItemType = MenuItemType | GroupMenuItemType | DividerMenuItemType;

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

  export interface MenuProps {
    items: ItemType[];
    style: MenuStyle;
  }

  export class MenuItem extends UIElement {
    props: MenuItemType;
    get selected(): boolean;
  }

  export class Menu extends UIElement {
    props: MenuProps;
  }
}
