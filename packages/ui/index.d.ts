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

  export function registerComponent(key: string, component: ContentType): void;

  /** hooks  */

  export function usePointerStart(
    selector: string,
    downAction: () => unknown,
    moveAction: () => unknown,
    upAction: () => unknown
  ): void;

  export function usePointerStart(
    downAction: () => unknown,
    moveAction: () => unknown,
    upAction: () => unknown
  ): void;

  /** base */
  type ContentType = string | UIElement | string[] | UIElement[];

  /** theme */

  type ThemeType = "dark" | "light" | string;

  type VariantType =
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";

  type SizeType = "small" | "medium" | "large" | "extra-large";

  type OrientationType = "horizontal" | "vertical";

  /** button */
  type ButtonVariant =
    | "primary"
    | "secondary"
    | "sucess"
    | "info"
    | "danger"
    | "warning"
    | "outline";
  type ButtonSize =
    | "extra-small"
    | "xsmall"
    | "small"
    | "default"
    | "large"
    | "extra-large"
    | "xlarge";

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
    variant?: ButtonVariant;
    size?: ButtonSize;
    shape?: ButtonShape;
    selected?: boolean;
    outline?: boolean;
    quiet?: boolean;
    disabled?: boolean;
    onlyIcon?: boolean;
    class: string;
    iconOnly: boolean;
    place?: string;
    justified?: boolean;
    play?: boolean;
    hover?: boolean;
    focused?: boolean;
    hasMinWidth?: boolean;
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

  export class RoundButton extends UIElement {
    props: ButtonProps & CommonStyle;
  }

  export class IconButton extends UIElement {
    props: ButtonProps & CommonStyle;
  }

  export class OutlineButton extends UIElement {
    props: ButtonProps & CommonStyle;
  }

  interface ActionGroupProps {
    content?: Button[];
    direction?: OrientationType;
    moreIcon?: ContentType;
    quiet?: boolean;
    compact?: boolean;
    justified?: boolean;
    collapsed?: boolean;
    disabled?: boolean;
    shape?: "rect" | "normal";
    onMoreClick?: (event: PointerEvent, items: ContentType[]) => void;
    style?: ButtonStyle & CommonStyle;
  }

  export class ActionGroup extends UIElement {
    props: ActionGroupProps;
  }

  export class LinkButton extends UIElement {
    props: LinkButtonProps & CommonStyle;
  }

  /** menu */
  export type MenuItemType = {
    type: "item";
    title: ContentType;
    shortcut?: ContentType;
    hover?: boolean;
    icon?: ContentType;
    description?: ContentType;
    selectable?: boolean;
    selected?: boolean;
    selectedIcon?: ContentType;
    onClick?: (event: PointerEvent) => void;
    onSelect?: (event: PointerEvent, context: MenuItem) => void;
    items?: ItemType[];
    closable?: boolean;
    rootClose?: () => void;
    disabled?: boolean;
  };

  export type SectionMenuItemType = {
    type: "section";
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

  export type LinkMenuItemType = {
    type: "link";
    title: string;
    link: string;
    rootClose?: () => void;
  };

  export type ItemType =
    | MenuItemType
    | SectionMenuItemType
    | DividerMenuItemType
    | CustomMenuItemType
    | LinkMenuItemType
    | "-"
    | string;

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
    type: "menu" | "dropdown" | "contextmenu";
    x?: number;
    y?: number;
    direction?: MenuDirectionType;
    style: MenuStyle & CommonStyle;
    root?: ToolsMenuItem;
    compact?: boolean;
    variant?: "light" | "dark";
  }

  export class SectionMenuItem extends UIElement {
    props: SectionMenuItemType & CommonStyle;
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
    tools: ContentType;
    footer: ContentType;
    center?: boolean;
    noBorder?: boolean;
    style: DialogStyle;
    okText?: ContentType;
    cancelText?: ContentType;
    okProps?: ButtonProps;
    cancelProps?: ButtonProps;
    title?: ContentType;
    closable?: boolean;
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
    rounded?: boolean;
    class?: string;
    emphasized?: boolean;
    type?:
      | "default"
      | "primary"
      | "secondary"
      | "success"
      | "info"
      | "warning"
      | "danger";
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
    variant?: VariantType;
  }

  export class Toolbar extends UIElement {
    props: ToolbarProps & DomEventType;
  }

  /** menu */
  export type ToolsItemType = {
    type: "item";
    title: string;
    icon?: string;
    selected?: boolean;
    selectedType?: "primary" | "secondary";
    events?: string[];
    onClick?: (event: PointerEvent) => void;
  };

  export type ToolsMenuItemType = {
    type: "menu";
    items?: ItemType[];
    title: ContentType;
    icon?: ContentType;
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
    vertical?: boolean;
    emphasized?: boolean;
    moreIcon?: ContentType;
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

  interface ToastStyle {
    backgroundColor?: string;
    hoverColor?: string;
    borderColor?: string;
    boxShadow?: string;
    toolsBorderColor?: string;
    toolsBorderRadius?: string;
    color?: string;
  }

  export type ToastDirectionType =
    | "left"
    | "right"
    | "center"
    | "top"
    | "bottom"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";

  export interface ToastProps {
    icon?: ContentType;
    content?: ContentType;
    style: ToastStyle & CommonStyle;
    direction?: ToastDirectionType;
    closable?: boolean;
    delay?: number;
    variant?: VariantType;
    onShow?: () => void;
    onClose?: () => void;
  }
  export class Toast extends UIElement {
    props: ToastProps & CommonStyle;
    hide: () => void;
  }

  /** call Toast with potal */
  export function toast(arg: {
    content: ContentType;
    delay?: number;
    direction?: ToastDirectionType;
    tools?: ContentType[];
    options?:
      | {
          container: HTMLElement | string;
        }
      | unknown;
  }): Toast;

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
    maxWidth?: number | string;
  }

  type TooltipTriggerType = "hover" | "click" | "focus" | "manual";
  export interface TooltipProps {
    content: ContentType;
    message?: ContentType;
    placement:
      | "top"
      | "bottom"
      | "left"
      | "right"
      | "top-left"
      | "top-right"
      | "bottom-left"
      | "bottom-right";
    trigger: TooltipTriggerType[] | TooltipTriggerType;
    icon: ContentType;
    show: boolean;
    animated?: boolean;
    style: TooltipStyle & CommonStyle;
    hideArrow: boolean;
    position?: "relative" | "absolute" | "fixed";
  }
  export class Tooltip extends UIElement {
    props: TooltipProps & CommonStyle;
  }

  interface PopoverStyle {
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

  type PopoverPlacementType =
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "left-top"
    | "left-bottom"
    | "right-top"
    | "right-bottom";

  export interface PopoverProps {
    content: ContentType;
    body?: ContentType;
    placement: PopoverPlacementType;
    trigger: "hover" | "click";
    animated?: boolean;
    show: boolean;
    style: TooltipStyle & CommonStyle;
    showTip: boolean;
  }
  export class Popover extends UIElement {
    props: PopoverProps & CommonStyle;
  }

  export class DropdownPopover extends Popover {
    props: PopoverProps & CommonStyle;
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

  type TabStripType =
    | "underline"
    | "button"
    | "group"
    | "round-group"
    | "block"
    | "classic";

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
    orientation?: OrientationType;
    showIndicator?: boolean;
    size: SizeType;
    variant?: VariantType;
    quiet?: boolean;
    stripType: TabStripType;
    stripStyle?: CommonStyle;
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
    orientation: OrientationType;
    showIndicator?: boolean;
    size?: SizeType;
    variant?: VariantType;
    quiet?: boolean;
    stripType: TabStripType;
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
    sameWidth?: boolean;
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

  export interface ColumnProps {
    span?: number;
    style?: CommonStyle;
  }

  export class Column extends UIElement {
    props: ColumnProps & DomEventType;
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
    value?: string;
    readOnly?: boolean;
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

  interface TextAreaEditorProps {
    rows?: number;
    resizable?: boolean;
  }
  export class TextAreaEditor extends InputEditor {
    props: TextAreaEditorProps & InputEditorProps & DomEventType;
  }

  export interface RadioProps {
    checked: boolean;
    name: string;
    value: any;
    onChange: (event: PointerEvent) => void;
    style: CommonStyle;
    indeterminate?: boolean;
    variant?: "default" | "dark" | "danger";
    size?: SizeType;
    disabled?: boolean;
  }
  export class Radio extends UIElement {
    props: RadioProps & CommonStyle;
  }

  export interface RadioGroupProps {
    name: string;
    value: any;
    onChange: (event: PointerEvent) => void;
    style: CommonStyle;
    size: SizeType;
    variant: "default" | "dark" | "danger";
    disabled?: boolean;
    options?: RadioProps[];
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
    direction?: OrientationType;
    options: CheckboxItem[];
    onChange: (event: PointerEvent) => void;
    style: CommonStyle;
    size: SizeType;
    variant: "default" | "dark" | "danger";
    disabled?: boolean;
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
    hideScrollbar?: boolean;
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

  interface VirtualScrollItemProps {
    top: number | string;
    content: ContentType;
    style: CommonStyle;
  }

  export class VirtualScrollItem extends UIElement {
    props: VirtualScrollItemProps;
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
    hideSlide?: boolean;
    hideInput?: boolean;
    shadow?: boolean;
    disabled?: boolean;
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
    size: SizeType;
    variant: VariantType;
    orientation: OrientationType;
    margin?: number | string;
    style: CommonStyle;
  }
  export class Divider extends UIElement {
    props: DividerProps;
  }

  interface AlertProps {
    variant: VariantType;
    title: ContentType;
    content: ContentType;
    style: CommonStyle;
    closable: boolean;
    dismissable: boolean;
    delay?: number;
    icon?: ContentType;
    shape?: "rect" | "round";
    actions?: ContentType;
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

  interface HelpTextProps {
    content: ContentType;
    style: CommonStyle;
    variant: VariantType;
    size: SizeType;
    icon?: ContentType;
    disabled?: boolean;
  }
  export class HelpText extends UIElement {
    props: HelpTextProps & DomEventType;
  }

  interface FieldProps {
    help: ContentType;
    label: ContentType;
    size: SizeType;
    style: CommonStyle;
    disabled?: boolean;
    required?: boolean;
    requiredText?: ContentType;
    optional?: boolean;
    optionalText?: ContentType;
    validIcon?: ContentType;
    invalid?: boolean;
    invalidIcon?: ContentType;
    invalidMessage?: ContentType;
    content?: ContentType;
  }
  export class Field extends UIElement {
    props: FieldProps & CommonStyle;
  }

  interface TextFieldProps {
    inputStyle?: InputEditorStyle;
  }

  export class TextField extends UIElement {
    props: TextFieldProps &
      FieldProps &
      InputEditorProps &
      CommonStyle &
      DomEventType;
  }

  export class TextArea extends TextField {
    props: TextFieldProps &
      FieldProps &
      InputEditorProps &
      TextAreaEditorProps &
      CommonStyle &
      DomEventType;
  }

  interface BreadcrumbsItem {
    title: ContentType;
    selected?: boolean;
    multiline?: boolean;
    style?: CommonStyle;
    tooltip?: TooltipProps;
  }

  interface BreadcrumbsProps {
    items: (string | BreadcrumbsItem)[];
    separator?: ContentType;
  }
  export class Breadcrumbs extends UIElement {
    props: BreadcrumbsProps & CommonStyle & DomEventType;
  }

  interface AvatarProps {
    content?: ContentType;
    size: "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700";
    variant: VariantType;
    shape: "circle" | "square";
    style: CommonStyle;
    disabled?: boolean;
    ghost?: boolean;
  }

  export class Avatar extends UIElement {
    props: AvatarProps & DomEventType;
  }

  interface TagProps {
    content: ContentType;
    style: CommonStyle;
    removable: boolean;
    onClose: () => void;
    variant: VariantType;
    filled?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
  }
  export class Tag extends UIElement {
    props: TagProps & DomEventType;
  }

  interface TagGroupProps {
    content: ContentType;
    gap?: number;
  }
  export class TagGroup extends UIElement {
    props: TagGroupProps;
  }

  interface BadgeProps {
    content: ContentType;
    style: CommonStyle;
    onClose: () => void;
    disabled?: boolean;
    size: SizeType;
    variant:
      | "informative"
      | "neutral"
      | "positive"
      | "notice"
      | "negative"
      | "indigo"
      | "celery"
      | "chartreuse"
      | "yellow"
      | "magenta"
      | "fuchsia"
      | "purple"
      | "seafoam";
    fixed?: boolean;
    placement?: "none" | "top" | "bottom" | "left" | "right";
  }
  export class Badge extends UIElement {
    props: BadgeProps & DomEventType;
  }

  interface ProgressBarProps {
    value: number;
    showValue?: boolean;
    valueFunc: (value: number) => ContentType;
    variant: VariantType;
    size: SizeType;
    style: CommonStyle;
    max: number;
    min: number;
    indeterminate?: boolean;
    shape: "round" | "rect";
  }
  export class ProgressBar extends UIElement {
    props: ProgressBarProps & DomEventType;
  }

  interface ProgressCircleProps {
    value: number;
    showValue?: boolean;
    variant: VariantType;
    size: SizeType;
    style: CommonStyle;
    max: number;
    min: number;
    indeterminate?: boolean;
    animated?: boolean;
    animationType?: "normal" | "spin";
  }
  export class ProgressCircle extends UIElement {
    props: ProgressCircleProps & DomEventType;
  }

  interface SwitchProps {
    checked: boolean;
    disabled?: boolean;
    size: SizeType;
    variant: VariantType;
    style: CommonStyle;
    onChange: (checked: boolean) => void;
    content: ContentType;
    withLabel?: boolean;
    labels: ContentType[];
    readOnly?: boolean;
  }
  export class Switch extends UIElement {
    props: SwitchProps & DomEventType;
  }

  interface SliderProps {
    type: "range" | "single";
    label: ContentType;
    labelPosition: "top" | "side";
    value: number | [number, number];
    fill?: boolean;
    fillOffset?: number;
    disabled?: boolean;
    size: SizeType;
    variant: VariantType;
    style: CommonStyle;
    onChange: (value: number) => void;
    min: number;
    max: number;
    step: number;
    showValue?: boolean;
    valuePlacement?: "none" | "top" | "bottom";
    showTrigger?: "always" | "hover" | "none";
    valueFunc: (value: number) => ContentType;
    readOnly?: boolean;
  }
  export class Slider extends UIElement {
    props: SliderProps & DomEventType;
  }

  interface TreeViewItemType {
    id: string;
    title: ContentType;
    children?: TreeViewItemType[];
    selected?: boolean;
    collapsed?: boolean;
    disabled?: boolean;
    style?: CommonStyle;
  }

  interface TreeDropItemType {
    startId: unknown;
    endId: unknown;
    rate: number;
    targetPosition: "top" | "middle" | "bottom";
  }

  interface TreeViewProps {
    items: TreeViewItemType[];
    draggable?: boolean;
    itemHeight?: number;
    overscanRowCount?: number;
    selectionStyle: "checkbox" | "highlight";
    selectionType: "single" | "multiple";
    variant?: VariantType;
    showTooltip?: boolean;
    renderLabel?: (item: TreeViewItemType) => ContentType;
    renderContext?: (item: TreeViewItemType) => ContentType;
    renderActions?: (item: TreeViewItemType) => ContentType;
    renderArrow?: (item: TreeViewItemType) => ContentType;
    renderLoading?: (item: TreeViewItemType) => ContentType;
    onClickNode?: (item: TreeViewItemType, e: MouseEvent) => void;
    onToggleNode?: (item: TreeViewItemType, e: MouseEvent) => void;
    onDropNode?: (obj: TreeDropItemType, e: DragEvent) => void;
  }

  export class TreeView extends UIElement {
    props: TreeViewProps & DomEventType;
  }

  type TreeViewItemInsertType = "before" | "after" | "append";

  class BaseTreeViewProvider {
    get items(): TreeViewItemType[];
    get ids(): string[];
    has(id: string): boolean;
    get(id: string): TreeViewItemType;
    set(id: string, item: TreeViewItemType): void;
    remove(id: string): void;
    setParent(id: string, parentId: string): void;
    removeParent(id: string): void;
    appendChild(parentId: string, item: TreeViewItemType): void;
    getParent(id: string): string;
    deleteInfo(item: TreeViewItemType): void;
    removeChild(parentId: string, id: string): void;
    insertChild(parentId: string, index: number, item: TreeViewItemType): void;
    findIndex(list: TreeViewItemType[], id: string): number;
    insertItem(
      targetId: string,
      currentId: string,
      type: TreeViewItemInsertType
    ): void;
    insertBefore(targetId: string, currentId: string): void;
    insertAfter(targetId: string, currentId: string): void;
    insertLast(targetId: string, currentId: string): void;
  }

  export class TreeViewProvider extends BaseTreeViewProvider {}

  interface AnimationProps {
    name?: string;
    duration?: number;
    delay?: number;
    iterationCount?: string;
    timingFunction?: string;
    content?: ContentType;
    play?: boolean;
    onEnd?: (e: AnimationEvent) => void;
    onIteration?: (e: AnimationEvent) => void;
    onStart?: (e: AnimationEvent) => void;
  }

  export type AnimationType =
    | "spin"
    | "ping"
    | "fade"
    | "scaledown"
    | "bounce"
    | "flash"
    | "pulse"
    | "rubberBand"
    | "shake"
    | "headShake"
    | "swing"
    | "tada"
    | "wobble"
    | "jello"
    | "heartBeat";

  export class Animation extends UIElement {
    props: AnimationProps;
    static spin: Animation;
    static fade: Animation;
    static bounce: Animation;
    static flash: Animation;
    static pulse: Animation;
    static rubberBand: Animation;
    static shake: Animation;
    static headShake: Animation;
    static swing: Animation;
    static tada: Animation;
    static wobble: Animation;
    static jello: Animation;
    static heartBeat: Animation;
  }

  interface TableColumn {
    title: ContentType;
    key: string;
    showDivider?: boolean;
    style: {
      cellPadding?: number | string;
      cellAlign: "space-between" | "flex-start" | "flex-end";
      textAlign: "left" | "right" | "center" | "justify";
      width?: number;
    };
  }

  interface TableData {
    [key: string]: unknown;
    selected?: boolean;
  }

  interface TableProps<T> {
    columns: TableColumn[];
    data: (TableData & T)[];
    quiet?: boolean;
    selectionStyle: "checkbox" | "highlight";
    selectionType: "single" | "multiple";
  }

  export class Table<T> extends UIElement {
    props: TableProps<T> & DomEventType;
  }

  interface CardProps {
    content?: ContentType;
    style?: CommonStyle;
    shape?: "round" | "square";
    orientation: "horizontal" | "vertical";
    quiet?: boolean;
    ghost?: boolean;
    selectable?: boolean;
    selected?: boolean;
    as?: "div" | "link";
    href?: string;
    full?: boolean;
  }

  export class Card extends UIElement {
    props: CardProps & DomEventType;
  }

  interface CardPreviewProps {
    content?: ContentType;
    style?: CommonStyle;
    ratio?:
      | "1:1"
      | "2:1"
      | "3:1"
      | "4:1"
      | "4:3"
      | "3:4"
      | "1:2"
      | "1:3"
      | "1:4";
  }

  export class CardPreview extends UIElement {
    props: CardPreviewProps & DomEventType;
  }

  interface CardContainerProps {
    content?: ContentType;
    style?: CommonStyle;
  }

  export class CardContainer extends UIElement {
    props: CardContainerProps & DomEventType;
  }

  interface CardHeaderProps {
    title?: ContentType;
    actions?: ContentType[];
    style?: CommonStyle;
    nowrap?: boolean;
    ghost?: boolean;
  }

  export class CardHeader extends UIElement {
    props: CardHeaderProps & DomEventType;
  }

  interface CardFooterProps {
    content?: ContentType;
    style?: CommonStyle;
    noDivider?: boolean;
  }

  export class CardFooter extends UIElement {
    props: CardFooterProps & DomEventType;
  }

  interface CardBodyProps {
    content?: ContentType;
    style?: CommonStyle;
    ghost?: boolean;
  }

  export class CardBody extends UIElement {
    props: CardBodyProps & DomEventType;
  }

  interface CardAvatarProps {
    content?: ContentType;
    style?: CommonStyle;
  }

  export class CardAvatar extends UIElement {
    props: CardAvatarProps & DomEventType;
  }

  interface CardActionsProps {
    content?: ContentType;
    style?: CommonStyle;
    align?: "left" | "right" | "center";
  }

  export class CardActions extends UIElement {
    props: CardActionsProps & DomEventType;
  }

  interface GhostProps {
    animated?: boolean;
  }

  export class Ghost extends UIElement {
    props: GhostProps & DomEventType;
  }

  interface BlankProps {
    style?: CommonStyle;
    stripe?: "default";
  }

  export class Blank extends UIElement {
    props: BlankProps & DomEventType;
  }
}
