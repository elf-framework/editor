declare module "@elf-framework/ui" {
  import type { HSL, HSV, RGB } from "@elf-framework/color";
  import { UIElement, VNode } from "@elf-framework/sapa";

  export const ADD_BODY_FIRST_MOUSEMOVE = "add/body/first/mousemove";
  export const ADD_BODY_MOUSEMOVE = "add/body/mousemove";
  export const ADD_BODY_MOUSEUP = "add/body/mouseup";
  export const BODY_MOVE_EVENT = "body/move/event";

  export function FIRSTMOVE(method: string): string;
  export function MOVE(method: string): string;
  export function END(method: string): string;

  /** base */
  type ContentType = string | UIElement | string[] | UIElement[];

  /** theme */

  type ThemeType = "dark" | "light" | string;

  /** button */
  type ButtonType =
    | "primary"
    | "secondary"
    | "sucess"
    | "info"
    | "danger"
    | "warning"
    | "outline";
  type ButtonSize = "small" | "default" | "large";
  type ButtonShape = "square" | "round" | "circle";

  interface CommonStyle {
    alignContent?: string;
    alignItems?: string;
    alignSelf?: string;
    area?: string;
    autoColumns?: string;
    autoFlow?: string;
    autoRows?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    basis?: string;
    border?: string;
    borderRadius?: string;
    bottom?: string;
    boxShadow?: string;
    color?: string;
    column?: string;
    columnEnd?: string;
    columnGap?: string;
    columnSpan?: string;
    columnStart?: string;
    direction?: string;
    display?: string;
    flex?: string;
    fontFamily?: string;
    fontSize?: string;
    fontStyle?: string;
    fontWeight?: string;
    gap?: string;
    grow?: string;
    height?: string;
    justifyContent?: string;
    left?: string;
    letterSpacing?: string;
    lineHeight?: string;
    margin?: string;
    marginBlock?: string;
    marginBlockEnd?: string;
    marginBlockStart?: string;
    marginBottom?: string;
    marginInline?: string;
    marginInlineEnd?: string;
    marginInlineStart?: string;
    marginLeft?: string;
    marginRight?: string;
    marginTop?: string;
    maxHeight?: string;
    maxWidth?: string;
    minHeight?: string;
    minWidth?: string;
    objectFit?: string;
    objectPosition?: string;
    opacity?: string;
    order?: string;
    overflow?: string;
    padding?: string;
    paddingBlock?: string;
    paddingBlockEnd?: string;
    paddingBlockStart?: string;
    paddingBottom?: string;
    paddingInline?: string;
    paddingInlineEnd?: string;
    paddingInlineStart?: string;
    paddingLeft?: string;
    paddingRight?: string;
    paddingTop?: string;
    position?: string;
    resize?: string;
    right?: string;
    row?: string;
    rowEnd?: string;
    rowGap?: string;
    rowSpan?: string;
    rowStart?: string;
    shrink?: string;
    templateAreas?: string;
    templateColumns?: string;
    templateRows?: string;
    textAlign?: string;
    textDecoration?: string;
    textTransform?: string;
    top?: string;
    transform?: string;
    transformOrigin?: string;
    width?: string;
    whiteSpace?: string;
    wrap?: string;
  }

  export type InputPropsType = {
    type?: string;
    value?: string;
    placeholder?: string;
    selected?: boolean;
    checked?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    maxLength?: number;
    minLength?: number;
    max?: number;
    min?: number;
    step?: number;
    pattern?: string;
    size?: number;
    rows?: number;
    cols?: number;
  };

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
    onClick?: (event: MouseEvent) => void;
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
    selected?: boolean;
    outline?: boolean;
    quiet?: boolean;
    disabled?: boolean;
    onClick?: (event: PointerEvent) => void;
    style?: ButtonStyle & CommonStyle;
  }

  interface LinkButtonProps {
    onClick?: (event: PointerEvent) => void;
    style?: LinkButtonStyle & CommonStyle;
    href?: string;
  }

  export class Button extends UIElement {
    props: ButtonProps & CommonStyle;
  }

  interface ButtonGroupProps {
    content?: Button[];
    disabled?: boolean;
    style?: ButtonStyle & CommonStyle;
  }

  export class ButtonGroup extends UIElement {
    props: ButtonGroupProps;
  }

  export class LinkButton extends UIElement {
    props: LinkButtonProps & CommonStyle;
  }

  export class IconButton extends Button {
    props: ButtonProps & {
      icon: string;
    } & CommonStyle;
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

  export type CustomMenuRenderFunctionType = ContentType;

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
    style: MenuStyle & CommonStyle;
    root?: ToolsMenuItem;
  }

  export class GroupMenuItem extends UIElement {
    props: GroupMenuItemType & CommonStyle;
  }

  export class MenuItem extends UIElement {
    props: MenuItemType & CommonStyle;
    get selected(): boolean;
  }

  export class Menu extends UIElement {
    props: MenuProps & CommonStyle;
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
    props: DialogProps & CommonStyle;

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
    props: ToolbarProps & CommonStyle;
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
    style: ToolsStyle & CommonStyle;
  }
  export class Tools extends UIElement {
    props: ToolsProps & CommonStyle;
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
    style: NotificationStyle & CommonStyle;
    direction?: NotificationDirectionType;
  }
  export class Notification extends UIElement {
    props: NotificationProps & CommonStyle;
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
    style: VisualBellStyle & CommonStyle;
    direction?: VisualBellDirectionType;
    delay?: number;
    onShow?: () => void;
    onHide?: () => void;
  }
  export class VisualBell extends UIElement {
    props: VisualBellProps & CommonStyle;
    hide: () => void;
  }

  /** call VisualBell with potal */
  export function bell(arg: {
    content: ContentType;
    delay?: number;
    direction?: VisualBellDirectionType;
    tools?: ContentType[];
    options?:
      | {
          container: HTMLElement | string;
        }
      | unknown;
  }): VisualBell;

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
    content: ContentType;
    message?: ContentType;
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
    style: TooltipStyle & CommonStyle;
  }
  export class Tooltip extends UIElement {
    props: TooltipProps & CommonStyle;
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
    /**
     * 탭을 넓은 상태로 볼지 결정합니다.
     *
     * @default false
     */
    fitted?: boolean;
    align?: "left" | "center" | "right";
    items?: string[] | UIElement[];
    style?: TabStripStyle & CommonStyle;
    onChange?: (event: PointerEvent, item: UIElement) => void;
  }

  export class Panel extends UIElement {
    props: PanelProps & CommonStyle;
  }

  export class TabStrip extends UIElement {
    props: TabStripProps & CommonStyle;
  }

  export interface TabItemProps {
    key?: any;
    title: ContentType;
    icon?: ContentType;
    disabled?: boolean;
    selected?: boolean;
    onClick?: (event: PointerEvent) => void;
    content?: ContentType;
  }

  export class TabItem extends UIElement {
    props: TabItemProps;
  }

  export interface TabStyle {
    backgroundColor: string;
    color: string;
  }

  export interface TabProps {
    activeKey?: any;
    /**
     * 탭을 넓은 상태로 볼지 결정합니다.
     *
     * @default false
     */
    fitted?: boolean;

    /**
     * if full is true, the tab will be full height
     */
    full: boolean;
    align?: "left" | "center" | "right";
    content?: TabItem[];
    style?: TabStyle & CommonStyle;
    onChange?: (event: PointerEvent, item: UIElement) => void;
  }

  export class Tab extends UIElement {
    props: TabProps & CommonStyle;
  }

  export type FlexStyle = {
    backgroundColor: string;
    gap: number;
  };
  export interface FlexProps {
    class?: string;
    stack?: boolean;
    wrap?: boolean;
    style?: FlexStyle & CommonStyle;
  }

  export class Flex extends UIElement {
    props: FlexProps & CommonStyle;
  }

  export interface VBoxProps {
    wrap?: boolean;
    style?: FlexStyle & CommonStyle;
  }

  export class VBox extends Flex {
    props: VBoxProps & CommonStyle;
  }

  export type GridStyle = {
    backgroundColor: string;
    gap: number;
  };

  export type GridTemplate = number | string;
  export interface GridProps {
    class: string;
    columns?: GridTemplate | GridTemplate[];
    rows?: GridTemplate | GridTemplate[];
    style?: GridStyle & CommonStyle;
  }

  export class Grid extends UIElement {
    props: GridProps & CommonStyle & DomEventType;
  }

  export interface ViewProps {
    as?: string;
    id?: string;
    class?: string;
    style?: CommonStyle;
  }
  export class View extends UIElement {
    props: ViewProps & CommonStyle & DomEventType & InputPropsType;
  }

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
    style?: InputEditorStyle & CommonStyle;
    disabled?: boolean;
  }

  export class InputEditor extends UIElement {
    props: InputEditorProps & DomEventType & CommonStyle;
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
    style?: InputPaintStyle & CommonStyle;
    disabled?: boolean;
    hideColorView?: boolean;
  }

  export class InputPaint extends UIElement {
    props: InputPaintProps & DomEventType & CommonStyle;
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
    style: CommonStyle;
  }
  export class Radio extends UIElement {
    props: RadioProps & CommonStyle;
  }

  export interface RadioGroupProps {
    name: string;
    value: any;
    onChange: (event: PointerEvent) => void;
    style: CommonStyle;
  }

  export class RadioGroup extends UIElement {
    props: RadioGroupProps & CommonStyle;
  }

  export type CheckboxProps = RadioProps;

  export class Checkbox extends UIElement {
    props: CheckboxProps & CommonStyle;
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
    style: CommonStyle;
  }

  export class CheckboxGroup extends UIElement {
    props: CheckboxGroupProps & CommonStyle;
  }

  export type VirtualScrollStyle = {
    backgroundColor: string;
    minWidth: number;
    borderRadius: number;
    height: number;
  };

  export interface VirtualScrollProps {
    style: VirtualScrollStyle & CommonStyle;
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
    props: VirtualScrollProps & CommonStyle;
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
    style: CommonStyle;
  }

  export class Layer extends UIElement {
    props: LayerProps & CommonStyle;
  }

  export interface ColorViewProps {
    color: string;
    style: CommonStyle;
  }
  export class ColorView extends UIElement {
    props: ColorViewProps & CommonStyle;
  }

  export type OptionMenuItem = ItemType;

  export interface OptionMenuProps {
    icon: VNode | string;
    menuStyle: MenuStyle;
    autoPosition: boolean;
    items: OptionMenuItem[];
    style: CommonStyle;
  }

  export class OptionMenu extends UIElement {
    props: OptionMenuProps & CommonStyle;
  }

  export interface ColorMixerProps {
    color: string;
    onChange: (color: string) => void;
    onLastChange: (color: string) => void;
    style: CommonStyle;
  }
  export class ColorMixer extends UIElement {
    props: ColorMixerProps & CommonStyle;
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
    style: CommonStyle;
  }
  export class ColorGrid extends UIElement {
    props: ColorGridProps & CommonStyle;
  }

  export type OptionStripItem = {
    value: unknown;
    icon: VNode;
  };
  export interface OptionStripProps {
    options: OptionStripItem[];
    selectedValue: unknown;
    disabled?: boolean;
    onChange: (event: PointerEvent) => void;
    style: CommonStyle;
  }
  export class OptionStrip extends UIElement {
    props: OptionStripProps & CommonStyle;
  }

  export type DataEditorItemType = string;

  export interface DataEditorProps {
    items: DataEditorItemType[];
  }
  export class DataEditor extends UIElement {
    props: DataEditorProps;
  }

  export class EventPanel extends UIElement {
    props: CommonStyle;
  }

  export class EventControlPanel extends UIElement {
    props: CommonStyle;
  }

  type AppLayoutItemDirectionType =
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "center";

  interface AppLayoutItemProps {
    direction: AppLayoutItemDirectionType;
    resizable: boolean;
    width: number;
    height: number;
    maxWidth: number;
    maxHeight: number;
    minWidth: number;
    minHeight: number;
    content: ContentType;
    style: CommonStyle;
    onResize: (width: number, height: number) => void;
    onResizeEnd: (width: number, height: number) => void;
  }
  export class AppLayoutItem extends UIElement {
    props: AppLayoutItemProps;
  }

  export class AppLayout extends UIElement {
    props: CommonStyle;
  }

  interface DividerProps {
    type:
      | "default"
      | "primary"
      | "secondary"
      | "success"
      | "danger"
      | "warning"
      | "info"
      | "light"
      | "dark";

    margin?: number | string;
    style: CommonStyle;
  }
  export class Divider extends UIElement {
    props: DividerProps;
  }

  interface AlertProps {
    type: "default" | "primary" | "success" | "info" | "warning" | "danger";
    title: ContentType;
    content: ContentType;
    style: CommonStyle;
    closable: boolean;
    weak?: boolean;
    delay?: number;
    onShow?: () => void;
    onHide?: () => void;
  }
  export class Alert extends UIElement {
    props: AlertProps & DomEventType;
    hide(): void;
  }

  /** call Alert with potal */
  export function alert(arg: {
    content?: ContentType;
    title?: ContentType;
    delay?: number;
    style?: CommonStyle;
    closable?: boolean;
    onShow?: () => void;
    onHide?: () => void;
    options?:
      | {
          container: HTMLElement | string;
        }
      | unknown;
  }): Alert;
}
