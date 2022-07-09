declare module "@elf-framework/ui" {
  import type { HSL, HSV, RGB } from "@elf-framework/color";
  import { UIElement, VNode } from "@elf-framework/sapa";

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

  interface LinkButtonStyle {
    borderColor?: string;
    backgroundColor?: string;
    disabledColor?: string;
    color?: string;
    fontSize?: string;
    padding?: string;
  }

  interface ButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    shape?: ButtonShape;
    destructive?: boolean;
    disabled?: boolean;
    onClick?: (event: PointerEvent) => void;
    style?: ButtonStyle;
  }

  interface LinkButtonProps {
    onClick?: (event: PointerEvent) => void;
    style?: LinkButtonStyle;
    href?: string;
  }

  export class Button extends UIElement {
    props: ButtonProps;
  }

  export class LinkButton extends UIElement {
    props: LinkButtonProps;
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

  export type CustomMenuItemType =
    | {
        type: "custom";
        rootClose?: () => void;
        render?: (context: MenuItem) => UIElement;
      }
    | CustomMenuRenderFunctionType;

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

  export type ToolbarAlignType =
    | "start"
    | "center"
    | "end"
    | "space-around"
    | "space-evenly";
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
  };

  export type ToolsType =
    | ToolsItemType
    | ToolsMenuItemType
    | ToolsCustomItemType;

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

  export type NotificationDirectionType =
    | "left"
    | "right"
    | "center"
    | "top"
    | "bottom"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";

  export interface NotificationProps {
    icon?: string | UIElement | UIElement[];
    content?: string | string[] | UIElement | UIElement[];
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

  export type VisualBellDirectionType =
    | "left"
    | "right"
    | "center"
    | "top"
    | "bottom"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";

  export interface VisualBellProps {
    icon?: string | UIElement | UIElement[];
    content?: string | string[] | UIElement | UIElement[];
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
    position:
      | "top"
      | "bottom"
      | "left"
      | "right"
      | "top-left"
      | "top-right"
      | "bottom-left"
      | "bottom-right";
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
    height: string | number;
    width: string | number;
    boxShadow: string;
    borderRadius: string;
    borderColor: string;
    padding: string;
  }

  interface TabStripStyle {
    backgroundColor: string;
    color: string;
    fontSize: string;
    fontWeight: string;
    height: string | number;
    width: string | number;
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

  export interface TabStripProps {
    tools?: ContentType;
    items?: string[] | UIElement[];
    style?: TabStripStyle;
    onChange?: (event: PointerEvent, item: UIElement) => void;
  }
  export class Panel extends UIElement {
    props: PanelProps;
  }

  export class TabStrip extends UIElement {
    props: TabStripProps;
  }

  export type FlexStyle = {
    backgroundColor: string;
    gap: number;
  };
  export interface FlexProps {
    stack?: boolean;
    wrap?: boolean;
    style?: FlexStyle;
  }

  export class Flex extends UIElement {
    props: FlexProps;
  }

  export interface VBoxProps {
    wrap?: boolean;
    style?: FlexStyle;
  }

  export class VBox extends Flex {
    props: VBoxProps;
  }

  export type GridStyle = {
    backgroundColor: string;
    gap: number;
  };

  export type GridTemplate = number | string;
  export interface GridProps {
    columns?: GridTemplate | GridTemplate[];
    rows?: GridTemplate | GridTemplate[];
    style?: GridStyle;
  }

  export class Grid extends UIElement {
    props: GridProps;
  }

  export type DomEventType = {
    onFocus?: (event: KeyboardEvent) => void;
    onBlur?: (event: KeyboardEvent) => void;
    onKeyDown?: (event: KeyboardEvent) => void;
    onKeyUp?: (event: KeyboardEvent) => void;
    onKeyPress?: (event: KeyboardEvent) => void;
    onChange?: (event: KeyboardEvent) => void;
    onInput?: (event: KeyboardEvent) => void;
    onPaste?: (event: KeyboardEvent) => void;
    onCut?: (event: KeyboardEvent) => void;
    onCopy?: (event: KeyboardEvent) => void;
    onCompositionStart?: (event: KeyboardEvent) => void;
    onCompositionEnd?: (event: KeyboardEvent) => void;
    onCompositionUpdate?: (event: KeyboardEvent) => void;
    onSelect?: (event: KeyboardEvent) => void;
    onMouseDown?: (event: MouseEvent) => void;
    onMouseUp?: (event: MouseEvent) => void;
    onMouseMove?: (event: MouseEvent) => void;
    onMouseEnter?: (event: MouseEvent) => void;
    onMouseLeave?: (event: MouseEvent) => void;
    onMouseOver?: (event: MouseEvent) => void;
    onMouseOut?: (event: MouseEvent) => void;
    onWheel?: (event: WheelEvent) => void;
    onContextMenu?: (event: MouseEvent) => void;
    onDragStart?: (event: DragEvent) => void;
    onDrag?: (event: DragEvent) => void;
    onDragEnd?: (event: DragEvent) => void;
    onDragEnter?: (event: DragEvent) => void;
    onDragLeave?: (event: DragEvent) => void;
    onDragOver?: (event: DragEvent) => void;
    onDrop?: (event: DragEvent) => void;
    onScroll?: (event: WheelEvent) => void;
    onTouchStart?: (event: TouchEvent) => void;
    onTouchMove?: (event: TouchEvent) => void;
    onTouchEnd?: (event: TouchEvent) => void;
    onTouchCancel?: (event: TouchEvent) => void;
    onPointerDown?: (event: PointerEvent) => void;
    onPointerMove?: (event: PointerEvent) => void;
    onPointerUp?: (event: PointerEvent) => void;
    onPointerCancel?: (event: PointerEvent) => void;
    onPointerEnter?: (event: PointerEvent) => void;
    onPointerLeave?: (event: PointerEvent) => void;
  };

  export type InputEditorStyle = {
    backgroundColor: string;
    minWidth: number;
    borderRadius: number;
    height: number;
  };

  export type InputEditorType =
    | "text"
    | "password"
    | "number"
    | "email"
    | "url"
    | "tel"
    | "search"
    | "date"
    | "time"
    | "datetime-local"
    | "month"
    | "week"
    | "color";
  export interface InputEditorProps {
    type?: InputEditorType;
    hover: boolean;
    focused?: boolean;
    autoFocus?: boolean;
    autoFocusDelay?: number;
    placeholder?: string;
    style?: InputEditorStyle;
    disabled?: boolean;
  }

  export class InputEditor extends UIElement {
    props: InputEditorProps & DomEventType;
  }

  export type InputPaintStyle = {
    backgroundColor: string;
    minWidth: number;
    borderRadius: number;
    height: number;
  };

  export type InputPaintType = "color" | "gradient" | "image";
  export interface InputPaintProps {
    type?: InputPaintType;
    hover: boolean;
    focused?: boolean;
    autoFocus?: boolean;
    autoFocusDelay?: number;
    placeholder?: string;
    style?: InputPaintStyle;
    disabled?: boolean;
    hideColorView?: boolean;
  }

  export class InputPaint extends UIElement {
    props: InputPaintProps & DomEventType;
  }

  export interface HexColorEditorProps {
    value: string;
  }

  export interface RGBColorEditorProps {
    value: string;
  }

  export interface HSLColorEditorProps {
    value: string;
  }

  export class HexColorEditor extends InputPaint {
    props: HexColorEditorProps & InputPaintProps & DomEventType;
  }

  export class RGBColorEditor extends InputPaint {
    props: RGBColorEditorProps & InputPaintProps & DomEventType;
  }

  export class HSLColorEditor extends InputPaint {
    props: HSLColorEditorProps & InputPaintProps & DomEventType;
  }

  export class TextAreaEditor extends InputEditor {}

  export interface RadioProps {
    checked: boolean;
    name: string;
    value: any;
    onChange: (event: PointerEvent) => void;
  }
  export class Radio extends UIElement {
    props: RadioProps;
  }

  export interface RadioGroupProps {
    name: string;
    value: any;
    onChange: (event: PointerEvent) => void;
  }

  export class RadioGroup extends UIElement {
    props: RadioGroupProps;
  }

  export type CheckboxProps = RadioProps;

  export class Checkbox extends UIElement {
    props: CheckboxProps;
  }

  interface CheckboxItem {
    label: string;
    value: any;
  }

  export interface CheckboxGroupProps {
    name: string;
    value: any;
    options: CheckboxItem[];
    onChange: (event: PointerEvent) => void;
  }

  export class CheckboxGroup extends UIElement {
    props: CheckboxGroupProps;
  }

  export type VirtualScrollStyle = {
    backgroundColor: string;
    minWidth: number;
    borderRadius: number;
    height: number;
  };

  export interface VirtualScrollProps {
    style: VirtualScrollStyle;
    items: any[];
    itemHeight: number;
    itemRenderer: (
      item: any,
      top: number,
      renderIndex: number,
      items: any[],
      virutalScroll: VirtualScroll
    ) => UIElement;
    onScroll: (event: PointerEvent) => void;
    onScrollEnd: (event: PointerEvent) => void;
    onScrollStart: (event: PointerEvent) => void;
    onScrollStop: (event: PointerEvent) => void;
    onScrollReset: (event: PointerEvent) => void;
    onScrollResetEnd: (event: PointerEvent) => void;
    onScrollResetStart: (event: PointerEvent) => void;
    onScrollResetStop: (event: PointerEvent) => void;
  }

  export class VirtualScroll extends UIElement {
    props: VirtualScrollProps;
  }

  export interface LayerProps {
    selected?: boolean;
    collapsed?: boolean;
    group?: string;
    icon?: string;
    content?: any;
    onClick?: (event: PointerEvent) => void;
    onDoubleClick?: (event: PointerEvent) => void;
    onContextMenu?: (event: PointerEvent) => void;
    onMouseDown?: (event: MouseEvent) => void;
    onMouseUp?: (event: MouseEvent) => void;
    onMouseMove?: (event: MouseEvent) => void;
    onMouseEnter?: (event: MouseEvent) => void;
    onMouseLeave?: (event: MouseEvent) => void;
  }

  export class Layer extends UIElement {
    props: LayerProps;
  }

  export interface ColorViewProps {
    color: string;
  }
  export class ColorView extends UIElement {
    props: ColorViewProps;
  }

  export type OptionMenuItem = ItemType;

  export interface OptionMenuProps {
    icon: VNode | string;
    menuStyle: MenuStyle;
    autoPosition: boolean;
    items: OptionMenuItem[];
  }

  export class OptionMenu extends UIElement {
    props: OptionMenuProps;
  }

  export interface ColorMixerProps {
    color: string;
    onChange: (color: string) => void;
    onLastChange: (color: string) => void;
  }
  export class ColorMixer extends UIElement {
    props: ColorMixerProps;
  }

  export type OpacityType = {
    a: number;
  };

  export type ColorType = ((RGB | HSL | HSV) & OpacityType) | string | number[];

  export type ColorGridItem = {
    title: string;
    value: string;
    colors: ColorType[];
  };
  export interface ColorGridProps {
    items: ColorGridItem[];
    selectedValue: string;
  }
  export class ColorGrid extends UIElement {
    props: ColorGridProps;
  }
}
