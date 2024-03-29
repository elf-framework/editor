import {
  ALTERNATE_TEMPLATE,
  COMPONENT_INSTANCE,
  COMPONENT_ROOT_CONTEXT,
  SELF_COMPONENT_INSTANCE,
  VNODE_INSTANCE,
} from "./constant/component";
import { isFunction, collectProps, isObject } from "./functions/func";
import { MagicMethod } from "./functions/MagicMethod";
import {
  getRootElementInstanceList,
  isGlobalForceRender,
  removeRenderCallback,
  renderComponent,
} from "./functions/registElement";
import { uuid } from "./functions/uuid";
import { vnodePropsDiff } from "./functions/vnode";
import DomEventHandler from "./handler/DomEventHandler";
import ObserverHandler from "./handler/ObserverHandler";
import StoreHandler from "./handler/StoreHandler";
import { HookMachine } from "./HookMachine";

export class EventMachine extends HookMachine {
  #state = {};
  #cachedMethodList;
  #functionCache = {};
  #childObjectList = {};
  // #childObjectElements = {};

  // hook 을 그대로 유지할 방법이 필요함.
  constructor(opt, props, state) {
    super();

    this.refs = {};
    this.id = uuid();
    this.sourceId = uuid();

    this.initializeProperty(opt, props, state);
  }

  get renderer() {
    return this.$store.get(COMPONENT_ROOT_CONTEXT).renderer;
  }

  setId(id) {
    this.id = id;
  }

  /**
   * refs 를 다시 설정한다.
   */
  setRefs(refs = {}) {
    this.refs = refs;
  }

  initializeHandler() {
    return super.initializeHandler({
      DomEventHandler,
      ObserverHandler,
      StoreHandler,
    });
  }

  /**
   * get first child instance
   */
  get firstChild() {
    return Object.values(this.children)[0];
  }

  /**
   * 매개변수를 체크한다.
   *
   * @param {object} props
   * @returns
   */
  checkProps(props = {}) {
    return props;
  }

  /**
   * UIElement instance 에 필요한 기본 속성 설정
   */
  initializeProperty(opt, props = {}, state = {}) {
    this.opt = opt || {};
    this.parent = this.opt;
    this.source = this.id;
    this.sourceName = this.constructor.name;
    this.props = props;

    // 객체 생성할 때 state 도 같이 초기화 한다.
    this.#state = Object.assign({}, this.#state, state);
  }

  setProps(props) {
    this.props = props;
  }

  /**
   * 함수 캐쉬
   *
   * @param {string} funcName
   * @param {function} func
   * @returns
   */
  createFunction(funcName, func) {
    if (isFunction(func) && !this.#functionCache[funcName]) {
      this.#functionCache[funcName] = func;
    }

    return this.#functionCache[funcName];
  }

  /**
   * 캐쉬된 함수 실행하기
   *
   * 한번만 실행할 수 있음.
   *
   * @param {string} funcName
   * @param {function} func
   * @returns
   */
  runFunction(funcName, func) {
    const cachedFunction = this.createFunction(funcName, func);

    if (cachedFunction?.running) {
      return;
    }

    if (isFunction(cachedFunction)) {
      if (!cachedFunction.running) {
        cachedFunction.running = true;
        cachedFunction.call(this);
      }
    }

    return cachedFunction;
  }

  /**
   * state 를 초기화 한것을 리턴한다.
   *
   * @protected
   * @returns {Object}
   */
  initState() {
    return {};
  }

  /**
   * state 를 변경한다.
   *
   * @param {Object} state  새로운 state
   * @param {Boolean} isLoad  다시 로드 할 것인지 체크 , true 면 state 변경후 다시 로드
   */
  setState(state = {}, isRefresh = true) {
    this.#state = Object.assign({}, this.#state, state);

    if (Boolean(isRefresh) === true) {
      renderComponent(this);
    }
  }

  /**
   * state 에 있는 key 필드의 값을 토글한다.
   * Boolean 형태의 값만 동작한다.
   *
   * @param {string} key
   * @param {Boolean} isLoad
   */
  toggleState(key, isLoad = true) {
    this.setState(
      {
        [key]: !this.#state[key],
      },
      isLoad
    );
  }

  changedProps(newProps) {
    // props 가 원래 없으면 다시 그린다.
    return !vnodePropsDiff(this.props, newProps);
  }

  /**
   * 객체를 다시 그릴 때 사용한다.
   *
   * @param {KeyValue} props
   * @param {Dom} [$container=null] $container 가 존재하면 render 를 같이 한다.
   * @protected
   */
  _reload(props) {
    if (isGlobalForceRender() || this.changedProps(props)) {
      this.props = props;
      renderComponent(this);
    }
  }

  get state() {
    return this.#state;
  }

  get ref() {
    return this.props.ref;
  }

  /**
   * 자식 컴포넌트 리스트를 반환한다.
   */
  get children() {
    return this.#childObjectList;
  }

  get child() {
    return Object.values(this.children)[0];
  }

  setChildren(children) {
    Object.entries(children).forEach(([id, instance]) => {
      if (instance) {
        this.#childObjectList[id] = instance;
      }
    });
  }

  /**
   * render 를 할 수 있는지 체크한다.
   *
   * @override
   * @deprecated
   */
  get isPreLoaded() {
    return true;
  }

  /**
   * 컴포넌트의 마지막 dom root 를 반환한다.
   *
   * ```jsx
   * <A>
   *  <B>
   *    <C>Sample</C>
   * </B>
   * </A>
   * ```
   *
   * A -> B -> C 형태로 중첩이 된 상태에서는 마지막 C 의 dom 을 반환한다.
   * A, B 는 $el 을 가지고 있지 않다.
   *
   * A, B, C 는 하나의 family 형태로 묶이며
   * A -> B, B -> C 는 ALTER_TEMPLATE 로 연결된다.
   *
   * @returns
   */
  getEl() {
    if (!this.$el?.el) {
      return this[ALTERNATE_TEMPLATE]?.instance?.getEl();
    }

    return this.$el.el;
  }

  getFamily() {
    const el = this.getEl();

    if (!el) {
      return { family: [this[VNODE_INSTANCE]] };
    }

    let lastComponent = el[COMPONENT_INSTANCE];
    const family = [];

    while (lastComponent) {
      family.push(lastComponent);

      if (!lastComponent[VNODE_INSTANCE]) break;

      const vnodeInstance = lastComponent[VNODE_INSTANCE];

      if (!vnodeInstance[SELF_COMPONENT_INSTANCE]) {
        break;
      }

      lastComponent = vnodeInstance[SELF_COMPONENT_INSTANCE];
    }

    family.reverse();

    const familyIndex = family.findIndex((item) => item === this);

    return {
      family,
      component: this,
      index: familyIndex,
    };
  }

  /**
   * dom ref 등록하기
   */
  registerRef = (ref, el) => {
    if (typeof ref === "function") {
      ref(el);
    } else if (isObject(ref)) {
      ref.value = el;
    } else {
      this.refs[ref] = el;
    }
  };

  /**
   * root 가 변경되는 경우가 있기 때문에
   * oldEl 는 성능을 위해서 캐슁을 하면 안됨
   *
   * children 을 따로 관리하지 않는다.
   *
   * @deprecated
   */
  getTargetInstance(oldEl) {
    const targetList = Object.values(this.children)
      .filter(Boolean)
      .filter((instance) => {
        return instance?.id !== this.id && instance?.getEl() === oldEl;
      });

    if (targetList.length) {
      return targetList[0];
    }

    return undefined;
  }

  /**
   *
   * 특정 클래스 참조를 바로 diff 형태로 렌더링 하지 않고
   * 강제로 다시 그리기를 원할때 사용할 수 있다.
   *
   * @returns
   */
  isForceRender() {
    return false;
  }

  isInstanceOf(...args) {
    return args.some((TargetClass) => {
      return this instanceof TargetClass;
    });
  }

  getChildrenInstanceOf(localClass) {
    return Object.values(this.children).filter((child) => {
      return child.isInstanceOf(localClass);
    });
  }

  getRootInstance() {
    let rootInstance = this;

    if (rootInstance.sourceName === "RootElement") {
      return rootInstance;
    }

    while (rootInstance.parent?.sourceName) {
      rootInstance = rootInstance.parent;

      if (rootInstance.sourceName === "RootElement") {
        break;
      }
    }

    return rootInstance;
  }

  async forceRender() {
    this.cleanHooks();
    await renderComponent(this);
  }

  setParentElement(parentElement) {
    this.parentElement = parentElement;
  }

  is(name, callback) {
    return this.sourceName === name && callback(this);
  }

  /**
   * template 을 렌더링 한다.
   *
   * @param {Dom|undefined} $container  컴포넌트가 그려질 대상
   */
  async render($container, isForceRender = false) {
    renderComponent(this, $container, isForceRender);
  }

  initialize() {
    this.#state = this.initState();
  }

  /**
   * ref 이름을 가진 Component 를 가지고 온다.
   *
   * @param  {any[]} args
   * @returns {EventMachine}
   */
  getRef(...args) {
    const key = args.join("");
    return this.refs[key];
  }

  // afterComponentRendering() {}
  getVNodeOptions() {
    return {
      context: this,
      registerRef: this.registerRef,
    };
  }

  getFunctionComponent() {
    return this;
  }

  /**
   * refresh 는 load 함수들을 실행한다.
   */
  refresh() {
    renderComponent(this);
  }

  // 기본 템플릿 지정
  template() {
    return null;
  }

  /**
   *
   * 자식 컴포넌트 중에서 element 가 부모를 가지고 있지 않는 상태가 되면
   * 메모리에서 지운다.
   *
   * TODO: 지우지 않고 객체를 그대로 사용할 방법이 있을까?
   *
   */
  clear() {
    Object.entries(this.#childObjectList).forEach(([_key, child]) => {
      if (!child.getEl().parentNode) {
        if (child) {
          child.destroy();

          delete this.#childObjectList[_key];
        }
      }
    });
  }

  clearAll() {
    Object.entries(this.#childObjectList).forEach(([id, child]) => {
      if (child) {
        child.destroy();

        delete this.#childObjectList[id];
      }
    });
  }

  /**
   * 자원을 해제한다.
   * 자식 컴포넌트까지 제어하기 때문에 가장 최상위 부모에서 한번만 호출되도 된다.
   *
   */
  destroy(isRemoveElement = false) {
    removeRenderCallback(this);

    // 자식 컴포넌트들을 제거한다.
    Object.entries(this.#childObjectList).forEach(([id, child]) => {
      if (child) {
        child.destroy();

        // delete this.#childObjectList[id];
      }
    });

    this.runHandlers("destroy");

    if (isRemoveElement) {
      this.$el?.remove();
      this.$el = null;
      this.onUnmounted();
    }

    // 로컬 이벤트 함수 실행
    this.onDestroyed();
    this.refs = {};
  }

  /**
   * property 수집하기
   * 상위 클래스의 모든 property 를 수집해서 리턴한다.
   *
   * @returns {string[]} 나의 상위 모든 메소드를 수집해서 리턴한다.
   */
  collectMethodes(refreshCache = false) {
    if (!this.#cachedMethodList || refreshCache) {
      this.#cachedMethodList = collectProps(this, EventMachine, (name) =>
        MagicMethod.check(name)
      ).map((it) => {
        return MagicMethod.parse(it, /*context*/ this);
      });
    }

    return this.#cachedMethodList;
  }

  filterMethodes(methodKey, refreshCache = false) {
    return this.collectMethodes(refreshCache).filter((it) => {
      return it.method === methodKey;
    });
  }

  /**
   * 자식 객체의 content 를 확인
   *
   * @param {function} filterCallback
   * @param {any} defaultValue
   * @returns
   */
  getChildContent(filterCallback, defaultValue = "") {
    return this.getChild(filterCallback)?.props.content || defaultValue;
  }

  getChild(filterCallback) {
    return this.props.content.find(filterCallback);
  }

  runMounted() {
    this.onMounted();
  }

  runUpdated() {
    this.onUpdated();
  }

  runUnmounted() {
    this.onUnmounted();
  }

  /**
   * 컴포넌트가 mount 된 이후에 실행된다.
   *
   */
  onMounted() {
    super.onMounted();

    // root vnode의 element 와 나의 element 가 같을 때는
    // 자식 vnode 의 mounted 를 같이 실행해준다.
    // const instance = this.getTargetInstance(this.$el?.el);
    // if (instance) {
    //   instance.onMounted();
    // }
  }

  onUpdated() {
    super.onUpdated();

    // root vnode의 element 와 나의 element 가 같을 때는
    // 자식 vnode 의 updated 를 같이 실행해준다.
    // FIXME: 이 부분은 무한루프에 빠질 수 있으므로 주의해야 한다.
    // FIxME: 자식 노드의 일부분이 부모와 연결 되어 있다.
    // const instance = this.getTargetInstance(this.$el?.el);

    // if (instance) {
    //   instance.onUpdated();
    // }

    // TODO: 업데이트 할 때 이벤트를 다시 제어해야할까?
  }

  onDestroyed() {
    super.onDestroyed();

    // root vnode의 element 와 나의 element 가 같을 때는
    // 자식 vnode 의 destroyed 를 같이 실행해준다.
    // const instance = this.getTargetInstance(this.$el?.el);

    // if (instance) {
    //   instance.onDestroyed();
    // }
  }

  onUnmounted() {
    super.onUnmounted();

    // root vnode의 element 와 나의 element 가 같을 때는
    // 자식 vnode 의 destroyed 를 같이 실행해준다.
    // const instance = this.getTargetInstance(this.$el?.el);

    // if (instance) {
    //   instance.onUnmounted();
    // }
  }

  /**
   * Initialize Magic Method
   */
  initMagicMethod(methodName, callback) {
    if (!this[methodName]) {
      this[methodName] = callback;
    }
  }
}
