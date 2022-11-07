declare module "@elf-framework/sapa" {
  /**
   * Utility Functions
   */
  export function isFunction(obj: any): boolean;
  export function isObject(obj: any): boolean;
  export function isString(obj: any): boolean;
  export function isArray(obj: any): boolean;
  export function isNumber(obj: any): boolean;
  export function isBoolean(obj: any): boolean;
  export function isUndefined(obj: any): boolean;
  export function isEqual(obj1: any, obj2: any): boolean;
  export function isValue(value: any): boolean;

  // event name regular expression
  export type EVENT = (...args: string[]) => string;
  export type OBSERVER = (...args: string[]) => string;
  export type PARAMS = (...args: string[]) => string;

  // Predefined CHECKER
  export type CHECKER = (value: string, split: string) => string;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export function AFTER(value: string, split: string): string;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export function BEFORE(value: string, split: string): string;
  export function CONFIG(config: string): string;

  export const IF: CHECKER;
  export const KEY: CHECKER;

  export const ARROW_UP: string;
  export const ARROW_DOWN: string;
  export const ARROW_LEFT: string;
  export const ARROW_RIGHT: string;
  export const ENTER: string;
  export const SPACE: string;
  export const ESCAPE: string;

  export const ALT: string;
  export const SHIFT: string;
  export const META: string;
  export const CONTROL: string;
  export const SELF: string;
  export const LEFT_BUTTON: string;

  export const FIT: string;
  export const PASSIVE: string;
  export const FRAME: string;

  // event config method
  export type TimeFunction = (time: number) => string;

  export const DEBOUNCE: TimeFunction;
  export const DELAY: TimeFunction;
  export const D1000: string;

  export const THROTTLE: TimeFunction;
  export const CAPTURE: string;

  // event config method

  // before method

  // after method
  // type MoveMethod = (method: string) => string;
  // export const MOVE: MoveMethod;

  // type MoveEndMethod = (method: string) => string;
  // export const END: MoveEndMethod;

  export const PREVENT: string;
  export const STOP: string;

  type CallbackFunction = (...args: string[]) => string;
  type DOM_EVENT_MAKE = (...keys: string[]) => CallbackFunction;
  type PROPS_MAKE = (ref: string, ...args: string[]) => CallbackFunction;

  export const PROPS: PROPS_MAKE;
  export const SUBSCRIBE: CallbackFunction;
  export const SUBSCRIBE_ALL: CallbackFunction;
  export const SUBSCRIBE_SELF: CallbackFunction;
  export const CUSTOM: DOM_EVENT_MAKE;
  export const CLICK: CallbackFunction;
  export const DOUBLECLICK: CallbackFunction;
  export const MOUSEDOWN: CallbackFunction;
  export const MOUSEUP: CallbackFunction;
  export const MOUSEMOVE: CallbackFunction;
  export const MOUSEOVER: CallbackFunction;
  export const MOUSEOUT: CallbackFunction;
  export const MOUSEENTER: CallbackFunction;
  export const MOUSELEAVE: CallbackFunction;
  export const TOUCHSTART: CallbackFunction;
  export const TOUCHMOVE: CallbackFunction;
  export const TOUCHEND: CallbackFunction;
  export const KEYDOWN: CallbackFunction;
  export const KEYUP: CallbackFunction;
  export const KEYPRESS: CallbackFunction;
  export const DRAG: CallbackFunction;
  export const DRAGSTART: CallbackFunction;
  export const DROP: CallbackFunction;
  export const DRAGOVER: CallbackFunction;
  export const DRAGENTER: CallbackFunction;
  export const DRAGLEAVE: CallbackFunction;
  export const DRAGEXIT: CallbackFunction;
  export const DRAGOUT: CallbackFunction;
  export const DRAGEND: CallbackFunction;
  export const CONTEXTMENU: CallbackFunction;
  export const CHANGE: CallbackFunction;
  export const INPUT: CallbackFunction;
  export const FOCUS: CallbackFunction;
  export const FOCUSIN: CallbackFunction;
  export const FOCUSOUT: CallbackFunction;
  export const BLUR: CallbackFunction;
  export const PASTE: CallbackFunction;
  export const RESIZE: CallbackFunction;
  export const SCROLL: CallbackFunction;
  export const SUBMIT: CallbackFunction;

  // pointerstart 의 경우 drag 를 위한 시작점이기 때문에  left button 만 허용한다.
  // context 메뉴나 wheel 은 허용하지 않는다.
  export const POINTERSTART: CallbackFunction;
  //

  export const POINTEROVER: CallbackFunction;
  export const POINTERENTER: CallbackFunction;
  export const POINTEROUT: CallbackFunction;
  export const POINTERLEAVE: CallbackFunction;
  export const POINTERMOVE: CallbackFunction;
  export const POINTEREND: CallbackFunction;
  export const CHANGEINPUT: CallbackFunction;
  export const WHEEL: CallbackFunction;
  export const ANIMATIONSTART: CallbackFunction;
  export const ANIMATIONEND: CallbackFunction;
  export const ANIMATIONITERATION: CallbackFunction;
  export const TRANSITIONSTART: CallbackFunction;
  export const TRANSITIONEND: CallbackFunction;
  export const TRANSITIONRUN: CallbackFunction;
  export const TRANSITIONCANCEL: CallbackFunction;
  export const DOUBLETAB: CallbackFunction;
  export const POPSTATE: CallbackFunction;
  export const HASHCHANGE: CallbackFunction;

  export function OBSERVER(observerName: string): string;
  export function PARAMS(obj: KeyValue): string;

  type ClassNameType = string | object | Array<string | object>;
  export function classnames(...args: ClassNameType[]): string;

  export interface KeyValue {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [index: string]: any;
  }

  export class VNode {
    tag: string | "object";
    props: KeyValue;
    children: VNode[];
    component?: ElementType;
  }

  export class Length {
    unit: string;
    value: number;
  }

  export class Dom {
    el: HTMLElement;

    static create(
      tag: string | HTMLElement | Dom | DocumentFragment,
      className: string,
      attr: KeyValue
    ): Dom;
    static createByHTML(htmlString: string): Dom | null;
    static body(): Dom;

    find(selector: string): HTMLElement;
    $(selector: string): Dom | null;

    findAll(selector: string): HTMLElement[];
    $$(selector: string): Dom[];

    replaceChild(
      oldElement: Dom | HTMLElement,
      newElement: Dom | HTMLElement
    ): Dom;

    checked(isChecked: boolean): Dom | boolean;
    click(): Dom;
    focus(): Dom;
    select(): Dom;
    blur(): Dom;
    dispatchEvent(event: string, data: KeyValue): Dom;

    /* utility */
    fullscreen(): void;
    toggleFullscreen(): void;
  }

  export class BaseStore {}

  export class BaseHandler {
    context: UIElement;
    initialize(): void;
    destroy(): void;
  }

  export class EventMachine {
    protected opt: KeyValue;
    protected parent: any;
    protected state: KeyValue;
    public source: string;
    public sourceName: string;

    /**
     * UIElement instance 에 필요한 기본 속성 설정
     */
    protected initializeProperty(opt: KeyValue, props: KeyValue): void;

    protected initComponents(): void;

    protected initializeHandler(): any[];

    public props: KeyValue;

    /**
     * state 를 초기화 한것을 리턴한다.
     *
     * @protected
     * @returns {Object}
     */
    protected initState(): KeyValue;

    /**
     * state 를 변경한다.
     *
     * @param {Object} state  새로운 state
     * @param {Boolean} isLoad  다시 로드 할 것인지 체크 , true 면 state 변경후 다시 로드
     */
    setState(state: KeyValue, isLoad: boolean): void;

    /**
     * state 에 있는 key 필드의 값을 토글한다.
     * Boolean 형태의 값만 동작한다.
     *
     * @param {string} key
     * @param {Boolean} isLoad
     */
    toggleState(key: string, isLoad: boolean): void;

    /**
     * 객체를 다시 그릴 때 사용한다.
     *
     * @param {*} props
     * @protected
     */
    protected _reload(props: KeyValue): void;

    /**
     * template 을 렌더링 한다.
     *
     * @param {Dom|undefined} $container  컴포넌트가 그려질 대상
     */
    render($container: Dom | undefined): Promise<void>;

    protected initialize(): void;

    /**
     * render 이후에 실행될 함수
     * dom 이 실제로 생성된 이후에 수행할 작업들을 정의한다.
     *
     * @protected
     */
    protected afterRender(): void;

    /**
     * 하위에 연결될 객체들을 정의한다
     *
     * @protected
     * @returns {Object}
     */
    protected components(): KeyValue;

    /**
     * ref 이름을 가진 Component 를 가지고 온다.
     *
     * @param  {any[]} args
     * @returns {EventMachine}
     */
    getRef(...args: string[]): Dom;

    /**
     * refresh 는 load 함수들을 실행한다.
     */
    public refresh(): void;

    protected load(...args: any[]): Promise<any>;

    public bindData(...args: string[]): void;

    // 기본 템플릿 지정
    protected template():
      | string
      | string[]
      | HTMLElement
      | HTMLElement[]
      | null
      | undefined;

    /**
     * 자원을 해제한다.
     * 이것도 역시 자식 컴포넌트까지 제어하기 때문에 가장 최상위 부모에서 한번만 호출되도 된다.
     *
     */
    destroy(isRemoveElement: boolean): void;
  }

  export class UIElement extends EventMachine {
    constructor(props: KeyValue);

    /**
     * UIElement 가 생성될 때 호출되는 메소드
     * @protected
     */
    protected created(): void;

    /**
     * props의 타입을 체크한다.
     *
     * @param props
     */
    checkProps(props: KeyValue): KeyValue;

    /**
     * UIElement 기반으로 메세지를 호출 한다.
     * 나 이외의 객체들에게 메세지를 전달한다.
     *
     * @param {string} messageName
     * @param {any[]} args
     */
    emit(messageName: string, ...args: any[]): void;

    /**
     * MicroTask 를 수행한다.
     *
     * @param {Function} callback
     */
    nextTick(callback: () => void): void;

    /**
     *
     * UIElement 자신의 메세지를 수행한다.
     * emit 은 나외의 객체에게 메세지를 보내고
     *
     * @param {string} messageName
     * @param {any[]} args
     */
    trigger(messageName: string, ...args: any[]): void;

    /**
     * 모든 자식컴포넌트에 메세지를 보낸다.
     *
     * @param messageName
     * @param args
     */
    broadcast(messageName: string, ...args: any[]): void;

    /**
     * 메세지 등록
     *
     * @param message
     * @param callback
     */
    on(message: string, callback: () => void): void;

    /**
     * 메세지 등록 해제
     * @param message
     * @param callback
     */
    off(message: string, callback: () => void): void;
  }
  type ElementFunction = () => unknown;
  type ElementType = typeof UIElement | ElementFunction | VNode;

  interface HydrateOptions {
    target: Dom | string | HTMLElement;
  }

  export function start(uiElement: ElementType, options?: KeyValue): VNode;
  export function render(uiElement: ElementType, options?: KeyValue): VNode;
  export function hydrate(
    uiElement: ElementType,
    options?: HydrateOptions
  ): UIElement;
  export function potal(uiElement: ElementType, options?: KeyValue): UIElement;
  export function renderToHtml(
    uiElement: ElementType,
    options?: KeyValue
  ): Promise<string>;

  export function createComponent(
    ComponentName: string,
    props?: KeyValue,
    children?: any[]
  ): VNode;

  export function createComponentList(...args: any[]): VNode[];

  export function createElement(
    Component: string,
    props: KeyValue,
    children: any[]
  ): VNode;

  type FragmentInstanceType = any;
  type HTMLCommentType = any;

  /**
   * fragment 용 instance
   */
  export const FragmentInstance: FragmentInstanceType;
  export const HTMLComment: HTMLCommentType;

  export function createElementJsx(
    Component: ElementType | string | FragmentInstanceType,
    props: KeyValue,
    ...children: any[]
  ): string;

  export function htmlToVNode(html: string): VNode;

  export type VNodeJSONType = {
    tag: string;
    props: KeyValue;
    children: JSONType[];
  };
  export type VNodeTextJSONType = {
    type: "text";
    text: string;
  };
  export type VNodeFragmentJSONType = {
    type: "fragment";
    children: JSONType[];
  };

  export type VNodeComponentJSONType = {
    type: "component";
    Component: ElementType;
    props: KeyValue;
    children: JSONType[];
  };

  type JSONType =
    | string
    | number
    | undefined
    | null
    | boolean
    | VNodeJSONType
    | VNodeTextJSONType
    | VNodeFragmentJSONType
    | VNodeComponentJSONType;

  interface ConvertOptions {
    retrieveComponent: (component: ElementType, rest: JSONType) => ElementType;
  }
  export function jsonToVNode(json: JSONType, options?: ConvertOptions): VNode;

  /** Hooks */
  export function createRef<T>(initializeValue: T): RefObject<T>;

  export function useId(): string;
  export function useBatch(callback: () => void): void;
  export function useRender(): void;
  export function useSyncExternalStore<T>(
    subscribe: (callback: () => void) => () => void,
    getSnapshot: () => T,
    isEqual?: (a: T, b: T) => boolean
  ): T;
  export function useState<T>(
    initializeValue: T | (() => T)
  ): [value: T, setValue: (value: T) => void];

  type UseEffectCleanUp = (() => void) | undefined;
  type UseEffectCallbackType = () => UseEffectCleanUp;

  export function useEffect(
    callback: UseEffectCallbackType,
    deps: unknown[]
  ): void;

  export function useReducer<T, A>(
    reducer: (state: T, action: A) => T,
    initialState: T
  ): [state: T, dispatch: (action: A) => void];

  export function useMemo<T>(callback: () => unknown, deps: unknown[]): T;
  export function useCallback<T>(callback: () => T, deps: unknown[]): () => T;

  interface RefObject<T> {
    current: T;
  }
  interface MutableRefObject<T> {
    current: T;
  }
  export function useRef<T>(initialValue: T): MutableRefObject<T>;
  export function useRef<T>(initialValue: T | null): RefObject<T>;
  export function useRef<T = undefined>(): MutableRefObject<T | undefined>;
  export function useEmit(name: string, ...args: unknown[]): void;
  export function useTrigger(name: string, ...args: unknown[]): void;

  type MagicMethodString = string;
  export function useMagicMethod(
    methodName: MagicMethodString,
    callback: () => unknown
  ): void;

  interface ProviderProps<T> {
    value: T;
    content: VNode;
  }

  interface Context<T> {
    id: string;
    defaultValue: unknown;
    Provider: (props: ProviderProps<T>) => VNode;
    Consumer: (props: KeyValue) => VNode;
  }
  export function createContext<T>(defaultValue: T): Context<T>;
  export function useContext<T>(context: Context<T>): T;
  export function useStore<T>(key: string): T;

  /**
   * store 의 상태를 변경한다.
   */
  export function useStoreSet<T>(key: string, value: T): T;
  export function useRootContext<T>(key: string): T;
  export function useSubscribe(
    name: string,
    callback: () => void,
    debounceSecond: number,
    throttleSecond: number,
    isSelf: boolean
  ): () => void;
  interface RenderOptions<T> {
    debounce?: number;
    throttle?: number;
    isSelf?: boolean;
    checkFunction?: null | ((args: T) => boolean);
  }
  export function useComponentRender<T>(
    name: string,
    options?: RenderOptions<T>
  ): void;
  export function useSelf(
    name: string,
    callback: () => void,
    debounce: number,
    throttle: number
  ): () => void;

  export function getCurrentComponent(): UIElement;

  export function renderFromRoot(): void;
  export function setGlobalForceRender(forceRender: boolean): void;

  export function debounce(time: number): () => void;

  type sapa = {
    createElementJsx: typeof createElementJsx;
    FragmentInstance: typeof FragmentInstance;
    HTMLComment: typeof HTMLComment;
  };

  export function pendingComponent(component: UIElement): void;
  export function removePendingComponent(component: UIElement): void;

  export default sapa;
}
