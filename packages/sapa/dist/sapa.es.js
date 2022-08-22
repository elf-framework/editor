var Se = Object.defineProperty;
var Re = (n, t, e) => t in n ? Se(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var Q = (n, t, e) => (Re(n, typeof t != "symbol" ? t + "" : t, e), e), pt = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var l = (n, t, e) => (pt(n, t, "read from private field"), e ? e.call(n) : t.get(n)), O = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, x = (n, t, e, r) => (pt(n, t, "write to private field"), r ? r.call(n, e) : t.set(n, e), e), Gt = (n, t, e, r) => ({
  set _(s) {
    x(n, t, s, e);
  },
  get _() {
    return l(n, t, r);
  }
}), Vt = (n, t, e) => (pt(n, t, "access private method"), e);
const rt = "__componentInstance", Qt = "__componentRootContext";
function we(n, t, e = () => !0) {
  let r = n, s = [];
  do {
    if (r instanceof Object === !1 || r.constructor.name === t.name)
      break;
    const a = Object.getOwnPropertyNames(r).filter(e);
    s.push.apply(s, a);
  } while (r = Object.getPrototypeOf(r));
  return s;
}
function Nt(n, t = 0) {
  if (t === 0)
    return n;
  var e = void 0;
  return function(r, s, i, o, a) {
    e && window.clearTimeout(e), e = window.setTimeout(function() {
      n(r, s, i, o, a);
    }, t || 300);
  };
}
function te(n, t) {
  var e = void 0;
  return function(r, s, i, o, a) {
    e || (e = window.setTimeout(function() {
      n(r, s, i, o, a), e = null;
    }, t || 300));
  };
}
function Ne(n, t, e) {
  return (...r) => {
    e.every((i) => t[i].apply(t, r)) && n.apply(t, r);
  };
}
function Pe(n, t) {
  return (...e) => {
    n.requestAnimationFrameId && cancelAnimationFrame(n.requestAnimationFrameId), n.requestAnimationFrameId = requestAnimationFrame(() => {
      n.apply(t, e);
    });
  };
}
function xr(n, t) {
  Object.keys(n).forEach((e, r) => {
    t(e, n[e], r);
  });
}
function Ae(n, t) {
  return Object.keys(n).map((e, r) => t(e, n[e], r));
}
function kr(n, t, e = "") {
  return Ae(n, t).join(e);
}
function Or(n, t, e) {
  var r = Ie(n[t], t);
  return g(e) ? e(r) : r;
}
function Ie(n, t) {
  return typeof n > "u" ? t : n;
}
function ut(n) {
  return typeof n > "u";
}
function z(n) {
  return !ut(n);
}
function Mr(n) {
  return typeof n == "boolean";
}
function P(n) {
  return typeof n == "string";
}
function Sr(n) {
  return !P(n);
}
function v(n) {
  return Array.isArray(n);
}
function W(n) {
  return typeof n == "object" && !Array.isArray(n) && !ee(n) && !P(n) && n !== null;
}
function g(n) {
  return typeof n == "function";
}
function ee(n) {
  return typeof n == "number";
}
function Le(n) {
  return n === 0;
}
function Rr(n) {
  return !Le(n);
}
const He = (n) => JSON.parse(JSON.stringify(n));
function wr(n) {
  if (!ut(n))
    return He(n);
}
function Nr(n) {
  return Object.keys(n).forEach((t) => {
    Array.isArray(n[t]) && (n[t] = n[t].join(", "));
  }), n;
}
function _e(...n) {
  const t = [];
  return n.filter(Boolean).forEach((e) => {
    v(e) ? t.push(_e(...e)) : W(e) ? Object.keys(e).filter((r) => Boolean(e[r])).forEach((r) => {
      t.push(r);
    }) : P(e) && t.push(e);
  }), t.join(" ");
}
const ne = /[xy]/g;
function Fe() {
  var n = new Date().getTime(), t = "xxx12-xx-34xx".replace(ne, function(e) {
    var r = (n + Math.random() * 16) % 16 | 0;
    return n = Math.floor(n / 16), (e == "x" ? r : r & 3 | 8).toString(16);
  });
  return t;
}
function Pt() {
  var n = new Date().getTime(), t = "idxxxxxxx".replace(ne, function(e) {
    var r = (n + Math.random() * 16) % 16 | 0;
    return n = Math.floor(n / 16), (e == "x" ? r : r & 3 | 8).toString(16);
  });
  return t;
}
const re = {}, st = {}, se = {}, At = /* @__PURE__ */ new Set(), gt = /* @__PURE__ */ new WeakMap(), $ = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), it = {}, It = /* @__PURE__ */ new WeakMap(), j = /* @__PURE__ */ new WeakMap(), ie = {
  currentComponent: null
};
function T() {
  return ie.currentComponent;
}
function $e(n) {
  ie.currentComponent = n;
}
function Be(n, t = 1) {
  return j.has(n) || j.set(
    n,
    Nt((e = void 0) => {
      n.render(e);
    }, t)
  ), j.get(n);
}
function De(n) {
  j.has(n) && j.delete(n);
}
function oe(n, t = void 0) {
  window.requestIdleCallback(() => {
    var e;
    (e = Be(n)) == null || e(t);
  });
}
const Ue = "v:";
function Ge(n, t = "") {
  const e = `${Ue}${Pt()}`;
  return $.set(e, n), t && (U.has(t) || U.set(t, /* @__PURE__ */ new Set()), U.get(t).add(e)), e;
}
function Pr(n) {
  U.has(n) && (U.get(n).forEach((t) => {
    $.delete(t);
  }), U.delete(n));
}
function Ve(n, t = !0) {
  if (P(n) === !1)
    return n;
  let e = n;
  return $.has(n) && (e = $.get(n), t && $.delete(n)), e;
}
function Ke(n) {
  return $.has(n) ? $.get(n) : n;
}
function Ar(n) {
  return $.has(n);
}
function Ir(n = {}) {
  Object.keys(n).forEach((t) => {
    re[t] = n[t];
  });
}
function Lr(n, t) {
  se[n] = t;
}
function We(n) {
  return se[n];
}
function Hr(n) {
  return re[We(n) || n];
}
function ae(n, t) {
  const e = t.el || t;
  At.add(n), gt.has(e) && ze(gt.get(e)), gt.set(e, n);
}
function ze(n) {
  n == null || n.destroy(), At.delete(n);
}
function je() {
  return [...At];
}
let kt;
function Xe() {
  return kt;
}
function _r(n = !1) {
  typeof kt > "u" && (kt = n);
}
function qe(n = !1) {
  je().forEach((t) => {
    n ? t.forceRender() : t.render();
  });
}
function Fr(n) {
  Object.keys(n).forEach((t) => {
    st[t] = n[t];
  });
}
function $r(n) {
  return st[n];
}
function Ye(n, t = {}) {
  return [
    ...Object.keys(st).map((e) => {
      const r = st[e];
      return new r(n);
    }),
    ...Object.keys(t).map((e) => {
      const r = t[e];
      return new r(n);
    })
  ];
}
function Br(n, t = {}) {
  it[n] ? Je(n, t) : (it[n] = { new: t, old: t }, Object.keys(t).forEach((e) => {
    It.set(t[e], n);
  }));
}
function Je(n, t) {
  it[n].new = t, Object.keys(t).forEach((e) => {
    It.set(t[e], n);
  });
}
function Ze(n) {
  const t = It.get(n);
  if (!t)
    return n;
  const e = it[t];
  if (!e)
    return n;
  const r = e.new[n.name];
  if (r)
    return r;
  const s = Object.values(e.new).find((a) => a === n);
  if (s)
    return s;
  let i = "";
  return Object.entries(e.old).find(([a, c]) => c === n ? (i = a, !0) : !1) ? e.new[i] : n;
}
class h {
  constructor(t, e, r) {
    if (typeof t != "string")
      t instanceof h ? this.el = t.el : this.el = t;
    else {
      var s = document.createElement(t);
      e && (s.className = e), r = r || {}, Object.assign(s, r), this.el = s;
    }
  }
  static create(t, e, r) {
    return new h(t, e, r);
  }
  static createText(t) {
    return new h(document.createTextNode(t));
  }
  static createByHTML(t) {
    var e = h.create("div");
    return e.html(t).firstChild;
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
  static parse(t) {
    var e = window.DOMParser();
    return e.parseFromString(t, "text/html");
  }
  static body() {
    return h.create(document.body);
  }
  get tagName() {
    return this.el.tagName;
  }
  get exists() {
    return Boolean(this.el);
  }
  setAttr(t) {
    return Object.keys(t).forEach((e) => {
      this.attr(e, t[e]);
    }), this;
  }
  setAttrNS(t, e = "http://www.w3.org/2000/svg") {
    return Object.keys(t).forEach((r) => {
      this.attr(r, t[r], e);
    }), this;
  }
  setProp(t) {
    return Object.keys(t).forEach((e) => {
      this.el[e] != t[e] && (this.el[e] = t[e]);
    }), this;
  }
  data(t, e) {
    if (arguments.length === 1) {
      const r = this.attr("data-" + t);
      return Ve(r, !1);
    } else if (arguments.length === 2)
      return this.attr("data-" + t, e);
    return this;
  }
  attr(...t) {
    return t.length == 1 ? g(this.el.getAttribute) && this.el.getAttribute(t[0]) : (this.el.getAttribute(t[0]) != t[1] && this.el.setAttribute(t[0], t[1]), this);
  }
  attrKeyValue(t) {
    return {
      [this.el.getAttribute(t)]: this.val()
    };
  }
  get attributes() {
    try {
      return [...this.el.attributes];
    } catch {
      const r = this.el.attributes.length, s = [];
      for (var t = 0; t < r; t++)
        s.push(this.el.attributes[`${t}`]);
      return s;
    }
  }
  attrs(...t) {
    return t.map((e) => this.el.getAttribute(e));
  }
  styles(...t) {
    return t.map((e) => this.el.style[e]);
  }
  removeAttr(t) {
    return this.el.removeAttribute(t), this;
  }
  removeStyle(t) {
    return this.el.style.removeProperty(t), this;
  }
  get isFragment() {
    return this.el.nodeType === 11;
  }
  get isTemplate() {
    return this.el.nodeType === 1 && this.el.tagName === "TEMPLATE";
  }
  get content() {
    return this.isTemplate ? this.el.content : this.el;
  }
  is(t) {
    return t instanceof h ? this.el === t.el : this.el === t;
  }
  isTag(t) {
    return this.el.tagName.toLowerCase() === t.toLowerCase();
  }
  closest(t) {
    for (var e = this, r = !1; !(r = e.hasClass(t)); )
      if (e.el.parentNode)
        e = h.create(e.el.parentNode);
      else
        return null;
    return r ? e : null;
  }
  path() {
    if (!this.el)
      return [];
    let t = [this], e = this.parent();
    if (!e.el)
      return t;
    for (; e && (t.unshift(e), e = e.parent(), !!e.el); )
      ;
    return t;
  }
  get $parent() {
    return this.parent();
  }
  parent() {
    return h.create(this.el.parentNode);
  }
  hasParent() {
    return !!this.el.parentNode;
  }
  get isUnlinked() {
    return !this.el.parentNode;
  }
  removeClass(...t) {
    return this.el.classList.remove(...t), this;
  }
  updateClass(t) {
    return this.el.className = t, this;
  }
  replaceClass(t, e) {
    return this.el.classList.replace(t, e), this;
  }
  hasClass(t) {
    return this.el.classList ? this.el.classList.contains(t) : !1;
  }
  addClass(...t) {
    return this.el.classList.add(...t), this;
  }
  onlyOneClass(t) {
    var e = this.parent();
    e.children().forEach((r) => {
      r.removeClass(t);
    }), this.addClass(t);
  }
  toggleClass(t, e) {
    return this.el.classList.toggle(t, e), this;
  }
  outerHTML() {
    return this.isTextNode ? this.text() : this.el.outerHTML;
  }
  html(t) {
    try {
      return typeof t > "u" ? this.el.innerHTML : (typeof t == "string" ? Object.assign(this.el, { innerHTML: t }) : this.empty().append(t), this);
    } catch (e) {
      return console.log(e, t), this;
    }
  }
  getById(t) {
    return this.el.getElementById(t);
  }
  find(t, e = this.el) {
    if (!this.isTextNode)
      return e.querySelector(t);
  }
  $(t) {
    var e = this.find(t, this.isTemplate ? this.el.content : this.el);
    return e ? h.create(e) : null;
  }
  findAll(t, e = this.el) {
    return this.isTextNode ? [] : Array.from(e.querySelectorAll(t));
  }
  $$(t) {
    var e = this.findAll(
      t,
      this.isTemplate ? this.el.content : this.el
    );
    return e.map((r) => h.create(r));
  }
  empty() {
    for (; this.el.firstChild; )
      this.el.removeChild(this.el.firstChild);
    return this;
  }
  append(t) {
    return t ? (v(t) ? this.el.append(...t.map((e) => e.el || e)) : typeof t == "string" ? this.el.appendChild(document.createTextNode(t)) : this.el.appendChild(t.el || t), this) : this;
  }
  prepend(t) {
    return typeof t == "string" ? this.el.prepend(document.createTextNode(t)) : this.el.prepend(t.el || t), this;
  }
  prependHTML(t) {
    var e = h.create("div").html(t);
    return this.prepend(e.createChildrenFragment()), e;
  }
  appendHTML(t) {
    var e = h.create("div").html(t);
    return this.append(e.createChildrenFragment()), e;
  }
  createChildrenFragment() {
    const t = this.childNodes;
    var e = document.createDocumentFragment();
    return t.forEach((r) => e.appendChild(r.el)), e;
  }
  static createFragment(t = []) {
    var e = document.createDocumentFragment();
    return t.forEach((r) => e.appendChild(r)), e;
  }
  appendTo(t) {
    var e = t.el ? t.el : t;
    return e.appendChild(this.el), this;
  }
  remove() {
    return this.el.parentNode && this.el.parentNode.removeChild(this.el), this;
  }
  removeChild(t) {
    return this.el.removeChild(t.el || t), this;
  }
  text(t) {
    if (typeof t > "u")
      return this.el.textContent;
    var e = t;
    return t instanceof h && (e = t.text()), this.el.textContent !== e && (this.el.textContent = e), this;
  }
  css(t, e) {
    if (typeof t < "u" && typeof e < "u")
      t.indexOf("--") === 0 && typeof e < "u" ? this.el.style.setProperty(t, e) : this.el.style[t] = e;
    else if (typeof t < "u") {
      if (typeof t == "string")
        return window.getComputedStyle(this.el)[t];
      Object.entries(t).forEach(([r, s]) => {
        r.indexOf("--") === 0 && typeof s < "u" ? this.el.style.setProperty(r, s) : this.el.style[r] = s;
      });
    }
    return this;
  }
  getComputedStyle(...t) {
    var e = window.getComputedStyle(this.el), r = {};
    return t.forEach((s) => {
      r[s] = e[s];
    }), r;
  }
  getStyleList(...t) {
    for (var e = {}, r = this.el.style.length, s = 0; s < r; s++) {
      var i = this.el.style[s];
      e[i] = this.el.style[i];
    }
    return t.forEach((o) => {
      e[o] = this.css(o);
    }), e;
  }
  cssText(t) {
    return typeof t > "u" ? this.el.style.cssText : (t != this.el.tempCssText && (this.el.style.cssText = t, this.el.tempCssText = t), this);
  }
  cssArray(t) {
    return t[0] && (this.el.style[t[0]] = t[1]), t[2] && (this.el.style[t[2]] = t[3]), t[4] && (this.el.style[t[4]] = t[5]), t[6] && (this.el.style[t[6]] = t[7]), t[8] && (this.el.style[t[8]] = t[9]), this;
  }
  cssFloat(t) {
    return parseFloat(this.css(t));
  }
  cssInt(t) {
    return parseInt(this.css(t));
  }
  px(t, e) {
    return this.css(t, `${e}px`);
  }
  rect() {
    return this.el.getBoundingClientRect();
  }
  bbox() {
    return this.el.getBBox();
  }
  isSVG() {
    return this.el._cachedIsSVG || (this.el._cachedIsSVG = { value: this.el.tagName.toLowerCase() === "svg" }), this.el._cachedIsSVG.value;
  }
  offsetRect() {
    if (this.isSVG()) {
      const e = this.parent().rect(), r = this.rect();
      return {
        x: r.x - e.x,
        y: r.y - e.y,
        width: r.width,
        height: r.height
      };
    }
    const t = this.el;
    return {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: t.offsetWidth,
      height: t.offsetHeight
    };
  }
  offsetClientRect() {
    if (this.isSVG()) {
      const r = this.parent().rect(), s = this.rect();
      return {
        x: s.x - r.x,
        y: s.y - r.y,
        width: s.width,
        height: s.height
      };
    }
    const t = this.parent().rect(), e = this.rect();
    return {
      x: e.x - t.x,
      y: e.y - t.y,
      width: e.width,
      height: e.height
    };
  }
  offset() {
    var t = this.rect(), e = h.getScrollTop(), r = h.getScrollLeft();
    return {
      top: t.top + e,
      left: t.left + r
    };
  }
  offsetLeft() {
    return this.offset().left;
  }
  offsetTop() {
    return this.offset().top;
  }
  position() {
    return this.el.style.top ? {
      top: parseFloat(this.css("top")),
      left: parseFloat(this.css("left"))
    } : this.rect();
  }
  size() {
    return [this.width(), this.height()];
  }
  width() {
    return this.el.offsetWidth || this.rect().width;
  }
  contentWidth() {
    return this.width() - this.cssFloat("padding-left") - this.cssFloat("padding-right");
  }
  height() {
    return this.el.offsetHeight || this.rect().height;
  }
  contentHeight() {
    return this.height() - this.cssFloat("padding-top") - this.cssFloat("padding-bottom");
  }
  val(t) {
    if (typeof t > "u")
      return this.el.value;
    if (typeof t < "u") {
      var e = t;
      t instanceof h && (e = t.val()), this.el.value = e;
    }
    return this;
  }
  matches(t) {
    return this.el && this.el.matches ? this.el.matches(t) ? this : this.parent().matches(t) : null;
  }
  get value() {
    return this.el.value;
  }
  set value(t) {
    this.el.value = t;
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
  realVal() {
    switch (this.el.nodeType) {
      case "INPUT":
        var t = this.attr("type");
        return t == "checkbox" || t == "radio" ? this.checked() : this.el.value;
      case "SELECT":
      case "TEXTAREA":
        return this.el.value;
    }
    return "";
  }
  int() {
    return parseInt(this.val(), 10);
  }
  float() {
    return parseFloat(this.val());
  }
  show(t = "block") {
    return this.el.style.display = t != "none" ? t : "block", this;
  }
  hide() {
    return this.el.style.display = "none", this;
  }
  isHide() {
    return this.el.style.display === "none";
  }
  isShow() {
    return !this.isHide();
  }
  toggle(t) {
    var e = this.isHide();
    return arguments.length == 1 ? t ? this.show() : this.hide() : e ? this.show() : this.hide();
  }
  get totalLength() {
    return this.el.getTotalLength();
  }
  scrollIntoView() {
    this.el.scrollIntoView();
  }
  addScrollLeft(t) {
    return this.el.scrollLeft += t, this;
  }
  addScrollTop(t) {
    return this.el.scrollTop += t, this;
  }
  setScrollTop(t) {
    return this.el.scrollTop = t, this;
  }
  setScrollLeft(t) {
    return this.el.scrollLeft = t, this;
  }
  get scrollTop() {
    return this.el === document.body ? h.getScrollTop() : this.el.scrollTop;
  }
  get scrollLeft() {
    return this.el === document.body ? h.getScrollLeft() : this.el.scrollLeft;
  }
  get scrollHeight() {
    return this.el.scrollHeight;
  }
  get scrollWidth() {
    return this.el.scrollWidth;
  }
  on(t, e, r, s) {
    return this.el.addEventListener(t, e, r, s), this;
  }
  off(t, e) {
    return this.el.removeEventListener(t, e), this;
  }
  getElement() {
    return this.el;
  }
  createChild(t, e = "", r = {}, s = {}) {
    let i = h.create(t, e, r);
    return i.css(s), this.append(i), i;
  }
  get firstChild() {
    return h.create(this.el.firstElementChild);
  }
  get first() {
    return h.create(this.el.firstChild);
  }
  children() {
    var t = this.el.firstElementChild;
    if (!t)
      return [];
    var e = [];
    do
      e.push(h.create(t)), t = t.nextElementSibling;
    while (t);
    return e;
  }
  hasChild(t) {
    const e = t.el || t;
    return this.el === e ? !1 : this.el.contains(e);
  }
  get childNodes() {
    const t = [];
    if (this.el.hasChildNodes()) {
      const e = this.el.childNodes;
      for (let r = 0; r < e.length; r++)
        t.push(h.create(e[r]));
    }
    return t;
  }
  childLength() {
    return this.el.childNodes.length;
  }
  replace(t) {
    return this.el.parentNode && this.el.parentNode.replaceChild(t.el || t, this.el), this;
  }
  replaceChild(t, e) {
    return this.el.replaceChild(
      e.el || e,
      t.el || t
    ), this;
  }
  checked(t = !1) {
    return arguments.length == 0 ? !!this.el.checked : (this.el.checked = !!t, this);
  }
  click() {
    return this.el.click(), this;
  }
  focus() {
    return this.el.focus(), this;
  }
  dispatchEvent(t, e) {
    const r = new CustomEvent(t, { detail: e });
    return this.el.dispatchEvent(r), this;
  }
  select() {
    if (this.attr("contenteditable") === "true") {
      var t = document.createRange();
      t.selectNodeContents(this.el);
      var e = window.getSelection();
      e.removeAllRanges(), e.addRange(t);
    } else
      this.el.select();
    return this;
  }
  blur() {
    return this.el.blur(), this;
  }
  toDataURL(t = "image/png", e = 1) {
    return this.el.toDataURL(t, e);
  }
}
const k = {
  NODE: 8,
  TEXT: 3,
  FRAGMENT: 11,
  COMPONENT: 100,
  ELEMENT: 101,
  COMMENT: 102
};
class Qe {
  constructor() {
    this.id = Pt(), this.cachedCallback = {}, this.callbacks = {}, this.settings = /* @__PURE__ */ new Map();
  }
  get(t, e = void 0) {
    return this.settings.has(t) === !1 ? e : this.settings.get(t);
  }
  set(t, e, r = !0) {
    this.settings.get(t) !== e && (this.settings.set(t, e), r && this.sendMessage(this, t, e));
  }
  init(t, e) {
    this.set(t, e, !1);
  }
  toggle(t) {
    this.set(t, !this.get(t));
  }
  toggleWith(t, e, r) {
    this.get(t) === e ? this.set(t, r) : this.set(t, e);
  }
  true(t) {
    return this.get(t) === !0;
  }
  false(t) {
    return this.get(t) === !1;
  }
  is(t, e) {
    return this.get(t) === e;
  }
  remove(t) {
    this.settings.delete(t);
  }
  hasCallback(t, e) {
    var r = this.getCachedCallbacks(t);
    return r.some((s) => s.originalCallback === e);
  }
  getCallbacks(t) {
    return this.callbacks[t] || (this.callbacks[t] = []), this.callbacks[t];
  }
  setCallbacks(t, e = []) {
    this.callbacks[t] = e;
  }
  on(t, e, r, s = 0, i = 0, o = !1, a = !1, c = [], d = !1) {
    var p = e;
    return s > 0 ? p = Nt(e, s) : i > 0 && (p = te(e, i)), c.length && (p = Ne(p, r, c)), d && (p = Pe(
      p,
      r,
      e.name
    )), this.getCallbacks(t).push({
      event: t,
      callback: p,
      context: r,
      originalCallback: e,
      enableAllTrigger: o,
      enableSelfTrigger: a
    }), () => {
      this.off(t, e);
    };
  }
  off(t, e) {
    arguments.length == 1 ? this.setCallbacks(t) : arguments.length == 2 && this.setCallbacks(
      t,
      this.getCallbacks(t).filter((r) => r.originalCallback !== e)
    );
  }
  offAll(t) {
    Object.keys(this.callbacks).forEach((e) => {
      this.setCallbacks(
        e,
        this.getCallbacks(e).filter((r) => r.context !== t)
      );
    });
  }
  getCachedCallbacks(t) {
    return this.getCallbacks(t);
  }
  sendMessage(t, e, ...r) {
    this.sendMessageList(t, [[e, ...r]]);
  }
  runMessage(t, e) {
    const r = t.callback.apply(
      t.context,
      e
    );
    if (z(r)) {
      if (r === !1)
        return;
      if (g(r)) {
        r();
        return;
      }
    }
  }
  sendMessageList(t, e = []) {
    window.Promise.resolve().then(() => {
      e.forEach(([r, ...s]) => {
        var i = this.getCachedCallbacks(r);
        if (i && i.length) {
          const o = i.filter((c) => !c.enableSelfTrigger).filter(
            (c) => c.enableAllTrigger || c.originalCallback.source !== t
          );
          let a = o.length;
          for (; a--; ) {
            const c = o[a];
            this.runMessage(c, s);
          }
        }
      });
    });
  }
  nextSendMessage(t, e, ...r) {
    window.Promise.resolve().then(() => {
      e(...r);
    });
  }
  triggerMessage(t, e, ...r) {
    window.Promise.resolve().then(() => {
      var s = this.getCachedCallbacks(e);
      s && s.filter(
        (o) => o.context.source === t
      ).forEach((o) => {
        o.callback.apply(o.context, r);
      });
    });
  }
  emit(t, ...e) {
    g(t) ? t(...e) : v(t) ? this.sendMessageList(this.source, t) : this.sendMessage(this.source, t, ...e);
  }
  nextTick(t) {
    this.nextSendMessage(this.source, t);
  }
  trigger(t, ...e) {
    g(t) ? t(...e) : this.triggerMessage(this.source, t, ...e);
  }
}
function ce(n, t = {}) {
  return P(n) && (n = N(n)), v(n) && n.length === 1 ? ce(n[0], t) : n ? h.create(n.makeElement(!0, t).el) : null;
}
async function ue(n, t = {}) {
  return P(n) ? n : v(n) && n.length === 1 ? await ue(n[0], t) : n ? await n.makeHtml(!0, t) : "";
}
const tn = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
};
function en(n) {
  return tn[n.toLowerCase()];
}
const Kt = /^@magic:([a-zA-Z][a-zA-Z0-9]*)[\W]{1}(.*)*$/g, Wt = "@magic:", D = "|", nn = /(([\$a-z_\-]+)\([^\(\)]*\)|([a-z_\-]+))/gi, zt = "(", rn = ")", tt = {
  KEYWORD: "keyword",
  FUNCTION: "function",
  VALUE: "value"
};
class L {
  constructor(t) {
    this.context = t.context, this.originalMethod = t.originalMethod, this.method = t.method, this.args = t.args, this.pipes = t.pipes, this.keys = t.keys, this.__cache = /* @__PURE__ */ new Map();
  }
  setCache(t, e) {
    this.__cache.set(t, e);
  }
  hasCache(t) {
    return this.__cache.has(t);
  }
  getCache(t) {
    return this.__cache.get(t);
  }
  hasKeyword(t) {
    if (this.hasCache(t))
      return this.getCache(t);
    let e = !1;
    return this.pipes.forEach((r) => {
      switch (r.type) {
        case tt.KEYWORD:
          r.value === t && (e = !0);
          break;
      }
    }), this.setCache(t, e), e;
  }
  hasFunction(t) {
    if (this.hasCache(t))
      return this.getCache(t);
    let e = !!this.getFunction(t);
    return this.setCache(t, e), e;
  }
  getFunction(t) {
    return this.functions.find((e) => e.func === t);
  }
  getFunctionList(t) {
    return this.functions.filter((e) => e.func === t);
  }
  get originalCallback() {
    return this.context[this.originalMethod];
  }
  get keywords() {
    return this.keys[tt.KEYWORD].map((t) => t.value);
  }
  get functions() {
    return this.keys[tt.FUNCTION];
  }
  get values() {
    return this.keys[tt.VALUE].map((t) => t.value);
  }
  execute(...t) {
    return this.originalCallback.call(this.context, ...t);
  }
  executeWithContext(t, ...e) {
    return this.originalCallback.call(t, ...e);
  }
  static make(t, ...e) {
    return `${Wt}${t} ${e.join(D)}`;
  }
  static check(t) {
    return t.match(Kt) !== null;
  }
  static parse(t, e = {}) {
    const r = t.match(Kt);
    if (!r)
      return;
    const s = r[0].split(Wt)[1].split(D).map((m) => m.trim());
    let [i, ...o] = s;
    const [a, ...c] = i.split(" "), d = o.map((m) => this.parsePipe(m)).filter((m) => m.value), p = {
      function: [],
      keyword: [],
      value: []
    };
    return d.forEach((m) => {
      m.type === "function" ? p.function.push(m) : m.type === "keyword" ? p.keyword.push(m) : p.value.push(m);
    }), new L({
      context: e,
      originalMethod: t,
      method: a,
      args: c,
      pipes: d,
      keys: p
    });
  }
  static parsePipe(t) {
    const e = t.match(nn);
    if (!e)
      return {
        type: "value",
        value: t
      };
    const [r] = e;
    if (r.includes(zt)) {
      const [s, i] = r.split(zt), [o] = i.split(rn);
      return {
        type: "function",
        value: r,
        func: s,
        args: o.split(",").map((a) => a.trim()).filter(Boolean)
      };
    }
    return {
      type: "keyword",
      value: e[0]
    };
  }
}
const sn = new Map(
  Object.entries({
    checked: !0,
    disabled: !0,
    selected: !0,
    readonly: !0,
    required: !0,
    multiple: !0,
    open: !0,
    hidden: !0,
    spellcheck: !0,
    autofocus: !0,
    autoplay: !0,
    controls: !0,
    loop: !0,
    muted: !0,
    default: !0,
    defer: !0,
    async: !0,
    allowfullscreen: !0,
    allowtransparency: !0,
    allowpaymentrequest: !0
  })
), on = {
  content: !0
}, an = 3, cn = 8, le = "style", Lt = "on";
function jt(n) {
  return sn.has(n);
}
const S = {
  setBooleanProp(n, t, e) {
    z(e) ? (n.setAttribute(t, t), n[t] = e) : (n.removeAttribute(t), n[t] = void 0);
  },
  setProp(n, t, e) {
    jt(t) ? this.setBooleanProp(n, t, e) : t.startsWith(Lt) ? n[t.toLowerCase()] = e : t === le ? n.style.cssText = e : (n.setAttribute(t, e), n[t] = e);
  },
  removeProp(n, t) {
    n.removeAttribute(t), jt(t) ? n[t] = !1 : t && (n[t] = void 0);
  },
  updateProp(n, t, e, r) {
    ut(e) ? this.removeProp(n, t) : (!r || e != r) && this.setProp(n, t, e);
  },
  replaceWith(n, t, e) {
    const r = e.context.$el.el === n, s = t.makeElement(!0, e).el;
    r && (e.context.$el.el = s), n.replaceWith(s), t.runMounted();
  },
  replaceText(n, t) {
    n.textContent != t.textContent && (n.textContent = t.textContent);
  },
  replaceComment(n, t) {
    S.replaceText(n, t);
  },
  addNewVNode(n, t, e, r) {
    n.insertBefore(e.makeElement(!0, r).el, t), n.removeChild(t), e.runMounted();
  },
  appendChild(n, t, e) {
    const r = t.makeElement(!0, e);
    r != null && r.el && (n.appendChild(r.el), t.runMounted());
  },
  removeChild(n, t) {
    n.removeChild(t);
  }
}, C = {
  isTextNode(n) {
    return n.nodeType === an;
  },
  isCommentNode(n) {
    return n.nodeType === cn;
  },
  isElementNode(n) {
    return n.nodeType === 1;
  },
  isVNodeText(n) {
    return n.type === k.TEXT;
  },
  isVNodeComment(n) {
    return n.type === k.COMMENT;
  },
  changed(n, t) {
    return (n.type === k.TEXT || n.type === k.COMMENT) && n.textContent !== t.textContent || n.nodeName !== t.nodeName.toUpperCase();
  },
  hasPassed(n) {
    return n.pass;
  },
  hasRefClass(n) {
    return n.Component;
  }
}, un = (n, t = {}, e = {}) => {
  const r = Object.keys(t), s = Object.keys(e);
  r.length === 0 && s.length === 0 || (r.forEach((i) => {
    on[i] || S.updateProp(n, i, t[i], e[i]);
  }), s.forEach((i) => {
    ut(t[i]) && S.removeProp(n, i);
  }));
};
function ln(n) {
  const t = n.props || {}, e = {}, r = Object.keys(t);
  if (!r.length)
    return e;
  for (let s = 0, i = r.length; s < i; s++) {
    const o = r[s];
    o.startsWith(Lt) ? e[o] = t[o] : o === le ? e[o] = n.stringifyStyle : e[o] = t[o];
  }
  return e;
}
function hn(n, t, e) {
  var r = {};
  const s = t.length;
  for (let i = 0; i < s; i++) {
    const o = t[i], a = o.name, c = o.value;
    r[a] = c;
  }
  return Object.keys(e).forEach((i) => {
    const o = i.startsWith(Lt) ? i.toLowerCase() : i;
    r[o] || (r[i] = n[o]);
  }), r;
}
function fn(n, t, e, r = {}) {
  return C.isTextNode(t) && !C.isVNodeText(e) || C.isCommentNode(t) && !C.isVNodeComment(e) || !C.isTextNode(t) && C.isVNodeText(e) || !C.isCommentNode(t) && C.isVNodeComment(e) ? S.addNewVNode(n, t, e, r) : C.isTextNode(t) && C.isVNodeText(e) ? S.replaceText(t, e) : C.isCommentNode(t) && C.isVNodeComment(e) ? S.replaceComment(t, e) : C.hasRefClass(e) ? g(r.checkRefClass) && r.checkRefClass(t, e) && (S.replaceWith(t, e, r), g(r.registerChildComponent) && r.registerChildComponent(
    e.el,
    e.instance,
    e.instance.id,
    t
  )) : S.replaceWith(t, e, r), !0;
}
function dn(n, t, e = {}) {
  const r = ln(t);
  un(
    n,
    r,
    hn(n, n.attributes, r)
  ), he(n, t, e);
}
function he(n, t, e = {}) {
  if (!(!n.hasChildNodes() && !t.children.length)) {
    var r = pn(n), s = gn(t), i = Math.max(r.length, s.length);
    if (i !== 0)
      if (r.length === 0 && s.length > 0) {
        var o = document.createDocumentFragment();
        s.forEach((c) => {
          const d = c.makeElement(!0, e).el;
          d && o.appendChild(d);
        }), n.appendChild(o), s.forEach((c) => {
          c.runMounted();
        });
      } else if (r.length > 0 && s.length === 0)
        n.textContent = "";
      else
        for (var a = 0; a < i; a++)
          fe(n, r[a], s[a], e);
  }
}
function fe(n, t, e, r = {}) {
  var i;
  if (n = n || r.context.parentElement, !t && e) {
    S.appendChild(n, e, r);
    return;
  }
  if (!e && t) {
    S.removeChild(n, t, r);
    return;
  }
  if (!((i = e.props) != null && i.pass)) {
    if (C.hasPassed(e))
      return;
    if (C.changed(e, t) || C.hasRefClass(e)) {
      fn(n, t, e, r);
      return;
    }
  }
  const s = e.type;
  s !== k.TEXT && s !== k.COMMENT && dn(t, e, r);
}
const pn = (n) => {
  var t = n.firstChild;
  if (!t)
    return [];
  var e = [];
  do
    e[e.length] = t, t = t.nextSibling;
  while (t);
  return e;
}, gn = (n) => n.children.length ? n.children : [], mn = {
  checkPassed: void 0,
  keyField: "key",
  removedElements: []
};
function Cn(n, t, e = {}) {
  if (e = Object.assign({}, mn, e), n.nodeType !== 11) {
    fe(n.parentElement, n, t, e);
    return;
  }
}
const En = (n, t = D) => ` ${t} ${n}`, bn = "ME@", Tn = (...n) => n.join(D), de = (...n) => bn + Tn(...n), Dr = de, Ur = de, Ot = ":", vn = " ", u = (...n) => {
  var t = n.join(Ot);
  return (...e) => {
    const [r, ...s] = e;
    return L.make("domevent", [t, r].join(" "), ...s);
  };
}, lt = (...n) => L.make("subscribe", ...n), yn = (...n) => L.make("callback", ...n), xn = (...n) => L.make("observer", ...n), kn = (n, ...t) => L.make("props", n, ...t), f = (n, t = D) => En(n, t), pe = (n, t = D) => f(`after(${n})`, t), Gr = (n, t = D) => f(`before(${n})`, t), Vr = f, Kr = f("ArrowUp"), Wr = f("ArrowDown"), zr = f("ArrowLeft"), jr = f("ArrowRight"), Xr = f("Enter"), qr = f("Space"), Yr = f("Escape"), Jr = f("Backspace"), Zr = f("Delete"), Qr = f("Equal"), ts = f("Minus"), es = f("BracketRight"), ns = f("BracketLeft"), rs = f("isAltKey"), ss = f("isShiftKey"), is = f("isMetaKey"), os = f("isCtrlKey"), as = f("hasMouse"), cs = f("hasTouch"), us = f("hasPen"), ls = f("self"), On = f("isMouseLeftButton"), hs = f("isMouseRightButton"), fs = f("fit"), ds = f("passive"), Mn = (n = 100) => f(`debounce(${n})`), ps = (n = 300) => f(`delay(${n})`), gs = Mn(1e3), ms = (n = 100) => f(`throttle(${n})`), Sn = f("allTrigger()"), Rn = f("selfTrigger()"), Cs = f("frame()"), Es = (n) => f(`params(${Ge(n)})`), bs = f("capture()"), Ts = pe("preventDefault"), vs = pe("stopPropagation"), ys = lt, xs = (...n) => lt(...n, Sn), ks = (...n) => lt(...n, Rn), Os = (n, ...t) => lt(`config:${n}`, ...t), wn = yn, Ms = wn("requestAnimationFrame"), Ss = xn, Rs = kn, y = u, ws = u("click"), Ns = u("dblclick"), Ps = u("mousedown"), As = u("mouseup"), Is = u("mousemove"), Ls = u("mouseover"), Hs = u("mouseout"), _s = u("mouseenter"), Fs = u("mouseleave"), $s = u("touchstart"), Bs = u("touchmove"), Ds = u("touchend"), Us = u("keydown"), Gs = u("keyup"), Vs = u("keypress"), Ks = u("drag"), Ws = u("dragstart"), zs = u("drop"), js = u("dragover"), Xs = u("dragenter"), qs = u("dragleave"), Ys = u("dragexit"), Js = u("dragout"), Zs = u("dragend"), Qs = u("contextmenu"), ti = u("change"), ei = u("input"), ni = u("focus"), ri = u("focusin"), si = u("focusout"), ii = u("blur"), oi = u("paste"), ai = u("resize"), ci = u("scroll"), ui = u("submit"), li = (...n) => y("pointerdown")(...n) + On, hi = y("pointerover"), fi = y("pointerenter"), di = y("pointerout"), pi = y("pointerleave"), gi = y("pointermove"), mi = y("pointerup"), Ci = y("change", "input"), Ei = y("wheel", "mousewheel", "DOMMouseScroll"), bi = u("animationstart"), Ti = u("animationend"), vi = u("animationiteration"), yi = u("transitionstart"), xi = u("transitionend"), ki = u("transitionrun"), Oi = u("transitioncancel"), Mi = y("doubletab"), Si = y("popstate"), Ri = y("orientationchange"), wi = y("hashchange"), mt = {
  addDomEvent(n, t, e, r = !1) {
    n && n.addEventListener(t, e, r);
  },
  removeDomEvent(n, t, e) {
    n && n.removeEventListener(t, e);
  },
  pos(n) {
    return n.touches && n.touches[0] ? n.touches[0] : n;
  },
  posXY(n) {
    var t = this.pos(n);
    return {
      x: t.pageX,
      y: t.pageY
    };
  }
};
class ht {
  constructor(t, e = {}) {
    this.context = t, this.options = e;
  }
  initialize() {
  }
  load() {
  }
  refresh() {
  }
  render() {
  }
  getRef(t) {
    return this.context.getRef(t);
  }
  run() {
  }
  destroy() {
  }
}
const Nn = {
  touchstart: !0,
  touchmove: !0,
  mousedown: !0,
  mouseup: !0,
  mousemove: !0
}, Pn = {
  doubletab: "touchend"
}, An = {
  doubletab: !0
}, In = {
  self(n) {
    return n && n.$dt && n.$dt.is(n.target);
  },
  isAltKey(n) {
    return n.altKey;
  },
  isCtrlKey(n) {
    return n.ctrlKey;
  },
  isShiftKey(n) {
    return n.shiftKey;
  },
  isMetaKey(n) {
    return n.metaKey || n.key == "Meta" || n.code.indexOf("Meta") > -1;
  },
  isMouseLeftButton(n) {
    return n.buttons === 1;
  },
  isMouseRightButton(n) {
    return n.buttons === 2;
  },
  hasMouse(n) {
    return n.pointerType === "mouse";
  },
  hasTouch(n) {
    return n.pointerType === "touch";
  },
  hasPen(n) {
    return n.pointerType === "pen";
  },
  preventDefault(n) {
    return n.preventDefault(), !0;
  },
  stopPropagation(n) {
    return n.stopPropagation(), !0;
  }
};
class Ln extends ht {
  initialize() {
    var t, e;
    this.destroy(), !(this._domEvents && this.context.notEventRedefine) && ((!this._domEvents || this._domEvents.length === 0 || this._bindings.length === 0) && (this._domEvents = this.context.filterMethodes("domevent")), !((t = this._bindings) != null && t.length) && ((e = this._domEvents) == null ? void 0 : e.length) && this._domEvents.forEach((r) => this.parseDomEvent(r)));
  }
  update() {
    this.initialize();
  }
  destroy() {
    this.context.notEventRedefine || this.removeEventAll();
  }
  getCallback(t) {
    return this.context[t] || In[t];
  }
  removeEventAll() {
    this.getBindings().forEach((t) => {
      this.removeDomEvent(t);
    }), this.initBindings();
  }
  removeDomEvent({ eventName: t, dom: e, callback: r }) {
    mt.removeDomEvent(e, t, r);
  }
  getBindings() {
    return this._bindings || this.initBindings(), this._bindings;
  }
  addBinding(t) {
    this.getBindings().push(t);
  }
  initBindings() {
    this._bindings = [];
  }
  matchPath(t, e) {
    return t ? t.matches(e) ? t : this.matchPath(t.parentElement, e) : null;
  }
  hasDelegate(t, e) {
    return this.matchPath(t.target || t.srcElement, e.delegate);
  }
  makeCallback(t, e, r) {
    return t.delegate ? this.makeDelegateCallback(t, e, r) : this.makeDefaultCallback(t, e, r);
  }
  makeDefaultCallback(t, e, r) {
    return (s) => {
      var i = this.runEventCallback(
        s,
        t,
        e,
        r
      );
      if (z(i))
        return i;
    };
  }
  makeDelegateCallback(t, e, r) {
    return (s) => {
      const i = this.hasDelegate(s, t);
      if (i) {
        s.$dt = h.create(i);
        var o = this.runEventCallback(
          s,
          t,
          e,
          r
        );
        if (z(o))
          return o;
      }
    };
  }
  runEventCallback(t, e, r, s) {
    const i = this.context;
    if (t.xy = mt.posXY(t), e.beforeMethods.length && e.beforeMethods.every((a) => this.getCallback(a.target).call(i, t, a.param)), this.checkEventType(t, e)) {
      var o = s(t, t.$dt, t.xy);
      return o !== !1 && e.afterMethods.length && e.afterMethods.forEach((a) => this.getCallback(a.target).call(i, t, a.param)), o;
    }
  }
  checkEventType(t, e) {
    const r = this.context;
    var s = !0;
    e.codes.length && (s = (t.code ? e.codes.indexOf(t.code.toLowerCase()) > -1 : !1) || (t.key ? e.codes.indexOf(t.key.toLowerCase()) > -1 : !1));
    var i = !0;
    return e.checkMethodList.length && (i = e.checkMethodList.every((o) => {
      var a = this.getCallback(o);
      return g(a) && a ? a.call(r, t) : z(a) ? !!a : !0;
    })), s && i;
  }
  getDefaultDomElement(t) {
    const e = this.context;
    let r;
    return t ? r = e.refs[t] || e[t] || window[t] : r = e.el || e.$el || e.$root, r instanceof h ? r.getElement() : r;
  }
  getRealEventName(t) {
    return Pn[t] || t;
  }
  getCustomEventName(t) {
    return An[t] ? t : "";
  }
  getDefaultEventObject(t, e, r, s, i) {
    var J, Z;
    const o = {
      eventName: this.getRealEventName(t),
      customEventName: this.getCustomEventName(t),
      callback: i
    }, [, , ...a] = s.args;
    o.dom = this.getDefaultDomElement(e), o.delegate = a.join(vn), o.beforeMethods = [], o.afterMethods = [], o.codes = [], o.checkMethodList = [];
    const c = s.getFunction("debounce"), d = s.getFunction("throttle");
    if (c) {
      var p = +(((J = c.args) == null ? void 0 : J[0]) || 0);
      o.callback = Nt(i, p);
    } else if (d) {
      var m = +(((Z = d.args) == null ? void 0 : Z[0]) || 0);
      o.callback = te(i, m);
    }
    const q = s.getFunctionList("after"), Y = s.getFunctionList("before");
    return q.length && q.forEach((H) => {
      var R = H.args[0].split(" "), [_, A] = R;
      o.afterMethods.push({
        target: _,
        param: A
      });
    }), Y.length && Y.forEach((H) => {
      var R = H.args[0].split(" "), [_, A] = R;
      o.beforeMethods.push({
        target: _,
        param: A
      });
    }), s.keywords.forEach((H) => {
      const R = H;
      this.getCallback(R) ? o.checkMethodList.push(R) : o.codes.push(R.toLowerCase());
    }), o;
  }
  addDomEvent(t, e, r) {
    t.callback = this.makeCallback(
      t,
      e,
      r
    ), this.addBinding(t);
    var s = !1;
    e.hasKeyword("capture") && (s = !0), Nn[t.eventName] && (s = {
      passive: !0,
      capture: s
    }), t.dom && mt.addDomEvent(
      t.dom,
      t.eventName,
      t.callback,
      s
    );
  }
  makeCustomEventCallback(t, e, r) {
    var o;
    if (t.customEventName === "doubletab") {
      var s = 300, i = e.getFunction("delay");
      return i && (s = +(((o = i.args) == null ? void 0 : o[0]) || 0)), (...a) => {
        this.doubleTab ? (window.performance.now() - this.doubleTab.time < s && r(...a), this.doubleTab = null) : this.doubleTab = {
          time: window.performance.now()
        };
      };
    }
    return r;
  }
  bindingDomEvent([t, e, ...r], s, i) {
    let o = this.getDefaultEventObject(
      t,
      e,
      r,
      s,
      i
    );
    o.callback = this.makeCustomEventCallback(
      o,
      s,
      o.callback
    ), this.addDomEvent(o, s, o.callback);
  }
  getEventNames(t) {
    let e = [];
    return t.split(Ot).forEach((r) => {
      var s = r.split(Ot);
      e.push.apply(e, s);
    }), e;
  }
  parseDomEvent(t) {
    const e = this.context;
    var r = t.args;
    if (r) {
      var s = this.getEventNames(r[0]), i = e[t.originalMethod].bind(e);
      for (let o = 0, a = s.length; o < a; o++)
        r[0] = s[o], this.bindingDomEvent(r, t, i);
    }
  }
}
class Hn extends ht {
  initialize() {
    var t, e;
    this._observers && this.context.notEventRedefine || ((!this._observers || this._observers.length === 0) && (this._observers = this.context.filterMethodes("observer")), !((t = this._bindings) != null && t.length) && ((e = this._observers) == null ? void 0 : e.length) && this._observers.forEach((r) => this.parseObserver(r)));
  }
  destroy() {
    this.context.notEventRedefine || this.removeEventAll();
  }
  removeEventAll() {
    this.getBindings().forEach((t) => {
      this.disconnectObserver(t);
    }), this.initBindings();
  }
  disconnectObserver(t) {
    t == null || t.disconnect();
  }
  getBindings() {
    return this._bindings || this.initBindings(), this._bindings;
  }
  addBinding(t) {
    this.getBindings().push(t);
  }
  initBindings() {
    this._bindings = [];
  }
  addObserver(t) {
    this.addBinding(t);
  }
  getDefaultDomElement(t) {
    const e = this.context;
    let r;
    return t ? r = e.refs[t] || e[t] || window[t] : r = e.el || e.$el || e.$root, r instanceof h ? r.getElement() : r;
  }
  createObserver(t, e) {
    var d;
    const [r, s] = t.args || ["intersection"], i = this.getDefaultDomElement(s), o = t.getFunction("params"), a = Ke((d = o == null ? void 0 : o.args) == null ? void 0 : d[0]);
    let c;
    switch (r) {
      case "intersection":
        a.root && (a.root = this.getDefaultDomElement(a.root)), c = new window.IntersectionObserver(e, a || {}), c.observe(i);
        break;
      case "mutation":
        c = new window.MutationObserver(e), c.observe(
          i,
          a || {
            attributes: !0,
            characterData: !0,
            childList: !0
          }
        );
        break;
      case "performance":
        c = new window.PerformanceObserver(e), c.observe(
          a || {
            entryTypes: ["paint"]
          }
        );
        break;
    }
    return c;
  }
  bindingObserver(t, e) {
    this.addObserver(this.createObserver(t, e));
  }
  parseObserver(t) {
    const e = this.context;
    var r = e[t.originalMethod].bind(e);
    this.bindingObserver(t, r);
  }
}
class _n extends ht {
  getProps() {
    var t, e;
    return this._props || (this._props = this.context.filterMethodes("props")), !((t = this._bindings) != null && t.length) && ((e = this._props) == null ? void 0 : e.length) && this._props.forEach((r) => this.parseProps(r)), this.getBindings();
  }
  destroy() {
    this.removeAll();
  }
  getCallback(t) {
    return this.context[t];
  }
  removeAll() {
    this.initBindings();
  }
  getBindings() {
    return this._bindings || this.initBindings(), this._bindings;
  }
  addBinding(t) {
    this.getBindings().push(t);
  }
  initBindings() {
    this._bindings = [];
  }
  bindingProps(t) {
    this.addBinding(t);
  }
  createProps(t, e) {
    const [r] = t.args || [];
    if (!!r)
      return {
        ref: r,
        props: e()
      };
  }
  parseProps(t) {
    const e = this.context;
    var r = this.getCallback(t.originalMethod).bind(e);
    this.bindingProps(this.createProps(t, r));
  }
}
class Fn extends ht {
  initialize() {
    var t, e;
    this._callbacks || (this._callbacks = this.context.filterMethodes("subscribe")), !((t = this._bindings) != null && t.length) && ((e = this._callbacks) == null ? void 0 : e.length) && this._callbacks.forEach((r) => this.parseSubscribe(r));
  }
  destroy() {
    this.context.notEventRedefine || this.context.$store.offAll(this.context);
  }
  getCallback(t) {
    return this.context[t];
  }
  getBindings() {
    return this._bindings || this.initBindings(), this._bindings;
  }
  addBinding(t) {
    this.getBindings().push(t);
  }
  initBindings() {
    this._bindings = [];
  }
  createLocalCallback(t, e) {
    var r = e.bind(this.context);
    return r.displayName = `${this.context.sourceName}.${t}`, r.source = this.context.source, r;
  }
  parseSubscribe(t) {
    var H, R;
    const e = t.args.join(" "), r = [], s = [];
    let i = 0, o = 0, a = !1, c = !1, d = !1;
    const p = t.getFunction("debounce"), m = t.getFunction("throttle"), q = t.getFunction("allTrigger"), Y = t.getFunction("selfTrigger"), J = t.getFunction("frame");
    p && (i = +(((H = p.args) == null ? void 0 : H[0]) || 0)), m && (o = +(((R = m.args) == null ? void 0 : R[0]) || 0)), q && (a = !0), Y && (c = !0), J && (d = !0), t.keywords.forEach((_) => {
      const A = _;
      this.context[A] ? r.push(A) : s.push(A);
    });
    const Z = this.context[t.originalMethod];
    [...s, e].filter(Boolean).forEach((_) => {
      var A = this.createLocalCallback(_, Z);
      this.context.$store.on(
        _,
        A,
        this.context,
        i,
        o,
        a,
        c,
        r,
        d
      );
    }), this.addBinding(t);
  }
}
let ft = {};
function Ni() {
  qe(!0);
}
function Pi(n) {
  return T().useState(n);
}
function $n(n, t) {
  return T().useEffect(n, t);
}
function Ai(n, t) {
  return T().useReducer(n, t);
}
function Ii(n, t) {
  return T().useMemo(n, t);
}
function Li(n, t) {
  return T().useCallback(n, t);
}
function Hi(n) {
  return T().useRef(n);
}
function _i(n) {
  return T().useContext(n);
}
function Bn(n) {
  ft[n.id] = {
    context: n,
    index: 0,
    lastProvider: null
  };
}
class Dn {
  constructor(t, e) {
    this.context = t, this.provider = e;
  }
  get id() {
    return this.provider.id;
  }
  get value() {
    return this.provider.value;
  }
  set(t) {
    this.provider = t;
  }
}
function Un(n, t) {
  const e = new Dn(n, t), r = ft[n.id];
  if (!r.lastProvider)
    r.prevProvider = r.lastProvider, r.lastProvider = e, r.lastProvider.prev = r.prevProvider;
  else {
    const s = r.lastProvider, i = s.value;
    s.id === e.id ? r.lastProvider.set(e) : (r.lastProvider.next = e, e.prev = r.lastProvider, r.lastProvider = e), i !== e.value && Wn(e);
  }
}
function Gn(n) {
  const t = ft[n.id];
  t.lastProvider && t.lastProvider.prev && (t.lastProvider = t.lastProvider.prev, t.lastProvider && (t.lastProvider.next = null));
}
function ge(n) {
  return ft[n.id].lastProvider;
}
let Vn = 0;
function Fi(n) {
  const t = {
    id: "context-" + Vn++,
    defaultValue: n,
    lastProvider: null,
    Provider: function({ value: e, content: r }) {
      return Un(t, {
        value: e,
        id: this.id,
        component: this
      }), $n(() => {
        Gn(t);
      }, []), r[0] || r;
    }
  };
  return t.Consumer = ({ content: [e] }) => {
    const r = ge(t).value;
    return e(r);
  }, Bn(t), t;
}
const nt = {};
function Kn(n, t, e) {
  nt[n] || (nt[n] = {}), nt[n][t.id] = e;
}
function Wn(n) {
  const t = nt[n.id];
  t && Object.values(t).forEach((e) => {
    e(n);
  });
}
function zn(n) {
  return T().useStore(n);
}
function $i(n, t) {
  return T().useStoreSet(n, t);
}
function Bi(n) {
  return zn(Qt)[n];
}
function Di(n, t, e = 0, r = 0, s = !1) {
  return T().useSubscribe(
    n,
    t,
    e,
    r,
    s
  );
}
function Ui(n, t, e = 0, r = 0) {
  return T().useSelf(
    n,
    t,
    e,
    r
  );
}
function Gi(n, ...t) {
  return T().emit(n, ...t);
}
function Vi(n, ...t) {
  return T().trigger(n, ...t);
}
function Ki(n, t) {
  return T().initMagicMethod(n, t);
}
var G;
class jn {
  constructor() {
    O(this, G, {});
    this.handlers = this.initializeHandler();
  }
  initializeHandler(t = {}) {
    return Ye(this, t);
  }
  loadHandlerCache(t) {
    return l(this, G)[t] || (l(this, G)[t] = this.handlers.filter((e) => e[t])), l(this, G)[t];
  }
  async runHandlers(t = "run", ...e) {
    await Promise.all(
      this.loadHandlerCache(t).map(async (r) => {
        await r[t](...e);
      })
    );
  }
  filterFunction(t, ...e) {
    return this.loadHandlerCache(t).map((r) => r[t](...e));
  }
}
G = new WeakMap();
const Xt = Symbol("useState"), qt = Symbol("useEffect"), Xn = Symbol("useMemo"), Yt = Symbol("useContext"), qn = Symbol("useSubscribe");
function Yn({ value: n, component: t }) {
  let e = { value: n, component: t };
  function r(i) {
    return typeof i == "function" ? i(e.value) : i;
  }
  return [e, (i) => {
    const o = r(i);
    n.value !== o && (e.value = o, oe(e.component));
  }];
}
var F, I;
class Jn extends jn {
  constructor() {
    super(...arguments);
    O(this, F, []);
    O(this, I, 0);
  }
  copyHooks() {
    return {
      __stateHooks: l(this, F),
      __stateHooksIndex: l(this, I)
    };
  }
  reloadHooks(e) {
    x(this, F, e.__stateHooks || []), x(this, I, e.__stateHooksIndex || 0);
  }
  resetCurrentComponent() {
    this.resetHookIndex(), $e(this);
  }
  resetHookIndex() {
    x(this, I, 0);
  }
  increaseHookIndex() {
    Gt(this, I)._++;
  }
  getHook() {
    return l(this, F)[l(this, I)];
  }
  setHook(e, r) {
    l(this, F)[l(this, I)] = {
      type: e,
      hookInfo: r
    };
  }
  useState(e) {
    this.getHook() || this.setHook(
      Xt,
      Yn({ value: e, component: this })
    );
    const [r, s] = this.getHook().hookInfo;
    return this.increaseHookIndex(), [r.value, s];
  }
  isChangedDeps(e) {
    const r = !e, {
      hookInfo: { deps: s }
    } = this.getHook() || { hookInfo: {} }, i = s ? !e.every((o, a) => o === s[a]) : !0;
    return r || i;
  }
  useEffect(e, r) {
    this.isChangedDeps(r) && this.setHook(qt, {
      deps: r,
      callback: e
    }), this.increaseHookIndex();
  }
  useReducer(e, r) {
    const [s, i] = this.useState(r);
    function o(a) {
      i((c) => e(c, a));
    }
    return [s, o];
  }
  useMemo(e, r) {
    this.isChangedDeps(r) && this.setHook(Xn, {
      deps: r,
      value: e()
    });
    const i = this.getHook().hookInfo || {};
    return this.increaseHookIndex(), i.value;
  }
  useCallback(e, r) {
    return this.useMemo(() => e, r);
  }
  useRef(e) {
    return this.useMemo(() => ({ current: e }), []);
  }
  refreshProvider(e) {
    const r = this.filterHooks(Yt).find(
      (s) => s.provider.id === e.id
    );
    r && (r.provider = e);
  }
  useContext(e) {
    this.getHook() || this.setHook(Yt, {
      provider: ge(e),
      component: this
    });
    const { provider: r } = this.getHook().hookInfo;
    return Kn(r.id, this, () => {
      oe(this);
    }), this.increaseHookIndex(), (r == null ? void 0 : r.value) || e.defaultValue;
  }
  useSubscribe(e, r, s = 0, i = 0, o = !1) {
    this.getHook() || this.setHook(qn, {
      name: e,
      callback: r,
      component: this,
      unsubscribe: this.$store.on(
        e,
        r,
        this,
        s,
        i,
        !1,
        o
      )
    });
    const { unsubscribe: a } = this.getHook().hookInfo;
    return this.increaseHookIndex(), a;
  }
  useSelf(e, r, s = 0, i = 0) {
    return this.useSubscribe(
      e,
      r,
      s,
      i,
      !0
    );
  }
  useEmit(e, ...r) {
    return this.emit(e, ...r);
  }
  useStore(e) {
    return this.$store.get(e);
  }
  useStoreSet(e, r) {
    this.$store.set(e, r);
  }
  filterHooks(e) {
    return l(this, F).filter((r) => r.type === e).map((r) => r.hookInfo);
  }
  getUseEffects() {
    return this.filterHooks(qt);
  }
  getUseStates() {
    return this.filterHooks(Xt).map((e) => e.value);
  }
  runHooks() {
    this.getUseEffects().forEach((e) => {
      g(e.cleanup) && e.cleanup(), e.cleanup = e.callback();
    });
  }
  cleanHooks() {
    this.getUseEffects().forEach((e) => {
      g(e.cleanup) && e.cleanup();
    });
  }
  destroy() {
  }
  onMounted() {
    this.isMounted = !0, this.runHooks();
  }
  onUpdated() {
    this.runHooks();
  }
  onDestroyed() {
    this.isMounted = !1, this.cleanHooks();
  }
  onUnmounted() {
  }
}
F = new WeakMap(), I = new WeakMap();
var w, V, K, M, E, at, me;
const Ut = class extends Jn {
  constructor(e, r, s) {
    super();
    O(this, at);
    O(this, w, {});
    O(this, V, void 0);
    O(this, K, {});
    O(this, M, {});
    O(this, E, /* @__PURE__ */ new WeakMap());
    Q(this, "registerRef", (e, r) => {
      typeof e == "function" ? e(r) : W(e) ? e.value = r : this.refs[e] = r;
    });
    Q(this, "registerChildComponent", (e, r, s, i) => {
      l(this, E).has(e) || (l(this, M)[s] = e, l(this, E).set(e, r)), l(this, E).has(i) && l(this, E).delete(i);
    });
    Q(this, "checkRefClass", (e, r) => {
      const s = r.props;
      if (r.isComponentChanged)
        return !0;
      let i = this.getTargetInstance(e);
      return i && i.isInstanceOf(r.Component) ? r.isComponentChanged || i.isForceRender(s) ? !0 : (Vt(this, at, me).call(this, i, s), !1) : !0;
    });
    this.refs = {}, this.id = Fe(), this.initializeProperty(e, r, s);
  }
  setId(e) {
    this.id = e;
  }
  initializeHandler() {
    return super.initializeHandler({
      DomEventHandler: Ln,
      ObserverHandler: Hn,
      StoreHandler: Fn,
      PropsHandler: _n
    });
  }
  checkProps(e = {}) {
    return e;
  }
  initializeProperty(e, r = {}, s = {}) {
    this.opt = e || {}, this.parent = this.opt, this.source = this.id, this.sourceName = this.constructor.name, this.props = r, x(this, w, Object.assign({}, l(this, w), s));
  }
  createFunction(e, r) {
    return g(r) && !l(this, K)[e] && (l(this, K)[e] = r), l(this, K)[e];
  }
  runFunction(e, r) {
    const s = this.createFunction(e, r);
    if (!(s != null && s.running))
      return g(s) && (s.running || (s.running = !0, s.call(this))), s;
  }
  initState() {
    return {};
  }
  setState(e = {}, r = !0) {
    x(this, w, Object.assign({}, l(this, w), e)), r && this.refresh();
  }
  toggleState(e, r = !0) {
    this.setState(
      {
        [e]: !l(this, w)[e]
      },
      r
    );
  }
  changedProps(e) {
    return !br(this.props, e);
  }
  _reload(e) {
    this.changedProps(e) && (this.props = e, this.refresh());
  }
  checkLoad(e) {
    window.requestAnimationFrame(() => {
      this.render(e);
    });
  }
  get state() {
    return l(this, w);
  }
  get ref() {
    return this.props.ref;
  }
  get children() {
    return Object.fromEntries(
      Object.entries(l(this, M)).map(([e, r]) => [e, l(this, E).get(r)])
    );
  }
  get isPreLoaded() {
    return !0;
  }
  getTargetInstance(e) {
    const r = l(this, E).get(e);
    if (r)
      return r;
  }
  isForceRender() {
    return !1;
  }
  isInstanceOf(e) {
    return this instanceof e;
  }
  async runningUpdate(e, r) {
    e.type === k.FRAGMENT ? he(this.parentElement, e) : Cn(this.$el.el, e, {
      checkRefClass: this.checkRefClass,
      context: this,
      isForceRender: r,
      registerRef: this.registerRef,
      registerChildComponent: this.registerChildComponent
    }), this.$el.el[rt] = this, this.runUpdated(), await this.runHandlers("update");
  }
  async runningMount(e, r) {
    const s = this.parseMainTemplate(e);
    this.$el = s, this.refs.$el = this.$el, this.$el && (this.$el.el[rt] = this), r && (r instanceof h || (r = h.create(r)), r.hasChild(this.$el) === !1 && (r.append(this.$el), this.runMounted())), await this.runHandlers("initialize"), await this.afterRender();
  }
  async forceRender() {
    this.cleanHooks(), await this.render(null, !0);
  }
  setParentElement(e) {
    this.parentElement = e;
  }
  is(e, r) {
    return this.sourceName === e && r(this);
  }
  async render(e, r = !1) {
    if (!this.isPreLoaded) {
      this.checkLoad(e);
      return;
    }
    this.resetCurrentComponent();
    const s = this.template();
    if (v(s))
      throw new Error(
        [
          `Error Component - ${this.sourceName}`,
          "Template root is not must an array, however You can use Fragment instead of it",
          "Fragment Samples: ",
          " <>{list}</> ",
          " <Fragment>{list}</Fragment>"
        ].join(`
`)
      );
    return this.$el ? await this.runningUpdate(s, r) : await this.runningMount(s, e), this;
  }
  async renderToHtml() {
    this.resetCurrentComponent();
    const e = this.template();
    return await ue(e, this.getVNodeOptions());
  }
  initialize() {
    x(this, w, this.initState());
  }
  getRef(...e) {
    const r = e.join("");
    return this.refs[r];
  }
  getVNodeOptions() {
    return {
      context: this,
      registerRef: this.registerRef,
      registerChildComponent: this.registerChildComponent
    };
  }
  parseMainTemplate(e) {
    return ce(e, this.getVNodeOptions());
  }
  getFunctionComponent() {
    return this;
  }
  refresh() {
    this.render();
  }
  afterRender() {
  }
  template() {
    return null;
  }
  clear() {
    Object.entries(l(this, M)).forEach(([e, r]) => {
      if (!r.parentNode) {
        const s = l(this, E).get(r);
        s && (s.destroy(), l(this, E).delete(r), delete l(this, M)[e]);
      }
    });
  }
  clearAll() {
    Object.entries(l(this, M)).forEach(([e, r]) => {
      const s = l(this, E).get(r);
      s && (s.destroy(), l(this, E).delete(r), delete l(this, M)[e]);
    });
  }
  destroy(e = !1) {
    De(this), Object.entries(l(this, M)).forEach(([r, s]) => {
      const i = l(this, E).get(s);
      i && (i.destroy(), l(this, E).delete(s), delete l(this, M)[r]);
    }), this.runHandlers("destroy"), e && (this.$el.remove(), this.$el = null, this.onUnmounted()), this.onDestroyed(), this.refs = {};
  }
  collectMethodes(e = !1) {
    return (!l(this, V) || e) && x(this, V, we(
      this,
      Ut,
      (r) => L.check(r)
    ).map((r) => L.parse(r, this))), l(this, V);
  }
  filterMethodes(e, r = !1) {
    return this.collectMethodes(r).filter((s) => s.method === e);
  }
  getChildContent(e, r = "") {
    var s;
    return ((s = this.getChild(e)) == null ? void 0 : s.props.content) || r;
  }
  getChild(e) {
    return this.props.content.find(e);
  }
  runMounted() {
    this.onMounted();
  }
  runUpdated() {
    this.onUpdated();
  }
  onMounted() {
    var r;
    super.onMounted();
    const e = this.getTargetInstance((r = this.$el) == null ? void 0 : r.el);
    e && e.onMounted();
  }
  onUpdated() {
    var r;
    super.onUpdated();
    const e = this.getTargetInstance((r = this.$el) == null ? void 0 : r.el);
    e && e.onUpdated();
  }
  onDestroyed() {
    var r;
    super.onDestroyed();
    const e = this.getTargetInstance((r = this.$el) == null ? void 0 : r.el);
    e && e.onDestroyed();
  }
  onUnmounted() {
    var r;
    super.onUnmounted();
    const e = this.getTargetInstance((r = this.$el) == null ? void 0 : r.el);
    e && e.onUnmounted();
  }
  initMagicMethod(e, r) {
    this[e] = r;
  }
};
let Mt = Ut;
w = new WeakMap(), V = new WeakMap(), K = new WeakMap(), M = new WeakMap(), E = new WeakMap(), at = new WeakSet(), me = function(e, r) {
  e._reload(r);
};
var B;
const ct = class extends Mt {
  constructor(e, r = {}, s = {}) {
    super(e, r, s);
    O(this, B, void 0);
    r.store ? x(this, B, r.store) : this.parent.$store || x(this, B, new Qe()), this.created(), this.initialize(), this.initializeContext(e, r, s);
  }
  initializeContext(e, r = {}) {
    e || this.$store.init(Qt, r);
  }
  currentContext() {
    return this.contexts[this.contexts.length - 1];
  }
  setStore(e) {
    x(this, B, e);
  }
  get $store() {
    return l(this, B) || this.parent.$store;
  }
  async created() {
  }
  createLocalCallback(e, r) {
    var s = r.bind(this);
    return s.displayName = `${this.sourceName}.${e}`, s.source = this.source, s;
  }
  emit(e, ...r) {
    this.$store.source = this.source, this.$store.sourceContext = this, this.$store.emit(e, ...r);
  }
  nextTick(e, r = 0) {
    window.setTimeout(() => {
      this.$store.nextTick(e);
    }, r);
  }
  trigger(e, ...r) {
    this.$store.source = this.source, this.$store.trigger(e, ...r);
  }
  runCallback(e, ...r) {
    this.parent && this.parent.trigger(e, ...r);
  }
  on(e, r, s = 0, i = 0, o = !1, a = !1, c = !1) {
    this.$store.on(
      e,
      r,
      this.source,
      s,
      i,
      o,
      a,
      [],
      c
    );
  }
  off(e, r) {
    this.$store.off(e, r, this.source);
  }
  subscribe(e, r = 0, s = 0) {
    const i = `subscribe.${Pt()}`, o = this.createLocalCallback(i, e);
    return this.$store.on(
      i,
      o,
      this,
      r,
      s,
      !1,
      !0
    ), i;
  }
  static createFunctionElementInstance(e, r, s, i = {}) {
    class o extends ct {
      initializeProperty(c, d = {}, p = {}) {
        super.initializeProperty(c, d, p), this.sourceName = this.getFunctionComponent().name || this.sourceName;
      }
      getFunctionComponent() {
        return e;
      }
      isInstanceOf(c) {
        return e === c;
      }
      template() {
        return e.call(this, this.props);
      }
    }
    return new o(r, s, i);
  }
  static createElementInstance(e, r, s, i) {
    return e.__proto__.name === "" ? ct.createFunctionElementInstance(
      e,
      r,
      s,
      i
    ) : new e(r, s, i);
  }
};
let St = ct;
B = new WeakMap();
function X(n, t, e, r) {
  return St.createElementInstance(n, t, e, r);
}
const Zn = {
  animationIterationCount: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontSize: !0,
  lineClamp: !0,
  lineHeight: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  width: !0,
  maxWidth: !0,
  maxHeight: !0,
  height: !0,
  top: !0,
  left: !0,
  right: !0,
  bottom: !0,
  border: !0,
  borderWidth: !0,
  borderRadius: !0,
  padding: !0,
  margin: !0,
  paddingLeft: !0,
  paddingRight: !0,
  paddingTop: !0,
  paddingBottom: !0,
  marginLeft: !0,
  marginRight: !0,
  marginTop: !0,
  marginBottom: !0,
  gap: !0,
  columnGap: !0,
  rowGap: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Ct = {}, Qn = /([A-Z])/g, tr = (n) => {
  if (Ct[n])
    return Ct[n];
  const t = n.replace(Qn, "-$1").toLowerCase();
  return Ct[n] = t, t;
};
function er(n, t) {
  return typeof t == "number" && Zn[n] && (t = t + "px"), t;
}
function nr(n) {
  return tr(n);
}
function Rt(n) {
  const t = {};
  return Object.keys(n).forEach((e) => {
    t[nr(e)] = er(e, n[e]);
  }), t;
}
const Ce = {
  svg: !0,
  g: !0,
  path: !0,
  rect: !0,
  circle: !0,
  ellipse: !0,
  line: !0,
  polyline: !0,
  polygon: !0,
  text: !0,
  tspan: !0,
  textPath: !0,
  tref: !0,
  defs: !0,
  clipPath: !0,
  mask: !0,
  pattern: !0,
  image: !0,
  linearGradient: !0,
  radialGradient: !0,
  stop: !0,
  animate: !0,
  animateMotion: !0,
  animateColor: !0,
  animateTransform: !0,
  mpath: !0,
  set: !0,
  use: !0,
  desc: !0,
  metadata: !0,
  title: !0,
  marker: !0,
  symbol: !0,
  view: !0,
  foreignObject: !0,
  switch: !0,
  link: !0
}, Jt = {};
Object.keys(Ce).forEach((n) => {
  Jt[n.toLowerCase()] = !0, Jt[n.toUpperCase()] = !0;
});
function rr(n) {
  return !!Ce[n];
}
const sr = "<";
let Et, bt, Tt, et = {}, vt = 0, yt = {};
const ir = {
  tagProps: !0,
  parentElement: !0,
  el: !0,
  children: !0,
  instance: !0
};
function or() {
  return Et || (Et = h.create("div")), Et;
}
function ar() {
  return bt || (bt = document.createTextNode("")), bt;
}
function cr() {
  return Tt || (Tt = document.createComment("")), Tt;
}
function ur(n) {
  if (!yt[n]) {
    const t = rr(n) ? document.createElementNS("http://www.w3.org/2000/svg", n) : document.createElement(n);
    yt[n] = t;
  }
  return yt[n].cloneNode(!1);
}
function lr(n) {
  const t = ar().cloneNode();
  return t.textContent = n, t;
}
function hr(n) {
  const t = cr().cloneNode();
  return t.textContent = n, t;
}
const fr = {
  content: !0
};
function dr(n, t, e) {
  fr[t] || n.setAttribute(t, e);
}
function pr(n, t, e) {
  n[t.toLowerCase()] = e;
}
function gr(n, t, e) {
  t.indexOf("--") === 0 ? typeof e > "u" ? n.style.removeProperty(t) : n.style.setProperty(t, e) : n.style[t] = e;
}
function Zt(n) {
  const t = Rt(n);
  return Object.keys(t).map((e) => `${e}: ${t[e]};`).join(" ");
}
function mr(n) {
  var t = {};
  const e = n.length;
  for (let r = 0; r < e; r++) {
    const s = n[r], i = s.name, o = s.value;
    t[i] = o;
  }
  return t;
}
const Cr = (n) => {
  var t = n.firstChild;
  if (!t)
    return [];
  var e = [];
  do
    e[e.length] = t, t = t.nextSibling;
  while (t);
  return e;
};
function Er(n) {
  return vt > 2e3 && (vt = 0, et = {}), et[n] || (vt++, et[n] = or().html(n).first.el), et[n].cloneNode(!0);
}
function wt(n, t, e = 0, r = {}) {
  if (g(n) && g(t))
    return !1;
  const s = Object.keys(n).filter(
    (o) => r[o] === void 0
  ), i = Object.keys(t).filter(
    (o) => r[o] === void 0
  );
  return s.length !== i.length ? !1 : s.length === 0 && i.length === 0 ? !0 : s.every((o) => {
    if (r[o])
      return !0;
    const a = n[o], c = t[o];
    return Xe() && o === "Component" ? !1 : v(a) && v(c) ? a.length !== c.length ? !1 : a.length === 0 && c.length === 0 ? !0 : a.every((p, m) => wt(p, c[m], e + 1, r)) : W(a) && W(c) ? wt(a, c, e + 1, r) : a === c;
  });
}
function br(n, t) {
  return wt(n, t, 0, ir);
}
class b {
  constructor(t, e, r, s, i) {
    this.type = t, this.tag = e, this.nodeName = e == null ? void 0 : e.toUpperCase(), this.props = r, this.children = s, this.Component = i, this.initializeProps(), this.initializeChildren();
  }
  clone() {
    return new b(
      this.type,
      this.tag,
      { ...this.props },
      this.children.map((t) => t.clone()),
      this.Component
    );
  }
  find(t) {
    return this.props.content.find(t);
  }
  mounted() {
  }
  runMounted() {
    this.mounted && requestAnimationFrame(() => {
      this.mounted();
    }, 0);
  }
  get stringifyStyle() {
    return this.tagProps.style;
  }
  initializeProps() {
    const t = Object.assign({}, this.props);
    this.Component || (W(t.style) && (t.style = Zt(t.style)), t.className && (t.class = t.className, delete t.className), this.tagProps = t), this.props.enableHtml && (this.enableHtml = this.props.enableHtml, delete this.props.enableHtml);
  }
  initializeChildren() {
    if (v(this.children)) {
      if (this.props.content)
        return;
      this.children = this.children.filter(Boolean).map((t) => {
        if (P(t))
          if (this.enableHtml) {
            if (t.indexOf(sr) === -1)
              return N(t);
            {
              const e = Er(t);
              return (e == null ? void 0 : e.nodeType) === 3 ? N(e.textContent) : N(e);
            }
          } else
            return N(t);
        else if (ee(t))
          return N(t);
        return t;
      }), this.props.content = this.children;
    }
  }
  makeChildren(t, e) {
    const r = this.el, s = this.children;
    if (s && s.length) {
      const i = document.createDocumentFragment();
      s.forEach((o) => {
        if (o instanceof b || o.makeElement) {
          o.setParentElement(r);
          const a = o.makeElement(t, e).el;
          a && i.appendChild(a);
        } else if (v(o))
          o.forEach((a) => {
            if (a) {
              const c = a.makeElement(t, e).el;
              c && i.appendChild(c);
            }
          });
        else if (g(o)) {
          const a = o();
          if (a instanceof b) {
            const c = a.makeElement(t, e);
            c && i.appendChild(c);
          } else
            typeof a == "string" && i.appendChild(document.createTextNode(a));
        } else
          o instanceof window.HTMLElement ? i.appendChild(o) : i.appendChild(document.createTextNode(o));
      }), r.appendChild(i), s.forEach((o) => {
        v(o) ? o.forEach((a) => {
          g(a == null ? void 0 : a.runMounted) && a.runMounted();
        }) : o && g(o == null ? void 0 : o.runMounted) && o.runMounted();
      });
    }
  }
  setParentElement(t) {
    this.parentElement = t;
  }
  async makeChildrenHtml(t, e) {
    const r = [], s = this.children;
    if (s && s.length) {
      const i = await Promise.all(
        s.map(async (o) => o instanceof b || o.makeHtml ? await o.makeHtml(t, e) : v(o) ? await Promise.all(
          o.map(async (a) => {
            if (a)
              return await a.makeHtml(t, e);
          })
        ).filter((a) => typeof a < "u") : g(o) ? await o() : await o)
      );
      r.push(...i);
    }
    return r.join(`
`);
  }
  createElement() {
    return ur(this.tag);
  }
  getContextProps(t, e) {
    t.filterFunction("getProps").flat(1 / 0).filter((i) => i.ref === e.ref).forEach((i) => {
      W(i.props) && Object.assign(e, i.props);
    });
  }
  makeElement(t = !1, e = {}) {
    const r = this.createElement();
    let s = this.tagProps;
    return s && (s.ref && (this.getContextProps(e.context, s), this.ref = s.ref, g(e.registerRef) && e.registerRef(s.ref, r)), Object.keys(s).forEach((i) => {
      const o = s[i];
      if (i === "style")
        if (P(o))
          r.style.cssText = o;
        else {
          const a = Rt(o);
          Object.entries(a).forEach(([c, d]) => {
            gr(r, c, d);
          });
        }
      else
        i && o !== void 0 && (i.startsWith("on") ? pr(r, i, o) : dr(r, i, o));
    })), this.el = r, this.makeChildren(t, e), this;
  }
  async makeHtml(t = !1, e = {}) {
    const r = [], s = this.tagProps;
    if (s && (s.ref && this.getContextProps(e.context, s), Object.keys(s).forEach((i) => {
      const o = s[i];
      if (i === "style")
        P(o) || (s[i] = Zt(Rt(o)));
      else if (i && o !== void 0 && i.startsWith("on"))
        return;
      i !== "ref" && o && r.push(`${i}="${o}"`);
    })), en(this.tag))
      return `
        <${this.tag} ${r.join(" ")} />
      `;
    {
      const i = await this.makeChildrenHtml(t, e);
      return `
        <${this.tag} ${r.join(" ")}>${i}</${this.tag}>
      `;
    }
  }
  makeText(t = "") {
    return this.children.map((r) => r.makeText(t)).flat(1 / 0).join(t);
  }
}
class Ht extends b {
  constructor(t) {
    super(k.TEXT, null, {}), this.value = t;
  }
  clone() {
    return new Ht(this.value);
  }
  get textContent() {
    return this.value;
  }
  runMounted() {
  }
  createElement() {
    return lr(this.value);
  }
  makeElement() {
    return this.el = this.createElement(), this;
  }
  makeHtml() {
    return this.value;
  }
  makeText() {
    return this.value;
  }
}
class _t extends b {
  constructor(t) {
    super(k.COMMENT, null, {}), this.value = t;
  }
  clone() {
    return new _t(this.value);
  }
  get textContent() {
    return this.value;
  }
  runMounted() {
  }
  createElement() {
    return hr(this.value);
  }
  makeElement() {
    return this.el = this.createElement(), this;
  }
  makeHtml() {
    return `<!-- ${this.value} -->`;
  }
  makeText() {
    return "";
  }
}
class Ft extends b {
  constructor(t = {}, e) {
    super(k.FRAGMENT, "fragment", t || {}, e);
  }
  clone() {
    return new Ft(
      this.props,
      this.children.map((t) => t.clone())
    );
  }
  makeElement(t = !1, e = {}) {
    if (this.el)
      return this;
    const r = document.createDocumentFragment();
    return this.el = r, this.makeChildren(t, e), this;
  }
  async makeHtml(t = !1, e = {}) {
    return await this.makeChildrenHtml(t, e);
  }
}
class dt extends b {
  constructor(t = {}, e, r) {
    super(k.COMPONENT, "object", t || {}, e), this.Component = r, this.instance = null;
  }
  clone() {
    return new dt(
      this.props,
      this.children.map((t) => t.clone()),
      this.Component
    );
  }
  mounted() {
    var t;
    (t = this.instance) == null || t.onMounted();
  }
  getModule() {
    return Ze(this.Component);
  }
  get isComponentChanged() {
    return this.Component !== this.getModule();
  }
  makeClassInstance(t) {
    var a, c, d;
    const e = { ...this.props };
    e.ref && this.getContextProps(t.context, e);
    const r = this.getModule(), s = (a = this.instance) == null ? void 0 : a.copyHooks(), i = (c = this.instance) == null ? void 0 : c.state, o = (d = this.instance) == null ? void 0 : d.id;
    return this.instance = X(
      r,
      t.context,
      e,
      i
    ), o && this.instance.setId(o), s && this.instance.reloadHooks(s), this.instance;
  }
  render(t) {
    this.makeClassInstance(t);
    try {
      this.instance.setParentElement(this.parentElement), this.instance.render(t.$container);
    } catch (e) {
      console.error(e);
    }
  }
  async renderHtml(t) {
    return this.makeClassInstance(t), await this.instance.renderToHtml();
  }
  makeElement(t, e = {}) {
    var r, s;
    if (this.render(e), this.el = (s = (r = this.instance) == null ? void 0 : r.$el) == null ? void 0 : s.el, this.el) {
      const i = this.props.ref || this.instance.id;
      g(e.registerChildComponent) && e.registerChildComponent(this.el, this.instance, i);
    }
    return this;
  }
  async makeHtml(t, e = {}) {
    return await this.renderHtml(e);
  }
  makeText() {
    return "";
  }
}
function $t({ tag: n, props: t = {}, children: e }) {
  return new b(k.NODE, n, t, e);
}
function Ee({ props: n = {}, children: t, Component: e }) {
  if (typeof e > "u")
    throw new Error("Component is undefined");
  return new dt(n, t, e);
}
function be({ props: n = {}, children: t }) {
  return new Ft(n, t);
}
function N(n) {
  return new Ht(n);
}
function Te(n) {
  return new _t(n);
}
function Wi(n) {
  return n.clone();
}
const Tr = (n, t = {}) => {
  const e = h.create(t.container || document.body), r = e.children().find((i) => i.el[rt]);
  if (n instanceof b) {
    const i = n;
    n = () => i;
  }
  const s = X(n, null, t);
  return r ? (s.$el = h.create(r.el), s.id = r.el[rt].id, s.render()) : s.render(e), ae(s, e), s;
}, zi = Tr, ji = (n, t = {}) => {
  const e = h.create(t.container || document.body);
  if (n instanceof b) {
    const i = n;
    n = () => i;
  }
  const r = X(n, null, t), s = e.firstChild;
  return s ? (r.$el = s, r.render()) : r.render(e), ae(r, e), r;
}, Xi = (n, t = {}) => {
  const e = h.create(t.container || document.body);
  if (n instanceof dt)
    return n.render({
      $container: e
    }), n.instance;
  if (n instanceof b) {
    const s = n;
    n = () => s;
  }
  const r = X(n, null, t);
  return r.render(e), r;
};
async function qi(n, t) {
  if (n instanceof b) {
    const s = n;
    n = () => s;
  }
  return await X(n, null, t).renderToHtml();
}
function Yi(n) {
  return class extends HTMLElement {
    constructor() {
      super(), this._shadow = this.attachShadow({ mode: "open" }), this._$container = h.create(this._shadow), this._comp = new n(), this._comp.on("customEvent", (t, ...e) => {
        this.dispatchEvent(
          new CustomEvent(t, {
            bubbles: !0,
            detail: e
          })
        );
      });
    }
    static get observedAttributes() {
      return n.attributes || [];
    }
    connectedCallback() {
      const t = this.attributes, e = {};
      for (let r = t.length - 1; r >= 0; r--)
        e[t[r].name] = t[r].value;
      this._comp._reload(e, this._$container);
    }
    disconnectedCallback() {
      this._comp.destroy(), this._comp = null;
    }
    adoptedCallback() {
      console.log("Custom square element moved to new page.");
    }
    attributeChangedCallback(t, e, r) {
      this._comp._reload({
        ...this._comp.props,
        [t]: r
      });
    }
  };
}
function ve(n) {
  return typeof n == "string" ? N(n) : n.nodeType === 3 ? N(n.textContent) : $t({
    tag: n.tagName,
    props: mr(n.attributes),
    children: Cr(n).map((t) => ve(t))
  });
}
function Ji(n) {
  const t = h.createByHTML(n);
  return ve(t.el);
}
function xt(n) {
  const { children: t = [], ...e } = n;
  return typeof n == "string" || typeof n == "number" ? N(n) : e.type === "comment" ? Te(e.text) : e.type === "text" ? N(e.text) : e.type === "fragment" ? be({
    ...e,
    children: t.map((r) => xt(r))
  }) : e.type === "component" || e.Component ? Ee({
    ...e,
    children: t.map((r) => xt(r))
  }) : $t({
    ...e,
    children: t.map((r) => xt(r))
  });
}
function ot(n, t = {}, e = []) {
  return e = e.flat(1 / 0), Ee({
    props: t || {},
    children: e,
    Component: n
  });
}
function ye(n, t = {}, e = []) {
  return e = e.flat(1 / 0), be({
    props: t || {},
    children: e,
    Component: n
  });
}
function xe(n = []) {
  return n = n.flat(1 / 0), Te(n[0] || "");
}
function ke(...n) {
  return n.map((t) => {
    let e, r = {}, s = [];
    return P(t) ? e = t : v(t) && ([e, r = {}, s = []] = t), s.length ? ot(
      e,
      r || {},
      ke(s)
    ) : ot(e, r);
  });
}
function Oe(n, t, e = []) {
  return e = e.flat(1 / 0), $t({ tag: n, props: t, children: e });
}
function Me(n, t = {}, ...e) {
  return e = e.filter(Boolean), n === Bt ? ye(n, t, e) : n === Dt ? xe(e) : (t = t || {}, typeof n != "string" ? ot(n, t, e) : Oe(n, t, e));
}
const Bt = new Object(), Dt = new Object(), vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createComponent: ot,
  createComponentFragment: ye,
  createComment: xe,
  createComponentList: ke,
  createElement: Oe,
  createElementJsx: Me,
  FragmentInstance: Bt,
  HTMLComment: Dt
}, Symbol.toStringTag, { value: "Module" })), Zi = Bt, Qi = Me, to = Dt, eo = {
  ...vr
};
export {
  pe as AFTER,
  Sn as ALL_TRIGGER,
  rs as ALT,
  Ti as ANIMATIONEND,
  vi as ANIMATIONITERATION,
  bi as ANIMATIONSTART,
  Wr as ARROW_DOWN,
  zr as ARROW_LEFT,
  jr as ARROW_RIGHT,
  Kr as ARROW_UP,
  Jr as BACKSPACE,
  Gr as BEFORE,
  ii as BLUR,
  ns as BRACKET_LEFT,
  es as BRACKET_RIGHT,
  Qe as BaseStore,
  wn as CALLBACK,
  bs as CAPTURE,
  ti as CHANGE,
  Ci as CHANGEINPUT,
  f as CHECKER,
  ws as CLICK,
  Dr as COMMAND,
  Os as CONFIG,
  Qs as CONTEXTMENU,
  os as CONTROL,
  y as CUSTOM,
  gs as D1000,
  Mn as DEBOUNCE,
  ps as DELAY,
  Zr as DELETE,
  Ns as DOUBLECLICK,
  Mi as DOUBLETAB,
  Ks as DRAG,
  Zs as DRAGEND,
  Xs as DRAGENTER,
  Ys as DRAGEXIT,
  qs as DRAGLEAVE,
  Js as DRAGOUT,
  js as DRAGOVER,
  Ws as DRAGSTART,
  zs as DROP,
  h as Dom,
  Xr as ENTER,
  Qr as EQUAL,
  Yr as ESCAPE,
  de as EVENT,
  fs as FIT,
  ni as FOCUS,
  ri as FOCUSIN,
  si as FOCUSOUT,
  Cs as FRAME,
  rn as FUNC_END_CHARACTER,
  nn as FUNC_REGEXP,
  zt as FUNC_START_CHARACTER,
  Zi as FragmentInstance,
  wi as HASHCHANGE,
  to as HTMLComment,
  Vr as IF,
  ei as INPUT,
  Us as KEYDOWN,
  Vs as KEYPRESS,
  Gs as KEYUP,
  On as LEFT_BUTTON,
  Wt as MAGIC_METHOD,
  Kt as MAGIC_METHOD_REG,
  is as META,
  ts as MINUS,
  as as MOUSE,
  Ps as MOUSEDOWN,
  _s as MOUSEENTER,
  Fs as MOUSELEAVE,
  Is as MOUSEMOVE,
  Hs as MOUSEOUT,
  Ls as MOUSEOVER,
  As as MOUSEUP,
  L as MagicMethod,
  Ot as NAME_SAPARATOR,
  Ss as OBSERVER,
  Ur as ON,
  Ri as ORIENTATIONCHANGE,
  Es as PARAMS,
  ds as PASSIVE,
  oi as PASTE,
  us as PEN,
  Tn as PIPE,
  mi as POINTEREND,
  fi as POINTERENTER,
  pi as POINTERLEAVE,
  gi as POINTERMOVE,
  di as POINTEROUT,
  hi as POINTEROVER,
  li as POINTERSTART,
  Si as POPSTATE,
  Ts as PREVENT,
  Rs as PROPS,
  Ms as RAF,
  ai as RESIZE,
  hs as RIGHT_BUTTON,
  vn as SAPARATOR,
  ci as SCROLL,
  ls as SELF,
  Rn as SELF_TRIGGER,
  ss as SHIFT,
  qr as SPACE,
  D as SPLITTER,
  vs as STOP,
  ui as SUBMIT,
  ys as SUBSCRIBE,
  xs as SUBSCRIBE_ALL,
  ks as SUBSCRIBE_SELF,
  ms as THROTTLE,
  cs as TOUCH,
  Ds as TOUCHEND,
  Bs as TOUCHMOVE,
  $s as TOUCHSTART,
  Oi as TRANSITIONCANCEL,
  xi as TRANSITIONEND,
  ki as TRANSITIONRUN,
  yi as TRANSITIONSTART,
  St as UIElement,
  Ue as VARIABLE_SAPARATOR,
  b as VNode,
  _t as VNodeComment,
  dt as VNodeComponent,
  Ft as VNodeFragment,
  Ht as VNodeText,
  k as VNodeType,
  Ei as WHEEL,
  Yi as WebComponent,
  Kn as addProviderSubscribe,
  Cr as children,
  _e as classnames,
  wr as clone,
  Wi as cloneVNode,
  we as collectProps,
  Nr as combineKeyArray,
  X as createComponentInstance,
  Fi as createContext,
  Qi as createElementJsx,
  Ye as createHandlerInstance,
  $t as createVNode,
  ve as createVNodeByDom,
  Te as createVNodeComment,
  Ee as createVNodeComponent,
  be as createVNodeFragment,
  N as createVNodeText,
  Nt as debounce,
  eo as default,
  Ie as defaultValue,
  Or as get,
  ge as getContextProvider,
  T as getCurrentComponent,
  Ze as getModule,
  mr as getProps,
  je as getRootElementInstanceList,
  Ke as getVariable,
  Ar as hasVariable,
  Ji as htmlToVNode,
  ji as hydrate,
  Ne as ifCheck,
  Pr as initializeGroupVariables,
  v as isArray,
  Mr as isBoolean,
  wt as isEqual,
  g as isFunction,
  Xe as isGlobalForceRender,
  Sr as isNotString,
  z as isNotUndefined,
  Rr as isNotZero,
  ee as isNumber,
  W as isObject,
  P as isString,
  ut as isUndefined,
  Le as isZero,
  xt as jsonToVNode,
  xr as keyEach,
  Ae as keyMap,
  kr as keyMapJoin,
  En as makeEventChecker,
  Er as makeOneElement,
  Pe as makeRequestAnimationFrame,
  Gn as popContextProvider,
  Xi as potal,
  Ve as recoverVariable,
  Je as refreshModule,
  Lr as registAlias,
  Ir as registElement,
  Fr as registHandler,
  ae as registRootElementInstance,
  Br as registerModule,
  De as removeRenderCallback,
  ze as removeRootElementInstance,
  zi as render,
  oe as renderComponent,
  Ni as renderFromRoot,
  qe as renderRootElementInstanceList,
  qi as renderToHtml,
  $e as resetCurrentComponent,
  We as retriveAlias,
  Hr as retriveElement,
  $r as retriveHandler,
  Wn as runProviderSubscribe,
  _r as setGlobalForceRender,
  Tr as start,
  te as throttle,
  Li as useCallback,
  _i as useContext,
  $n as useEffect,
  Gi as useEmit,
  Ki as useMagicMethod,
  Ii as useMemo,
  Ai as useReducer,
  Hi as useRef,
  Bi as useRootContext,
  Ui as useSelf,
  Pi as useState,
  zn as useStore,
  $i as useStoreSet,
  Di as useSubscribe,
  Vi as useTrigger,
  Fe as uuid,
  Pt as uuidShort,
  Ge as variable,
  br as vnodePropsDiff
};
