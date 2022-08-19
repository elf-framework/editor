var Mt = Object.defineProperty;
var Rt = (n, e, t) => e in n ? Mt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Q = (n, e, t) => (Rt(n, typeof e != "symbol" ? e + "" : e, t), t), de = (n, e, t) => {
  if (!e.has(n))
    throw TypeError("Cannot " + t);
};
var l = (n, e, t) => (de(n, e, "read from private field"), t ? t.call(n) : e.get(n)), O = (n, e, t) => {
  if (e.has(n))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n) : e.set(n, t);
}, x = (n, e, t, r) => (de(n, e, "write to private field"), r ? r.call(n, t) : e.set(n, t), t), Ge = (n, e, t, r) => ({
  set _(s) {
    x(n, e, s, t);
  },
  get _() {
    return l(n, e, r);
  }
}), Ve = (n, e, t) => (de(n, e, "access private method"), t);
const re = "__componentInstance", Qe = "__componentRootContext";
function wt(n, e, t = () => !0) {
  let r = n, s = [];
  do {
    if (r instanceof Object === !1 || r.constructor.name === e.name)
      break;
    const a = Object.getOwnPropertyNames(r).filter(t);
    s.push.apply(s, a);
  } while (r = Object.getPrototypeOf(r));
  return s;
}
function Re(n, e = 0) {
  if (e === 0)
    return n;
  var t = void 0;
  return function(r, s, i, o, a) {
    t && window.clearTimeout(t), t = window.setTimeout(function() {
      n(r, s, i, o, a);
    }, e || 300);
  };
}
function et(n, e) {
  var t = void 0;
  return function(r, s, i, o, a) {
    t || (t = window.setTimeout(function() {
      n(r, s, i, o, a), t = null;
    }, e || 300));
  };
}
function At(n, e, t) {
  return (...r) => {
    t.every((i) => e[i].apply(e, r)) && n.apply(e, r);
  };
}
function Pt(n, e) {
  return (...t) => {
    n.requestAnimationFrameId && cancelAnimationFrame(n.requestAnimationFrameId), n.requestAnimationFrameId = requestAnimationFrame(() => {
      n.apply(e, t);
    });
  };
}
function vr(n, e) {
  Object.keys(n).forEach((t, r) => {
    e(t, n[t], r);
  });
}
function It(n, e) {
  return Object.keys(n).map((t, r) => e(t, n[t], r));
}
function yr(n, e, t = "") {
  return It(n, e).join(t);
}
function xr(n, e, t) {
  var r = Lt(n[e], e);
  return g(t) ? t(r) : r;
}
function Lt(n, e) {
  return typeof n > "u" ? e : n;
}
function ce(n) {
  return typeof n > "u";
}
function W(n) {
  return !ce(n);
}
function kr(n) {
  return typeof n == "boolean";
}
function A(n) {
  return typeof n == "string";
}
function Or(n) {
  return !A(n);
}
function T(n) {
  return Array.isArray(n);
}
function j(n) {
  return typeof n == "object" && !Array.isArray(n) && !tt(n) && !A(n) && n !== null;
}
function g(n) {
  return typeof n == "function";
}
function tt(n) {
  return typeof n == "number";
}
function Ht(n) {
  return n === 0;
}
function Sr(n) {
  return !Ht(n);
}
const _t = (n) => JSON.parse(JSON.stringify(n));
function Nr(n) {
  if (!ce(n))
    return _t(n);
}
function Mr(n) {
  return Object.keys(n).forEach((e) => {
    Array.isArray(n[e]) && (n[e] = n[e].join(", "));
  }), n;
}
function Ft(...n) {
  const e = [];
  return n.filter(Boolean).forEach((t) => {
    T(t) ? e.push(Ft(...t)) : j(t) ? Object.keys(t).filter((r) => Boolean(t[r])).forEach((r) => {
      e.push(r);
    }) : A(t) && e.push(t);
  }), e.join(" ");
}
const nt = /[xy]/g;
function $t() {
  var n = new Date().getTime(), e = "xxx12-xx-34xx".replace(nt, function(t) {
    var r = (n + Math.random() * 16) % 16 | 0;
    return n = Math.floor(n / 16), (t == "x" ? r : r & 3 | 8).toString(16);
  });
  return e;
}
function we() {
  var n = new Date().getTime(), e = "idxxxxxxx".replace(nt, function(t) {
    var r = (n + Math.random() * 16) % 16 | 0;
    return n = Math.floor(n / 16), (t == "x" ? r : r & 3 | 8).toString(16);
  });
  return e;
}
const rt = {}, se = {}, st = {}, Ae = /* @__PURE__ */ new Set(), pe = /* @__PURE__ */ new WeakMap(), F = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), ie = {}, Pe = /* @__PURE__ */ new WeakMap(), z = /* @__PURE__ */ new WeakMap(), it = {
  currentComponent: null
};
function v() {
  return it.currentComponent;
}
function Dt(n) {
  it.currentComponent = n;
}
function Bt(n, e = 1) {
  return z.has(n) || z.set(
    n,
    Re((t = void 0) => {
      n.render(t);
    }, e)
  ), z.get(n);
}
function Ut(n) {
  z.has(n) && z.delete(n);
}
function ot(n, e = void 0) {
  window.requestIdleCallback(() => {
    var t;
    (t = Bt(n)) == null || t(e);
  });
}
const Gt = "v:";
function at(n, e = "") {
  const t = `${Gt}${we()}`;
  return F.set(t, n), e && (U.has(e) || U.set(e, /* @__PURE__ */ new Set()), U.get(e).add(t)), t;
}
function Rr(n) {
  U.has(n) && (U.get(n).forEach((e) => {
    F.delete(e);
  }), U.delete(n));
}
function Vt(n, e = !0) {
  if (A(n) === !1)
    return n;
  let t = n;
  return F.has(n) && (t = F.get(n), e && F.delete(n)), t;
}
function Kt(n) {
  return F.has(n) ? F.get(n) : n;
}
function wr(n) {
  return F.has(n);
}
function Ar(n = {}) {
  Object.keys(n).forEach((e) => {
    rt[e] = n[e];
  });
}
function Pr(n, e) {
  st[n] = e;
}
function Wt(n) {
  return st[n];
}
function Ir(n) {
  return rt[Wt(n) || n];
}
function ut(n, e) {
  const t = e.el || e;
  Ae.add(n), pe.has(t) && zt(pe.get(t)), pe.set(t, n);
}
function zt(n) {
  n == null || n.destroy(), Ae.delete(n);
}
function jt() {
  return [...Ae];
}
let xe;
function Xt() {
  return xe;
}
function Lr(n = !1) {
  typeof xe > "u" && (xe = n);
}
function qt(n = !1) {
  jt().forEach((e) => {
    n ? e.forceRender() : e.render();
  });
}
function Hr(n) {
  Object.keys(n).forEach((e) => {
    se[e] = n[e];
  });
}
function _r(n) {
  return se[n];
}
function Yt(n, e = {}) {
  return [
    ...Object.keys(se).map((t) => {
      const r = se[t];
      return new r(n);
    }),
    ...Object.keys(e).map((t) => {
      const r = e[t];
      return new r(n);
    })
  ];
}
function Fr(n, e = {}) {
  ie[n] ? Jt(n, e) : (ie[n] = { new: e, old: e }, Object.keys(e).forEach((t) => {
    Pe.set(e[t], n);
  }));
}
function Jt(n, e) {
  ie[n].new = e, Object.keys(e).forEach((t) => {
    Pe.set(e[t], n);
  });
}
function Zt(n) {
  const e = Pe.get(n);
  if (!e)
    return n;
  const t = ie[e];
  if (!t)
    return n;
  const r = t.new[n.name];
  if (r)
    return r;
  const s = Object.values(t.new).find((a) => a === n);
  if (s)
    return s;
  let i = "";
  return Object.entries(t.old).find(([a, u]) => u === n ? (i = a, !0) : !1) ? t.new[i] : n;
}
class h {
  constructor(e, t, r) {
    if (typeof e != "string")
      e instanceof h ? this.el = e.el : this.el = e;
    else {
      var s = document.createElement(e);
      t && (s.className = t), r = r || {}, Object.assign(s, r), this.el = s;
    }
  }
  static create(e, t, r) {
    return new h(e, t, r);
  }
  static createText(e) {
    return new h(document.createTextNode(e));
  }
  static createByHTML(e) {
    var t = h.create("div");
    return t.html(e).firstChild;
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
  static parse(e) {
    var t = window.DOMParser();
    return t.parseFromString(e, "text/htmll");
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
  setAttr(e) {
    return Object.keys(e).forEach((t) => {
      this.attr(t, e[t]);
    }), this;
  }
  setAttrNS(e, t = "http://www.w3.org/2000/svg") {
    return Object.keys(e).forEach((r) => {
      this.attr(r, e[r], t);
    }), this;
  }
  setProp(e) {
    return Object.keys(e).forEach((t) => {
      this.el[t] != e[t] && (this.el[t] = e[t]);
    }), this;
  }
  data(e, t) {
    if (arguments.length === 1) {
      const r = this.attr("data-" + e);
      return Vt(r, !1);
    } else if (arguments.length === 2)
      return this.attr("data-" + e, t);
    return this;
  }
  attr(...e) {
    return e.length == 1 ? g(this.el.getAttribute) && this.el.getAttribute(e[0]) : (this.el.getAttribute(e[0]) != e[1] && this.el.setAttribute(e[0], e[1]), this);
  }
  attrNS(e, t, r = "http://www.w3.org/2000/svg") {
    return arguments.length == 1 ? this.el.getAttributeNS(r, e) : (this.el.getAttributeNS(r, e) != t && this.el.setAttributeNS(r, e, t), this);
  }
  attrKeyValue(e) {
    return {
      [this.el.getAttribute(e)]: this.val()
    };
  }
  get attributes() {
    try {
      return [...this.el.attributes];
    } catch {
      const r = this.el.attributes.length, s = [];
      for (var e = 0; e < r; e++)
        s.push(this.el.attributes[`${e}`]);
      return s;
    }
  }
  attrs(...e) {
    return e.map((t) => this.el.getAttribute(t));
  }
  styles(...e) {
    return e.map((t) => this.el.style[t]);
  }
  removeAttr(e) {
    return this.el.removeAttribute(e), this;
  }
  removeStyle(e) {
    return this.el.style.removeProperty(e), this;
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
  is(e) {
    return e instanceof h ? this.el === e.el : this.el === e;
  }
  isTag(e) {
    return this.el.tagName.toLowerCase() === e.toLowerCase();
  }
  closest(e) {
    for (var t = this, r = !1; !(r = t.hasClass(e)); )
      if (t.el.parentNode)
        t = h.create(t.el.parentNode);
      else
        return null;
    return r ? t : null;
  }
  path() {
    if (!this.el)
      return [];
    let e = [this], t = this.parent();
    if (!t.el)
      return e;
    for (; t && (e.unshift(t), t = t.parent(), !!t.el); )
      ;
    return e;
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
  removeClass(...e) {
    return this.el.classList.remove(...e), this;
  }
  updateClass(e) {
    return this.el.className = e, this;
  }
  replaceClass(e, t) {
    return this.el.classList.replace(e, t), this;
  }
  hasClass(e) {
    return this.el.classList ? this.el.classList.contains(e) : !1;
  }
  addClass(...e) {
    return this.el.classList.add(...e), this;
  }
  onlyOneClass(e) {
    var t = this.parent();
    t.children().forEach((r) => {
      r.removeClass(e);
    }), this.addClass(e);
  }
  toggleClass(e, t) {
    return this.el.classList.toggle(e, t), this;
  }
  outerHTML() {
    return this.isTextNode ? this.text() : this.el.outerHTML;
  }
  html(e) {
    try {
      return typeof e > "u" ? this.el.innerHTML : (typeof e == "string" ? Object.assign(this.el, { innerHTML: e }) : this.empty().append(e), this);
    } catch (t) {
      return console.log(t, e), this;
    }
  }
  getById(e) {
    return this.el.getElementById(e);
  }
  find(e, t = this.el) {
    if (!this.isTextNode)
      return t.querySelector(e);
  }
  $(e) {
    var t = this.find(e, this.isTemplate ? this.el.content : this.el);
    return t ? h.create(t) : null;
  }
  findAll(e, t = this.el) {
    return this.isTextNode ? [] : Array.from(t.querySelectorAll(e));
  }
  $$(e) {
    var t = this.findAll(
      e,
      this.isTemplate ? this.el.content : this.el
    );
    return t.map((r) => h.create(r));
  }
  empty() {
    for (; this.el.firstChild; )
      this.el.removeChild(this.el.firstChild);
    return this;
  }
  append(e) {
    return e ? (T(e) ? this.el.append(...e.map((t) => t.el || t)) : typeof e == "string" ? this.el.appendChild(document.createTextNode(e)) : this.el.appendChild(e.el || e), this) : this;
  }
  prepend(e) {
    return typeof e == "string" ? this.el.prepend(document.createTextNode(e)) : this.el.prepend(e.el || e), this;
  }
  prependHTML(e) {
    var t = h.create("div").html(e);
    return this.prepend(t.createChildrenFragment()), t;
  }
  appendHTML(e) {
    var t = h.create("div").html(e);
    return this.append(t.createChildrenFragment()), t;
  }
  createChildrenFragment() {
    const e = this.childNodes;
    var t = document.createDocumentFragment();
    return e.forEach((r) => t.appendChild(r.el)), t;
  }
  static createFragment(e = []) {
    var t = document.createDocumentFragment();
    return e.forEach((r) => t.appendChild(r)), t;
  }
  appendTo(e) {
    var t = e.el ? e.el : e;
    return t.appendChild(this.el), this;
  }
  remove() {
    return this.el.parentNode && this.el.parentNode.removeChild(this.el), this;
  }
  removeChild(e) {
    return this.el.removeChild(e.el || e), this;
  }
  text(e) {
    if (typeof e > "u")
      return this.el.textContent;
    var t = e;
    return e instanceof h && (t = e.text()), this.el.textContent !== t && (this.el.textContent = t), this;
  }
  css(e, t) {
    if (typeof e < "u" && typeof t < "u")
      e.indexOf("--") === 0 && typeof t < "u" ? this.el.style.setProperty(e, t) : this.el.style[e] = t;
    else if (typeof e < "u") {
      if (typeof e == "string")
        return window.getComputedStyle(this.el)[e];
      Object.entries(e).forEach(([r, s]) => {
        r.indexOf("--") === 0 && typeof s < "u" ? this.el.style.setProperty(r, s) : this.el.style[r] = s;
      });
    }
    return this;
  }
  getComputedStyle(...e) {
    var t = window.getComputedStyle(this.el), r = {};
    return e.forEach((s) => {
      r[s] = t[s];
    }), r;
  }
  getStyleList(...e) {
    for (var t = {}, r = this.el.style.length, s = 0; s < r; s++) {
      var i = this.el.style[s];
      t[i] = this.el.style[i];
    }
    return e.forEach((o) => {
      t[o] = this.css(o);
    }), t;
  }
  cssText(e) {
    return typeof e > "u" ? this.el.style.cssText : (e != this.el.tempCssText && (this.el.style.cssText = e, this.el.tempCssText = e), this);
  }
  cssArray(e) {
    return e[0] && (this.el.style[e[0]] = e[1]), e[2] && (this.el.style[e[2]] = e[3]), e[4] && (this.el.style[e[4]] = e[5]), e[6] && (this.el.style[e[6]] = e[7]), e[8] && (this.el.style[e[8]] = e[9]), this;
  }
  cssFloat(e) {
    return parseFloat(this.css(e));
  }
  cssInt(e) {
    return parseInt(this.css(e));
  }
  px(e, t) {
    return this.css(e, `${t}px`);
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
      const t = this.parent().rect(), r = this.rect();
      return {
        x: r.x - t.x,
        y: r.y - t.y,
        width: r.width,
        height: r.height
      };
    }
    const e = this.el;
    return {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: e.offsetWidth,
      height: e.offsetHeight
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
    const e = this.parent().rect(), t = this.rect();
    return {
      x: t.x - e.x,
      y: t.y - e.y,
      width: t.width,
      height: t.height
    };
  }
  offset() {
    var e = this.rect(), t = h.getScrollTop(), r = h.getScrollLeft();
    return {
      top: e.top + t,
      left: e.left + r
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
  val(e) {
    if (typeof e > "u")
      return this.el.value;
    if (typeof e < "u") {
      var t = e;
      e instanceof h && (t = e.val()), this.el.value = t;
    }
    return this;
  }
  matches(e) {
    return this.el && this.el.matches ? this.el.matches(e) ? this : this.parent().matches(e) : null;
  }
  get value() {
    return this.el.value;
  }
  set value(e) {
    this.el.value = e;
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
        var e = this.attr("type");
        return e == "checkbox" || e == "radio" ? this.checked() : this.el.value;
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
  show(e = "block") {
    return this.el.style.display = e != "none" ? e : "block", this;
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
  toggle(e) {
    var t = this.isHide();
    return arguments.length == 1 ? e ? this.show() : this.hide() : t ? this.show() : this.hide();
  }
  get totalLength() {
    return this.el.getTotalLength();
  }
  scrollIntoView() {
    this.el.scrollIntoView();
  }
  addScrollLeft(e) {
    return this.el.scrollLeft += e, this;
  }
  addScrollTop(e) {
    return this.el.scrollTop += e, this;
  }
  setScrollTop(e) {
    return this.el.scrollTop = e, this;
  }
  setScrollLeft(e) {
    return this.el.scrollLeft = e, this;
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
  on(e, t, r, s) {
    return this.el.addEventListener(e, t, r, s), this;
  }
  off(e, t) {
    return this.el.removeEventListener(e, t), this;
  }
  getElement() {
    return this.el;
  }
  createChild(e, t = "", r = {}, s = {}) {
    let i = h.create(e, t, r);
    return i.css(s), this.append(i), i;
  }
  get firstChild() {
    return h.create(this.el.firstElementChild);
  }
  get first() {
    return h.create(this.el.firstChild);
  }
  children() {
    var e = this.el.firstElementChild;
    if (!e)
      return [];
    var t = [];
    do
      t.push(h.create(e)), e = e.nextElementSibling;
    while (e);
    return t;
  }
  hasChild(e) {
    const t = e.el || e;
    return this.el === t ? !1 : this.el.contains(t);
  }
  get childNodes() {
    const e = [];
    if (this.el.hasChildNodes()) {
      const t = this.el.childNodes;
      for (let r = 0; r < t.length; r++)
        e.push(h.create(t[r]));
    }
    return e;
  }
  childLength() {
    return this.el.childNodes.length;
  }
  replace(e) {
    return this.el.parentNode && this.el.parentNode.replaceChild(e.el || e, this.el), this;
  }
  replaceChild(e, t) {
    return this.el.replaceChild(
      t.el || t,
      e.el || e
    ), this;
  }
  checked(e = !1) {
    return arguments.length == 0 ? !!this.el.checked : (this.el.checked = !!e, this);
  }
  click() {
    return this.el.click(), this;
  }
  focus() {
    return this.el.focus(), this;
  }
  select() {
    if (this.attr("contenteditable") === "true") {
      var e = document.createRange();
      e.selectNodeContents(this.el);
      var t = window.getSelection();
      t.removeAllRanges(), t.addRange(e);
    } else
      this.el.select();
    return this;
  }
  blur() {
    return this.el.blur(), this;
  }
  toDataURL(e = "image/png", t = 1) {
    return this.el.toDataURL(e, t);
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
class Qt {
  constructor() {
    this.id = we(), this.cachedCallback = {}, this.callbacks = {}, this.settings = /* @__PURE__ */ new Map();
  }
  get(e, t = void 0) {
    return this.settings.has(e) === !1 ? t : this.settings.get(e);
  }
  set(e, t, r = !0) {
    this.settings.get(e) !== t && (this.settings.set(e, t), r && this.sendMessage(this, e, t));
  }
  init(e, t) {
    this.set(e, t, !1);
  }
  toggle(e) {
    this.set(e, !this.get(e));
  }
  toggleWith(e, t, r) {
    this.get(e) === t ? this.set(e, r) : this.set(e, t);
  }
  true(e) {
    return this.get(e) === !0;
  }
  false(e) {
    return this.get(e) === !1;
  }
  is(e, t) {
    return this.get(e) === t;
  }
  remove(e) {
    this.settings.delete(e);
  }
  hasCallback(e, t) {
    var r = this.getCachedCallbacks(e);
    return r.some((s) => s.originalCallback === t);
  }
  getCallbacks(e) {
    return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e];
  }
  setCallbacks(e, t = []) {
    this.callbacks[e] = t;
  }
  on(e, t, r, s = 0, i = 0, o = !1, a = !1, u = [], d = !1) {
    var p = t;
    return s > 0 ? p = Re(t, s) : i > 0 && (p = et(t, i)), u.length && (p = At(p, r, u)), d && (p = Pt(
      p,
      r,
      t.name
    )), this.getCallbacks(e).push({
      event: e,
      callback: p,
      context: r,
      originalCallback: t,
      enableAllTrigger: o,
      enableSelfTrigger: a
    }), () => {
      this.off(e, t);
    };
  }
  off(e, t) {
    arguments.length == 1 ? this.setCallbacks(e) : arguments.length == 2 && this.setCallbacks(
      e,
      this.getCallbacks(e).filter((r) => r.originalCallback !== t)
    );
  }
  offAll(e) {
    Object.keys(this.callbacks).forEach((t) => {
      this.setCallbacks(
        t,
        this.getCallbacks(t).filter((r) => r.context !== e)
      );
    });
  }
  getCachedCallbacks(e) {
    return this.getCallbacks(e);
  }
  sendMessage(e, t, ...r) {
    this.sendMessageList(e, [[t, ...r]]);
  }
  runMessage(e, t) {
    const r = e.callback.apply(
      e.context,
      t
    );
    if (W(r)) {
      if (r === !1)
        return;
      if (g(r)) {
        r();
        return;
      }
    }
  }
  sendMessageList(e, t = []) {
    window.Promise.resolve().then(() => {
      t.forEach(([r, ...s]) => {
        var i = this.getCachedCallbacks(r);
        if (i && i.length) {
          const o = i.filter((u) => !u.enableSelfTrigger).filter(
            (u) => u.enableAllTrigger || u.originalCallback.source !== e
          );
          let a = o.length;
          for (; a--; ) {
            const u = o[a];
            this.runMessage(u, s);
          }
        }
      });
    });
  }
  nextSendMessage(e, t, ...r) {
    window.Promise.resolve().then(() => {
      t(...r);
    });
  }
  triggerMessage(e, t, ...r) {
    window.Promise.resolve().then(() => {
      var s = this.getCachedCallbacks(t);
      s && s.filter(
        (o) => o.context.source === e
      ).forEach((o) => {
        o.callback.apply(o.context, r);
      });
    });
  }
  emit(e, ...t) {
    g(e) ? e(...t) : T(e) ? this.sendMessageList(this.source, e) : this.sendMessage(this.source, e, ...t);
  }
  nextTick(e) {
    this.nextSendMessage(this.source, e);
  }
  trigger(e, ...t) {
    g(e) ? e(...t) : this.triggerMessage(this.source, e, ...t);
  }
}
function ct(n, e = {}) {
  return A(n) && (n = w(n)), T(n) && n.length === 1 ? ct(n[0], e) : n ? h.create(n.makeElement(!0, e).el) : null;
}
async function lt(n, e = {}) {
  return A(n) ? n : T(n) && n.length === 1 ? await lt(n[0], e) : n ? await n.makeHtml(!0, e) : "";
}
const en = {
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
function tn(n) {
  return en[n.toLowerCase()];
}
const Ke = /^@magic:([a-zA-Z][a-zA-Z0-9]*)[\W]{1}(.*)*$/g, We = "@magic:", B = "|", nn = /(([\$a-z_\-]+)\([^\(\)]*\)|([a-z_\-]+))/gi, ze = "(", rn = ")", ee = {
  KEYWORD: "keyword",
  FUNCTION: "function",
  VALUE: "value"
};
class $ {
  constructor(e) {
    this.context = e.context, this.originalMethod = e.originalMethod, this.method = e.method, this.args = e.args, this.pipes = e.pipes, this.keys = e.keys, this.__cache = /* @__PURE__ */ new Map();
  }
  setCache(e, t) {
    this.__cache.set(e, t);
  }
  hasCache(e) {
    return this.__cache.has(e);
  }
  getCache(e) {
    return this.__cache.get(e);
  }
  hasKeyword(e) {
    if (this.hasCache(e))
      return this.getCache(e);
    let t = !1;
    return this.pipes.forEach((r) => {
      switch (r.type) {
        case ee.KEYWORD:
          r.value === e && (t = !0);
          break;
      }
    }), this.setCache(e, t), t;
  }
  hasFunction(e) {
    if (this.hasCache(e))
      return this.getCache(e);
    let t = !!this.getFunction(e);
    return this.setCache(e, t), t;
  }
  getFunction(e) {
    return this.functions.find((t) => t.func === e);
  }
  getFunctionList(e) {
    return this.functions.filter((t) => t.func === e);
  }
  get originalCallback() {
    return this.context[this.originalMethod];
  }
  get keywords() {
    return this.keys[ee.KEYWORD].map((e) => e.value);
  }
  get functions() {
    return this.keys[ee.FUNCTION];
  }
  get values() {
    return this.keys[ee.VALUE].map((e) => e.value);
  }
  execute(...e) {
    return this.originalCallback.call(this.context, ...e);
  }
  executeWithContext(e, ...t) {
    return this.originalCallback.call(e, ...t);
  }
  static make(e, ...t) {
    return `${We}${e} ${t.join(B)}`;
  }
  static check(e) {
    return e.match(Ke) !== null;
  }
  static parse(e, t = {}) {
    const r = e.match(Ke);
    if (!r)
      return;
    const s = r[0].split(We)[1].split(B).map((m) => m.trim());
    let [i, ...o] = s;
    const [a, ...u] = i.split(" "), d = o.map((m) => this.parsePipe(m)).filter((m) => m.value), p = {
      function: [],
      keyword: [],
      value: []
    };
    return d.forEach((m) => {
      m.type === "function" ? p.function.push(m) : m.type === "keyword" ? p.keyword.push(m) : p.value.push(m);
    }), new $({
      context: t,
      originalMethod: e,
      method: a,
      args: u,
      pipes: d,
      keys: p
    });
  }
  static parsePipe(e) {
    const t = e.match(nn);
    if (!t)
      return {
        type: "value",
        value: e
      };
    const [r] = t;
    if (r.includes(ze)) {
      const [s, i] = r.split(ze), [o] = i.split(rn);
      return {
        type: "function",
        value: r,
        func: s,
        args: o.split(",").map((a) => a.trim()).filter(Boolean)
      };
    }
    return {
      type: "keyword",
      value: t[0]
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
}, an = 3, un = 8, ht = "style", Ie = "on";
function je(n) {
  return sn.has(n);
}
const N = {
  setBooleanProp(n, e, t) {
    W(t) ? (n.setAttribute(e, e), n[e] = t) : (n.removeAttribute(e), n[e] = void 0);
  },
  setProp(n, e, t) {
    je(e) ? this.setBooleanProp(n, e, t) : e.startsWith(Ie) ? n[e.toLowerCase()] = t : e === ht ? n.style.cssText = t : (n.setAttribute(e, t), n[e] = t);
  },
  removeProp(n, e) {
    n.removeAttribute(e), je(e) ? n[e] = !1 : e && (n[e] = void 0);
  },
  updateProp(n, e, t, r) {
    ce(t) ? this.removeProp(n, e) : (!r || t != r) && this.setProp(n, e, t);
  },
  replaceWith(n, e, t) {
    const r = t.context.$el.el === n, s = e.makeElement(!0, t).el;
    r && (t.context.$el.el = s), n.replaceWith(s), e.runMounted();
  },
  replaceText(n, e) {
    n.textContent != e.textContent && (n.textContent = e.textContent);
  },
  replaceComment(n, e) {
    N.replaceText(n, e);
  },
  addNewVNode(n, e, t, r) {
    n.insertBefore(t.makeElement(!0, r).el, e), n.removeChild(e), t.runMounted();
  },
  appendChild(n, e, t) {
    const r = e.makeElement(!0, t);
    r != null && r.el && (n.appendChild(r.el), e.runMounted());
  },
  removeChild(n, e) {
    n.removeChild(e);
  }
}, C = {
  isTextNode(n) {
    return n.nodeType === an;
  },
  isCommentNode(n) {
    return n.nodeType === un;
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
  changed(n, e) {
    return (n.type === k.TEXT || n.type === k.COMMENT) && n.textContent !== e.textContent || n.nodeName !== e.nodeName.toUpperCase();
  },
  hasPassed(n) {
    return n.pass;
  },
  hasRefClass(n) {
    return n.Component;
  }
}, cn = (n, e = {}, t = {}) => {
  const r = Object.keys(e), s = Object.keys(t);
  r.length === 0 && s.length === 0 || (r.forEach((i) => {
    on[i] || N.updateProp(n, i, e[i], t[i]);
  }), s.forEach((i) => {
    ce(e[i]) && N.removeProp(n, i);
  }));
};
function ln(n) {
  const e = n.props || {}, t = {}, r = Object.keys(e);
  if (!r.length)
    return t;
  for (let s = 0, i = r.length; s < i; s++) {
    const o = r[s];
    o.startsWith(Ie) ? t[o] = e[o] : o === ht ? t[o] = n.stringifyStyle : t[o] = e[o];
  }
  return t;
}
function hn(n, e, t) {
  var r = {};
  const s = e.length;
  for (let i = 0; i < s; i++) {
    const o = e[i], a = o.name, u = o.value;
    r[a] = u;
  }
  return Object.keys(t).forEach((i) => {
    const o = i.startsWith(Ie) ? i.toLowerCase() : i;
    r[o] || (r[i] = n[o]);
  }), r;
}
function fn(n, e, t, r = {}) {
  return C.isTextNode(e) && !C.isVNodeText(t) || C.isCommentNode(e) && !C.isVNodeComment(t) || !C.isTextNode(e) && C.isVNodeText(t) || !C.isCommentNode(e) && C.isVNodeComment(t) ? N.addNewVNode(n, e, t, r) : C.isTextNode(e) && C.isVNodeText(t) ? N.replaceText(e, t) : C.isCommentNode(e) && C.isVNodeComment(t) ? N.replaceComment(e, t) : C.hasRefClass(t) ? g(r.checkRefClass) && r.checkRefClass(e, t) && (N.replaceWith(e, t, r), g(r.registerChildComponent) && r.registerChildComponent(
    t.el,
    t.instance,
    t.instance.id,
    e
  )) : N.replaceWith(e, t, r), !0;
}
function dn(n, e, t = {}) {
  const r = ln(e);
  cn(
    n,
    r,
    hn(n, n.attributes, r)
  ), ft(n, e, t);
}
function ft(n, e, t = {}) {
  if (!(!n.hasChildNodes() && !e.children.length)) {
    var r = pn(n), s = gn(e), i = Math.max(r.length, s.length);
    if (i !== 0)
      if (r.length === 0 && s.length > 0) {
        var o = document.createDocumentFragment();
        s.forEach((u) => {
          const d = u.makeElement(!0, t).el;
          d && o.appendChild(d);
        }), n.appendChild(o), s.forEach((u) => {
          u.runMounted();
        });
      } else if (r.length > 0 && s.length === 0)
        n.textContent = "";
      else
        for (var a = 0; a < i; a++)
          dt(n, r[a], s[a], t);
  }
}
function dt(n, e, t, r = {}) {
  var i;
  if (n = n || r.context.parentElement, !e && t) {
    N.appendChild(n, t, r);
    return;
  }
  if (!t && e) {
    N.removeChild(n, e, r);
    return;
  }
  if (!((i = t.props) != null && i.pass)) {
    if (C.hasPassed(t))
      return;
    if (C.changed(t, e) || C.hasRefClass(t)) {
      fn(n, e, t, r);
      return;
    }
  }
  const s = t.type;
  s !== k.TEXT && s !== k.COMMENT && dn(e, t, r);
}
const pn = (n) => {
  var e = n.firstChild;
  if (!e)
    return [];
  var t = [];
  do
    t[t.length] = e, e = e.nextSibling;
  while (e);
  return t;
}, gn = (n) => n.children.length ? n.children : [], mn = {
  checkPassed: void 0,
  keyField: "key",
  removedElements: []
};
function Cn(n, e, t = {}) {
  if (t = Object.assign({}, mn, t), n.nodeType !== 11) {
    dt(n.parentElement, n, e, t);
    return;
  }
}
const En = (n, e = B) => ` ${e} ${n}`, bn = "ME@", Tn = (...n) => n.join(B), pt = (...n) => bn + Tn(...n), $r = pt, Dr = pt, ke = ":", vn = " ", c = (...n) => {
  var e = n.join(ke);
  return (...t) => {
    const [r, ...s] = t;
    return $.make("domevent", [e, r].join(" "), ...s);
  };
}, le = (...n) => $.make("subscribe", ...n), yn = (...n) => $.make("callback", ...n), xn = (...n) => $.make("observer", ...n), f = (n, e = B) => En(n, e), gt = (n, e = B) => f(`after(${n})`, e), Br = (n, e = B) => f(`before(${n})`, e), Ur = f, Gr = f, Vr = f("ArrowUp"), Kr = f("ArrowDown"), Wr = f("ArrowLeft"), zr = f("ArrowRight"), jr = f("Enter"), Xr = f("Space"), qr = f("Escape"), Yr = f("Backspace"), Jr = f("Delete"), Zr = f("Equal"), Qr = f("Minus"), es = f("BracketRight"), ts = f("BracketLeft"), ns = f("isAltKey"), rs = f("isShiftKey"), ss = f("isMetaKey"), is = f("isCtrlKey"), os = f("hasMouse"), as = f("hasTouch"), us = f("hasPen"), cs = f("self"), kn = f("isMouseLeftButton"), ls = f("isMouseRightButton"), hs = f("fit"), fs = f("passive"), On = (n = 100) => f(`debounce(${n})`), ds = (n = 300) => f(`delay(${n})`), ps = On(1e3), gs = (n = 100) => f(`throttle(${n})`), Sn = f("allTrigger()"), Nn = f("selfTrigger()"), ms = f("frame()"), Cs = (n) => f(`params(${at(n)})`), Es = f("capture()"), bs = gt("preventDefault"), Ts = gt("stopPropagation"), vs = le, ys = (...n) => le(...n, Sn), xs = (...n) => le(...n, Nn), ks = (n, ...e) => le(`config:${n}`, ...e), Mn = yn, Os = Mn("requestAnimationFrame"), Ss = xn, y = c, Ns = c("click"), Ms = c("dblclick"), Rs = c("mousedown"), ws = c("mouseup"), As = c("mousemove"), Ps = c("mouseover"), Is = c("mouseout"), Ls = c("mouseenter"), Hs = c("mouseleave"), _s = c("touchstart"), Fs = c("touchmove"), $s = c("touchend"), Ds = c("keydown"), Bs = c("keyup"), Us = c("keypress"), Gs = c("drag"), Vs = c("dragstart"), Ks = c("drop"), Ws = c("dragover"), zs = c("dragenter"), js = c("dragleave"), Xs = c("dragexit"), qs = c("dragout"), Ys = c("dragend"), Js = c("contextmenu"), Zs = c("change"), Qs = c("input"), ei = c("focus"), ti = c("focusin"), ni = c("focusout"), ri = c("blur"), si = c("paste"), ii = c("resize"), oi = c("scroll"), ai = c("submit"), ui = (...n) => y("pointerdown")(...n) + kn, ci = y("pointerover"), li = y("pointerenter"), hi = y("pointerout"), fi = y("pointerleave"), di = y("pointermove"), pi = y("pointerup"), gi = y("change", "input"), mi = y("wheel", "mousewheel", "DOMMouseScroll"), Ci = c("animationstart"), Ei = c("animationend"), bi = c("animationiteration"), Ti = c("transitionstart"), vi = c("transitionend"), yi = c("transitionrun"), xi = c("transitioncancel"), ki = y("doubletab"), Oi = y("popstate"), Si = y("orientationchange"), Ni = y("hashchange"), ge = {
  addDomEvent(n, e, t, r = !1) {
    n && n.addEventListener(e, t, r);
  },
  removeDomEvent(n, e, t) {
    n && n.removeEventListener(e, t);
  },
  pos(n) {
    return n.touches && n.touches[0] ? n.touches[0] : n;
  },
  posXY(n) {
    var e = this.pos(n);
    return {
      x: e.pageX,
      y: e.pageY
    };
  }
};
class Le {
  constructor(e, t = {}) {
    this.context = e, this.options = t;
  }
  initialize() {
  }
  load() {
  }
  refresh() {
  }
  render() {
  }
  getRef(e) {
    return this.context.getRef(e);
  }
  run() {
  }
  destroy() {
  }
}
const Rn = {
  touchstart: !0,
  touchmove: !0,
  mousedown: !0,
  mouseup: !0,
  mousemove: !0
}, wn = {
  doubletab: "touchend"
}, An = {
  doubletab: !0
}, Pn = {
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
class In extends Le {
  initialize() {
    var e, t;
    this._domEvents && this.context.notEventRedefine || ((!this._domEvents || this._domEvents.length === 0 || this._bindings.length === 0) && (this._domEvents = this.context.filterMethodes("domevent")), !((e = this._bindings) != null && e.length) && ((t = this._domEvents) == null ? void 0 : t.length) && this._domEvents.forEach((r) => this.parseDomEvent(r)));
  }
  destroy() {
    this.context.notEventRedefine || this.removeEventAll();
  }
  getCallback(e) {
    return this.context[e] || Pn[e];
  }
  removeEventAll() {
    this.getBindings().forEach((e) => {
      this.removeDomEvent(e);
    }), this.initBindings();
  }
  removeDomEvent({ eventName: e, dom: t, callback: r }) {
    ge.removeDomEvent(t, e, r);
  }
  getBindings() {
    return this._bindings || this.initBindings(), this._bindings;
  }
  addBinding(e) {
    this.getBindings().push(e);
  }
  initBindings() {
    this._bindings = [];
  }
  matchPath(e, t) {
    return e ? e.matches(t) ? e : this.matchPath(e.parentElement, t) : null;
  }
  hasDelegate(e, t) {
    return this.matchPath(e.target || e.srcElement, t.delegate);
  }
  makeCallback(e, t, r) {
    return e.delegate ? this.makeDelegateCallback(e, t, r) : this.makeDefaultCallback(e, t, r);
  }
  makeDefaultCallback(e, t, r) {
    return (s) => {
      var i = this.runEventCallback(
        s,
        e,
        t,
        r
      );
      if (W(i))
        return i;
    };
  }
  makeDelegateCallback(e, t, r) {
    return (s) => {
      const i = this.hasDelegate(s, e);
      if (i) {
        s.$dt = h.create(i);
        var o = this.runEventCallback(
          s,
          e,
          t,
          r
        );
        if (W(o))
          return o;
      }
    };
  }
  runEventCallback(e, t, r, s) {
    const i = this.context;
    if (e.xy = ge.posXY(e), t.beforeMethods.length && t.beforeMethods.every((a) => this.getCallback(a.target).call(i, e, a.param)), this.checkEventType(e, t)) {
      var o = s(e, e.$dt, e.xy);
      return o !== !1 && t.afterMethods.length && t.afterMethods.forEach((a) => this.getCallback(a.target).call(i, e, a.param)), o;
    }
  }
  checkEventType(e, t) {
    const r = this.context;
    var s = !0;
    t.codes.length && (s = (e.code ? t.codes.indexOf(e.code.toLowerCase()) > -1 : !1) || (e.key ? t.codes.indexOf(e.key.toLowerCase()) > -1 : !1));
    var i = !0;
    return t.checkMethodList.length && (i = t.checkMethodList.every((o) => {
      var a = this.getCallback(o);
      return g(a) && a ? a.call(r, e) : W(a) ? !!a : !0;
    })), s && i;
  }
  getDefaultDomElement(e) {
    const t = this.context;
    let r;
    return e ? r = t.refs[e] || t[e] || window[e] : r = t.el || t.$el || t.$root, r instanceof h ? r.getElement() : r;
  }
  getRealEventName(e) {
    return wn[e] || e;
  }
  getCustomEventName(e) {
    return An[e] ? e : "";
  }
  getDefaultEventObject(e, t, r, s, i) {
    var J, Z;
    const o = {
      eventName: this.getRealEventName(e),
      customEventName: this.getCustomEventName(e),
      callback: i
    }, [, , ...a] = s.args;
    o.dom = this.getDefaultDomElement(t), o.delegate = a.join(vn), o.beforeMethods = [], o.afterMethods = [], o.codes = [], o.checkMethodList = [];
    const u = s.getFunction("debounce"), d = s.getFunction("throttle");
    if (u) {
      var p = +(((J = u.args) == null ? void 0 : J[0]) || 0);
      o.callback = Re(i, p);
    } else if (d) {
      var m = +(((Z = d.args) == null ? void 0 : Z[0]) || 0);
      o.callback = et(i, m);
    }
    const q = s.getFunctionList("after"), Y = s.getFunctionList("before");
    return q.length && q.forEach((L) => {
      var M = L.args[0].split(" "), [H, P] = M;
      o.afterMethods.push({
        target: H,
        param: P
      });
    }), Y.length && Y.forEach((L) => {
      var M = L.args[0].split(" "), [H, P] = M;
      o.beforeMethods.push({
        target: H,
        param: P
      });
    }), s.keywords.forEach((L) => {
      const M = L;
      this.getCallback(M) ? o.checkMethodList.push(M) : o.codes.push(M.toLowerCase());
    }), o;
  }
  addDomEvent(e, t, r) {
    e.callback = this.makeCallback(
      e,
      t,
      r
    ), this.addBinding(e);
    var s = !1;
    t.hasKeyword("capture") && (s = !0), Rn[e.eventName] && (s = {
      passive: !0,
      capture: s
    }), e.dom && ge.addDomEvent(
      e.dom,
      e.eventName,
      e.callback,
      s
    );
  }
  makeCustomEventCallback(e, t, r) {
    var o;
    if (e.customEventName === "doubletab") {
      var s = 300, i = t.getFunction("delay");
      return i && (s = +(((o = i.args) == null ? void 0 : o[0]) || 0)), (...a) => {
        this.doubleTab ? (window.performance.now() - this.doubleTab.time < s && r(...a), this.doubleTab = null) : this.doubleTab = {
          time: window.performance.now()
        };
      };
    }
    return r;
  }
  bindingDomEvent([e, t, ...r], s, i) {
    let o = this.getDefaultEventObject(
      e,
      t,
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
  getEventNames(e) {
    let t = [];
    return e.split(ke).forEach((r) => {
      var s = r.split(ke);
      t.push.apply(t, s);
    }), t;
  }
  parseDomEvent(e) {
    const t = this.context;
    var r = e.args;
    if (r) {
      var s = this.getEventNames(r[0]), i = t[e.originalMethod].bind(t);
      for (let o = 0, a = s.length; o < a; o++)
        r[0] = s[o], this.bindingDomEvent(r, e, i);
    }
  }
}
class Ln extends Le {
  initialize() {
    var e, t;
    this._observers && this.context.notEventRedefine || ((!this._observers || this._observers.length === 0) && (this._observers = this.context.filterMethodes("observer")), !((e = this._bindings) != null && e.length) && ((t = this._observers) == null ? void 0 : t.length) && this._observers.forEach((r) => this.parseObserver(r)));
  }
  destroy() {
    this.context.notEventRedefine || this.removeEventAll();
  }
  removeEventAll() {
    this.getBindings().forEach((e) => {
      this.disconnectObserver(e);
    }), this.initBindings();
  }
  disconnectObserver(e) {
    e == null || e.disconnect();
  }
  getBindings() {
    return this._bindings || this.initBindings(), this._bindings;
  }
  addBinding(e) {
    this.getBindings().push(e);
  }
  initBindings() {
    this._bindings = [];
  }
  addObserver(e) {
    this.addBinding(e);
  }
  getDefaultDomElement(e) {
    const t = this.context;
    let r;
    return e ? r = t.refs[e] || t[e] || window[e] : r = t.el || t.$el || t.$root, r instanceof h ? r.getElement() : r;
  }
  createObserver(e, t) {
    var d;
    const [r, s] = e.args || ["intersection"], i = this.getDefaultDomElement(s), o = e.getFunction("params"), a = Kt((d = o == null ? void 0 : o.args) == null ? void 0 : d[0]);
    let u;
    switch (r) {
      case "intersection":
        a.root && (a.root = this.getDefaultDomElement(a.root)), u = new window.IntersectionObserver(t, a || {}), u.observe(i);
        break;
      case "mutation":
        u = new window.MutationObserver(t), u.observe(
          i,
          a || {
            attributes: !0,
            characterData: !0,
            childList: !0
          }
        );
        break;
      case "performance":
        u = new window.PerformanceObserver(t), u.observe(
          a || {
            entryTypes: ["paint"]
          }
        );
        break;
    }
    return u;
  }
  bindingObserver(e, t) {
    this.addObserver(this.createObserver(e, t));
  }
  parseObserver(e) {
    const t = this.context;
    var r = t[e.originalMethod].bind(t);
    this.bindingObserver(e, r);
  }
}
class Hn extends Le {
  initialize() {
    var e, t;
    this._callbacks || (this._callbacks = this.context.filterMethodes("subscribe")), !((e = this._bindings) != null && e.length) && ((t = this._callbacks) == null ? void 0 : t.length) && this._callbacks.forEach((r) => this.parseSubscribe(r));
  }
  destroy() {
    this.context.notEventRedefine || this.context.$store.offAll(this.context);
  }
  getCallback(e) {
    return this.context[e];
  }
  getBindings() {
    return this._bindings || this.initBindings(), this._bindings;
  }
  addBinding(e) {
    this.getBindings().push(e);
  }
  initBindings() {
    this._bindings = [];
  }
  createLocalCallback(e, t) {
    var r = t.bind(this.context);
    return r.displayName = `${this.context.sourceName}.${e}`, r.source = this.context.source, r;
  }
  parseSubscribe(e) {
    var L, M;
    const t = e.args.join(" "), r = [], s = [];
    let i = 0, o = 0, a = !1, u = !1, d = !1;
    const p = e.getFunction("debounce"), m = e.getFunction("throttle"), q = e.getFunction("allTrigger"), Y = e.getFunction("selfTrigger"), J = e.getFunction("frame");
    p && (i = +(((L = p.args) == null ? void 0 : L[0]) || 0)), m && (o = +(((M = m.args) == null ? void 0 : M[0]) || 0)), q && (a = !0), Y && (u = !0), J && (d = !0), e.keywords.forEach((H) => {
      const P = H;
      this.context[P] ? r.push(P) : s.push(P);
    });
    const Z = this.context[e.originalMethod];
    [...s, t].filter(Boolean).forEach((H) => {
      var P = this.createLocalCallback(H, Z);
      this.context.$store.on(
        H,
        P,
        this.context,
        i,
        o,
        a,
        u,
        r,
        d
      );
    }), this.addBinding(e);
  }
}
let he = {};
function Mi() {
  qt(!0);
}
function Ri(n) {
  return v().useState(n);
}
function _n(n, e) {
  return v().useEffect(n, e);
}
function wi(n, e) {
  return v().useReducer(n, e);
}
function Ai(n, e) {
  return v().useMemo(n, e);
}
function Pi(n, e) {
  return v().useCallback(n, e);
}
function Ii(n) {
  return v().useRef(n);
}
function Li(n) {
  return v().useContext(n);
}
function Fn(n) {
  he[n.id] = {
    context: n,
    index: 0,
    lastProvider: null
  };
}
class $n {
  constructor(e, t) {
    this.context = e, this.provider = t;
  }
  get id() {
    return this.provider.id;
  }
  get value() {
    return this.provider.value;
  }
  set(e) {
    this.provider = e;
  }
}
function Dn(n, e) {
  const t = new $n(n, e), r = he[n.id];
  if (!r.lastProvider)
    r.prevProvider = r.lastProvider, r.lastProvider = t, r.lastProvider.prev = r.prevProvider;
  else {
    const s = r.lastProvider, i = s.value;
    s.id === t.id ? r.lastProvider.set(t) : (r.lastProvider.next = t, t.prev = r.lastProvider, r.lastProvider = t), i !== t.value && Vn(t);
  }
}
function Bn(n) {
  const e = he[n.id];
  e.lastProvider && e.lastProvider.prev && (e.lastProvider = e.lastProvider.prev, e.lastProvider && (e.lastProvider.next = null));
}
function mt(n) {
  return he[n.id].lastProvider;
}
let Un = 0;
function Hi(n) {
  const e = {
    id: "context-" + Un++,
    defaultValue: n,
    lastProvider: null,
    Provider: function({ value: t, content: r }) {
      return Dn(e, {
        value: t,
        id: this.id,
        component: this
      }), _n(() => {
        Bn(e);
      }, []), r[0] || r;
    }
  };
  return e.Consumer = ({ content: [t] }) => {
    const r = mt(e).value;
    return t(r);
  }, Fn(e), e;
}
const ne = {};
function Gn(n, e, t) {
  ne[n] || (ne[n] = {}), ne[n][e.id] = t;
}
function Vn(n) {
  const e = ne[n.id];
  e && Object.values(e).forEach((t) => {
    t(n);
  });
}
function Kn(n) {
  return v().useStore(n);
}
function _i(n, e) {
  return v().useStoreSet(n, e);
}
function Fi(n) {
  return Kn(Qe)[n];
}
function $i(n, e, t = 0, r = 0, s = !1) {
  return v().useSubscribe(
    n,
    e,
    t,
    r,
    s
  );
}
function Di(n, e, t = 0, r = 0) {
  return v().useSelf(
    n,
    e,
    t,
    r
  );
}
function Bi(n, ...e) {
  return v().emit(n, ...e);
}
function Ui(n, ...e) {
  return v().trigger(n, ...e);
}
var G;
class Wn {
  constructor() {
    O(this, G, {});
    this.handlers = this.initializeHandler();
  }
  initializeHandler(e = {}) {
    return Yt(this, e);
  }
  loadHandlerCache(e) {
    return l(this, G)[e] || (l(this, G)[e] = this.handlers.filter((t) => t[e])), l(this, G)[e];
  }
  async runHandlers(e = "run", ...t) {
    await Promise.all(
      this.loadHandlerCache(e).map(async (r) => {
        await r[e](...t);
      })
    );
  }
}
G = new WeakMap();
const Xe = Symbol("useState"), qe = Symbol("useEffect"), zn = Symbol("useMemo"), Ye = Symbol("useContext"), jn = Symbol("useSubscribe");
function Xn({ value: n, component: e }) {
  let t = { value: n, component: e };
  function r(i) {
    return typeof i == "function" ? i(t.value) : i;
  }
  return [t, (i) => {
    const o = r(i);
    n.value !== o && (t.value = o, ot(t.component));
  }];
}
var _, I;
class qn extends Wn {
  constructor() {
    super(...arguments);
    O(this, _, []);
    O(this, I, 0);
  }
  copyHooks() {
    return {
      __stateHooks: l(this, _),
      __stateHooksIndex: l(this, I)
    };
  }
  reloadHooks(t) {
    x(this, _, t.__stateHooks || []), x(this, I, t.__stateHooksIndex || 0);
  }
  resetCurrentComponent() {
    this.resetHookIndex(), Dt(this);
  }
  resetHookIndex() {
    x(this, I, 0);
  }
  increaseHookIndex() {
    Ge(this, I)._++;
  }
  getHook() {
    return l(this, _)[l(this, I)];
  }
  setHook(t, r) {
    l(this, _)[l(this, I)] = {
      type: t,
      hookInfo: r
    };
  }
  useState(t) {
    this.getHook() || this.setHook(
      Xe,
      Xn({ value: t, component: this })
    );
    const [r, s] = this.getHook().hookInfo;
    return this.increaseHookIndex(), [r.value, s];
  }
  isChangedDeps(t) {
    const r = !t, {
      hookInfo: { deps: s }
    } = this.getHook() || { hookInfo: {} }, i = s ? !t.every((o, a) => o === s[a]) : !0;
    return r || i;
  }
  useEffect(t, r) {
    this.isChangedDeps(r) && this.setHook(qe, {
      deps: r,
      callback: t
    }), this.increaseHookIndex();
  }
  useReducer(t, r) {
    const [s, i] = this.useState(r);
    function o(a) {
      i((u) => t(u, a));
    }
    return [s, o];
  }
  useMemo(t, r) {
    this.isChangedDeps(r) && this.setHook(zn, {
      deps: r,
      value: t()
    });
    const i = this.getHook().hookInfo || {};
    return this.increaseHookIndex(), i.value;
  }
  useCallback(t, r) {
    return this.useMemo(() => t, r);
  }
  useRef(t) {
    return this.useMemo(() => ({ current: t }), []);
  }
  refreshProvider(t) {
    const r = this.filterHooks(Ye).find(
      (s) => s.provider.id === t.id
    );
    r && (r.provider = t);
  }
  useContext(t) {
    this.getHook() || this.setHook(Ye, {
      provider: mt(t),
      component: this
    });
    const { provider: r } = this.getHook().hookInfo;
    return Gn(r.id, this, () => {
      ot(this);
    }), this.increaseHookIndex(), (r == null ? void 0 : r.value) || t.defaultValue;
  }
  useSubscribe(t, r, s = 0, i = 0, o = !1) {
    this.getHook() || this.setHook(jn, {
      name: t,
      callback: r,
      component: this,
      unsubscribe: this.$store.on(
        t,
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
  useSelf(t, r, s = 0, i = 0) {
    return this.useSubscribe(
      t,
      r,
      s,
      i,
      !0
    );
  }
  useEmit(t, ...r) {
    return this.emit(t, ...r);
  }
  useStore(t) {
    return this.$store.get(t);
  }
  useStoreSet(t, r) {
    this.$store.set(t, r);
  }
  filterHooks(t) {
    return l(this, _).filter((r) => r.type === t).map((r) => r.hookInfo);
  }
  getUseEffects() {
    return this.filterHooks(qe);
  }
  getUseStates() {
    return this.filterHooks(Xe).map((t) => t.value);
  }
  runHooks() {
    this.getUseEffects().forEach((t) => {
      g(t.cleanup) && t.cleanup(), t.cleanup = t.callback();
    });
  }
  cleanHooks() {
    this.getUseEffects().forEach((t) => {
      g(t.cleanup) && t.cleanup();
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
_ = new WeakMap(), I = new WeakMap();
var R, V, K, S, E, ae, Ct;
const Ue = class extends qn {
  constructor(t, r, s) {
    super();
    O(this, ae);
    O(this, R, {});
    O(this, V, void 0);
    O(this, K, {});
    O(this, S, {});
    O(this, E, /* @__PURE__ */ new WeakMap());
    Q(this, "registerRef", (t, r) => {
      typeof t == "function" ? t(r) : j(t) ? t.value = r : this.refs[t] = r;
    });
    Q(this, "registerChildComponent", (t, r, s, i) => {
      l(this, E).has(t) || (l(this, S)[s] = t, l(this, E).set(t, r)), l(this, E).has(i) && l(this, E).delete(i);
    });
    Q(this, "checkRefClass", (t, r) => {
      const s = r.props;
      if (r.isComponentChanged)
        return !0;
      let i = this.getTargetInstance(t);
      return i && i.isInstanceOf(r.Component) ? r.isComponentChanged || i.isForceRender(s) ? !0 : (Ve(this, ae, Ct).call(this, i, s), !1) : !0;
    });
    this.refs = {}, this.id = $t(), this.initializeProperty(t, r, s);
  }
  setId(t) {
    this.id = t;
  }
  initializeHandler() {
    return super.initializeHandler({
      DomEventHandler: In,
      ObserverHandler: Ln,
      StoreHandler: Hn
    });
  }
  checkProps(t = {}) {
    return t;
  }
  initializeProperty(t, r = {}, s = {}) {
    this.opt = t || {}, this.parent = this.opt, this.source = this.id, this.sourceName = this.constructor.name, this.props = r, x(this, R, Object.assign({}, l(this, R), s));
  }
  createFunction(t, r) {
    return g(r) && !l(this, K)[t] && (l(this, K)[t] = r), l(this, K)[t];
  }
  runFunction(t, r) {
    const s = this.createFunction(t, r);
    if (!(s != null && s.running))
      return g(s) && (s.running || (s.running = !0, s.call(this))), s;
  }
  initState() {
    return {};
  }
  setState(t = {}, r = !0) {
    x(this, R, Object.assign({}, l(this, R), t)), r && this.refresh();
  }
  toggleState(t, r = !0) {
    this.setState(
      {
        [t]: !l(this, R)[t]
      },
      r
    );
  }
  changedProps(t) {
    return !Cr(this.props, t);
  }
  _reload(t) {
    this.changedProps(t) && (this.props = t, this.refresh());
  }
  checkLoad(t) {
    window.requestAnimationFrame(() => {
      this.render(t);
    });
  }
  get state() {
    return l(this, R);
  }
  get ref() {
    return this.props.ref;
  }
  get children() {
    return Object.fromEntries(
      Object.entries(l(this, S)).map(([t, r]) => [t, l(this, E).get(r)])
    );
  }
  get isPreLoaded() {
    return !0;
  }
  getTargetInstance(t) {
    const r = l(this, E).get(t);
    if (r)
      return r;
  }
  isForceRender() {
    return !1;
  }
  isInstanceOf(t) {
    return this instanceof t;
  }
  async runningUpdate(t, r) {
    t.type === k.FRAGMENT ? ft(this.parentElement, t) : Cn(this.$el.el, t, {
      checkRefClass: this.checkRefClass,
      context: this,
      isForceRender: r,
      registerRef: this.registerRef,
      registerChildComponent: this.registerChildComponent
    }), this.$el.el[re] = this, this.runUpdated();
  }
  async runningMount(t, r) {
    const s = this.parseMainTemplate(t);
    this.$el = s, this.refs.$el = this.$el, this.$el.el[re] = this, r && (r instanceof h || (r = h.create(r)), r.hasChild(this.$el) === !1 && (r.append(this.$el), this.runMounted())), await this._afterLoad();
  }
  async forceRender() {
    this.cleanHooks(), await this.render(null, !0);
  }
  setParentElement(t) {
    this.parentElement = t;
  }
  is(t, r) {
    return this.sourceName === t && r(this);
  }
  async render(t, r = !1) {
    if (!this.isPreLoaded) {
      this.checkLoad(t);
      return;
    }
    this.resetCurrentComponent();
    const s = this.template();
    if (T(s))
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
    return this.$el ? await this.runningUpdate(s, r) : await this.runningMount(s, t), this;
  }
  async renderToHtml() {
    this.resetCurrentComponent();
    const t = this.template();
    return await lt(t, this.getVNodeOptions());
  }
  initialize() {
    x(this, R, this.initState());
  }
  getRef(...t) {
    const r = t.join("");
    return this.refs[r];
  }
  getVNodeOptions() {
    return {
      context: this,
      registerRef: this.registerRef,
      registerChildComponent: this.registerChildComponent
    };
  }
  parseMainTemplate(t) {
    return ct(t, this.getVNodeOptions());
  }
  getFunctionComponent() {
    return this;
  }
  refresh() {
    this.render();
  }
  afterRender() {
  }
  async _afterLoad() {
    this.runHandlers("initialize"), this.afterRender();
  }
  template() {
    return null;
  }
  clear() {
    Object.entries(l(this, S)).forEach(([t, r]) => {
      if (!r.parentNode) {
        const s = l(this, E).get(r);
        s && (s.destroy(), l(this, E).delete(r), delete l(this, S)[t]);
      }
    });
  }
  clearAll() {
    Object.entries(l(this, S)).forEach(([t, r]) => {
      const s = l(this, E).get(r);
      s && (s.destroy(), l(this, E).delete(r), delete l(this, S)[t]);
    });
  }
  destroy(t = !1) {
    Ut(this), Object.entries(l(this, S)).forEach(([r, s]) => {
      const i = l(this, E).get(s);
      i && (i.destroy(), l(this, E).delete(s), delete l(this, S)[r]);
    }), this.runHandlers("destroy"), t && (this.$el.remove(), this.$el = null, this.onUnmounted()), this.onDestroyed(), this.refs = {};
  }
  collectMethodes(t = !1) {
    return (!l(this, V) || t) && x(this, V, wt(
      this,
      Ue,
      (r) => $.check(r)
    ).map((r) => $.parse(r, this))), l(this, V);
  }
  filterMethodes(t, r = !1) {
    return this.collectMethodes(r).filter((s) => s.method === t);
  }
  getChildContent(t, r = "") {
    var s;
    return ((s = this.getChild(t)) == null ? void 0 : s.props.content) || r;
  }
  getChild(t) {
    return this.props.content.find(t);
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
    const t = this.getTargetInstance((r = this.$el) == null ? void 0 : r.el);
    t && t.onMounted();
  }
  onUpdated() {
    var r;
    super.onUpdated();
    const t = this.getTargetInstance((r = this.$el) == null ? void 0 : r.el);
    t && t.onUpdated();
  }
  onDestroyed() {
    var r;
    super.onDestroyed();
    const t = this.getTargetInstance((r = this.$el) == null ? void 0 : r.el);
    t && t.onDestroyed();
  }
  onUnmounted() {
    var r;
    super.onUnmounted();
    const t = this.getTargetInstance((r = this.$el) == null ? void 0 : r.el);
    t && t.onUnmounted();
  }
};
let Oe = Ue;
R = new WeakMap(), V = new WeakMap(), K = new WeakMap(), S = new WeakMap(), E = new WeakMap(), ae = new WeakSet(), Ct = function(t, r) {
  t._reload(r);
};
var D;
const ue = class extends Oe {
  constructor(t, r = {}, s = {}) {
    super(t, r, s);
    O(this, D, void 0);
    r.store ? x(this, D, r.store) : this.parent.$store || x(this, D, new Qt()), this.created(), this.initialize(), this.initializeContext(t, r, s);
  }
  initializeContext(t, r = {}) {
    t || this.$store.init(Qe, r);
  }
  currentContext() {
    return this.contexts[this.contexts.length - 1];
  }
  setStore(t) {
    x(this, D, t);
  }
  get $store() {
    return l(this, D) || this.parent.$store;
  }
  async created() {
  }
  createLocalCallback(t, r) {
    var s = r.bind(this);
    return s.displayName = `${this.sourceName}.${t}`, s.source = this.source, s;
  }
  emit(t, ...r) {
    this.$store.source = this.source, this.$store.sourceContext = this, this.$store.emit(t, ...r);
  }
  nextTick(t, r = 0) {
    window.setTimeout(() => {
      this.$store.nextTick(t);
    }, r);
  }
  trigger(t, ...r) {
    this.$store.source = this.source, this.$store.trigger(t, ...r);
  }
  runCallback(t, ...r) {
    this.parent && this.parent.trigger(t, ...r);
  }
  on(t, r, s = 0, i = 0, o = !1, a = !1, u = !1) {
    this.$store.on(
      t,
      r,
      this.source,
      s,
      i,
      o,
      a,
      [],
      u
    );
  }
  off(t, r) {
    this.$store.off(t, r, this.source);
  }
  subscribe(t, r = 0, s = 0) {
    const i = `subscribe.${we()}`, o = this.createLocalCallback(i, t);
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
  static createFunctionElementInstance(t, r, s, i = {}) {
    class o extends ue {
      initializeProperty(u, d = {}, p = {}) {
        super.initializeProperty(u, d, p), this.sourceName = this.getFunctionComponent().name || this.sourceName;
      }
      getFunctionComponent() {
        return t;
      }
      isInstanceOf(u) {
        return t === u;
      }
      template() {
        return t.call(this, this.props);
      }
    }
    return new o(r, s, i);
  }
  static createElementInstance(t, r, s, i) {
    return t.__proto__.name === "" ? ue.createFunctionElementInstance(
      t,
      r,
      s,
      i
    ) : new t(r, s, i);
  }
};
let Se = ue;
D = new WeakMap();
function X(n, e, t, r) {
  return Se.createElementInstance(n, e, t, r);
}
const Yn = {
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
}, me = {}, Jn = /([A-Z])/g, Zn = (n) => {
  if (me[n])
    return me[n];
  const e = n.replace(Jn, "-$1").toLowerCase();
  return me[n] = e, e;
};
function Qn(n, e) {
  return typeof e == "number" && Yn[n] && (e = e + "px"), e;
}
function er(n) {
  return Zn(n);
}
function Ne(n) {
  const e = {};
  return Object.keys(n).forEach((t) => {
    e[er(t)] = Qn(t, n[t]);
  }), e;
}
const Et = {
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
}, Je = {};
Object.keys(Et).forEach((n) => {
  Je[n.toLowerCase()] = !0, Je[n.toUpperCase()] = !0;
});
function tr(n) {
  return !!Et[n];
}
const nr = "<";
let Ce, Ee, be, te = {}, Te = 0, ve = {};
const rr = {
  tagProps: !0,
  parentElement: !0,
  el: !0,
  children: !0,
  instance: !0
};
function sr() {
  return Ce || (Ce = h.create("div")), Ce;
}
function ir() {
  return Ee || (Ee = document.createTextNode("")), Ee;
}
function or() {
  return be || (be = document.createComment("")), be;
}
function ar(n) {
  if (!ve[n]) {
    const e = tr(n) ? document.createElementNS("http://www.w3.org/2000/svg", n) : document.createElement(n);
    ve[n] = e;
  }
  return ve[n].cloneNode(!1);
}
function ur(n) {
  const e = ir().cloneNode();
  return e.textContent = n, e;
}
function cr(n) {
  const e = or().cloneNode();
  return e.textContent = n, e;
}
const lr = {
  content: !0
};
function hr(n, e, t) {
  lr[e] || n.setAttribute(e, t);
}
function fr(n, e, t) {
  n[e.toLowerCase()] = t;
}
function dr(n, e, t) {
  e.indexOf("--") === 0 ? typeof t > "u" ? n.style.removeProperty(e) : n.style.setProperty(e, t) : n.style[e] = t;
}
function Ze(n) {
  const e = Ne(n);
  return Object.keys(e).map((t) => `${t}: ${e[t]};`).join(" ");
}
function pr(n) {
  var e = {};
  const t = n.length;
  for (let r = 0; r < t; r++) {
    const s = n[r], i = s.name, o = s.value;
    e[i] = o;
  }
  return e;
}
const gr = (n) => {
  var e = n.firstChild;
  if (!e)
    return [];
  var t = [];
  do
    t[t.length] = e, e = e.nextSibling;
  while (e);
  return t;
};
function mr(n) {
  return Te > 2e3 && (Te = 0, te = {}), te[n] || (Te++, te[n] = sr().html(n).first.el), te[n].cloneNode(!0);
}
function Me(n, e, t = 0, r = {}) {
  if (g(n) && g(e))
    return !1;
  const s = Object.keys(n).filter(
    (o) => r[o] === void 0
  ), i = Object.keys(e).filter(
    (o) => r[o] === void 0
  );
  return s.length !== i.length ? !1 : s.length === 0 && i.length === 0 ? !0 : s.every((o) => {
    if (r[o])
      return !0;
    const a = n[o], u = e[o];
    return Xt() && o === "Component" ? !1 : T(a) && T(u) ? a.length !== u.length ? !1 : a.length === 0 && u.length === 0 ? !0 : a.every((p, m) => Me(p, u[m], t + 1, r)) : j(a) && j(u) ? Me(a, u, t + 1, r) : a === u;
  });
}
function Cr(n, e) {
  return Me(n, e, 0, rr);
}
class b {
  constructor(e, t, r, s, i) {
    this.type = e, this.tag = t, this.nodeName = t == null ? void 0 : t.toUpperCase(), this.props = r, this.children = s, this.Component = i, this.initializeProps(), this.initializeChildren();
  }
  clone() {
    return new b(
      this.type,
      this.tag,
      { ...this.props },
      this.children.map((e) => e.clone()),
      this.Component
    );
  }
  find(e) {
    return this.props.content.find(e);
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
    const e = Object.assign({}, this.props);
    if (!this.Component)
      j(e.style) && (e.style = Ze(e.style)), e.className && (e.class = e.className, delete e.className), this.tagProps = e;
    else {
      const t = Object.keys(e).length ? at(e) : void 0, r = {
        ref: e.ref ? e.ref : void 0
      };
      t && (r[t] = ""), this.tagProps = r;
    }
    this.props.enableHtml && (this.enableHtml = this.props.enableHtml, delete this.props.enableHtml);
  }
  initializeChildren() {
    if (T(this.children)) {
      if (this.props.content)
        return;
      this.children = this.children.filter(Boolean).map((e) => {
        if (A(e))
          if (this.enableHtml) {
            if (e.indexOf(nr) === -1)
              return w(e);
            {
              const t = mr(e);
              return (t == null ? void 0 : t.nodeType) === 3 ? w(t.textContent) : w(t);
            }
          } else
            return w(e);
        else if (tt(e))
          return w(e);
        return e;
      }), this.props.content = this.children;
    }
  }
  makeChildren(e, t) {
    const r = this.el, s = this.children;
    if (s && s.length) {
      const i = document.createDocumentFragment();
      s.forEach((o) => {
        if (o instanceof b || o.makeElement) {
          o.setParentElement(r);
          const a = o.makeElement(e, t).el;
          a && i.appendChild(a);
        } else if (T(o))
          o.forEach((a) => {
            if (a) {
              const u = a.makeElement(e, t).el;
              u && i.appendChild(u);
            }
          });
        else if (g(o)) {
          const a = o();
          if (a instanceof b) {
            const u = a.makeElement(e, t);
            u && i.appendChild(u);
          } else
            typeof a == "string" && i.appendChild(document.createTextNode(a));
        } else
          o instanceof window.HTMLElement ? i.appendChild(o) : i.appendChild(document.createTextNode(o));
      }), r.appendChild(i), s.forEach((o) => {
        T(o) ? o.forEach((a) => {
          g(a == null ? void 0 : a.runMounted) && a.runMounted();
        }) : o && g(o == null ? void 0 : o.runMounted) && o.runMounted();
      });
    }
  }
  setParentElement(e) {
    this.parentElement = e;
  }
  async makeChildrenHtml(e, t) {
    const r = [], s = this.children;
    if (s && s.length) {
      const i = await Promise.all(
        s.map(async (o) => o instanceof b || o.makeHtml ? await o.makeHtml(e, t) : T(o) ? await Promise.all(
          o.map(async (a) => {
            if (a)
              return await a.makeHtml(e, t);
          })
        ).filter((a) => typeof a < "u") : g(o) ? await o() : await o)
      );
      r.push(...i);
    }
    return r.join(`
`);
  }
  createElement() {
    return ar(this.tag);
  }
  makeElement(e = !1, t = {}) {
    const r = this.createElement(), s = this.tagProps;
    return s && Object.keys(s).forEach((i) => {
      const o = s[i];
      if (i === "style")
        if (A(o))
          r.style.cssText = o;
        else {
          const a = Ne(o);
          Object.entries(a).forEach(([u, d]) => {
            dr(r, u, d);
          });
        }
      else
        i && o !== void 0 && (i.startsWith("on") ? fr(r, i, o) : hr(r, i, o));
      i === "ref" && o && (this.ref = o, g(t.registerRef) && t.registerRef(o, r));
    }), this.el = r, this.makeChildren(e, t), this;
  }
  async makeHtml(e = !1, t = {}) {
    const r = [], s = this.tagProps;
    if (s && Object.keys(s).forEach((i) => {
      const o = s[i];
      if (i === "style")
        A(o) || (s[i] = Ze(Ne(o)));
      else if (i && o !== void 0 && i.startsWith("on"))
        return;
      i !== "ref" && o && r.push(`${i}="${o}"`);
    }), tn(this.tag))
      return `
        <${this.tag} ${r.join(" ")} />
      `;
    {
      const i = await this.makeChildrenHtml(e, t);
      return `
        <${this.tag} ${r.join(" ")}>${i}</${this.tag}>
      `;
    }
  }
  makeText(e = "") {
    return this.children.map((r) => r.makeText(e)).flat(1 / 0).join(e);
  }
}
class He extends b {
  constructor(e) {
    super(k.TEXT, null, {}), this.value = e;
  }
  clone() {
    return new He(this.value);
  }
  get textContent() {
    return this.value;
  }
  runMounted() {
  }
  createElement() {
    return ur(this.value);
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
class _e extends b {
  constructor(e) {
    super(k.COMMENT, null, {}), this.value = e;
  }
  clone() {
    return new _e(this.value);
  }
  get textContent() {
    return this.value;
  }
  runMounted() {
  }
  createElement() {
    return cr(this.value);
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
class Fe extends b {
  constructor(e = {}, t) {
    super(k.FRAGMENT, "fragment", e || {}, t);
  }
  clone() {
    return new Fe(
      this.props,
      this.children.map((e) => e.clone())
    );
  }
  makeElement(e = !1, t = {}) {
    if (this.el)
      return this;
    const r = document.createDocumentFragment();
    return this.el = r, this.makeChildren(e, t), this;
  }
  async makeHtml(e = !1, t = {}) {
    return await this.makeChildrenHtml(e, t);
  }
}
class fe extends b {
  constructor(e = {}, t, r) {
    super(k.COMPONENT, "object", e || {}, t), this.Component = r, this.instance = null;
  }
  clone() {
    return new fe(
      this.props,
      this.children.map((e) => e.clone()),
      this.Component
    );
  }
  mounted() {
    var e;
    (e = this.instance) == null || e.onMounted();
  }
  getModule() {
    return Zt(this.Component);
  }
  get isComponentChanged() {
    return this.Component !== this.getModule();
  }
  makeClassInstance(e) {
    var a, u, d;
    const t = this.props, r = this.getModule(), s = (a = this.instance) == null ? void 0 : a.copyHooks(), i = (u = this.instance) == null ? void 0 : u.state, o = (d = this.instance) == null ? void 0 : d.id;
    return this.instance = X(
      r,
      e.context,
      t,
      i
    ), o && this.instance.setId(o), s && this.instance.reloadHooks(s), this.instance;
  }
  render(e) {
    this.makeClassInstance(e);
    try {
      this.instance.setParentElement(this.parentElement), this.instance.render(e.$container);
    } catch (t) {
      console.error(t);
    }
  }
  async renderHtml(e) {
    return this.makeClassInstance(e), await this.instance.renderToHtml();
  }
  makeElement(e, t = {}) {
    var r, s;
    if (this.render(t), this.el = (s = (r = this.instance) == null ? void 0 : r.$el) == null ? void 0 : s.el, this.el) {
      const i = this.props.ref || this.instance.id;
      g(t.registerChildComponent) && t.registerChildComponent(this.el, this.instance, i);
    }
    return this;
  }
  async makeHtml(e, t = {}) {
    return await this.renderHtml(t);
  }
  makeText() {
    return "";
  }
}
function $e({ tag: n, props: e = {}, children: t }) {
  return new b(k.NODE, n, e, t);
}
function bt({ props: n = {}, children: e, Component: t }) {
  if (typeof t > "u")
    throw new Error("Component is undefined");
  return new fe(n, e, t);
}
function Tt({ props: n = {}, children: e }) {
  return new Fe(n, e);
}
function w(n) {
  return new He(n);
}
function vt(n) {
  return new _e(n);
}
function Gi(n) {
  return n.clone();
}
const Er = (n, e = {}) => {
  const t = h.create(e.container || document.body), r = t.children().find((i) => i.el[re]);
  if (n instanceof b) {
    const i = n;
    n = () => i;
  }
  const s = X(n, null, e);
  return r ? (s.$el = h.create(r.el), s.id = r.el[re].id, s.render()) : s.render(t), ut(s, t), s;
}, Vi = Er, Ki = (n, e = {}) => {
  const t = h.create(e.container || document.body);
  if (n instanceof b) {
    const i = n;
    n = () => i;
  }
  const r = X(n, null, e), s = t.firstChild;
  return s ? (r.$el = s, r.render()) : r.render(t), ut(r, t), r;
}, Wi = (n, e = {}) => {
  const t = h.create(e.container || document.body);
  if (n instanceof fe)
    return n.render({
      $container: t
    }), n.instance;
  if (n instanceof b) {
    const s = n;
    n = () => s;
  }
  const r = X(n, null, e);
  return r.render(t), r;
};
async function zi(n, e) {
  if (n instanceof b) {
    const s = n;
    n = () => s;
  }
  return await X(n, null, e).renderToHtml();
}
function ji(n) {
  return class extends HTMLElement {
    constructor() {
      super(), this._shadow = this.attachShadow({ mode: "open" }), this._$container = h.create(this._shadow), this._comp = new n(), this._comp.on("customEvent", (e, ...t) => {
        this.dispatchEvent(
          new CustomEvent(e, {
            bubbles: !0,
            detail: t
          })
        );
      });
    }
    static get observedAttributes() {
      return n.attributes || [];
    }
    connectedCallback() {
      const e = this.attributes, t = {};
      for (let r = e.length - 1; r >= 0; r--)
        t[e[r].name] = e[r].value;
      this._comp._reload(t, this._$container);
    }
    disconnectedCallback() {
      this._comp.destroy(), this._comp = null;
    }
    adoptedCallback() {
      console.log("Custom square element moved to new page.");
    }
    attributeChangedCallback(e, t, r) {
      this._comp._reload({
        ...this._comp.props,
        [e]: r
      });
    }
  };
}
function yt(n) {
  return typeof n == "string" ? w(n) : n.nodeType === 3 ? w(n.textContent) : $e({
    tag: n.tagName,
    props: pr(n.attributes),
    children: gr(n).map((e) => yt(e))
  });
}
function Xi(n) {
  const e = h.createByHTML(n);
  return yt(e.el);
}
function ye(n) {
  const { children: e = [], ...t } = n;
  return typeof n == "string" || typeof n == "number" ? w(n) : t.type === "comment" ? vt(t.text) : t.type === "text" ? w(t.text) : t.type === "fragment" ? Tt({
    ...t,
    children: e.map((r) => ye(r))
  }) : t.type === "component" || t.Component ? bt({
    ...t,
    children: e.map((r) => ye(r))
  }) : $e({
    ...t,
    children: e.map((r) => ye(r))
  });
}
function oe(n, e = {}, t = []) {
  return t = t.flat(1 / 0), bt({
    props: e || {},
    children: t,
    Component: n
  });
}
function xt(n, e = {}, t = []) {
  return t = t.flat(1 / 0), Tt({
    props: e || {},
    children: t,
    Component: n
  });
}
function kt(n = []) {
  return n = n.flat(1 / 0), vt(n[0] || "");
}
function Ot(...n) {
  return n.map((e) => {
    let t, r = {}, s = [];
    return A(e) ? t = e : T(e) && ([t, r = {}, s = []] = e), s.length ? oe(
      t,
      r || {},
      Ot(s)
    ) : oe(t, r);
  });
}
function St(n, e, t = []) {
  return t = t.flat(1 / 0), $e({ tag: n, props: e, children: t });
}
function Nt(n, e = {}, ...t) {
  return t = t.filter(Boolean), n === De ? xt(n, e, t) : n === Be ? kt(t) : (e = e || {}, typeof n != "string" ? oe(n, e, t) : St(n, e, t));
}
const De = new Object(), Be = new Object(), br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createComponent: oe,
  createComponentFragment: xt,
  createComment: kt,
  createComponentList: Ot,
  createElement: St,
  createElementJsx: Nt,
  FragmentInstance: De,
  HTMLComment: Be
}, Symbol.toStringTag, { value: "Module" })), qi = De, Yi = Nt, Ji = Be, Zi = {
  ...br
};
export {
  gt as AFTER,
  Sn as ALL_TRIGGER,
  ns as ALT,
  Ei as ANIMATIONEND,
  bi as ANIMATIONITERATION,
  Ci as ANIMATIONSTART,
  Kr as ARROW_DOWN,
  Wr as ARROW_LEFT,
  zr as ARROW_RIGHT,
  Vr as ARROW_UP,
  Yr as BACKSPACE,
  Br as BEFORE,
  ri as BLUR,
  ts as BRACKET_LEFT,
  es as BRACKET_RIGHT,
  Qt as BaseStore,
  Mn as CALLBACK,
  Es as CAPTURE,
  Zs as CHANGE,
  gi as CHANGEINPUT,
  f as CHECKER,
  Ns as CLICK,
  $r as COMMAND,
  ks as CONFIG,
  Js as CONTEXTMENU,
  is as CONTROL,
  y as CUSTOM,
  ps as D1000,
  On as DEBOUNCE,
  ds as DELAY,
  Jr as DELETE,
  Ms as DOUBLECLICK,
  ki as DOUBLETAB,
  Gs as DRAG,
  Ys as DRAGEND,
  zs as DRAGENTER,
  Xs as DRAGEXIT,
  js as DRAGLEAVE,
  qs as DRAGOUT,
  Ws as DRAGOVER,
  Vs as DRAGSTART,
  Ks as DROP,
  h as Dom,
  jr as ENTER,
  Zr as EQUAL,
  qr as ESCAPE,
  pt as EVENT,
  hs as FIT,
  ei as FOCUS,
  ti as FOCUSIN,
  ni as FOCUSOUT,
  ms as FRAME,
  rn as FUNC_END_CHARACTER,
  nn as FUNC_REGEXP,
  ze as FUNC_START_CHARACTER,
  qi as FragmentInstance,
  Ni as HASHCHANGE,
  Ji as HTMLComment,
  Ur as IF,
  Qs as INPUT,
  Gr as KEY,
  Ds as KEYDOWN,
  Us as KEYPRESS,
  Bs as KEYUP,
  kn as LEFT_BUTTON,
  We as MAGIC_METHOD,
  Ke as MAGIC_METHOD_REG,
  ss as META,
  Qr as MINUS,
  os as MOUSE,
  Rs as MOUSEDOWN,
  Ls as MOUSEENTER,
  Hs as MOUSELEAVE,
  As as MOUSEMOVE,
  Is as MOUSEOUT,
  Ps as MOUSEOVER,
  ws as MOUSEUP,
  $ as MagicMethod,
  ke as NAME_SAPARATOR,
  Ss as OBSERVER,
  Dr as ON,
  Si as ORIENTATIONCHANGE,
  Cs as PARAMS,
  fs as PASSIVE,
  si as PASTE,
  us as PEN,
  Tn as PIPE,
  pi as POINTEREND,
  li as POINTERENTER,
  fi as POINTERLEAVE,
  di as POINTERMOVE,
  hi as POINTEROUT,
  ci as POINTEROVER,
  ui as POINTERSTART,
  Oi as POPSTATE,
  bs as PREVENT,
  Os as RAF,
  ii as RESIZE,
  ls as RIGHT_BUTTON,
  vn as SAPARATOR,
  oi as SCROLL,
  cs as SELF,
  Nn as SELF_TRIGGER,
  rs as SHIFT,
  Xr as SPACE,
  B as SPLITTER,
  Ts as STOP,
  ai as SUBMIT,
  vs as SUBSCRIBE,
  ys as SUBSCRIBE_ALL,
  xs as SUBSCRIBE_SELF,
  gs as THROTTLE,
  as as TOUCH,
  $s as TOUCHEND,
  Fs as TOUCHMOVE,
  _s as TOUCHSTART,
  xi as TRANSITIONCANCEL,
  vi as TRANSITIONEND,
  yi as TRANSITIONRUN,
  Ti as TRANSITIONSTART,
  Se as UIElement,
  Gt as VARIABLE_SAPARATOR,
  b as VNode,
  _e as VNodeComment,
  fe as VNodeComponent,
  Fe as VNodeFragment,
  He as VNodeText,
  k as VNodeType,
  mi as WHEEL,
  ji as WebComponent,
  Gn as addProviderSubscribe,
  gr as children,
  Ft as classnames,
  Nr as clone,
  Gi as cloneVNode,
  wt as collectProps,
  Mr as combineKeyArray,
  X as createComponentInstance,
  Hi as createContext,
  Yi as createElementJsx,
  Yt as createHandlerInstance,
  $e as createVNode,
  yt as createVNodeByDom,
  vt as createVNodeComment,
  bt as createVNodeComponent,
  Tt as createVNodeFragment,
  w as createVNodeText,
  Re as debounce,
  Zi as default,
  Lt as defaultValue,
  xr as get,
  mt as getContextProvider,
  v as getCurrentComponent,
  Zt as getModule,
  pr as getProps,
  jt as getRootElementInstanceList,
  Kt as getVariable,
  wr as hasVariable,
  Xi as htmlToVNode,
  Ki as hydrate,
  At as ifCheck,
  Rr as initializeGroupVariables,
  T as isArray,
  kr as isBoolean,
  Me as isEqual,
  g as isFunction,
  Xt as isGlobalForceRender,
  Or as isNotString,
  W as isNotUndefined,
  Sr as isNotZero,
  tt as isNumber,
  j as isObject,
  A as isString,
  ce as isUndefined,
  Ht as isZero,
  ye as jsonToVNode,
  vr as keyEach,
  It as keyMap,
  yr as keyMapJoin,
  En as makeEventChecker,
  mr as makeOneElement,
  Pt as makeRequestAnimationFrame,
  Bn as popContextProvider,
  Wi as potal,
  Vt as recoverVariable,
  Jt as refreshModule,
  Pr as registAlias,
  Ar as registElement,
  Hr as registHandler,
  ut as registRootElementInstance,
  Fr as registerModule,
  Ut as removeRenderCallback,
  zt as removeRootElementInstance,
  Vi as render,
  ot as renderComponent,
  Mi as renderFromRoot,
  qt as renderRootElementInstanceList,
  zi as renderToHtml,
  Dt as resetCurrentComponent,
  Wt as retriveAlias,
  Ir as retriveElement,
  _r as retriveHandler,
  Vn as runProviderSubscribe,
  Lr as setGlobalForceRender,
  Er as start,
  et as throttle,
  Pi as useCallback,
  Li as useContext,
  _n as useEffect,
  Bi as useEmit,
  Ai as useMemo,
  wi as useReducer,
  Ii as useRef,
  Fi as useRootContext,
  Di as useSelf,
  Ri as useState,
  Kn as useStore,
  _i as useStoreSet,
  $i as useSubscribe,
  Ui as useTrigger,
  $t as uuid,
  we as uuidShort,
  at as variable,
  Cr as vnodePropsDiff
};
