import { VNodeType } from "../../constant/vnode";
import { EventMachine } from "../../EventMachine";
import { createComponentInstance } from "../../UIElement";
import { css } from "../css";
import { Dom } from "../Dom";
import { isVoidTag } from "../DomUtil";
import { isArray, isFunction, isNumber, isObject, isString } from "../func";
import { getModule, isGlobalForceRender } from "../registElement";
import { isSVG } from "../svg";

const TAG_PREFIX = "<";
let TEMP_DIV;
let TEMP_TEXT;
let TEMP_COMMENT;
let cache = {};
let cacheCount = 0;
let nativeDomCache = {};
const EXPECT_ATTRIBUTES = {
  tagProps: true,
  parentElement: true,
  el: true,
  children: true,
  instance: true,
};

const ENABLE_PROPERTY = {
  indeterminate: true,
};

function makeTempDiv() {
  if (!TEMP_DIV) {
    TEMP_DIV = Dom.create("div");
  }

  return TEMP_DIV;
}

function makeTempText() {
  if (!TEMP_TEXT) {
    TEMP_TEXT = document.createTextNode("");
  }

  return TEMP_TEXT;
}

function makeTempComment() {
  if (!TEMP_COMMENT) {
    TEMP_COMMENT = document.createComment("");
  }

  return TEMP_COMMENT;
}

function makeNativeDom(name) {
  if (!nativeDomCache[name]) {
    const el = isSVG(name)
      ? document.createElementNS("http://www.w3.org/2000/svg", name)
      : document.createElement(name);

    nativeDomCache[name] = el;
  }

  return nativeDomCache[name].cloneNode(false);
}

function makeNativeTextDom(value) {
  const text = makeTempText().cloneNode();
  text.textContent = value;
  return text;
}

function makeNativeCommentDom(value) {
  const text = makeTempComment().cloneNode();
  text.textContent = value;
  return text;
}

const expectAttributes = {
  content: true,
};

function setAttribute(el, name, value) {
  if (expectAttributes[name]) return;
  if (ENABLE_PROPERTY[name]) {
    el[name] = value;
  } else {
    el.setAttribute(name, value);
  }
}

function setEventAttribute(el, name, value) {
  el[name.toLowerCase()] = value;

  // or  el.addEventListener(name.replace(/on/, "").toLowerCase(), value);
}

function setStyle(el, key, value) {
  if (key.indexOf("--") === 0) {
    if (typeof value === "undefined") {
      el.style.removeProperty(key);
    } else {
      el.style.setProperty(key, value);
    }
  } else {
    el.style[key] = value;
  }
}

function stringifyStyle(styleObject) {
  const newStyle = css(styleObject);
  return Object.keys(newStyle)
    .map((key) => {
      return `${key}: ${newStyle[key]};`;
    })
    .join(" ");
}

export function getProps(attributes) {
  var results = {};
  const len = attributes.length;

  // 일단 attribute 에는 없음
  // properties 에 있는지 봐야함.
  for (let i = 0; i < len; i++) {
    const t = attributes[i];
    const name = t.name;
    const value = t.value;

    results[name] = value;
  }

  return results;
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

export function makeOneElement(html) {
  if (cacheCount > 2000) {
    cacheCount = 0;
    cache = {};
  }

  if (!cache[html]) {
    cacheCount++;
    cache[html] = makeTempDiv().html(html).first.el;
  }

  return cache[html].cloneNode(true);
}

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

  return obj1Keys.every((key) => {
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
}

export function vnodePropsDiff(oldProps, newProps) {
  return isEqual(oldProps, newProps, 0, EXPECT_ATTRIBUTES);
}

export class VNode {
  constructor(type, tag, props, children, Component) {
    this.type = type;
    this.tag = tag;
    this.nodeName = tag?.toUpperCase();
    this.props = props;
    this.children = children;
    this.Component = Component;

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
  }

  runMounted() {
    if (this.mounted) {
      // element 가 추가 된 이후에 rendering 을 바로 하지 않기 때문에 시간차를 둔다.
      requestAnimationFrame(() => {
        this.mounted();
      }, 0);
    }
  }

  get stringifyStyle() {
    return this.tagProps.style;
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

      this.tagProps = newProps;
    } else {
      // console.log("aaaa");
      // // 컴포넌트 방식에서는
      // // object 태그를 만들 때 사용할 props 를 미리 만들는데
      // // 파싱 용량을 줄일기 위해서 variable 로 감싼 리스트를 설정
      // const targetVariable = Object.keys(newProps).length
      //   ? variable(newProps)
      //   : undefined;
      // const newProps2 = {
      //   // refClass: this.Component.name,
      //   ref: newProps.ref ? newProps.ref : undefined,
      // };
      // if (targetVariable) {
      //   newProps2[targetVariable] = "";
      // }
      // this.tagProps = newProps2;
    }

    if (this.props.enableHtml) {
      this.enableHtml = this.props.enableHtml;
      delete this.props.enableHtml;
    }
  }

  initializeChildren() {
    if (isArray(this.children)) {
      // 하위 객체는 content 로 받는다.
      // 다만 props 에 content 가 정의 되어 있으면 처리 하지 않는다.
      if (this.props.content) return;

      this.children = this.children.filter(Boolean).map((child) => {
        if (isString(child)) {
          if (this.enableHtml) {
            // tag 문자열이 없으면 그냥 text node 로 인식한다.
            // 이때에는 tag 의 이름을 제거한다.
            if (child.indexOf(TAG_PREFIX) === -1) {
              return createVNodeText(child);
            } else {
              // tag 문자열이 있으면 파싱해서 결과물을 vNode 로 만든다.
              // html 을 입력할지 말지 여기서 결정해야할 듯
              const newEl = makeOneElement(child);

              if (newEl?.nodeType === 3) {
                return createVNodeText(newEl.textContent);
              }

              return createVNodeText(newEl);
            }
          } else {
            return createVNodeText(child);
          }
        } else if (isNumber(child)) {
          return createVNodeText(child);
        }

        return child;
      });

      this.props.content = this.children;
    }
  }

  makeChildren(withChildren, options) {
    const parentElement = this.el;
    const children = this.children;
    if (children && children.length) {
      const fragment = document.createDocumentFragment();

      // element 수집
      children.forEach((child) => {
        if (child instanceof VNode || child.makeElement) {
          child.setParentElement(parentElement);
          const el = child.makeElement(withChildren, options).el;

          if (el) {
            fragment.appendChild(el);
          }
        } else if (isArray(child)) {
          child.forEach((it) => {
            if (it) {
              const el = it.makeElement(withChildren, options).el;

              if (el) {
                fragment.appendChild(el);
              }
            }
          });
        } else if (isFunction(child)) {
          const result = child();

          if (result instanceof VNode) {
            const el = result.makeElement(withChildren, options);

            if (el) fragment.appendChild(el);
          } else if (typeof result === "string") {
            fragment.appendChild(document.createTextNode(result));
          }
        } else if (child instanceof window.HTMLElement) {
          fragment.appendChild(child);
        } else {
          fragment.appendChild(document.createTextNode(child));
        }
      });

      // fragment 적용
      parentElement.appendChild(fragment);

      // mounted 메세지 실행
      children.forEach((child) => {
        if (isArray(child)) {
          child.forEach((it) => {
            if (isFunction(it?.runMounted)) {
              it.runMounted();
            }
          });
        } else if (child) {
          if (isFunction(child?.runMounted)) {
            child.runMounted();
          }
        }
      });
    }
  }

  setParentElement(parentElement) {
    this.parentElement = parentElement;
  }

  async makeChildrenHtml(withChildren, options) {
    const tempChildren = [];
    const children = this.children;
    if (children && children.length) {
      // element 수집
      const tempArray = await Promise.all(
        children.map(async (child) => {
          if (child instanceof VNode || child.makeHtml) {
            return await child.makeHtml(withChildren, options);
          } else if (isArray(child)) {
            return await Promise.all(
              child.map(async (it) => {
                if (it) {
                  return await it.makeHtml(withChildren, options);
                }

                return undefined;
              })
            ).filter((it) => typeof it !== "undefined");
          } else if (isFunction(child)) {
            return await child();
          } else {
            return await child;
          }
        })
      );

      tempChildren.push(...tempArray);
    }

    return tempChildren.join("\n");
  }

  createElement() {
    return makeNativeDom(this.tag);
  }

  /**
   * context 에서 사용할 수 있는 속성을 추출한다.
   */
  getContextProps(context, props) {
    const newProps = context.filterFunction("getProps").flat(Infinity);
    const newPropList = newProps.filter((it) => {
      return it.ref === props.ref;
    });

    newPropList.forEach((it) => {
      if (isObject(it.props)) {
        Object.assign(props, it.props);
      }
    });
  }

  makeElement(withChildren = false, options = {}) {
    const el = this.createElement();

    let props = this.tagProps;
    if (props) {
      // props 에 ref 속성이 있으면 context 에 추가한다.
      if (props.ref) {
        this.getContextProps(options.context, props);

        this.ref = props.ref;
        isFunction(options.registerRef) && options.registerRef(props.ref, el);
      }

      Object.keys(props).forEach((key) => {
        const value = props[key];
        if (key === "style") {
          if (isString(value)) {
            el.style.cssText = value;
          } else {
            const styleValues = css(value);
            Object.entries(styleValues).forEach(([localKey, value]) => {
              setStyle(el, localKey, value);
            });
          }
        } else {
          if (key) {
            if (value !== undefined) {
              // 이벤트는 단일 속성 이벤트로 정의
              if (key.startsWith("on")) {
                setEventAttribute(el, key, value);
              } else {
                setAttribute(el, key, value);
              }
            }
          }
        }
      });
    }

    this.el = el;
    this.makeChildren(withChildren, options);

    return this;
  }

  async makeHtml(withChildren = false, options = {}) {
    const tempProps = [];
    const props = this.tagProps;
    if (props) {
      if (props.ref) {
        // ref 가 있을 때는 context 에서 props 를 가지고 온다.
        this.getContextProps(options.context, props);
      }

      Object.keys(props).forEach((key) => {
        const value = props[key];
        if (key === "style") {
          if (isString(value)) {
            // noop
          } else {
            props[key] = stringifyStyle(css(value));
          }
        } else {
          if (key) {
            if (value !== undefined) {
              // 이벤트는 단일 속성 이벤트로 정의
              if (key.startsWith("on")) {
                // onXXX 이벤트는 정의하지 않는다.
                return;
              }
            }
          }
        }

        if (key === "ref") {
          return;
        }

        if (value) {
          tempProps.push(`${key}="${value}"`);
        }
      });
    }

    if (isVoidTag(this.tag)) {
      return `
        <${this.tag} ${tempProps.join(" ")} />
      `;
    } else {
      const childrenHtml = await this.makeChildrenHtml(withChildren, options);

      return `
        <${this.tag} ${tempProps.join(" ")}>${childrenHtml}</${this.tag}>
      `;
    }
  }

  makeText(divider = "") {
    const arr = this.children
      .map((child) => child.makeText(divider))
      .flat(Infinity);

    return arr.join(divider);
  }
}

export class VNodeText extends VNode {
  constructor(value) {
    super(VNodeType.TEXT, null, {});
    this.value = value;
  }

  clone() {
    return new VNodeText(this.value);
  }

  get textContent() {
    return this.value;
  }

  runMounted() {}

  createElement() {
    return makeNativeTextDom(this.value);
  }

  makeElement() {
    this.el = this.createElement();
    return this;
  }

  makeHtml() {
    return this.value;
  }

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

  runMounted() {}

  createElement() {
    return makeNativeCommentDom(this.value);
  }

  makeElement() {
    this.el = this.createElement();

    return this;
  }

  makeHtml() {
    return `<!-- ${this.value} -->`;
  }

  makeText() {
    return "";
  }
}

export class VNodeFragment extends VNode {
  constructor(props = {}, children) {
    super(VNodeType.FRAGMENT, "fragment", props || {}, children);
  }

  clone() {
    return new VNodeFragment(
      this.props,
      this.children.map((it) => it.clone())
    );
  }

  makeElement(withChildren = false, options = {}) {
    if (this.el) return this;

    const el = document.createDocumentFragment();

    this.el = el;

    this.makeChildren(withChildren, options);

    return this;
  }

  async makeHtml(withChildren = false, options = {}) {
    return await this.makeChildrenHtml(withChildren, options);
  }
}

export class VNodeComponent extends VNode {
  constructor(props = {}, children, Component) {
    super(VNodeType.COMPONENT, "object", props || {}, children);
    this.Component = Component;
    this.instance = null;
  }

  clone() {
    return new VNodeComponent(
      this.props,
      this.children.map((it) => it.clone()),
      this.Component
    );
  }

  mounted() {
    this.instance?.onMounted();
  }

  getModule() {
    return getModule(this.Component);
  }

  get isComponentChanged() {
    return this.Component !== this.getModule();
  }

  // class/function instance 생성
  makeClassInstance(options) {
    const props = { ...this.props };

    // ref 가 있을 때는 context 에서 props 를 가지고 온다.
    if (props.ref) {
      this.getContextProps(options.context, props);
    }

    // 등록된 Component 중에 새로운 Component 를 가지고 온다.
    const newComponent = this.getModule();

    // context 는 상위 Component 의 instance 를 가리킨다.
    // 즉, 컴포넌트의 parent 가 된다.
    // props와 state 를 유지할 수 있는 방법이 있어야 할 듯 하다.
    const hooks = this.instance?.copyHooks();
    const state = this.instance?.state;
    const oldId = this.instance?.id;

    this.instance = createComponentInstance(
      newComponent,
      options.context,
      props,
      state
    );

    if (oldId) {
      this.instance.setId(oldId);
    }

    if (hooks) {
      this.instance.reloadHooks(hooks);
    }

    return this.instance;
  }

  render(options) {
    this.makeClassInstance(options);

    try {
      // 객체를 생성 후에는 렌더링을 한다.
      // renderComponent(this.instance);
      this.instance.setParentElement(this.parentElement);
      this.instance.render(options.$container);
    } catch (e) {
      console.error(e);
    }
  }

  async renderHtml(options) {
    this.makeClassInstance(options);

    // 객체를 생성 후에는 렌더링을 한다.
    return await this.instance.renderToHtml();
  }

  makeElement(withChildren, options = {}) {
    this.render(options);

    // 렌더링 된 객체에서 element 를 얻는다.
    this.el = this.instance?.$el?.el;

    if (this.el) {
      // props.ref 가 있으면 등록한다.
      // 상위 컨텍스트 에서 내부 children 을 관리한다.
      const id = this.props.ref || this.instance.id;

      isFunction(options.registerChildComponent) &&
        options.registerChildComponent(this.el, this.instance, id);
    }

    return this;
  }

  async makeHtml(withChildren, options = {}) {
    return await this.renderHtml(options);
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

export function cloneVNode(vnode) {
  return vnode.clone();
}
