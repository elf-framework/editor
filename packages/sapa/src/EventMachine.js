// import { Dom } from "./functions/Dom";
import { VNodeToElement } from "./functions/DomUtil";
import { DomVNodeDiff } from "./functions/DomVNodeDiff";
import { isFunction, collectProps, isEqual } from "./functions/func";
import { MagicMethod } from "./functions/MagicMethod";
import { uuid } from "./functions/uuid";
import DomEventHandler from "./handler/DomEventHandler";
import ObserverHandler from "./handler/ObserverHandler";
import StoreHandler from "./handler/StoreHandler";
import { resetCurrentComponent } from "./Hook";
import { MagicHandler } from "./MagicHandler";

export class EventMachine extends MagicHandler {
  /**
   * local state
   *
   * @type {any}
   */
  #state = {};
  #cachedMethodList;
  #isServer = false;
  #functionCache = {};
  #childObjectList = {};
  #childObjectElements = new WeakMap();

  // 컴포넌트 내부에서 Hook 을 관리하는 리스트
  __hooks = [];

  constructor(opt, props) {
    super();

    this.refs = {};
    this.id = uuid();

    this.initializeProperty(opt, props);
  }

  initializeHandler() {
    return super.initializeHandler({
      DomEventHandler,
      ObserverHandler,
      StoreHandler,
    });
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
  initializeProperty(opt, props = {}) {
    this.opt = opt || {};
    this.parent = this.opt;
    this.source = uuid();
    this.sourceName = this.constructor.name;
    this.props = props;
  }

  setServer(isServer = true) {
    this.#isServer = isServer;
  }

  get isServer() {
    return this.parent?.isServer || this.#isServer;
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
    // this.#prevState = this.#state;
    this.#state = Object.assign({}, this.#state, state);

    if (isRefresh) {
      // 전체를 리프레쉬 할지
      // load 만 할지 고민이 필요함.
      this.refresh();
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
    const obj1 = this.props;
    const obj2 = newProps;

    return !isEqual(obj1, obj2, 0);
  }

  /**
   * 객체를 다시 그릴 때 사용한다.
   *
   * @param {KeyValue} props
   * @param {Dom} [$container=null] $container 가 존재하면 render 를 같이 한다.
   * @protected
   */
  _reload(props) {
    if (this.changedProps(props)) {
      this.props = props;

      this.refresh();
    }
  }

  /**
   * async render method
   *
   * @param {Dom|HTMLElement} $container
   */
  checkLoad($container) {
    window.requestAnimationFrame(() => {
      this.render($container);
    });
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
    return Object.fromEntries(
      Object.entries(this.#childObjectList).map(([_key, child]) => {
        return [_key, this.#childObjectElements.get(child)];
      })
    );
  }

  /**
   * render 를 할 수 있는지 체크한다.
   *
   * @override
   */
  get isPreLoaded() {
    return true;
  }

  #reloadInstance(instance, props) {
    instance._reload(props);
  }

  registerRef = (ref, el) => {
    this.refs[ref] = el;
  };

  registerChildComponent = (el, vNode, id) => {
    if (!this.#childObjectElements.has(el)) {
      this.#childObjectList[id] = el;
      this.#childObjectElements.set(el, vNode);
    }
  };

  getTargetInstance(oldEl) {
    const _target = this.#childObjectElements.get(oldEl);
    if (_target) {
      return _target;
    }

    return undefined;
  }

  /**
   * DomVDomDiff 에서 활용하는 함수
   *
   * 특정 클래스 참조를 바로 diff 형태로 렌더링 하지 않고
   * 강제로 다시 그리기를 원할때 사용할 수 있다.
   *
   * @returns
   */
  isForceRender() {
    return false;
  }

  isInstanceOf(Component) {
    return this instanceof Component;
  }

  checkRefClass = (oldEl, newVNode) => {
    const props = newVNode.props;

    // children 에 있는지 체크
    let targetInstance = this.getTargetInstance(oldEl);

    if (targetInstance) {
      if (targetInstance.isInstanceOf(newVNode.Component)) {
        // 강제로 업데이트 할지 여부를 체크 해서 업데이트 하도록 한다.
        if (targetInstance.isForceRender(props)) {
          return true;
        }

        // targetInstance 를 props 기준으로 다시 로드한다.
        this.#reloadInstance(targetInstance, props);

        // dom 을 바꾸지 않는다. 이미 생성된 instance 이므로
        return false;
      } else {
        // 객체 인스턴스가 존재하지 않으면 dom 을 교체한다.
        return true;
      }
    }

    // 다른 예외 사항이 있으면 여기에 기록하기

    return false;
  };

  /**
   * template 을 렌더링 한다.
   *
   * @param {Dom|undefined} $container  컴포넌트가 그려질 대상
   * @param {Boolean} [isServer=false]  로드 여부
   */
  async render($container) {
    if (!this.isPreLoaded) {
      this.checkLoad($container);
      return;
    }

    // 렌더 하기 전에 hook에 현재 컴포넌트를 등록한다.
    resetCurrentComponent(this);
    const template = this.template();
    if (this.$el) {
      DomVNodeDiff(this.$el.el, template, {
        checkRefClass: this.checkRefClass,
        context: this,
        registerRef: this.registerRef,
        registerChildComponent: this.registerChildComponent,
      });

      // this.prevTemplate = template;
      requestAnimationFrame(this.onUpdated);
    } else {
      const newDomElement = this.parseMainTemplate(template);
      this.$el = newDomElement;
      this.refs.$el = this.$el;
      // this.prevTemplate = template;

      if ($container) {
        // $container 의 자식이 아닐 때만 추가
        if ($container.hasChild(this.$el) === false) {
          $container.append(this.$el);
          this.onMounted();
        }
      }

      // 최초 렌더링 될 때 한번만 실행하는걸로 하자.
      await this._afterLoad();
    }

    return this;
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
      registerChildComponent: this.registerChildComponent,
    };
  }

  /**
   * template() 함수의 결과물을 파싱해서 dom element 를 생성한다.
   *
   * element 생성 후 ref 에 들어갈 element 를 찾아서 등록한다.
   *
   * @param {string} html
   */
  parseMainTemplate(html) {
    let $el = VNodeToElement(html, this.getVNodeOptions());

    return $el;
  }

  getFunctionComponent() {
    return this;
  }

  createFunctionComponent(
    EventMachineComponent,
    props,
    BaseClass = EventMachine
  ) {
    class FunctionElement extends BaseClass {
      getFunctionComponent() {
        return EventMachineComponent;
      }

      // 함수형 컴포넌트는 instance 인지 체크를 해야할 수도 있다.
      isInstanceOf(Component) {
        return EventMachineComponent === Component;
      }
      template() {
        return EventMachineComponent.call(this, this.props);
      }
    }

    return new FunctionElement(this, props);
  }

  createInstanceForComponent(EventMachineComponent, props) {
    if (
      EventMachineComponent.__proto__.name === "" &&
      isFunction(EventMachineComponent)
    ) {
      return this.createFunctionComponent(EventMachineComponent, props);
    }

    // return sapa component
    return new EventMachineComponent(this, props);
  }

  /**
   * refresh 는 load 함수들을 실행한다.
   */
  refresh() {
    this.render();
  }

  afterRender() {}

  async _afterLoad() {
    this.runHandlers("initialize");

    this.afterRender();
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
      if (!child.parentNode) {
        const childInstance = this.#childObjectElements.get(child);

        if (childInstance) {
          childInstance.destroy();

          this.#childObjectElements.delete(child);
          delete this.#childObjectList[_key];
        }
      }
    });
  }

  /**
   * 자원을 해제한다.
   * 자식 컴포넌트까지 제어하기 때문에 가장 최상위 부모에서 한번만 호출되도 된다.
   *
   */
  destroy() {
    // 자식 컴포넌트들을 제거한다.
    Object.entries(this.#childObjectList).forEach(([_key, child]) => {
      const childInstance = this.#childObjectElements.get(child);

      if (childInstance) {
        childInstance.destroy();

        this.#childObjectElements.delete(child);
        delete this.#childObjectList[_key];
      }
    });

    this.runHandlers("destroy");
    // 로컬 이벤트 함수 실행
    this.onDestroyed();

    this.$el = null;
    this.refs = {};
    this.__hooks = [];
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

  /** utility function for hooks */

  initHook() {
    this.currentComponentHooksIndex = 0;
  }

  addHook(hook) {
    // 순서에 맞춰서 추가한다.
    const currentHook = this.__hooks[this.currentComponentHooksIndex];
    this.__hooks[this.currentComponentHooksIndex] = {
      ...currentHook,
      ...hook,
      done: false,
    };

    // 실행 여부를 설정한다. done 이 false 면 실행해야함을 의미
    this.__hooks[this.currentComponentHooksIndex++].done = false;
  }

  runHooks() {
    // hooks
    this.__hooks.forEach((it) => {
      // 완료 되지 않은 useEffect 만 실행
      // if (!it.done) {
      if (isFunction(it.cleanup)) it.cleanup();
      it.cleanup = it.callback();
      it.done = true;
      // }
    });
  }

  cleanHooks() {
    this.__hooks.forEach((it) => {
      if (isFunction(it.cleanup)) {
        it.cleanup();
      }
    });

    this.__hooks = [];
  }

  /** utility function for hooks */

  /**
   * 컴포넌트가 mount 된 이후에 실행된다.
   *
   */
  onMounted() {
    // Mounted 이벤트 실행
    const mounted = this.createFunction("mounted");

    if (mounted) {
      mounted();
    }

    // hooks
    this.runHooks();

    // root vnode의 element 와 나의 element 가 같을 때는
    // 자식 vnode 의 mounted 를 같이 실행해준다.
    const instance = this.getTargetInstance(this.$el.el);

    if (instance) {
      instance.onMounted();
    }
  }

  onUpdated = () => {
    const updated = this.createFunction("updated");

    if (updated) {
      updated();
    }

    // hooks
    this.runHooks();

    // root vnode의 element 와 나의 element 가 같을 때는
    // 자식 vnode 의 updated 를 같이 실행해준다.
    const instance = this.getTargetInstance(this.$el.el);

    if (instance) {
      instance.onUpdated();
    }

    // update 이후에 컴포넌트가 삭제된 경우는 비워둔다.
    this.clear();
  };

  onDestroyed() {
    const destroyed = this.createFunction("destroyed");

    if (destroyed) {
      destroyed();
    }

    // hooks
    this.cleanHooks();

    // root vnode의 element 와 나의 element 가 같을 때는
    // 자식 vnode 의 destroyed 를 같이 실행해준다.
    const instance = this.getTargetInstance(this.$el.el);

    if (instance) {
      instance.onDestroyed();
    }
  }

  /**
   * Function Component 에서 mounted 된 상태 체크할 수 있음.
   *
   * @param {*} callback
   * @returns
   */
  useMounted(callback) {
    return this.createFunction("mounted", callback);
  }

  /**
   * Function Component 에서 updated 된 상태 체크할 수 있음.
   *
   * @param {*} callback
   * @returns
   */
  useUpdated(callback) {
    return this.createFunction("updated", callback);
  }

  /**
   * Function Component 에서 destroyed 된 상태 체크할 수 있음.
   *
   * @param {*} callback
   * @returns
   */
  useDestroyed(callback) {
    return this.createFunction("destroyed", callback);
  }
}
