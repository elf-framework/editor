import { VNodeType } from "../constant/vnode";
import { css } from "./css";
import { Dom } from "./Dom";
import { isArray, isFunction, isNumber, isObject, isString } from "./func";
import { variable } from "./registElement";
import { isSVG } from "./svg";

const TAG_PREFIX = "<";
const TEMP_DIV = Dom.create("div");
const TEMP_TEXT = document.createTextNode("");
let cache = {};
let cacheCount = 0;
let nativeDomCache = {};

export function makeNativeDom(name) {
  if (!nativeDomCache[name]) {
    const el = isSVG(name)
      ? document.createElementNS("http://www.w3.org/2000/svg", name)
      : document.createElement(name);

    nativeDomCache[name] = el;
  }

  return nativeDomCache[name].cloneNode(false);
}

export function makeNativeTextDom(value) {
  const text = TEMP_TEXT.cloneNode();
  text.textContent = value;
  return text;
}

const expectAttributes = {
  content: true,
};

function setAttribute(el, name, value) {
  if (expectAttributes[name]) return;
  el.setAttribute(name, value);
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

function getProps(attributes) {
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

const children = (el) => {
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
    cache[html] = TEMP_DIV.html(html).first.el;
  }

  return cache[html].cloneNode(true);
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
  // mounted() {}

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

      this.tagProps = newProps;
    } else {
      // 컴포넌트 방식에서는
      // object 태그를 만들 때 사용할 props 를 미리 만들는데
      // 파싱 용량을 줄일기 위해서 variable 로 감싼 리스트를 설정
      const targetVariable = Object.keys(newProps).length
        ? variable(newProps)
        : undefined;

      const newProps2 = {
        // refClass: this.Component.name,
        ref: newProps.ref ? newProps.ref : undefined,
      };

      if (targetVariable) {
        newProps2[targetVariable] = "";
      }
      this.tagProps = newProps2;
    }

    if (this.props.enableHtml) {
      this.enableHtml = this.props.enableHtml;
      delete this.props.enableHtml;
    }
  }

  initializeChildren() {
    if (isArray(this.children)) {
      this.children = this.children.map((child) => {
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

              // TODO: element 생성을 자동으로 해줄지 고민이 필요함.
              return createVNodeElement(newEl);
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
    const el = this.el;
    const children = this.children;
    if (children && children.length) {
      const fragment = document.createDocumentFragment();

      // element 수집
      children.forEach((child) => {
        if (child instanceof VNode || child.makeElement) {
          fragment.appendChild(child.makeElement(withChildren, options).el);
        } else if (isArray(child)) {
          child.forEach((it) => {
            if (it) {
              fragment.appendChild(it.makeElement(withChildren, options).el);
            }
          });
        } else if (isFunction(child)) {
          fragment.appendChild(child());
        } else if (child instanceof window.HTMLElement) {
          fragment.appendChild(child);
        } else {
          fragment.appendChild(Object.prototype.toString.call(null, child));
        }
      });

      // fragment 적용
      el.appendChild(fragment);

      // mounted 메세지 실행
      children.forEach((child) => {
        if (isArray(child)) {
          child.forEach((it) => {
            if (it) {
              it.runMounted();
            }
          });
        } else if (child) {
          child.runMounted();
        }
      });
    }
  }

  createElement() {
    return makeNativeDom(this.tag);
  }

  makeElement(withChildren = false, options = {}) {
    if (this.el) return this;

    const el = this.createElement();

    const props = this.tagProps;
    if (props) {
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

        if (key === "ref" && value) {
          this.ref = value;

          isFunction(options.registerRef) && options.registerRef(value, el);
        }
      });
    }

    this.el = el;
    this.makeChildren(withChildren, options);

    return this;
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
    if (this.el) return this;

    this.el = this.createElement();
    // this.nodeType = this.el.nodeType;
    // this.textContent = this.el.textContent;
    return this;
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

    // this.nodeType = this.el.nodeType;
    // this.textContent = this.el.textContent;
    return this;
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

  render(options) {
    const Component = this.Component;
    const props = this.props;

    // context 는 상위 Component 의 instance 를 가리킨다.
    // 즉, 컴포넌트의 parent 가 된다.
    this.instance = options.context.createInstanceForComponent(
      Component,
      props,
      options
    );

    // 객체를 생성 후에는 렌더링을 한다.
    this.instance.render();
  }

  makeElement(withChildren, options = {}) {
    if (this.el) return this;

    this.render(options);

    // 렌더링 된 객체에서 element 를 얻는다.
    this.el = this.instance.$el.el;

    // props.ref 가 있으면 등록한다.
    // 상위 컨텍스트 에서 내부 children 을 관리한다.
    const id = this.props.ref || this.instance.id;

    isFunction(options.registerChildComponent) &&
      options.registerChildComponent(this.el, this.instance, id);

    return this;
  }
}

export class VNodeElement extends VNode {
  constructor(el) {
    super(VNodeType.ELEMENT, null, {});
    this.el = el;
    this.outerHTML = el.outerHTML;

    // static 형태로 만들어진 element 는 diff 를 하지 않는다.
    // this.el.setAttribute("data-domdiff-path", "true");
    this.pass = true;
  }

  clone() {
    return new VNodeElement(this.el);
  }

  makeElement() {
    // this.nodeType = this.el.nodeType;
    // this.nodeName = this.el.nodeName;
    return this;
  }
}

export function createVNode({ tag, props, children, Component }) {
  return new VNode(VNodeType.NODE, tag, props, children, Component);
}

export function createVNodeComponent({ props, children, Component }) {
  return new VNodeComponent(props, children, Component);
}

export function createVNodeFragment({ props, children, Component }) {
  return new VNodeFragment(props, children, Component);
}

export function createVNodeText(text) {
  return new VNodeText(text);
}

export function createVNodeElement(el) {
  return new VNodeElement(el);
}

export function htmlToVNode(html) {
  const $dom = Dom.createByHTML(html);
  return createVNodeByDom($dom.el);
}

export function createVNodeByDom(el) {
  return createVNode({
    tag: el.tagName.toLowerCase(),
    props: getProps(el.attributes),
    children: children(el).map((it) => {
      return createVNodeByDom(it);
    }),
  });
}

export function cloneVNode(vnode) {
  return vnode.clone();
}
