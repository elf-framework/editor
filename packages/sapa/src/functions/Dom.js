import { isArray, isFunction } from "./func";
import { recoverVariable } from "./registElement";
/**
 * Dom 유틸리티
 *
 */
export class Dom {
  constructor(tag, className, attr) {
    if (typeof tag !== "string") {
      if (tag instanceof Dom) {
        this.el = tag.el;
      } else {
        this.el = tag;
      }
    } else {
      var el = document.createElement(tag);

      if (className) {
        el.className = className;
      }

      attr = attr || {};

      Object.assign(el, attr);

      this.el = el;
    }
  }

  static create(tag, className, attr) {
    return new Dom(tag, className, attr);
  }

  static createText(text) {
    return new Dom(document.createTextNode(text));
  }

  static createByHTML(htmlString) {
    var div = Dom.create("div");
    return div.html(htmlString).firstChild;
  }

  static getScrollTop() {
    return Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
  }

  static getScrollLeft() {
    return Math.max(
      window.pageXOffset,
      document.documentElement.scrollLeft,
      document.body.scrollLeft
    );
  }

  static parse(html) {
    var parser = window.DOMParser();
    return parser.parseFromString(html, "text/html");
  }

  static body() {
    return Dom.create(document.body);
  }

  get tagName() {
    return this.el.tagName;
  }

  get exists() {
    return Boolean(this.el);
  }

  setAttr(obj) {
    Object.keys(obj).forEach((key) => {
      this.attr(key, obj[key]);
    });
    return this;
  }

  setAttrNS(obj, namespace = "http://www.w3.org/2000/svg") {
    Object.keys(obj).forEach((key) => {
      this.attr(key, obj[key], namespace);
    });
    return this;
  }

  setProp(obj) {
    Object.keys(obj).forEach((key) => {
      // 동일한 값을 갱신하지 않는다.
      if (this.el[key] != obj[key]) {
        this.el[key] = obj[key];
      }
    });
    return this;
  }

  /**
   * data-xxx 속성을 관리한다.
   *
   * @param {string} key
   * @param {any} value
   */
  data(key, value) {
    if (arguments.length === 1) {
      const value = this.attr("data-" + key);

      return recoverVariable(value, false);
    } else if (arguments.length === 2) {
      return this.attr("data-" + key, value);
    }

    //TODO:  data 속성을 모두 {[key]: value} 형태로 리턴하기

    return this;
  }

  /**
   * Dom attribute 얻기 또는 설정
   *
   * get ->  Dom.create(targetElement).attr('key');
   * set -> Dom.create(targetElement).attr('key', value);
   *
   * @param {string} key
   * @param {string[]} value
   */
  attr(...args) {
    if (args.length == 1) {
      return isFunction(this.el.getAttribute) && this.el.getAttribute(args[0]);
    }

    // 동일한 속성 값이 있다면 변경하지 않는다.
    if (this.el.getAttribute(args[0]) != args[1]) {
      this.el.setAttribute(args[0], args[1]);
    }

    return this;
  }

  attrKeyValue(keyField) {
    return {
      [this.el.getAttribute(keyField)]: this.val(),
    };
  }

  get attributes() {
    try {
      return [...this.el.attributes];
    } catch (e) {
      const length = this.el.attributes.length;
      const attributes = [];
      for (var i = 0; i < length; i++) {
        attributes.push(this.el.attributes[`${i}`]);
      }

      return attributes;
    }
  }

  attrs(...args) {
    return args.map((key) => {
      return this.el.getAttribute(key);
    });
  }

  styles(...args) {
    return args.map((key) => {
      return this.el.style[key];
    });
  }

  removeAttr(key) {
    this.el.removeAttribute(key);

    return this;
  }

  removeStyle(key) {
    this.el.style.removeProperty(key);
    return this;
  }

  get isFragment() {
    // fragment 체크
    return this.el.nodeType === 11;
  }

  get isTemplate() {
    // fragment 체크
    return this.el.nodeType === 1 && this.el.tagName === "TEMPLATE";
  }

  get content() {
    return this.isTemplate ? this.el.content : this.el;
  }

  is(checkElement) {
    if (checkElement instanceof Dom) {
      return this.el === checkElement.el;
    }

    return this.el === checkElement;
  }

  isTag(tag) {
    return this.el.tagName.toLowerCase() === tag.toLowerCase();
  }

  clone(withChildren = true) {
    return Dom.create(this.el.cloneNode(withChildren));
  }

  closest(cls) {
    var temp = this;
    var checkCls = false;

    while (!(checkCls = temp.hasClass(cls))) {
      if (temp.el.parentNode) {
        temp = Dom.create(temp.el.parentNode);
      } else {
        return null;
      }
    }

    if (checkCls) {
      return temp;
    }

    return null;
  }

  path() {
    if (!this.el) return [];

    let pathList = [this];
    let $parentNode = this.parent();

    if (!$parentNode.el) return pathList;

    while ($parentNode) {
      pathList.unshift($parentNode);

      $parentNode = $parentNode.parent();

      if (!$parentNode.el) break;
    }

    return pathList;
  }

  get $parent() {
    return this.parent();
  }

  parent() {
    return Dom.create(this.el.parentNode);
  }

  hasParent() {
    return !!this.el.parentNode;
  }

  get isUnlinked() {
    return !this.el.parentNode;
  }

  removeClass(...args) {
    this.el.classList.remove(...args);
    return this;
  }

  updateClass(className) {
    this.el.className = className;

    return this;
  }

  replaceClass(oldClass, newClass) {
    this.el.classList.replace(oldClass, newClass);
    return this;
  }

  hasClass(cls) {
    if (!this.el.classList) return false;
    return this.el.classList.contains(cls);
  }

  addClass(...args) {
    this.el.classList.add(...args);

    return this;
  }

  onlyOneClass(cls) {
    var parent = this.parent();

    parent.children().forEach((it) => {
      it.removeClass(cls);
    });

    this.addClass(cls);
  }

  toggleClass(cls, isForce) {
    this.el.classList.toggle(cls, isForce);
    return this;
  }

  outerHTML() {
    if (this.isTextNode) {
      return this.text();
    }

    return this.el.outerHTML;
  }

  html(html) {
    try {
      if (typeof html === "undefined") {
        return this.el.innerHTML;
      }

      if (typeof html === "string") {
        Object.assign(this.el, { innerHTML: html });
      } else {
        this.empty().append(html);
      }

      return this;
    } catch (e) {
      console.log(e, html);
      return this;
    }
  }

  find(selector, el = this.el) {
    if (this.isTextNode) return undefined;
    return el.querySelector(selector);
  }

  $(selector) {
    var node = this.find(selector, this.isTemplate ? this.el.content : this.el);
    return node ? Dom.create(node) : null;
  }

  findAll(selector, el = this.el) {
    if (this.isTextNode) return [];

    return Array.from(el.querySelectorAll(selector));
  }

  $$(selector) {
    var arr = this.findAll(
      selector,
      this.isTemplate ? this.el.content : this.el
    );
    return arr.map((node) => Dom.create(node));
  }

  empty() {
    while (this.el.firstChild) this.el.removeChild(this.el.firstChild);
    return this;
  }

  append(el) {
    if (!el) return this;

    if (isArray(el)) {
      this.el.append(...el.map((it) => it.el || it));
    } else if (typeof el === "string") {
      this.el.appendChild(document.createTextNode(el));
    } else {
      this.el.appendChild(el.el || el);
    }

    return this;
  }

  appendHTML(html) {
    var $dom = Dom.create("div").html(html);

    this.append($dom.createChildrenFragment());

    return $dom;
  }

  /**
   * create document fragment with children dom
   */
  createChildrenFragment() {
    const list = this.childNodes;

    var fragment = document.createDocumentFragment();
    list.forEach(($el) => fragment.appendChild($el.el));

    return fragment;
  }

  /**
   * dom 리스트로 fragment 만들기
   *
   * @param {HTMLElement[]} list
   * @returns
   */
  static createFragment(list = []) {
    var fragment = document.createDocumentFragment();
    list.forEach((it) => fragment.appendChild(it));
    return fragment;
  }

  appendTo(target) {
    var t = target.el ? target.el : target;

    t.appendChild(this.el);

    return this;
  }

  remove() {
    if (this.el.parentNode) {
      this.el.parentNode.removeChild(this.el);
    }

    return this;
  }

  removeChild(el) {
    this.el.removeChild(el.el || el);
    return this;
  }

  /**
   *
   * @param {string} value
   * @returns {string} 파라미터가 없을 때  textContent 를 리턴한다.
   */
  text(value) {
    if (typeof value === "undefined") {
      return this.el.textContent;
    } else {
      var tempText = value;

      if (value instanceof Dom) {
        tempText = value.text();
      }

      // 값의 변경 사항이 없으면 업데이트 하지 않는다.
      if (this.el.textContent !== tempText) {
        this.el.textContent = tempText;
      }

      return this;
    }
  }

  /**
   *
   * $el.css`
   *  border-color: yellow;
   * `
   *
   * @param {*} key
   * @param {*} value
   */

  css(key, value) {
    if (typeof key !== "undefined" && typeof value !== "undefined") {
      if (key.indexOf("--") === 0 && typeof value !== "undefined") {
        this.el.style.setProperty(key, value);
      } else {
        this.el.style[key] = value;
      }
    } else if (typeof key !== "undefined") {
      if (typeof key === "string") {
        return window.getComputedStyle(this.el)[key];
      } else {
        Object.entries(key).forEach(([localKey, value]) => {
          if (localKey.indexOf("--") === 0 && typeof value !== "undefined") {
            this.el.style.setProperty(localKey, value);
          } else {
            this.el.style[localKey] = value;
          }
        });
      }
    }

    return this;
  }

  cssText(value) {
    if (typeof value === "undefined") {
      return this.el.style.cssText;
    }

    if (value != this.el.tempCssText) {
      this.el.style.cssText = value;
      this.el.tempCssText = value;
    }

    return this;
  }

  cssFloat(key) {
    return parseFloat(this.css(key));
  }

  rect() {
    return this.el.getBoundingClientRect();
  }

  isSVG() {
    if (!this.el._cachedIsSVG) {
      this.el._cachedIsSVG = { value: this.el.tagName.toLowerCase() === "svg" };
    }

    return this.el._cachedIsSVG.value;
  }

  /**
   * offset rect 를 생성
   *
   * svg 나 isClientRect 가 true 인 경우 clientRect 를 기준으로 생성
   *
   * @param {boolean} isClientRect
   * @returns
   */
  offsetRect() {
    if (this.isSVG()) {
      const parentBox = this.parent().rect();
      const box = this.rect();

      return {
        x: box.x - parentBox.x,
        y: box.y - parentBox.y,
        width: box.width,
        height: box.height,
      };
    }

    const el = this.el;

    return {
      x: el.offsetLeft,
      y: el.offsetTop,
      width: el.offsetWidth,
      height: el.offsetHeight,
    };
  }

  offsetClientRect() {
    if (this.isSVG()) {
      const parentBox = this.parent().rect();
      const box = this.rect();

      return {
        x: box.x - parentBox.x,
        y: box.y - parentBox.y,
        width: box.width,
        height: box.height,
      };
    }

    const parentBox = this.parent().rect();
    const box = this.rect();
    return {
      x: box.x - parentBox.x,
      y: box.y - parentBox.y,
      width: box.width,
      height: box.height,
    };
  }

  offset() {
    var rect = this.rect();

    var scrollTop = Dom.getScrollTop();
    var scrollLeft = Dom.getScrollLeft();

    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
    };
  }

  offsetLeft() {
    return this.offset().left;
  }

  offsetTop() {
    return this.offset().top;
  }

  position() {
    if (this.el.style.top) {
      return {
        top: parseFloat(this.css("top")),
        left: parseFloat(this.css("left")),
      };
    } else {
      return this.rect();
    }
  }

  size() {
    return [this.width(), this.height()];
  }

  width() {
    return this.el.offsetWidth || this.rect().width;
  }

  contentWidth() {
    return (
      this.width() -
      this.cssFloat("padding-left") -
      this.cssFloat("padding-right")
    );
  }

  height() {
    return this.el.offsetHeight || this.rect().height;
  }

  contentHeight() {
    return (
      this.height() -
      this.cssFloat("padding-top") -
      this.cssFloat("padding-bottom")
    );
  }

  val(value) {
    if (typeof value === "undefined") {
      return this.el.value;
    } else if (typeof value !== "undefined") {
      var tempValue = value;

      if (value instanceof Dom) {
        tempValue = value.val();
      }

      this.el.value = tempValue;
    }

    return this;
  }

  matches(selector) {
    if (this.el) {
      if (!this.el.matches) return null;

      if (this.el.matches(selector)) {
        return this;
      }
      return this.parent().matches(selector);
    }

    return null;
  }

  get value() {
    return this.el.value;
  }

  set value(v) {
    this.el.value = v;
  }

  get naturalWidth() {
    return this.el.naturalWidth;
  }

  get naturalHeight() {
    return this.el.naturalHeight;
  }

  get files() {
    return this.el.files ? [...this.el.files] : [];
  }

  get isTextNode() {
    return this.el.nodeType === 3;
  }

  show(displayType = "block") {
    this.el.style.display = displayType != "none" ? displayType : "block";

    return this;
  }

  hide() {
    this.el.style.display = "none";

    return this;
  }

  isHide() {
    return this.el.style.display === "none";
  }

  isShow() {
    return !this.isHide();
  }

  toggle(isForce) {
    var currentHide = this.isHide();

    if (arguments.length == 1) {
      if (isForce) {
        return this.show();
      } else {
        return this.hide();
      }
    } else {
      if (currentHide) {
        return this.show();
      } else {
        return this.hide();
      }
    }
  }

  scrollIntoView() {
    this.el.scrollIntoView();
  }

  get scrollTop() {
    if (this.el === document.body) {
      return Dom.getScrollTop();
    }

    return this.el.scrollTop;
  }

  get scrollLeft() {
    if (this.el === document.body) {
      return Dom.getScrollLeft();
    }

    return this.el.scrollLeft;
  }

  get scrollHeight() {
    return this.el.scrollHeight;
  }

  get scrollWidth() {
    return this.el.scrollWidth;
  }

  on(eventName, callback, opt1, opt2) {
    this.el.addEventListener(eventName, callback, opt1, opt2);

    return this;
  }

  off(eventName, callback) {
    this.el.removeEventListener(eventName, callback);

    return this;
  }

  getElement() {
    return this.el;
  }

  get firstChild() {
    return Dom.create(this.el.firstElementChild);
  }

  get first() {
    return Dom.create(this.el.firstChild);
  }

  children() {
    var element = this.el.firstElementChild;

    if (!element) {
      return [];
    }

    var results = [];

    do {
      results.push(Dom.create(element));
      element = element.nextElementSibling;
    } while (element);

    return results;
  }

  hasChild(child) {
    const childNode = child.el || child;

    return this.el === childNode ? false : this.el.contains(childNode);
  }

  get childNodes() {
    const result = [];

    if (this.el.hasChildNodes()) {
      const childNodes = this.el.childNodes;

      for (let i = 0; i < childNodes.length; i++) {
        result.push(Dom.create(childNodes[i]));
      }
    }

    return result;
  }

  childLength() {
    return this.el.childNodes.length;
  }

  replace(newElement) {
    if (this.el.parentNode) {
      this.el.parentNode.replaceChild(newElement.el || newElement, this.el);
    }

    return this;
  }

  replaceChild(oldElement, newElement) {
    this.el.replaceChild(
      newElement.el || newElement,
      oldElement.el || oldElement
    );

    return this;
  }

  checked(isChecked = false) {
    if (arguments.length == 0) {
      return !!this.el.checked;
    }

    this.el.checked = !!isChecked;

    return this;
  }

  click() {
    this.el.click();

    return this;
  }

  focus() {
    this.el.focus();

    return this;
  }

  dispatchEvent(event, data) {
    const evt = new CustomEvent(event, { detail: data });
    this.el.dispatchEvent(evt);

    return this;
  }

  select() {
    // contenteditable 의 경우 selection api 를 사용해서 select() 를 수행한다.
    if (this.attr("contenteditable") === "true") {
      var range = document.createRange();
      range.selectNodeContents(this.el);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } else {
      this.el.select();
    }

    return this;
  }

  blur() {
    this.el.blur();

    return this;
  }
}
