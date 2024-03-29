import {
  COMPONENT_INSTANCE,
  FRAGMENT_VNODE_INSTANCE,
  PARENT_VNODE_INSTANCE,
  SELF_COMPONENT_INSTANCE,
  VNODE_INSTANCE,
} from "../../constant/component";
import { VNodeType } from "../../constant/vnode";
import { EventMachine } from "../../EventMachine";
import { RefClass } from "../../HookMachine";
import {
  commitMount,
  commitUnmount,
  commitUpdated,
} from "../../renderer/dom/utils";
import { createComponentInstance } from "../../UIElement";
import { css } from "../css";
import { Dom } from "../Dom";
import {
  isArray,
  isFunction,
  isNumber,
  isObject,
  isString,
  isUndefined,
  isValue,
} from "../func";
import { getModule, isGlobalForceRender } from "../registElement";
import { uuidShort } from "../uuid";

const EXPECT_ATTRIBUTES = {
  memoizedProps: true,
  parentElement: true,
  el: true,
  children: true,
  instance: true,
  [PARENT_VNODE_INSTANCE]: true,
  [SELF_COMPONENT_INSTANCE]: true,
  [VNODE_INSTANCE]: true,
  [COMPONENT_INSTANCE]: true,
  startComment: true,
  endComment: true,
  fragmentId: true,
};

window.instanceList = [];

function stringifyStyle(styleObject) {
  const newStyle = css(styleObject);

  const list = [];
  const keys = Object.keys(newStyle);
  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i];
    list[list.length] = `${key}: ${newStyle[key]};`;
  }

  return list.join("");
}

export const children = (el) => {
  var element = el.firstChild;

  if (!element) {
    return [];
  }

  var results = [];
  do {
    results[results.length] = element;
    element = element.nextSibling;
  } while (element);

  return results;
};

export function isEqual(obj1, obj2, count = 0, omitKeys = {}) {
  // 함수는 무조건 새로고침이 되도록 한다.
  if (isFunction(obj1) && isFunction(obj2)) {
    return false;
  }

  const obj1Keys = Object.keys(obj1).filter(
    (key) => omitKeys[key] === undefined
  );
  const obj2Keys = Object.keys(obj2).filter(
    (key) => omitKeys[key] === undefined
  );

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  // 1, 2 둘 다 key 가 없을 때는 같은 걸로 체크한다.
  if (obj1Keys.length === 0 && obj2Keys.length === 0) {
    return true;
  }

  const result = obj1Keys.every((key) => {
    // omitKeys 에 있는 키는 비교하지 않는다.
    if (omitKeys[key]) {
      return true;
    }

    const obj1Value = obj1[key];
    const obj2Value = obj2[key];

    // Class/Function component 의 경우 새로운 컴포넌트를 만들어서 비교한다.
    if (isGlobalForceRender() && key === "Component") {
      return false;
    }

    if (isArray(obj1Value) && isArray(obj2Value)) {
      if (obj1Value.length !== obj2Value.length) {
        return false;
      }

      if (obj1Value.length === 0 && obj2Value.length === 0) {
        return true;
      }

      const isTrue = obj1Value.every((value, index) => {
        return isEqual(value, obj2Value[index], count + 1, omitKeys);
      });

      return isTrue;
    } else if (isObject(obj1Value) && isObject(obj2Value)) {
      if (obj1Value instanceof EventMachine) {
        return obj1Value === obj2Value;
      }

      return isEqual(obj1Value, obj2Value, count + 1, omitKeys);
    }

    const result = obj1Value === obj2Value;

    if (result) {
      // 두개의 값이 동일하고, 함수일 경우는 다시 그린다.
      if (isGlobalForceRender() && isFunction(obj1Value)) {
        return false;
      }
    }

    return result;
  });

  return result;
}

export function vnodePropsDiff(oldProps, newProps) {
  return isEqual(oldProps, newProps, 0, EXPECT_ATTRIBUTES);
}

/**
 * VirtualNode class
 *
 */
export class VNode {
  constructor(type, tag, props, children, Component = undefined) {
    this.type = type;
    this.tag = tag;
    this.nodeName = tag?.toUpperCase();
    this.props = props;
    this.children = children;
    this.Component = Component;
    this.el = null;

    this.initializeProps();
    this.initializeChildren();
  }

  clone() {
    return new VNode(
      this.type,
      this.tag,
      { ...this.props },
      this.children.map((it) => it.clone()),
      this.Component
    );
  }

  find(callback) {
    return this.props.content.find(callback);
  }

  /**
   * 상위 element 에 추가된 이후에 호출된다.
   *
   * @override
   */
  mounted() {
    // noop

    const selfInstance = this[SELF_COMPONENT_INSTANCE];

    commitMount(selfInstance);
  }

  /**
   * 상위 element 에 추가된 이후에 호출된다.
   *
   * @override
   */
  updated() {
    // noop

    const selfInstance = this[SELF_COMPONENT_INSTANCE];

    if (selfInstance) {
      commitUpdated(selfInstance);
    }
  }

  /**
   * 상위 element 에 추가된 이후에 호출된다.
   *
   * @override
   */
  unmounted() {
    // noop

    const selfInstance = this[SELF_COMPONENT_INSTANCE];

    if (selfInstance) {
      commitUnmount(selfInstance);
    }
  }

  runMounted() {
    if (this.mounted) {
      // element 가 추가 된 이후에 rendering 을 바로 하지 않기 때문에 시간차를 둔다.

      if (!this.runnedMounted) {
        requestAnimationFrame(() => {
          this.mounted();
        });
        this.runnedMounted = true;
      } else {
        this.mounted();
      }
    }
  }

  runUnmounted() {
    if (this.unmounted) {
      this.unmounted();
    }
  }

  runUpdated() {
    if (this.updated) {
      // element 가 추가 된 이후에 rendering 을 바로 하지 않기 때문에 시간차를 둔다.
      if (!this.runnedUpdated) {
        requestAnimationFrame(() => {
          this.updated();
        });
        this.runnedUpdated = true;
      } else {
        this.updated();
      }
    }
  }

  get stringifyStyle() {
    return this.memoizedProps.style;
  }

  initializeProps() {
    const newProps = Object.assign({}, this.props);

    if (!this.Component) {
      if (isObject(newProps.style)) {
        newProps.style = stringifyStyle(newProps.style);
      }

      if (newProps.className) {
        newProps.class = newProps.className;
        delete newProps.className;
      }

      // undefined, null, false, "" 는 제거한다.
      // 0 은 제거하지 않는다.
      // 0 을 제거하면 안되는 이유는, 0 을 제거하면, 0 이 아닌 값이 있을 때, 0 이 제거되어서
      Object.keys(newProps).forEach((key) => {
        const value = newProps[key];

        if (key === "style") {
          if (isUndefined(value) || value === "") {
            delete newProps[key];
          }
        } else {
          if (isUndefined(value)) {
            delete newProps[key];
          }
        }
      });

      this.memoizedProps = newProps;
    } else {
      // NOOP
    }

    if (this.props.enableHtml) {
      this.enableHtml = this.props.enableHtml;
      delete this.props.enableHtml;
    }
  }

  initializeChildren() {
    if (isArray(this.children)) {
      this.children = this.children.filter(isValue).map((child) => {
        if (isString(child) || isNumber(child)) {
          return createVNodeText(child);
        }

        return child;
      });

      this.props.content = this.children;
    }
  }

  setParentElement(parentElement) {
    this.parentElement = parentElement;
  }

  makeText(divider = "") {
    const arr = this.children
      .map((child) => child.makeText(divider))
      .flat(Infinity);

    return arr.join(divider);
  }

  isType(type) {
    return this.type === type;
  }

  hasComponent() {
    return (
      this.children?.length === 1 &&
      this.children?.[0].type === VNodeType.COMPONENT
    );
  }

  hasFragment() {
    return (
      this.children.length === 1 && this.children[0].type === VNodeType.FRAGMENT
    );
  }

  get firstChild() {
    return this.children[0];
  }

  get lastChild() {
    return this.children[this.children.length - 1];
  }

  toString() {
    return this.makeText();
  }

  getEl() {
    return this.el;
  }

  setEl(el) {
    this.el = el;
  }
}

export class VNodeText extends VNode {
  constructor(value) {
    super(VNodeType.TEXT, null, {});
    this.value = value;
    this.nodeName = "#TEXT";
  }

  clone() {
    return new VNodeText(this.value);
  }

  get textContent() {
    return this.value;
  }

  runMounted() {}

  runUpdated() {}

  runUnmounted() {}

  makeText() {
    return this.value;
  }
}

export class VNodeComment extends VNode {
  constructor(value) {
    super(VNodeType.COMMENT, null, {});
    this.value = value;
  }

  clone() {
    return new VNodeComment(this.value);
  }

  get textContent() {
    return this.value;
  }

  get fragment() {
    return this[FRAGMENT_VNODE_INSTANCE];
  }

  runMounted() {}

  runUpdated() {}

  runUnmounted() {}

  makeText() {
    return "";
  }
}

export class VNodeFragment extends VNode {
  constructor(props = {}, children) {
    super(VNodeType.FRAGMENT, "fragment", props || {}, children);

    this.fragmentId = uuidShort();
    this.startComment = createVNodeComment(`start-${this.fragmentId}`);
    this.endComment = createVNodeComment(`end-${this.fragmentId}`);

    this.initializeFragment();
  }

  initializeFragment() {
    this.children = [this.startComment, ...this.children, this.endComment].map(
      (it) => {
        it[FRAGMENT_VNODE_INSTANCE] = this;
        return it;
      }
    );

    this.props.content = this.children;
  }

  clone() {
    return new VNodeFragment(
      this.props,
      this.children.map((it) => it.clone())
    );
  }

  get startFragment() {
    return this.startComment;
  }

  get endFragment() {
    return this.endComment;
  }
}

export class VNodeComponent extends VNode {
  constructor(props = {}, children, Component) {
    super(VNodeType.COMPONENT, "object", props || {}, children, Component);
    this.Component = Component;
    this.LastComponent = Component;
    this.instance = null;
  }

  clone() {
    return new VNodeComponent(
      this.props,
      this.children.map((it) => it.clone()),
      this.Component
    );
  }

  isFunctionComponent() {
    return this.LastComponent.__proto__.name === "";
  }

  getEl() {
    return this.instance?.getEl();
  }

  setEl(el) {
    this.instance.$el = Dom.create(el);
  }

  /**
   * DomTree 에 추가되었을 때, 호출된다.
   */
  mounted() {
    this.instance?.onMounted();
  }

  /**
   * DomTree 에서 변경되었을 때, 호출된다.
   */
  updated() {
    this.instance?.onUpdated();
  }

  /**
   * DomTree 에서 제외되었을 때, 호출된다.
   */
  unmounted() {
    this.instance?.onUnmounted();
  }

  getModule() {
    // vite-plugin-sapa 에서 변경 가능성이 있는 컴포넌트들은 미리 __timestamp 를 붙여준다.
    if (this.Component.__timestamp) {
      const currentModule = getModule(this.Component);
      return currentModule;
    }

    return this.Component;
  }

  // 임의의 instance 를 설정한다.
  // 임의의 instance 의 state, hook, id 등을 얻기 위해서 사용한다.
  setInstance(instance) {
    this.instance = instance;
  }

  get isComponentChanged() {
    const localComponent = this.getModule();

    // 미리 로드된 컴포넌트는 항상 새로고침 하지 않은 상태로 처리한다
    if (!localComponent) return false;

    return this.LastComponent !== localComponent;
  }

  // class/function instance 생성
  makeClassInstance(options) {
    const props = { ...this.props };

    // 등록된 Component 중에 새로운 Component 를 가지고 온다.
    const newComponent = this.getModule() || this.Component;

    // 마지막에 로드한 Component 를 저장해둔다.
    this.LastComponent = newComponent;

    // context 는 상위 Component 의 instance 를 가리킨다.
    // 즉, 컴포넌트의 parent 가 된다.
    // props와 state 를 유지할 수 있는 방법이 있어야 할 듯 하다.

    const oldInstance = this.instance;
    const hooks = oldInstance?.copyHooks();
    const state = oldInstance?.state;
    const oldId = oldInstance?.id;
    const refs = oldInstance?.refs;
    const children = oldInstance?.children || {};

    this.instance = createComponentInstance(
      newComponent,
      options.context,
      props,
      state
    );

    if (oldId) {
      this.instance.setId(oldId);
    }

    if (refs) {
      this.instance.setRefs(refs);
    }

    if (hooks && hooks.__stateHooks?.length) {
      this.instance.reloadHooks(hooks);
    } else {
      this.instance.initHooks();
    }

    if (state) {
      // state 도 복구한다.
      // false 를 주는건 렌더링을 바로 하지 않기 위해서이다.
      this.instance.setState(state, false);
    }

    if (Object.keys(children).length) {
      this.instance.setChildren(children);
    }

    // props 에 ref 가 있으면 새로운 instance 를 등록한다.
    if (props?.ref instanceof RefClass) {
      props?.ref.setCurrent(this.instance);
    }

    // instance 에서 vnode 를 사용할 수 있도록 설정한다.
    this.instance[VNODE_INSTANCE] = this;

    // 새로운 리소스를 만들었으니 이전 리소스를 제거한다.
    //
    // Hook 을 설정한 이후에 이전 리소스를 제거하다 보니
    // 무조건 children 이 없어지는 문제가 발생함.
    // 다시 소스가 바뀌었을 때 대응이 안됨
    // oldInstance?.destroy();

    return this.instance;
  }

  template() {
    return this.instance?.template();
  }

  makeText() {
    return "";
  }
}

class VNodePotal extends VNode {
  constructor(props = {}, children, Component) {
    super(VNodeType.PORTAL, "potal", props || {}, children);
    this.Component = Component;
  }

  clone() {
    return new VNodePotal(
      this.props,
      this.children.map((it) => it.clone()),
      this.Component
    );
  }

  makeText() {
    return "";
  }
}

class VNodeLazy extends VNode {
  constructor(asyncCallbackComponent) {
    super(VNodeType.LAZY, "lazy", {}, asyncCallbackComponent);
    this.Component = asyncCallbackComponent;
  }

  clone() {
    return new VNodeLazy(this.Component);
  }

  makeText() {
    return "";
  }
}

export function createVNode({ tag, props = {}, children }) {
  return new VNode(VNodeType.NODE, tag, props, children);
}

export function createVNodeComponent({ props = {}, children, Component }) {
  if (typeof Component === "undefined") {
    throw new Error("Component is undefined");
  }
  return new VNodeComponent(props, children, Component);
}

export function createVNodeFragment({ props = {}, children }) {
  return new VNodeFragment(props, children);
}

export function createVNodeText(text) {
  return new VNodeText(text);
}

export function createVNodeComment(text) {
  return new VNodeComment(text);
}

export function createPotal({ props = {}, children, Component }) {
  return new VNodePotal(props, children, Component);
}

export function createLazy(asyncCallback) {
  return new VNodeLazy(asyncCallback);
}

export function cloneVNode(vnode) {
  return vnode.clone();
}
