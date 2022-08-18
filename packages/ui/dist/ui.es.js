var It = Object.defineProperty;
var Mt = (n, e, t) => e in n ? It(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var $ = (n, e, t) => (Mt(n, typeof e != "symbol" ? e + "" : e, t), t);
import { AFTER as Q, UIElement as h, useState as T, useCallback as j, classnames as f, createElementJsx as o, potal as ft, isFunction as m, CLICK as M, IF as C, PREVENT as Ot, STOP as Et, OBSERVER as Tt, PARAMS as Dt, isString as Rt, Dom as R, POINTEROVER as Pt, POINTERLEAVE as gt, useEffect as Bt, POINTERENTER as _t, isNumber as At, FOCUSIN as B, FOCUSOUT as _, isUndefined as z, SCROLL as Lt, SUBSCRIBE_SELF as ot, DEBOUNCE as Kt, FRAME as jt, POINTERSTART as H, POINTERMOVE as N, POINTEREND as W, debounce as Vt, SUBSCRIBE_ALL as q } from "@elf-framework/sapa";
import { parse as E, format as k, RGBtoHSL as bt, RGBtoHSV as lt, checkHueColor as Z, HSVtoHSL as zt, HSVtoRGB as it } from "@elf-framework/color";
const mt = "add/body/first/mousemove", yt = "add/body/mousemove", vt = "add/body/mouseup", K = "body/move/event", is = (n = "move") => Q(`bodyMouseFirstMove ${n}`), rs = (n = "move") => Q(`bodyMouseMove ${n}`), ns = (n = "end") => Q(`bodyMouseUp ${n}`), Ft = {
  width: !0,
  height: !0,
  top: !0,
  left: !0,
  right: !0,
  bottom: !0,
  maxWidth: !0,
  maxHeight: !0,
  minWidth: !0,
  minHeight: !0,
  margin: !0,
  marginTop: !0,
  marginRight: !0,
  marginBottom: !0,
  marginLeft: !0,
  padding: !0,
  paddingTop: !0,
  paddingRight: !0,
  paddingBottom: !0,
  paddingLeft: !0,
  border: !0,
  borderTop: !0,
  borderRight: !0,
  borderBottom: !0,
  borderLeft: !0,
  borderWidth: !0,
  borderTopWidth: !0,
  borderRightWidth: !0,
  borderBottomWidth: !0,
  borderLeftWidth: !0,
  gap: !0
};
function Ut(n, e) {
  return typeof e == "number" && Ft[n] && (e = e + "px"), e;
}
function b(n, e = {}) {
  const t = {};
  return Object.keys(n).forEach((s) => {
    t[e[s] || s] = Ut(s, n[s]);
  }), t;
}
const Ht = {
  borderColor: "--elf--alert-border-color",
  backgroundColor: "--elf--alert-background-color",
  selectedBackgroundColor: "--elf--alert-selected-background-color",
  disabledColor: "--elf--alert-disabled-color",
  color: "--elf--alert-color",
  fontSize: "--elf--alert-font-size",
  fontWeight: "--elf--alert-font-weight",
  height: "--elf--alert-height",
  padding: "--elf--alert-padding",
  borderRadius: "--elf--alert-border-radius"
};
class Nt extends h {
  template() {
    const {
      type: e = "default",
      title: t = "",
      content: s = "",
      style: l = {},
      closable: i = !1,
      weak: r = !1,
      delay: a = 0,
      ...c
    } = this.props, [d, u] = T(a), [p, g] = T(!1);
    this.state.hideCallback = j(
      (y = 0) => {
        u(y);
      },
      [u]
    );
    const v = {
      class: f(["elf--alert", { [e]: !0, weak: r }, { hide: p }]),
      style: {
        ...b(l, Ht),
        transition: `opacity ${d}ms ease-in-out`,
        opacity: p ? 0 : 1
      },
      ...c
    };
    return /* @__PURE__ */ o("div", {
      ...v,
      onContextMenu: (y) => y.preventDefault(),
      onTransitionEnd: () => {
        this.props.onHide && this.props.onHide(), this.destroy(!0);
      }
    }, t ? /* @__PURE__ */ o("div", {
      class: "elf--alert-title"
    }, t) : null, s ? /* @__PURE__ */ o("div", {
      class: "elf--alert-content"
    }, s) : null, i ? /* @__PURE__ */ o("div", {
      class: "elf--alert-close",
      onClick: () => {
        g(!0), d === 0 && (this.props.onHide && this.props.onHide(), this.destroy(!0));
      }
    }, "\xD7") : null);
  }
  hide(e = 0) {
    var t;
    (t = this.state) == null || t.hideCallback(e);
  }
}
function as({
  content: n = void 0,
  delay: e = 0,
  title: t = void 0,
  closable: s = !1,
  options: l = {},
  style: i = {}
}) {
  return ft(
    /* @__PURE__ */ o(Nt, {
      title: t,
      delay: e,
      closable: s,
      style: i
    }, n),
    l
  );
}
const J = {}, Wt = /([A-Z])/g, rt = {
  alignContent: "alignContent",
  alignItems: "alignItems",
  alignSelf: "alignSelf",
  area: "gridArea",
  autoColumns: "gridAutoColumns",
  autoFlow: "gridAutoFlow",
  autoRows: "gridAutoRows",
  backgroundColor: "backgroundColor",
  backgroundImage: "backgroundImage",
  basis: "flexBasis",
  border: "border",
  borderRadius: "borderRadius",
  bottom: "bottom",
  boxShadow: "boxShadow",
  color: "color",
  column: "gridColumn",
  columnEnd: "gridColumnEnd",
  columnGap: "columnGap",
  columnSpan: "gridColumn",
  columnStart: "gridColumnStart",
  direction: "flexDirection",
  display: "display",
  flex: "flex",
  fontFamily: "fontFamily",
  fontSize: "fontSize",
  fontStyle: "fontStyle",
  fontWeight: "fontWeight",
  gap: "gap",
  grow: "flexGrow",
  height: "height",
  justifyContent: "justifyContent",
  left: "left",
  letterSpacing: "letterSpacing",
  lineHeight: "lineHeight",
  margin: "margin",
  marginBlock: "marginBlock",
  marginBlockEnd: "marginBlockEnd",
  marginBlockStart: "marginBlockStart",
  marginBottom: "marginBlockEnd",
  marginInline: "marginInline",
  marginInlineEnd: "marginInlineEnd",
  marginInlineStart: "marginInlineStart",
  marginLeft: "marginInlineStart",
  marginRight: "marginInlineEnd",
  marginTop: "marginBlockStart",
  maxHeight: "maxHeight",
  maxWidth: "maxWidth",
  minHeight: "minHeight",
  minWidth: "minWidth",
  objectFit: "objectFit",
  objectPosition: "objectPosition",
  opacity: "opacity",
  order: "order",
  overflow: "overflow",
  padding: "padding",
  paddingBlock: "paddingBlock",
  paddingBlockEnd: "paddingBlockEnd",
  paddingBlockStart: "paddingBlockStart",
  paddingBottom: "paddingBlockEnd",
  paddingInline: "paddingInline",
  paddingInlineEnd: "paddingInlineEnd",
  paddingInlineStart: "paddingInlineStart",
  paddingLeft: "paddingInlineStart",
  paddingRight: "paddingInlineEnd",
  paddingTop: "paddingBlockStart",
  position: "position",
  resize: "resize",
  right: "right",
  row: "gridRow",
  rowEnd: "gridRowEnd",
  rowGap: "rowGap",
  rowSpan: "gridRow",
  rowStart: "gridRowStart",
  shrink: "flexShrink",
  templateAreas: "gridTemplateAreas",
  templateColumns: "gridTemplateColumns",
  templateRows: "gridTemplateRows",
  textAlign: "textAlign",
  textDecoration: "textDecoration",
  textTransform: "textTransform",
  top: "top",
  transform: "transform",
  transformOrigin: "transformOrigin",
  width: "width",
  whiteSpace: "whiteSpace",
  wrap: "flexWrap"
}, Gt = (n) => {
  if (J[n])
    return J[n];
  const e = n.replace(Wt, "-$1").toLowerCase();
  return J[n] = e, e;
};
function x(n, e = {}) {
  const t = {};
  return Object.keys(e).forEach((s) => {
    t[s] = n + "-" + Gt(s);
  }), t;
}
function V(n) {
  const e = {}, t = {};
  return Object.keys(n).forEach((s) => {
    rt[s] ? e[rt[s]] = n[s] : t[s] = n[s];
  }), { style: e, noneStyle: t };
}
const Xt = {
  borderColor: "--elf--button-border-color",
  backgroundColor: "--elf--button-background-color",
  selectedBackgroundColor: "--elf--button-selected-background-color",
  disabledColor: "--elf--button-disabled-color",
  color: "--elf--button-color",
  fontSize: "--elf--button-font-size",
  fontWeight: "--elf--button-font-weight",
  height: "--elf--button-height",
  padding: "--elf--button-padding",
  borderRadius: "--elf--button-border-radius"
};
class F extends h {
  template() {
    const {
      type: e,
      size: t,
      disabled: s,
      selected: l,
      shape: i,
      quiet: r = void 0,
      outline: a = void 0,
      style: c = {},
      onClick: d,
      content: u,
      ...p
    } = this.props, { style: g } = V(p), v = {
      class: f([
        "elf--button",
        { selected: l, outline: a, quiet: r, [e]: !0 },
        {
          large: t === "large",
          small: t === "small"
        },
        {
          "elf--button-shape-circle": i === "circle",
          "elf--button-shape-round": i === "round"
        }
      ]),
      disabled: s ? "disabled" : void 0,
      style: b(
        {
          ...c,
          ...g
        },
        Xt
      )
    };
    return /* @__PURE__ */ o("button", {
      ...v,
      onClick: d
    }, /* @__PURE__ */ o("span", null, u || ""));
  }
}
const Yt = x("--elf--button-group", {
  backgroundColor: !0,
  color: !0,
  height: !0,
  hoverColor: !0,
  borderColor: !0,
  boxShadow: !0
});
class cs extends h {
  template() {
    const { disabled: e, style: t = {}, content: s, ...l } = this.props, { style: i } = V(l), r = {
      class: f(["elf--button-group"]),
      disabled: e ? "disabled" : void 0,
      style: b(
        {
          ...t,
          ...i
        },
        Yt
      )
    };
    return /* @__PURE__ */ o("div", {
      ...r
    }, s);
  }
}
const qt = {
  borderColor: "--elf--link-button-border-color",
  backgroundColor: "--elf--link-button-background",
  disabledColor: "--elf--link-button-disabled-color",
  color: "--elf--link-button-color",
  fontSize: "--elf--link-button-font-size",
  fontWeight: "--elf--link-button-font-weight",
  padding: "--elf--link-button-padding"
};
class ds extends h {
  template() {
    const { disabled: e, style: t = {}, content: s, onClick: l, href: i } = this.props, r = {
      class: f(["elf--link-button"]),
      disabled: e ? "disabled" : void 0,
      style: {
        ...b(t, qt)
      }
    };
    return /* @__PURE__ */ o("a", {
      ...r,
      onClick: l,
      href: i || "#"
    }, /* @__PURE__ */ o("span", null, s || ""));
  }
}
const Zt = {
  borderColor: "--elf--icon-button-border-color",
  backgroundColor: "--elf--icon-button-background",
  disabledColor: "--elf--icon-button-disabled-color",
  color: "--elf--icon-button-color",
  fontSize: "--elf--icon-button-font-size",
  fontWeight: "--elf--icon-button-font-weight",
  height: "--elf--icon-button-height",
  padding: "--elf--icon-button-padding",
  borderRadius: "--elf--icon-button-border-radius"
};
class Jt extends h {
  template() {
    const {
      type: e,
      icon: t,
      content: s = "",
      size: l,
      disabled: i,
      shape: r,
      style: a = {}
    } = this.props, c = {
      class: f([
        "elf--icon-button",
        {
          primary: e === "primary",
          secondary: e === "secondary",
          outline: e === "outline"
        },
        {
          "elf--icon-button-lg": l === "large",
          "elf--icon-button-sm": l === "small"
        },
        {
          "elf--icon-button-shape-circle": r === "circle",
          "elf--icon-button-shape-round": r === "round"
        }
      ]),
      disabled: i ? "disabled" : void 0,
      style: {
        ...b(a, Zt)
      }
    };
    return /* @__PURE__ */ o("button", {
      type: "button",
      ...c,
      onClick: this.props.onClick
    }, t || s || "");
  }
}
const Qt = {
  borderColor: "--elf--button-border-color",
  backgroundColor: "--elf--button-background-color",
  disabledColor: "--elf--button-disabled-color",
  color: "--elf--button-color",
  fontSize: "--elf--button-font-size",
  fontWeight: "--elf--button-font-weight",
  height: "--elf--button-height",
  padding: "--elf--button-padding",
  borderRadius: "--elf--button-border-radius"
};
class us extends h {
  template() {
    const {
      type: e,
      size: t,
      disabled: s,
      shape: l,
      destructive: i = !1,
      style: r = {},
      onClick: a,
      content: c,
      ...d
    } = this.props, { style: u } = V(d), p = {
      class: f([
        "elf--button",
        {
          primary: e === "primary",
          secondary: e === "secondary",
          outline: e === "outline"
        },
        i ? "destructive" : "",
        {
          large: t === "large",
          small: t === "small"
        },
        {
          "elf--button-shape-circle": l === "circle",
          "elf--button-shape-round": l === "round"
        }
      ]),
      disabled: s ? "disabled" : void 0,
      style: b(
        {
          ...r,
          ...u
        },
        Qt
      )
    };
    return /* @__PURE__ */ o("button", {
      ...p,
      onClick: a
    }, /* @__PURE__ */ o("span", null, c || ""));
  }
}
const Ct = {
  borderColor: "--elf--radio-border-color",
  backgroundColor: "--elf--radio-background",
  disabledColor: "--elf--radio-disabled-color",
  color: "--elf--radio-color",
  fontSize: "--elf--radio-font-size",
  fontWeight: "--elf--radio-font-weight",
  height: "--elf--radio-height",
  padding: "--elf--radio-padding",
  borderRadius: "--elf--radio-border-radius"
};
class te extends h {
  template() {
    const {
      disabled: e,
      style: t = {},
      value: s,
      content: l,
      name: i,
      checked: r = !1,
      onChange: a
    } = this.props, c = {
      class: f([
        "elf--radio",
        {
          disabled: e
        }
      ]),
      style: {
        ...b(t, Ct)
      }
    };
    return /* @__PURE__ */ o("div", {
      ...c
    }, /* @__PURE__ */ o("label", null, /* @__PURE__ */ o("input", {
      ref: "$input",
      type: "radio",
      value: s,
      name: i,
      disabled: e ? "disabled" : void 0,
      checked: r ? "checked" : void 0,
      onChange: (d) => a == null ? void 0 : a(d, s)
    }), l));
  }
}
class ps extends h {
  template() {
    const { disabled: e, style: t = {}, name: s, value: l, onChange: i, content: r } = this.props, a = {
      class: f(["elf--radio-group"]),
      disabled: e ? "disabled" : void 0,
      style: {
        ...b(t, Ct)
      }
    };
    return /* @__PURE__ */ o("div", {
      ...a
    }, r.map((c, d) => /* @__PURE__ */ o(te, {
      ref: `$${d}`,
      name: s,
      value: c.props.value,
      onChange: (u, p) => {
        this.setState({ value: p }, !1), i(u, p);
      },
      checked: c.props.value === l,
      disabled: e
    }, c.props.content)));
  }
  get value() {
    return this.state.value || this.props.value;
  }
  set value(e) {
    this.setState({ value: e });
  }
}
const kt = {
  borderColor: "--elf--checkbox-border-color",
  backgroundColor: "--elf--checkbox-background",
  disabledColor: "--elf--checkbox-disabled-color",
  color: "--elf--checkbox-color",
  fontSize: "--elf--checkbox-font-size",
  fontWeight: "--elf--checkbox-font-weight",
  height: "--elf--checkbox-height",
  padding: "--elf--checkbox-padding",
  borderRadius: "--elf--checkbox-border-radius"
};
class ee extends h {
  template() {
    const {
      disabled: e,
      style: t = {},
      value: s,
      content: l,
      name: i,
      checked: r = !1,
      onChange: a
    } = this.props, c = {
      class: f([
        "elf--checkbox",
        {
          disabled: e
        }
      ]),
      style: {
        ...b(t, kt)
      }
    };
    return /* @__PURE__ */ o("div", {
      ...c
    }, /* @__PURE__ */ o("label", null, /* @__PURE__ */ o("input", {
      ref: "$input",
      type: "checkbox",
      value: s,
      name: i,
      disabled: e ? "disabled" : void 0,
      checked: r ? "checked" : void 0,
      onChange: (d) => a == null ? void 0 : a(d, s)
    }), l));
  }
  get checked() {
    return this.refs.$input.checked();
  }
  get value() {
    return this.props.value;
  }
}
class hs extends h {
  initState() {
    return {
      value: this.props.value || []
    };
  }
  template() {
    const { disabled: e, style: t = {}, value: s, options: l = [], onChange: i } = this.props, r = {
      class: f(["elf--check-group"]),
      disabled: e ? "disabled" : void 0,
      style: {
        ...b(t, kt)
      }
    };
    return /* @__PURE__ */ o("div", {
      ...r
    }, l.map((a, c) => /* @__PURE__ */ o(ee, {
      ref: `$${c}`,
      value: a.value,
      onChange: (d) => {
        i(d, this.getValues());
      },
      checked: s.includes(a.value),
      disabled: e
    }, a.label)));
  }
  getValues() {
    const e = [];
    return this.eachChildren((t) => {
      t.checked && e.push(t.value);
    }), e;
  }
  get disabled() {
    return this.props.disabled;
  }
  get value() {
    return this.getValues();
  }
  set value(e = []) {
    this.setState({ values: e });
  }
}
const se = {
  color: "--elf--divider-color",
  margin: "--elf--divider-margin"
};
class fs extends h {
  template() {
    const { style: e = {}, type: t = "default", margin: s = "10px 0" } = this.props, l = {
      class: f("elf--divider", {
        [t]: !0
      }),
      style: {
        ...b(
          {
            ...e,
            margin: s
          },
          se
        )
      }
    };
    return /* @__PURE__ */ o("div", {
      ...l
    }, /* @__PURE__ */ o("div", {
      className: "elf--divider-inner"
    }));
  }
}
const P = {
  DIVIDER: "divider",
  GROUP: "group",
  MENU: "menu",
  ITEM: "item",
  CUSTOM: "custom",
  LINK: "link"
};
function oe(n = [], e) {
  return n.map((t, s) => {
    const l = `${t.type || "item"}${s}`;
    return Rt(t) && t === "-" ? /* @__PURE__ */ o(nt, {
      ref: l,
      rootClose: e
    }) : m(t) ? /* @__PURE__ */ o(at, {
      ref: `custom${s}`,
      render: t,
      rootClose: e
    }) : t.type === P.CUSTOM ? /* @__PURE__ */ o(at, {
      ref: l,
      ...t,
      rootClose: e
    }) : t.type === P.LINK ? /* @__PURE__ */ o(le, {
      ref: l,
      ...t,
      rootClose: e
    }) : t.type === P.GROUP ? /* @__PURE__ */ o(ie, {
      ref: l,
      ...t,
      rootClose: e
    }) : t.type === P.DIVIDER ? /* @__PURE__ */ o(nt, {
      ref: l,
      ...t,
      rootClose: e
    }) : /* @__PURE__ */ o(re, {
      ref: l,
      ...t,
      rootClose: e
    });
  });
}
function nt({ dashed: n = !1 }) {
  return /* @__PURE__ */ o("li", {
    class: "elf--divider",
    dashed: n
  });
}
function at({ render: n, rootClose: e }) {
  return /* @__PURE__ */ o("li", {
    class: "custom"
  }, n == null ? void 0 : n({ rootClose: e }));
}
function le({ rootClose: n, title: e, link: t }) {
  return /* @__PURE__ */ o("li", {
    class: "link"
  }, /* @__PURE__ */ o("a", {
    href: t,
    onClick: n
  }, e));
}
function ie({ title: n = "" }) {
  return /* @__PURE__ */ o("li", {
    class: "section-title"
  }, n);
}
class re extends h {
  initState() {
    const {
      title: e = "",
      hover: t = !1,
      shortcut: s,
      icon: l,
      items: i = [],
      disabled: r = !1,
      selectable: a,
      selected: c,
      selectedIcon: d = "\u2713",
      closable: u = !0,
      rootClose: p
    } = this.props;
    return {
      title: e,
      hover: t,
      shortcut: s,
      icon: l,
      items: i,
      selectable: a,
      selected: c,
      selectedIcon: d,
      disabled: r,
      closable: u,
      rootClose: p
    };
  }
  template() {
    const {
      title: e = "",
      shortcut: t,
      icon: s = "\u25B6",
      items: l = [],
      hover: i,
      selected: r,
      selectable: a,
      selectedIcon: c,
      disabled: d,
      rootClose: u
    } = this.state, p = l.length > 0, g = m(r) ? r() : r;
    return /* @__PURE__ */ o("li", {
      class: f({
        hover: i
      }),
      disabled: d ? !0 : void 0
    }, a ? /* @__PURE__ */ o("span", {
      class: "selected-icon"
    }, g ? c : void 0) : null, e ? /* @__PURE__ */ o("div", {
      class: "menu-title"
    }, e) : void 0, t ? /* @__PURE__ */ o("div", {
      class: "shortcut"
    }, t) : void 0, s && p ? /* @__PURE__ */ o("div", {
      class: "icon"
    }, s) : void 0, l.length > 0 ? /* @__PURE__ */ o(tt, {
      items: l,
      rootClose: u
    }) : void 0);
  }
  checkClickable() {
    if (this.state.disabled)
      return !1;
    const { type: e = P.ITEM, items: t = [] } = this.props;
    return e === P.ITEM && t.length === 0;
  }
  [M("$el") + C("checkClickable") + Ot + Et](e) {
    var i, r;
    const { selectable: t = !1, onClick: s, closable: l = !0 } = this.props;
    t && this.setSelected(!this.selected), m(s) && s(e, this), l && ((r = (i = this.props).rootClose) == null || r.call(i));
  }
  setSelected(e = !1) {
    this.setState({
      selected: e
    });
  }
  get selected() {
    return this.state.selected;
  }
}
const ne = {
  left: "--elf--menu-left",
  top: "--elf--menu-top",
  backgroundColor: "--elf--menu-background",
  color: "--elf--menu-color",
  fontSize: "--elf--menu-font-size",
  fontWeight: "--elf--menu-font-weight",
  height: "--elf--menu-height",
  padding: "--elf--menu-padding",
  borderRadius: "--elf--menu-border-radius",
  borderColor: "--elf--menu-border-color",
  boxShadow: "--elf--menu-box-shadow",
  width: "--elf--menu-width",
  maxWidth: "--elf--menu-max-width",
  sectionTitleColor: "--elf--menu-section-title-color",
  sectionTitleBackgroundColor: "--elf--menu-section-title-background-color",
  dividerColor: "--elf--menu-divider-color",
  directionLeft: "--elf--menu-direction-left",
  itemPadding: "--elf--menu-item-padding"
};
class tt extends h {
  initState() {
    return {
      intersectionLeft: 0
    };
  }
  template() {
    let {
      style: e = {},
      type: t = "menu",
      x: s = 0,
      y: l = 0,
      direction: i = "left",
      items: r = [],
      rootClose: a,
      autoPosition: c = !1
    } = this.props, d = { ...e };
    if (s !== 0 && (d = { ...d, left: s }), l !== 0 && (d = { ...d, top: l }), c) {
      const p = r.findIndex((g) => g.selectable && g.selected);
      d = { ...d, top: -1 * (p * 24 + 8) };
    }
    const u = {
      "data-direction": i,
      class: f("elf--menu", {
        "elf--menu-contextmenu": t === "contextmenu"
      }),
      style: {
        ...b(d, ne)
      }
    };
    return /* @__PURE__ */ o("menu", {
      ...u,
      onContextMenu: (p) => p.preventDefault()
    }, oe(r, a));
  }
  [Tt("intersection") + Dt({
    root: document.body
  })](e = []) {
    const t = e.find(
      (s) => s.isIntersecting && s.intersectionRatio < 1
    );
    if (t) {
      const { left: s, right: l } = t.boundingClientRect, { left: i, right: r } = t.intersectionRect;
      let a = "left";
      r != l && i != s ? a = "center" : r != l && (a = "right"), this.$el.attr("data-direction", a);
    }
  }
}
function xt() {
  return /* @__PURE__ */ o("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ o("path", {
    d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
  }));
}
class St extends h {
  template() {
    const {
      icon: e,
      content: t,
      items: s,
      menuStyle: l = {},
      disabled: i = void 0,
      autoPosition: r = !1
    } = this.props, { isOpen: a } = this.state;
    return /* @__PURE__ */ o("div", {
      class: "elf--option-menu",
      disabled: i
    }, /* @__PURE__ */ o("div", {
      class: "content",
      onClick: () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    }, e ? /* @__PURE__ */ o("div", {
      class: "elf--option-menu-icon"
    }, e) : void 0, /* @__PURE__ */ o("div", {
      class: "text"
    }, t), /* @__PURE__ */ o("div", {
      class: "arrow"
    }, /* @__PURE__ */ o(xt, null))), a && s ? /* @__PURE__ */ o("div", {
      class: "menu-area"
    }, /* @__PURE__ */ o(tt, {
      autoPosition: r,
      rootClose: () => {
        this.close();
      },
      style: l,
      items: s
    })) : void 0);
  }
  close() {
    this.setState({
      isOpen: !1
    });
  }
  checkClickable(e) {
    return !R.create(e.target).closest("menu-area");
  }
  checkNotInMenu(e) {
    const t = R.create(e.target).closest("elf--option-menu");
    return t ? this.$el.is(t) === !1 : !0;
  }
  [M("document") + C("checkClickable") + C("checkNotInMenu")]() {
    this.close();
  }
}
class gs extends h {
  initState() {
    return {
      value: this.props.value
    };
  }
  template() {
    const {
      disabled: e,
      style: t = {},
      selectedValue: s,
      options: l = [],
      onChange: i
    } = this.props, r = {
      class: "elf--option-strip",
      disabled: e ? "disabled" : void 0,
      style: {
        ...b(t, {})
      }
    };
    return /* @__PURE__ */ o("div", {
      ...r
    }, l.map((a) => /* @__PURE__ */ o("button", {
      type: "button",
      class: f("elf--option-strip-item", {
        selected: s === a.value
      }),
      onClick: () => i == null ? void 0 : i(a.value)
    }, a.icon)));
  }
}
const ae = {
  position: "--elf--dialog-position",
  backgroundColor: "--elf--dialog-background",
  color: "--elf--dialog-color",
  fontSize: "--elf--dialog-font-size",
  fontWeight: "--elf--dialog-font-weight",
  height: "--elf--dialog-height",
  padding: "--elf--dialog-padding",
  borderRadius: "--elf--dialog-border-radius",
  borderColor: "--elf--dialog-border-color",
  boxShadow: "--elf--dialog-box-shadow",
  width: "--elf--dialog-width"
};
class bs extends h {
  initState() {
    const { visible: e = !1, style: t = {}, center: s } = this.props;
    return {
      visible: e,
      style: t,
      center: s
    };
  }
  close() {
    const { onClose: e } = this.props;
    m(e) && e(this);
  }
  ok() {
    const { onOk: e } = this.props;
    m(e) && e(this);
  }
  cancel() {
    const { onCancel: e } = this.props;
    m(e) && e(this);
  }
  makeDefaultTools() {
    const { footer: e, cancelText: t = "Cancel", okText: s = "OK" } = this.props;
    return e ? "" : [
      /* @__PURE__ */ o(F, {
        onClick: () => this.cancel()
      }, t),
      /* @__PURE__ */ o(F, {
        type: "primary",
        onClick: () => this.ok()
      }, s)
    ];
  }
  template() {
    const { style: e = {}, visible: t, center: s } = this.state, l = {
      class: f("elf--dialog", {
        visible: t,
        center: s
      }),
      style: {
        ...b(e, ae)
      }
    };
    return /* @__PURE__ */ o("div", {
      ...l
    }, /* @__PURE__ */ o("div", {
      class: "elf--dialog-title"
    }, /* @__PURE__ */ o("div", {
      class: "elf--dialog-title-text"
    }, "Dialog"), /* @__PURE__ */ o("div", {
      class: "elf--dialog-title-tools",
      ref: "$tools"
    }, this.props.tools || void 0), /* @__PURE__ */ o("div", {
      class: "elf--dialog-title-close",
      ref: "$close"
    }, "\xD7")), /* @__PURE__ */ o("div", {
      class: "elf--dialog-content"
    }, /* @__PURE__ */ o("div", {
      class: "elf--dialog-text"
    }, this.props.content || ""), /* @__PURE__ */ o("div", {
      class: "elf--dialog-content-tools"
    }, this.props.footer ? this.props.footer : this.makeDefaultTools())));
  }
  [M("$close")]() {
    this.close();
  }
}
class U extends h {
  template() {
    const {
      style: e = {},
      class: t = "",
      content: s,
      stack: l,
      wrap: i = !1
    } = this.props, r = {
      class: f("elf--flex", t, {
        stack: l,
        wrap: i
      }),
      style: {
        ...b(e, {})
      }
    };
    return /* @__PURE__ */ o("div", {
      ...r
    }, s);
  }
}
class ms extends U {
  template() {
    const { style: e = {}, content: t } = this.props;
    return /* @__PURE__ */ o(U, {
      stack: !0,
      style: e
    }, t);
  }
}
const ct = {
  MENU: "menu",
  ITEM: "item",
  CUSTOM: "custom"
};
function ce(n = []) {
  return n.map((e, t) => {
    const s = `${e.type}-${t}`;
    return e.type === ct.CUSTOM ? /* @__PURE__ */ o(de, {
      ref: s,
      ...e
    }) : e.type === ct.MENU ? /* @__PURE__ */ o(ue, {
      ref: s,
      ...e
    }) : /* @__PURE__ */ o(et, {
      ref: s,
      ...e
    });
  });
}
class et extends h {
  initialize() {
    super.initialize();
    const e = this.props.events || [];
    e.length && e.forEach((t) => {
      this.on(t, () => {
        this.refresh();
      });
    });
  }
  initState() {
    const { title: e = "", icon: t, selected: s } = this.props;
    return {
      title: e,
      icon: t,
      selected: s
    };
  }
  template() {
    const { title: e = "", icon: t } = this.state;
    return /* @__PURE__ */ o("div", {
      class: f("elf--tools-item", {
        selected: this.selected ? !0 : void 0
      }),
      onClick: this.props.onClick
    }, /* @__PURE__ */ o("button", {
      type: "button"
    }, /* @__PURE__ */ o(U, {
      style: { columnGap: 4 }
    }, [
      t ? /* @__PURE__ */ o("span", {
        class: "icon"
      }, m(t) ? t() : t) : void 0,
      e ? /* @__PURE__ */ o("span", {
        class: "menu-title"
      }, m(e) ? e() : e) : void 0
    ].filter(Boolean))));
  }
  setSelected(e = !1) {
    this.setState({
      selected: e
    });
  }
  get selected() {
    return m(this.state.selected) ? this.state.selected() : this.state.selected;
  }
  set selected(e) {
    this.setSelected(e);
  }
}
class de extends et {
  template() {
    var e, t;
    return /* @__PURE__ */ o("div", {
      class: "elf--tools-item custom"
    }, (t = (e = this.props).render) == null ? void 0 : t.call(e));
  }
}
class ue extends et {
  initState() {
    const {
      title: e = "",
      icon: t,
      selected: s,
      disabled: l,
      opened: i,
      items: r,
      direction: a,
      menuStyle: c
    } = this.props;
    return {
      title: e,
      icon: t,
      selected: s,
      opened: i,
      items: r,
      direction: a,
      disabled: l,
      menuStyle: c,
      rootClose: this.close.bind(this)
    };
  }
  template() {
    const {
      title: e = "",
      icon: t,
      disabled: s,
      selected: l,
      items: i = [],
      opened: r = !1,
      direction: a = "left",
      menuStyle: c
    } = this.state, d = i.length > 0, u = l ? m(l) ? l() : l : void 0;
    return /* @__PURE__ */ o("div", {
      class: f("elf--tools-item", {
        selected: u,
        "has-items": d
      }),
      disabled: s
    }, /* @__PURE__ */ o("button", {
      type: "button"
    }, /* @__PURE__ */ o(U, {
      style: { columnGap: 4 }
    }, [
      t ? /* @__PURE__ */ o("span", {
        class: "icon"
      }, m(t) ? t() : t) : void 0,
      e ? /* @__PURE__ */ o("span", {
        class: "menu-title"
      }, m(e) ? e() : e) : void 0
    ].filter(Boolean)), d ? /* @__PURE__ */ o("span", {
      class: f("arrow", { opened: r })
    }, /* @__PURE__ */ o(xt, null)) : void 0), r && !s ? /* @__PURE__ */ o("div", {
      class: "menu-area",
      style: { backgroundColor: "yellow" }
    }, /* @__PURE__ */ o("div", {
      class: "background",
      "data-direction": a
    }), /* @__PURE__ */ o("div", {
      class: "arrow"
    }), /* @__PURE__ */ o(tt, {
      ref: "$menu",
      items: i,
      direction: a,
      rootClose: this.state.rootClose,
      style: {
        ...c || {},
        top: "calc(100% + 5px)"
      }
    })) : void 0);
  }
  runCallback(e, t) {
    m(e) && e(t, this);
  }
  open() {
    this.state.opened || this.setState({
      rect: this.$el.rect(),
      opened: !0
    });
  }
  close() {
    this.state.opened && this.setState({
      opened: !1
    });
  }
  toggle() {
    this.state.opened ? this.close() : (this.setState(
      {
        rect: this.$el.rect()
      },
      !1
    ), this.open());
  }
  checkClickable(e) {
    return !R.create(e.target).closest("menu-area");
  }
  checkTriggerClick() {
    const { trigger: e = "click", onClick: t } = this.props;
    return e === "click" || e === "hover" && m(t);
  }
  checkTriggerOver() {
    return this.props.trigger === "hover";
  }
  [Pt("$el") + C("checkTriggerOver")]() {
    this.open();
  }
  checkNotInMenu(e) {
    const t = R.create(e.target).closest("elf--tools-item");
    return t ? this.$el.is(t) === !1 : !0;
  }
  [gt("$el") + C("checkTriggerOver")]() {
    this.close();
  }
  [M("document") + C("checkClickable") + C("checkNotInMenu")]() {
    this.close();
  }
  [M("$el") + C("checkClickable") + C("checkTriggerClick")](e) {
    R.create(e.target).hasClass("arrow") ? (this.toggle(), this.state.opened ? this.runCallback(this.props.onOpen, e) : this.runCallback(this.props.onClose, e), this.runCallback(this.props.onClick, e)) : (this.close(), this.runCallback(this.props.onClick, e));
  }
}
const pe = x("--elf--tools", {
  backgroundColor: !0,
  color: !0,
  height: !0
});
class he extends h {
  template() {
    const { style: e = {} } = this.props, t = {
      class: f("elf--tools"),
      style: {
        ...b(e, pe)
      }
    };
    return /* @__PURE__ */ o("div", {
      ...t,
      onContextMenu: (s) => s.preventDefault()
    }, ce(this.props.items));
  }
}
function fe(n = []) {
  return n.map((e, t) => {
    const s = `${e.type || "item"}${t}`;
    return /* @__PURE__ */ o(ge, {
      ref: s,
      ...e
    });
  });
}
class ge extends h {
  template() {
    const { items: e, style: t } = this.props;
    return /* @__PURE__ */ o("div", {
      class: "elf--toolbar-item"
    }, /* @__PURE__ */ o(he, {
      ref: "$tools",
      items: e,
      style: t
    }));
  }
}
const be = x("--elf--toolbar", {
  backgroundColor: !0,
  color: !0,
  height: !0,
  align: !0
});
class ys extends h {
  template() {
    const { style: e = {}, align: t, items: s = [] } = this.props, l = {
      class: f("elf--toolbar", {
        [t]: !0
      }),
      style: {
        ...b(e, be)
      }
    };
    return /* @__PURE__ */ o("div", {
      ...l,
      onContextMenu: (i) => i.preventDefault()
    }, fe(s));
  }
}
const me = {
  backgroundColor: "--elf--notification-background",
  color: "--elf--notification-color",
  height: "--elf--notification-height",
  hoverColor: "--elf--notification-hover-color",
  borderColor: "--elf--notification-border-color",
  boxShadow: "--elf--notification-box-shadow",
  toolsBorderColor: "--elf--notification-tools-border-color",
  toolsBorderRadius: "--elf--notification-tools-border-radius"
};
class vs extends h {
  template() {
    const {
      style: e = {},
      icon: t,
      content: s,
      tools: l,
      direction: i = "top-left"
    } = this.props, r = {
      class: f(
        "elf--notification",
        `elf--notification-direction-${i}`
      ),
      style: {
        ...b(e, me)
      }
    };
    return /* @__PURE__ */ o("div", {
      ...r,
      onContextMenu: (a) => a.preventDefault()
    }, t ? /* @__PURE__ */ o("div", {
      class: "elf--notification-icon"
    }, t) : void 0, /* @__PURE__ */ o("div", {
      class: "elf--notification-content"
    }, /* @__PURE__ */ o("div", {
      class: "elf--notification-text"
    }, s)), /* @__PURE__ */ o("div", {
      class: "elf--notification-tools"
    }, l || []));
  }
}
const ye = x("--elf--visual-bell", {
  backgroundColor: !0,
  color: !0,
  height: !0,
  hoverColor: !0,
  borderColor: !0,
  boxShadow: !0,
  toolsBorderColor: !0,
  toolsBorderRadius: !0,
  hgap: !0,
  vgap: !0
});
class ve extends h {
  template() {
    const { style: e = {}, content: t, delay: s = 0, direction: l = "bottom" } = this.props, [i, r] = T(s), [a, c] = T(!1);
    this.state.hideCallback = j(
      (u = 0) => {
        r(u);
      },
      [r]
    );
    const d = {
      class: f(
        "elf--visual-bell",
        `elf--visual-bell-direction-${l}`,
        { hide: a }
      ),
      style: {
        ...b(e, ye),
        transition: `opacity ${i}ms ease-in-out`,
        opacity: a ? 0 : 1
      }
    };
    return Bt(() => {
      i > 0 && (a || this.props.onShow && this.props.onShow(), setTimeout(() => {
        a || c(!0);
      }, i));
    }, [i, a]), /* @__PURE__ */ o("div", {
      class: "elf--visual-bell",
      ...d,
      onContextMenu: (u) => u.preventDefault(),
      onTransitionEnd: () => {
        this.props.onHide && this.props.onHide(), this.destroy(!0);
      }
    }, /* @__PURE__ */ o("div", {
      class: "elf--visual-bell-content"
    }, /* @__PURE__ */ o("div", {
      class: "elf--visual-bell-text"
    }, t)), /* @__PURE__ */ o("div", {
      class: "elf--visual-bell-tools"
    }, this.props.tools || []));
  }
  hide(e = 0) {
    var t;
    (t = this.state) == null || t.hideCallback(e);
  }
}
function Cs({
  content: n = "",
  delay: e = 0,
  direction: t = "bottom",
  tools: s = [],
  options: l = {},
  style: i = {}
}) {
  return ft(
    /* @__PURE__ */ o(ve, {
      delay: e,
      direction: t,
      tools: s,
      style: i
    }, n),
    l
  );
}
const Ce = x("--elf--tooltip", {
  backgroundColor: !0,
  color: !0,
  height: !0,
  hoverColor: !0,
  borderColor: !0,
  boxShadow: !0,
  toolsBorderColor: !0,
  toolsBorderRadius: !0,
  hgap: !0,
  vgap: !0,
  delay: !0
});
class ks extends h {
  initState() {
    return {
      trigger: this.props.trigger || "hover",
      show: this.props.show || !1
    };
  }
  template() {
    const {
      style: e = {},
      message: t = "",
      content: s,
      position: l = "bottom"
    } = this.props, { show: i } = this.state, r = {
      class: f("elf--tooltip", `elf--tooltip-position-${l}`),
      style: {
        ...b(e, Ce)
      }
    };
    return /* @__PURE__ */ o("div", {
      class: "elf--tooltip",
      ...r
    }, /* @__PURE__ */ o("div", {
      class: "elf--tooltip-content"
    }, s), i || this.props.show ? /* @__PURE__ */ o("div", {
      class: "elf--tooltip-message"
    }, /* @__PURE__ */ o("div", {
      class: "arrow"
    }), /* @__PURE__ */ o("div", {
      class: "elf--toolltip-message-content"
    }, t)) : void 0);
  }
  open() {
    this.setState({
      show: !0
    });
  }
  close() {
    this.setState({
      show: !1
    });
  }
  toggle() {
    this.setState({
      show: !this.state.show
    });
  }
  checkClickable(e) {
    return !R.create(e.target).closest("elf--tooltip");
  }
  checkTriggerClick() {
    return this.state.trigger === "click";
  }
  checkTriggerOver() {
    return this.state.trigger === "hover";
  }
  [_t("$el") + C("checkTriggerOver")]() {
    this.open();
  }
  checkNotInTooltip(e) {
    const t = R.create(e.target).closest("elf--tooltip");
    return t ? this.$el.is(t) === !1 : !0;
  }
  [gt("$el") + C("checkTriggerOver")]() {
    this.close();
  }
  [M("$el") + C("checkClickable") + C("checkTriggerClick")]() {
    this.toggle();
  }
}
const ke = {
  backgroundColor: "--elf--panel-background",
  color: "--elf--panel-color",
  height: "--elf--panel-height",
  hoverColor: "--elf--panel-hover-color",
  borderColor: "--elf--panel-border-color",
  boxShadow: "--elf--panel-box-shadow",
  padding: "--elf--panel-padding",
  borderRadius: "--elf--panel-border-radius"
};
class xs extends h {
  template() {
    const {
      style: e = {},
      content: t,
      theme: s,
      title: l = "",
      tools: i = [],
      mode: r,
      footer: a
    } = this.props, c = {
      class: f("elf--panel", `elf--panel-mode-${r}`),
      "data-theme": s,
      style: {
        ...b(e, ke)
      }
    };
    return /* @__PURE__ */ o("div", {
      ...c
    }, l ? /* @__PURE__ */ o("div", {
      class: "elf--panel-title"
    }, /* @__PURE__ */ o("div", {
      class: "elf--panel-title-text"
    }, l), i ? /* @__PURE__ */ o("div", {
      class: "elf--panel-title-tools"
    }, i || []) : void 0) : void 0, /* @__PURE__ */ o("div", {
      class: "elf--panel-content"
    }, t), a ? /* @__PURE__ */ o("div", {
      class: "elf--panel-footer"
    }, a) : void 0);
  }
}
const xe = x("--elf--tabstrip", {
  backgroundColor: !0,
  color: !0,
  height: !0,
  width: !0,
  hoverColor: !0,
  borderColor: !0,
  hgap: !0,
  vgap: !0,
  delay: !0
});
class Se extends h {
  template() {
    var r;
    const { style: e = {}, items: t = [], fitted: s, align: l = "left" } = this.props, i = {
      class: f("elf--tabstrip", {
        "is-fitted": s
      }),
      style: {
        ...b(e, xe)
      }
    };
    return /* @__PURE__ */ o("div", {
      ...i
    }, /* @__PURE__ */ o("div", {
      class: f("elf--tabstrip-content", {
        [`align-${l}`]: !0
      })
    }, t.map((a) => {
      const c = !!a.selected, d = !!a.disabled, u = a.selectedStyle || {}, p = a.style || {};
      return /* @__PURE__ */ o("div", {
        class: f("elf--tabstrip-item", {
          selected: c,
          disabled: d
        }),
        style: c ? u : p
      }, /* @__PURE__ */ o("div", {
        onClick: a.onClick
      }, a.title));
    })), (r = this.props.tools) != null && r.length ? /* @__PURE__ */ o("div", {
      class: "elf--tabstrip-tools"
    }, this.props.tools.map((a) => /* @__PURE__ */ o("div", {
      class: "elf--tabstrip-tool"
    }, a))) : void 0);
  }
}
const we = x("--elf--tab", {
  backgroundColor: !0,
  color: !0,
  height: !0,
  width: !0,
  hoverColor: !0,
  borderColor: !0
});
function $e({ selected: n, content: e }) {
  return /* @__PURE__ */ o("div", {
    class: f("elf--tab-content-item", {
      selected: n
    })
  }, e);
}
class Ss extends h {
  initState() {
    return {
      activeKey: this.props.activeKey
    };
  }
  changeActiveKey(e) {
    const { onChange: t } = this.props;
    this.setState({ activeKey: e }), m(t) && t(e);
  }
  template() {
    const { style: e = {}, content: t, full: s, fitted: l, align: i = "left" } = this.props, { activeKey: r } = this.state, a = {
      class: f("elf--tab", {
        full: s
      }),
      style: b(e, we)
    };
    return /* @__PURE__ */ o("div", {
      ...a
    }, /* @__PURE__ */ o("div", {
      class: "elf--tab-header"
    }, /* @__PURE__ */ o(Se, {
      fitted: l,
      align: i,
      items: t.map((c) => {
        const { title: d, key: u, onClick: p, disabled: g, style: v, selectedStyle: y } = c.props;
        return {
          title: d,
          style: v,
          disabled: g,
          selectedStyle: y,
          selected: u === r,
          onClick: () => {
            this.changeActiveKey(u), p && p();
          }
        };
      })
    })), /* @__PURE__ */ o("div", {
      class: "elf--tab-body"
    }, t.map((c) => {
      const { key: d, content: u, disabled: p } = c.props;
      return /* @__PURE__ */ o($e, {
        key: d,
        selected: d === r,
        disabled: p
      }, u);
    })));
  }
}
class ws extends h {
  template() {
    const { style: e = {}, content: t, wrap: s = !1 } = this.props, l = {
      class: f("elf--layout", {
        stack: this.props.stack,
        wrap: s
      }),
      style: {
        ...b(e, {
          backgroundColor: "--elf--layout-background-color",
          gap: "--elf--layout-gap"
        })
      }
    };
    return /* @__PURE__ */ o("div", {
      ...l
    }, t);
  }
}
function dt(n) {
  if (typeof n == "number" ? n = Array.from({ length: n }, () => 1) : Array.isArray(n) === !1 && (n = [n]), n.length !== 0)
    return n.map((e) => At(e) ? `${e}fr` : e).join(" ");
}
class st extends h {
  template() {
    const {
      class: e = "",
      style: t = {},
      columns: s = [],
      rows: l = [],
      gap: i,
      columnGap: r,
      rowGap: a,
      content: c,
      ...d
    } = this.props, { style: u, noneStyle: p } = V(d), g = {
      class: f("elf--grid", e),
      style: {
        gridTemplateColumns: dt(s),
        gridTemplateRows: dt(l),
        gap: i,
        columnGap: r,
        rowGap: a,
        ...b({ ...t, ...u }, {})
      },
      ...p
    };
    return /* @__PURE__ */ o("div", {
      ...g
    }, c);
  }
}
const Ie = x("--elf--input-editor", {
  borderColor: !0,
  backgroundColor: !0,
  disabledColor: !0,
  color: !0,
  fontSize: !0,
  fontWeight: !0,
  height: !0,
  padding: !0,
  borderRadius: !0,
  placeholderColor: !0,
  emptyColor: !0
});
class Me extends h {
  initState() {
    const {
      style: e = {},
      type: t = "text",
      autoFocus: s = !1,
      focused: l,
      hover: i = !1,
      value: r,
      placeholder: a,
      disabled: c
    } = this.props;
    return {
      style: e,
      type: t,
      autoFocus: s,
      hover: i || !1,
      focused: l || !1,
      placeholder: a,
      value: r,
      disabled: c
    };
  }
  template() {
    const { icon: e, tools: t } = this.props, {
      style: s = {},
      type: l = "text",
      focused: i = !1,
      hover: r = !1,
      value: a,
      placeholder: c,
      disabled: d
    } = this.state, u = {
      class: f([
        "elf--input-editor",
        {
          focused: i,
          hover: r,
          disabled: d,
          icon: e
        }
      ]),
      style: {
        ...b(s, Ie)
      }
    }, p = {
      onInput: this.props.onInput,
      onChange: this.props.onChange,
      onKeyDown: this.props.onKeyDown,
      onKeyUp: this.props.onKeyUp,
      onKeyPress: this.props.onKeyPress,
      onSelect: this.props.onSelect,
      onPaste: this.props.onPaste,
      onCut: this.props.onCut,
      onCopy: this.props.onCopy
    }, g = {
      type: l,
      disabled: d,
      placeholder: c || "",
      value: a || ""
    };
    return /* @__PURE__ */ o("div", {
      ...u
    }, e ? /* @__PURE__ */ o("div", {
      class: "elf--input-editor-icon"
    }, e) : void 0, /* @__PURE__ */ o("div", {
      class: "elf--input-area"
    }, /* @__PURE__ */ o("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ o("input", {
      ref: "$input",
      ...g,
      ...p
    }))), t || void 0);
  }
  onMounted() {
    this.state.autoFocus && setTimeout(() => {
      this.refs.$input.focus(), this.refs.$input.select();
    }, 10);
  }
  runCallback(e, t) {
    m(e) && e(t, this);
  }
  [B("$input")](e) {
    this.setState({
      focused: !0
    }), this.runCallback(this.props.onFocus, e);
  }
  [_("$input")](e) {
    this.setState({
      focused: !1
    }), this.runCallback(this.props.onBlur, e);
  }
  get value() {
    return this.refs.$input.value;
  }
  set value(e) {
    this.refs.$input.value = e;
  }
  get selectedValue() {
    return document.getSelection().toString();
  }
}
function wt({ color: n }) {
  const e = E(n), { r: t, g: s, b: l } = e;
  return /* @__PURE__ */ o("div", {
    class: "elf--color-view"
  }, /* @__PURE__ */ o("div", {
    class: "elf--color-view-color",
    style: { backgroundColor: k({ r: t, g: s, b: l }, "rgb") }
  }), /* @__PURE__ */ o("div", {
    class: "elf--color-view-opacity-pattern"
  }, /* @__PURE__ */ o("div", {
    class: "elf--color-view-opacity",
    style: { backgroundColor: k(e, "rgb") }
  })));
}
const Oe = x("--elf--input-paint", {
  borderColor: !0,
  backgroundColor: !0,
  disabledColor: !0,
  color: !0,
  fontSize: !0,
  fontWeight: !0,
  height: !0,
  padding: !0,
  borderRadius: !0,
  placeholderColor: !0,
  emptyColor: !0
});
class Ee extends h {
  constructor() {
    super(...arguments);
    $(this, "keyup", (t) => {
      switch (t.preventDefault(), t.key) {
        case "ArrowUp":
          this.increaseOpacity(t);
          break;
        case "ArrowDown":
          this.decreaseOpacity(t);
          break;
      }
    });
  }
  initState() {
    const {
      style: t = {},
      autoFocus: s = !1,
      focused: l,
      hover: i = !1,
      value: r,
      placeholder: a,
      disabled: c,
      hasOpacity: d = !0
    } = this.props, u = E(r);
    return {
      style: t,
      autoFocus: s,
      hover: i || !1,
      focused: l || !1,
      placeholder: a,
      value: r,
      parsedColor: u,
      disabled: c,
      hasOpacity: d
    };
  }
  template() {
    const { icon: t, hideColorView: s = !1 } = this.props, {
      style: l = {},
      focused: i = !1,
      hover: r = !1,
      value: a,
      placeholder: c,
      disabled: d,
      parsedColor: u
    } = this.state, p = {
      class: f([
        "elf--input-paint",
        {
          focused: i,
          hover: r,
          disabled: d,
          icon: t
        }
      ]),
      style: {
        ...b(l, Oe)
      }
    }, g = {
      onInput: this.props.onInput,
      onChange: this.props.onChange,
      onKeyDown: this.props.onKeyDown,
      onKeyUp: this.props.onKeyUp,
      onKeyPress: this.props.onKeyPress,
      onSelect: this.props.onSelect,
      onPaste: this.props.onPaste,
      onCut: this.props.onCut,
      onCopy: this.props.onCopy
    }, { r: v, g: y, b: S } = u, w = {
      disabled: d,
      placeholder: c || "",
      value: k({ r: v, g: y, b: S }, "hex")
    };
    return /* @__PURE__ */ o("div", {
      ...p
    }, s ? void 0 : /* @__PURE__ */ o("div", {
      class: "elf--input-paint-icon"
    }, /* @__PURE__ */ o(wt, {
      color: a
    })), /* @__PURE__ */ o("div", {
      class: "elf--input-area"
    }, /* @__PURE__ */ o("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ o("input", {
      class: "color",
      ref: "$input",
      ...w,
      ...g
    }))), this.state.hasOpacity && /* @__PURE__ */ o("div", {
      class: "elf--input-opacity"
    }, /* @__PURE__ */ o("input", {
      class: "opacity",
      value: `${u.a * 100}%`,
      onKeyUp: this.keyup
    })));
  }
  updateOpacity(t) {
    this.setState({
      parsedColor: {
        ...this.state.parsedColor,
        a: this.state.parsedColor.a + t
      }
    });
  }
  increaseOpacity() {
    this.updateOpacity(0.01);
  }
  decreaseOpacity() {
    this.updateOpacity(-0.01);
  }
  onMounted() {
    super.onMounted(), this.state.autoFocus && setTimeout(() => {
      this.refs.$input.focus(), this.refs.$input.select();
    }, 10);
  }
  runCallback(t, s) {
    m(t) && t(s, this);
  }
  [M("$el .elf--input-paint-icon")](t) {
    var s, l;
    (l = (s = this.props).onClickColorView) == null || l.call(s, t);
  }
  [B("$el input")](t) {
    this.setState({
      focused: !0
    }), t.target.select(), this.runCallback(this.props.onFocus, t);
  }
  [_("$el input")](t) {
    this.setState({
      focused: !1
    }), this.runCallback(this.props.onBlur, t);
  }
  get value() {
    return this.refs.$input.value;
  }
  set value(t) {
    this.refs.$input.value = t;
  }
  get selectedValue() {
    return document.getSelection().toString();
  }
}
const Te = x("--elf--input-paint", {
  borderColor: !0,
  backgroundColor: !0,
  disabledColor: !0,
  color: !0,
  fontSize: !0,
  fontWeight: !0,
  height: !0,
  padding: !0,
  borderRadius: !0,
  placeholderColor: !0,
  emptyColor: !0
});
class De extends h {
  constructor() {
    super(...arguments);
    $(this, "keydownColor", (t) => {
      const s = Math.floor(t.target.selectionStart / 2) * 2;
      let l = "";
      switch (s < 2 ? l = "r" : s < 4 ? l = "g" : l = "b", t.key) {
        case "ArrowUp":
          t.preventDefault(), this.increaseColor(l), t.target.setSelectionRange(s, s + 2);
          break;
        case "ArrowDown":
          t.preventDefault(), this.decreaseColor(l), t.target.setSelectionRange(s, s + 2);
          break;
      }
    });
    $(this, "keyupColor", (t) => {
      if (!(t.key === "ArrowUp" || t.key === "ArrowDown")) {
        if (t.target.value.length === 3 || t.target.value.length === 6) {
          const s = E("#" + t.target.value);
          s.type === "hex" && this.isInvalidColor(s) === !1 && this.updateFullColor(s);
        }
      }
    });
    $(this, "keydown", (t) => {
      switch (t.preventDefault(), t.stopPropagation(), t.key) {
        case "ArrowUp":
          this.increaseOpacity(t), t.target.select();
          break;
        case "ArrowDown":
          this.decreaseOpacity(t), t.target.select();
          break;
      }
    });
  }
  initState() {
    const {
      style: t = {},
      autoFocus: s = !1,
      focused: l,
      hover: i = !1,
      value: r,
      placeholder: a,
      disabled: c,
      hasOpacity: d = !0
    } = this.props, u = E(r);
    return {
      style: t,
      autoFocus: s,
      hover: i || !1,
      focused: l || !1,
      placeholder: a,
      value: r,
      parsedColor: u,
      disabled: c,
      hasOpacity: d
    };
  }
  template() {
    const { icon: t, value: s } = this.props, {
      style: l = {},
      focused: i = !1,
      hover: r = !1,
      placeholder: a,
      disabled: c
    } = this.state, { r: d, g: u, b: p, a: g } = E(s), v = {
      class: f([
        "elf--input-paint",
        {
          focused: i,
          hover: r,
          disabled: c,
          icon: t,
          invalid: this.isInvalidColor({ r: d, g: u, b: p, a: g })
        }
      ]),
      style: {
        ...b(l, Te)
      }
    }, y = {
      onInput: this.props.onInput,
      onChange: this.props.onChange,
      onKeyDown: this.props.onKeyDown,
      onKeyUp: this.props.onKeyUp,
      onKeyPress: this.props.onKeyPress,
      onSelect: this.props.onSelect,
      onPaste: this.props.onPaste,
      onCut: this.props.onCut,
      onCopy: this.props.onCopy
    }, S = {
      disabled: c,
      placeholder: a || "",
      value: k({ r: d, g: u, b: p }, "hex").replace("#", "")
    };
    return this.setState({
      parsedColor: {
        r: d,
        g: u,
        b: p,
        a: g
      }
    }, !1), /* @__PURE__ */ o("div", {
      ...v
    }, /* @__PURE__ */ o("div", {
      class: "elf--input-area"
    }, /* @__PURE__ */ o("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ o("input", {
      class: "color",
      type: "text",
      "data-type": "hex",
      maxlength: 6,
      ...S,
      ...y,
      onKeyDown: this.keydownColor,
      onKeyUp: this.keyupColor
    }))), this.state.hasOpacity && /* @__PURE__ */ o("div", {
      class: "elf--input-opacity"
    }, /* @__PURE__ */ o("input", {
      class: "opacity",
      value: `${Math.round(g * 100 * 100) / 100}%`,
      onKeyDown: this.keydown
    })));
  }
  updateOpacity(t) {
    this.setState({
      parsedColor: {
        ...this.state.parsedColor,
        a: Math.max(0, Math.min(1, Math.round((this.state.parsedColor.a + t) * 100) / 100))
      }
    }, !1), this.runCallback(this.props.onChange);
  }
  updateFullColor(t) {
    this.setState({
      parsedColor: t
    }, !1), this.runCallback(this.props.onChange);
  }
  updateColor(t, s) {
    const l = Math.max(0, Math.min(255, this.state.parsedColor[t] + s));
    this.state.parsedColor[t] !== l && (this.setState({
      parsedColor: {
        ...this.state.parsedColor,
        [t]: Math.max(0, Math.min(255, this.state.parsedColor[t] + s))
      }
    }, !1), this.runCallback(this.props.onChange));
  }
  increaseColor(t) {
    this.updateColor(t, 1);
  }
  decreaseColor(t) {
    this.updateColor(t, -1);
  }
  increaseOpacity() {
    this.updateOpacity(0.01);
  }
  decreaseOpacity() {
    this.updateOpacity(-0.01);
  }
  isInvalidColor(t) {
    return isNaN(t.r) || isNaN(t.g) || isNaN(t.b) || isNaN(t.a) || z(t.r) || z(t.g) || z(t.b) || z(t.a);
  }
  onMounted() {
    this.state.autoFocus && setTimeout(() => {
      const t = this.$el.$("input[data-type='hex']");
      t.focus(), t.select();
    }, 10);
  }
  runCallback(t, s) {
    m(t) && t(this.value, this);
  }
  [M("$el .elf--input-paint-icon")](t) {
    var s, l;
    (l = (s = this.props).onClickColorView) == null || l.call(s, t);
  }
  [B("$el input")](t) {
    this.setState({
      focused: !0
    }), t.target.select(), this.runCallback(this.props.onFocus, t);
  }
  [_("$el input")](t) {
    this.setState({
      focused: !1
    }), this.runCallback(this.props.onBlur, t);
  }
  get value() {
    const { parsedColor: t } = this.state, { r: s, g: l, b: i, a: r } = t;
    return k({ r: s, g: l, b: i, a: r }, "hex");
  }
  set value(t) {
    this.refs.$input.value = t;
  }
  get selectedValue() {
    return document.getSelection().toString();
  }
}
const Re = x("--elf--input-paint", {
  borderColor: !0,
  backgroundColor: !0,
  disabledColor: !0,
  color: !0,
  fontSize: !0,
  fontWeight: !0,
  height: !0,
  padding: !0,
  borderRadius: !0,
  placeholderColor: !0,
  emptyColor: !0
});
class Pe extends h {
  constructor() {
    super(...arguments);
    $(this, "keydownColor", (t) => {
      switch (t.key) {
        case "ArrowUp":
          t.preventDefault(), this.increaseColor(t.target.getAttribute("data-type")), t.target.select();
          break;
        case "ArrowDown":
          t.preventDefault(), this.decreaseColor(t.target.getAttribute("data-type")), t.target.select();
          break;
      }
    });
    $(this, "keydown", (t) => {
      switch (t.key) {
        case "ArrowUp":
          t.preventDefault(), this.increaseOpacity(t), t.target.select();
          break;
        case "ArrowDown":
          t.preventDefault(), this.decreaseOpacity(t), t.target.select();
          break;
        case "Tab":
          t.preventDefault();
          var s = this.$el.$("input[data-type='r']");
          s.focus(), s.select();
          break;
      }
    });
  }
  initState() {
    const {
      style: t = {},
      autoFocus: s = !1,
      focused: l,
      hover: i = !1,
      placeholder: r,
      disabled: a,
      hasOpacity: c = !0
    } = this.props;
    return {
      style: t,
      autoFocus: s,
      hover: i || !1,
      focused: l || !1,
      placeholder: r,
      disabled: a,
      hasOpacity: c
    };
  }
  template() {
    const { icon: t, value: s } = this.props, {
      style: l = {},
      focused: i = !1,
      hover: r = !1,
      placeholder: a,
      disabled: c
    } = this.state, d = {
      class: f([
        "elf--input-paint",
        {
          focused: i,
          hover: r,
          disabled: c,
          icon: t
        }
      ]),
      style: {
        ...b(l, Re)
      }
    }, { r: u, g: p, b: g, a: v } = E(s), y = {
      disabled: c,
      placeholder: a || "",
      min: 0,
      max: 255
    };
    return this.setState(
      {
        parsedColor: { r: u, g: p, b: g, a: v }
      },
      !1
    ), /* @__PURE__ */ o("div", {
      ...d
    }, /* @__PURE__ */ o("div", {
      class: "elf--input-area"
    }, /* @__PURE__ */ o(st, {
      columns: 3
    }, /* @__PURE__ */ o("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ o("input", {
      class: "color",
      "data-type": "r",
      tabIndex: 1,
      value: u,
      ...y,
      onKeyDown: this.keydownColor
    })), /* @__PURE__ */ o("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ o("input", {
      class: "color",
      "data-type": "g",
      tabIndex: 2,
      value: p,
      ...y,
      onKeyDown: this.keydownColor
    })), /* @__PURE__ */ o("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ o("input", {
      class: "color",
      "data-type": "b",
      tabIndex: 3,
      value: g,
      ...y,
      onKeyDown: this.keydownColor
    })))), this.state.hasOpacity && /* @__PURE__ */ o("div", {
      class: "elf--input-opacity"
    }, /* @__PURE__ */ o("input", {
      type: "text",
      tabIndex: 4,
      class: "opacity",
      value: `${Math.round(v * 100 * 100) / 100}%`,
      onKeyDown: this.keydown
    })));
  }
  updateOpacity(t) {
    this.setState(
      {
        parsedColor: {
          ...this.state.parsedColor,
          a: Math.max(
            0,
            Math.min(
              1,
              Math.round((this.state.parsedColor.a + t) * 100) / 100
            )
          )
        }
      },
      !1
    ), this.runCallback(this.props.onChange);
  }
  updateColor(t, s) {
    this.setState(
      {
        parsedColor: {
          ...this.state.parsedColor,
          [t]: Math.max(
            0,
            Math.min(255, this.state.parsedColor[t] + s)
          )
        }
      },
      !1
    ), this.runCallback(this.props.onChange);
  }
  increaseColor(t) {
    this.updateColor(t, 1);
  }
  decreaseColor(t) {
    this.updateColor(t, -1);
  }
  increaseOpacity() {
    this.updateOpacity(0.01);
  }
  decreaseOpacity() {
    this.updateOpacity(-0.01);
  }
  onMounted() {
    this.state.autoFocus && setTimeout(() => {
      const t = this.$el.$("input[data-type='r']");
      t.focus(), t.select();
    }, 10);
  }
  runCallback(t) {
    m(t) && t(this.value, this);
  }
  [M("$el .elf--input-paint-icon")](t) {
    var s, l;
    (l = (s = this.props).onClickColorView) == null || l.call(s, t);
  }
  [B("$el input")](t) {
    this.setState({
      focused: !0
    }), t.target.select(), this.runCallback(this.props.onFocus, t);
  }
  [_("$el input")](t) {
    this.setState({
      focused: !1
    }), this.runCallback(this.props.onBlur, t);
  }
  get value() {
    const { parsedColor: t } = this.state, { r: s, g: l, b: i, a: r } = t;
    return k({ r: s, g: l, b: i, a: r }, "rgb");
  }
  set value(t) {
    this.refs.$input.value = t;
  }
  get selectedValue() {
    return document.getSelection().toString();
  }
}
const Be = x("--elf--input-editor", {
  borderColor: !0,
  backgroundColor: !0,
  disabledColor: !0,
  color: !0,
  fontSize: !0,
  fontWeight: !0,
  height: !0,
  padding: !0,
  borderRadius: !0,
  placeholderColor: !0,
  emptyColor: !0
});
class $s extends h {
  initState() {
    const {
      style: e = {},
      focused: t,
      hover: s = !1,
      value: l,
      placeholder: i,
      disabled: r
    } = this.props;
    return {
      style: e,
      hover: s || !1,
      focused: t || !1,
      placeholder: i,
      value: l,
      disabled: r
    };
  }
  template() {
    const { icon: e } = this.props, {
      style: t = {},
      focused: s = !1,
      hover: l = !1,
      value: i,
      placeholder: r,
      disabled: a
    } = this.state, c = {
      class: f([
        "elf--input-editor",
        "multiline",
        {
          focused: s,
          hover: l,
          disabled: a,
          icon: e
        }
      ]),
      style: {
        ...b(t, Be)
      }
    }, d = {
      onInput: this.props.onInput,
      onChange: this.props.onChange,
      onKeyDown: this.props.onKeyDown,
      onKeyUp: this.props.onKeyUp,
      onKeyPress: this.props.onKeyPress,
      onSelect: this.props.onSelect,
      onPaste: this.props.onPaste,
      onCut: this.props.onCut,
      onCopy: this.props.onCopy
    }, u = {
      disabled: a,
      placeholder: r,
      value: i
    };
    return /* @__PURE__ */ o("div", {
      ...c
    }, /* @__PURE__ */ o("div", {
      class: "elf--input-area"
    }, /* @__PURE__ */ o("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ o("textarea", {
      ref: "$input",
      ...u,
      ...d
    }, i))));
  }
  onMounted() {
    this.state.autoFocus && setTimeout(() => {
      this.refs.$input.focus(), this.refs.$input.select();
    }, 10);
  }
  runCallback(e, t) {
    m(e) && e(t, this);
  }
  [B("$input")](e) {
    this.setState({
      focused: !0
    }), this.runCallback(this.props.onFocus, e);
  }
  [_("$input")](e) {
    this.setState({
      focused: !1
    }), this.runCallback(this.props.onBlur, e);
  }
  get value() {
    return this.refs.$input.value;
  }
  set value(e) {
    this.refs.$input.value = e;
  }
}
const _e = x("--elf--virtual-scroll", {
  backgroundColor: !0,
  color: !0,
  height: !0,
  hoverColor: !0,
  borderColor: !0,
  boxShadow: !0,
  toolsBorderColor: !0,
  toolsBorderRadius: !0,
  hgap: !0,
  vgap: !0
});
class Is extends h {
  initState() {
    return {
      scrollHeight: 32
    };
  }
  template() {
    const { style: e = {}, itemHeight: t = 32, items: s = [] } = this.props, l = s.length, i = {
      class: f("elf--virtual-scroll", this.props.class),
      style: {
        ...b(e, _e),
        "--elf--virtual-scroll-item-width": "100%",
        "--elf--virtual-scroll-item-height": `${t}px`,
        "--elf--virtual-scroll-item-count": l,
        "--elf--virtual-scroll-panel-height": `${l * t}px`
      }
    };
    return /* @__PURE__ */ o("div", {
      ...i
    }, /* @__PURE__ */ o("div", {
      class: "elf--virtual-scroll-panel"
    }, /* @__PURE__ */ o("div", {
      class: "elf--virtual-scroll-content-area",
      "data-scrolling": this.state.scrolling ? "true" : "false"
    }, this.makeItemView())));
  }
  refreshSize() {
    var t;
    const e = (t = this.$el) == null ? void 0 : t.offsetRect();
    e && this.setState(
      {
        width: e.width,
        height: e.height
      },
      !1
    );
  }
  onMounted() {
    window.setTimeout(() => {
      const e = this.$el.offsetRect();
      this.setState({
        width: e.width,
        height: e.height
      });
    }, 20);
  }
  filterItems(e, t, s) {
    return e.filter((l, i) => i >= t && i <= s);
  }
  makeItemView() {
    const { itemHeight: e, items: t, overscanRowCount: s = 10 } = this.props, { width: l, height: i, isRenderingItems: r } = this.state;
    if (!r) {
      if (!l)
        return [];
      const a = t.length * e, c = Math.floor(i / e), d = t.length;
      this.setState(
        {
          scrollHeight: a,
          itemCount: c
        },
        !1
      );
      const u = Math.max(
        Math.floor((this.state.scrollTop || 0) / 32) - s,
        0
      ), p = Math.min(
        Math.floor(u + c + 2 * s),
        d - 1
      );
      this.state.renderItems = this.filterItems(t, u, p);
    }
    return this.state.renderItems.map((a, c) => {
      var d, u;
      return (u = (d = this.props).itemRenderer) == null ? void 0 : u.call(
        d,
        a,
        a.index * e,
        c,
        t,
        this
      );
    });
  }
  checkScrollTop() {
    const { scrollTop: e, height: t, scrollHeight: s } = this.state;
    return this.setState(
      {
        scrollTop: this.$el.scrollTop
      },
      !1
    ), e > s - t ? (this.setState({
      scrolling: !1
    }), !1) : !0;
  }
  [Lt("$el") + C("checkScrollTop")]() {
    this.trigger("reloadItems");
  }
  [ot("checkScrolling") + Kt(100)]() {
    this.setState({
      scrolling: !1
    });
  }
  [ot("reloadItems") + jt]() {
    this.setState({
      scrolling: !0
    }), this.trigger("checkScrolling");
  }
  refresh() {
    this.setState(
      {
        isRenderingItems: !1
      },
      !1
    ), this.render();
  }
  refreshItems() {
    this.setState(
      {
        isRenderingItems: !0
      },
      !1
    ), this.render();
  }
  scrollIntoView(e) {
    const { itemHeight: t } = this.props, s = e * t;
    this.$el.scrollTop = s, this.setState(
      {
        scrollTop: this.$el.scrollTop
      },
      !1
    ), this.refreshItems();
  }
}
class Ms extends h {
  template() {
    const {
      top: e,
      id: t,
      topLevel: s,
      group: l,
      selected: i,
      icon: r,
      content: a,
      lock: c,
      visible: d,
      lockIcon: u,
      lockOpenIcon: p,
      visibleIcon: g,
      isComponent: v = !1,
      number: y = 10,
      onClick: S,
      onDoubleClick: w,
      onContextMenu: D,
      onMouseDown: O,
      onMouseUp: G,
      onMouseMove: A,
      onMouseEnter: X,
      onMouseLeave: Y
    } = this.props;
    return /* @__PURE__ */ o("div", {
      class: "elf--virtual-scroll-item elf--layer",
      style: {
        "--elf--virtual-scroll-item-top": `${e}px`
      },
      "data-id": t,
      "data-number": y
    }, /* @__PURE__ */ o("div", {
      class: "container",
      "data-top-level": s ? "true" : void 0,
      "data-hidden": d ? void 0 : "true",
      "data-component": v ? "true" : void 0,
      "data-selected": i ? "true" : void 0
    }, /* @__PURE__ */ o("div", {
      class: "group"
    }, l), r && /* @__PURE__ */ o("div", {
      class: "icon"
    }, r), /* @__PURE__ */ o("div", {
      class: "text",
      ref: "$text",
      onClick: S,
      onDoubleClick: w,
      onContextMenu: D,
      onMouseDown: O,
      onMouseUp: G,
      onMouseMove: A,
      onMouseEnter: X,
      onMouseLeave: Y
    }, a), /* @__PURE__ */ o("div", {
      class: "tools"
    }, /* @__PURE__ */ o("div", {
      class: "lock"
    }, c ? u : p), /* @__PURE__ */ o("div", {
      class: "visible"
    }, g))));
  }
}
const Ae = x("--elf--input-paint", {
  borderColor: !0,
  backgroundColor: !0,
  disabledColor: !0,
  color: !0,
  fontSize: !0,
  fontWeight: !0,
  height: !0,
  padding: !0,
  borderRadius: !0,
  placeholderColor: !0,
  emptyColor: !0
});
class Le extends h {
  constructor() {
    super(...arguments);
    $(this, "keydownColor", (t) => {
      switch (t.key) {
        case "ArrowUp":
          t.preventDefault(), this.increaseColor(t.target.getAttribute("data-type")), t.target.select();
          break;
        case "ArrowDown":
          t.preventDefault(), this.decreaseColor(t.target.getAttribute("data-type")), t.target.select();
          break;
      }
    });
    $(this, "keydown", (t) => {
      switch (t.key) {
        case "ArrowUp":
          t.preventDefault(), this.increaseOpacity(t), t.target.select();
          break;
        case "ArrowDown":
          t.preventDefault(), this.decreaseOpacity(t), t.target.select();
          break;
        case "Tab":
          t.preventDefault();
          const s = this.$el.$("input[data-type='h']");
          s.focus(), s.select();
          break;
      }
    });
  }
  initState() {
    const {
      style: t = {},
      autoFocus: s = !1,
      focused: l,
      hover: i = !1,
      placeholder: r,
      disabled: a,
      hasOpacity: c = !0
    } = this.props;
    return {
      style: t,
      autoFocus: s,
      hover: i || !1,
      focused: l || !1,
      placeholder: r,
      disabled: a,
      hasOpacity: c
    };
  }
  template() {
    const { icon: t, value: s } = this.props, {
      style: l = {},
      focused: i = !1,
      hover: r = !1,
      placeholder: a,
      disabled: c
    } = this.state, { r: d, g: u, b: p, a: g } = E(s), { h: v, s: y, l: S } = bt(d, u, p), w = {
      class: f([
        "elf--input-paint",
        {
          focused: i,
          hover: r,
          disabled: c,
          icon: t
        }
      ]),
      style: {
        ...b(l, Ae)
      }
    }, D = {
      disabled: c,
      placeholder: a || "",
      min: 0,
      max: 255
    };
    return this.setState({
      parsedColor: {
        h: v,
        s: y,
        l: S,
        a: g
      }
    }, !1), /* @__PURE__ */ o("div", {
      ...w
    }, /* @__PURE__ */ o("div", {
      class: "elf--input-area"
    }, /* @__PURE__ */ o(st, {
      columns: 3
    }, /* @__PURE__ */ o("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ o("input", {
      class: "color",
      type: "text",
      tabIndex: 1,
      "data-type": "h",
      value: v,
      ...D,
      onKeyDown: this.keydownColor
    })), /* @__PURE__ */ o("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ o("input", {
      class: "color",
      type: "text",
      tabIndex: 2,
      "data-type": "s",
      value: y,
      ...D,
      onKeyDown: this.keydownColor
    })), /* @__PURE__ */ o("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ o("input", {
      class: "color",
      type: "text",
      tabIndex: 3,
      "data-type": "l",
      value: S,
      ...D,
      onKeyDown: this.keydownColor
    })))), this.state.hasOpacity && /* @__PURE__ */ o("div", {
      class: "elf--input-opacity"
    }, /* @__PURE__ */ o("input", {
      type: "text",
      tabIndex: 4,
      class: "opacity",
      value: `${Math.round(g * 100 * 100) / 100}%`,
      onKeyDown: this.keydown
    })));
  }
  updateOpacity(t) {
    this.setState({
      parsedColor: {
        ...this.state.parsedColor,
        a: Math.max(0, Math.min(1, Math.round((this.state.parsedColor.a + t) * 100) / 100))
      }
    }), this.runCallback(this.props.onChange);
  }
  updateColor(t, s) {
    const l = {};
    t === "h" ? l[t] = Math.max(0, Math.min(360, this.state.parsedColor[t] + s)) : t === "s" ? l[t] = Math.max(0, Math.min(100, this.state.parsedColor[t] + s)) : t === "l" && (l[t] = Math.max(0, Math.min(100, this.state.parsedColor[t] + s))), this.setState({
      parsedColor: {
        ...this.state.parsedColor,
        ...l
      }
    }, !1), this.runCallback(this.props.onChange);
  }
  increaseColor(t) {
    this.updateColor(t, 1);
  }
  decreaseColor(t) {
    this.updateColor(t, -1);
  }
  increaseOpacity() {
    this.updateOpacity(0.01);
  }
  decreaseOpacity() {
    this.updateOpacity(-0.01);
  }
  onMounted() {
    this.state.autoFocus && setTimeout(() => {
      const t = this.$el.$("input[data-type='h']");
      t.focus(), t.select();
    }, 10);
  }
  runCallback(t) {
    m(t) && t(this.value, this);
  }
  [M("$el .elf--input-paint-icon")](t) {
    var s, l;
    (l = (s = this.props).onClickColorView) == null || l.call(s, t);
  }
  [B("$el input")](t) {
    this.setState({
      focused: !0
    }), t.target.select(), this.runCallback(this.props.onFocus, t);
  }
  [_("$el input")](t) {
    this.setState({
      focused: !1
    }), this.runCallback(this.props.onBlur, t);
  }
  get value() {
    const { parsedColor: t } = this.state, { h: s, s: l, l: i, a: r } = t;
    return k({ h: s, s: l, l: i, a: r }, "hsl");
  }
  set value(t) {
    this.refs.$input.value = t;
  }
  get selectedValue() {
    return document.getSelection().toString();
  }
}
const Ke = ["hex", "rgb", "hsl"];
function je(n) {
  return /* @__PURE__ */ o("div", {
    class: "eye-dropper"
  }, /* @__PURE__ */ o(F, {
    onClick: async () => {
      const e = new window.EyeDropper();
      try {
        const t = await e.open();
        m(n.onChange) && n.onChange(t.sRGBHex);
      } catch (t) {
        console.warn(t);
      }
    }
  }, /* @__PURE__ */ o("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ o("path", {
    d: "M13.4473 0.6C12.6473 -0.2 11.4473 -0.2 10.6473 0.6L7.84725 3.4L7.04725 2.7C6.64725 2.3 6.04725 2.3 5.64725 2.7C5.24725 3.1 5.24725 3.7 5.64725 4.1L6.34725 4.8L0.547255 10.6C0.147255 11 -0.452745 12.5 0.547255 13.5C1.54725 14.5 3.04725 13.9 3.44725 13.5L9.24725 7.7L9.94725 8.4C10.3473 8.8 10.9473 8.8 11.3473 8.4C11.7473 8 11.7473 7.4 11.3473 7L10.6473 6.3L13.4473 3.5C14.2473 2.6 14.2473 1.4 13.4473 0.6ZM2.54725 12.5H1.54725V11.5L7.34725 5.7L8.34725 6.7C8.24725 6.7 2.54725 12.5 2.54725 12.5Z",
    fill: "black",
    "fill-opacity": "0.8"
  }))));
}
class $t extends h {
  template() {
    const { value: e, containerClass: t, slideClass: s } = this.props;
    return /* @__PURE__ */ o("div", {
      class: `${t} slide-view`
    }, /* @__PURE__ */ o("div", {
      class: `${s} slide-bg`
    }, /* @__PURE__ */ o("div", {
      class: "drag-pointer",
      style: {
        "--drag-point-left": e
      }
    })));
  }
  [H("$el .slide-bg")]() {
    this.setState(
      {
        clicked: !0,
        rect: this.$el.$(".slide-bg").rect()
      },
      !1
    );
  }
  checkClicked() {
    return this.state.clicked;
  }
  [N("document") + C("checkClicked")](e) {
    const { onChange: t } = this.props, { x: s, width: l } = this.state.rect, i = s, r = i + l, c = (Math.min(Math.max(i, e.clientX), r) - i) / l;
    m(t) && t(c);
  }
  [W("document") + C("checkClicked")]() {
    this.setState(
      {
        clicked: !1
      },
      !1
    );
  }
}
class Ve extends h {
  template() {
    const { value: e, onChange: t } = this.props;
    return /* @__PURE__ */ o($t, {
      value: e,
      containerClass: "hue-slide",
      slideClass: "hue-slide-bg",
      onChange: t
    });
  }
}
class ze extends h {
  template() {
    const { value: e, onChange: t } = this.props;
    return /* @__PURE__ */ o($t, {
      value: e,
      containerClass: "opacity-slide",
      slideClass: "opacity-slide-bg",
      onChange: t
    });
  }
}
class Fe extends h {
  initState() {
    const { type: e } = this.props;
    return { type: e };
  }
  makeTypedColorInput() {
    const { r: e, g: t, b: s, a: l, onChange: i } = this.props, { type: r } = this.state, { h: a, s: c, l: d } = bt(e, t, s);
    switch (r) {
      case "hex":
        return /* @__PURE__ */ o("div", null, /* @__PURE__ */ o(De, {
          autoFocus: !0,
          value: k({ r: e, g: t, b: s, a: l }, "hex"),
          onChange: i
        }));
      case "rgb":
        return /* @__PURE__ */ o("div", null, /* @__PURE__ */ o(Pe, {
          autoFocus: !0,
          value: k({ r: e, g: t, b: s, a: l }, "rgb"),
          onChange: i
        }));
      case "hsl":
        return /* @__PURE__ */ o("div", null, /* @__PURE__ */ o(Le, {
          autoFocus: !0,
          value: k({ h: a, s: c, l: d, a: l }, "hsl"),
          onChange: i
        }));
    }
  }
  template() {
    const { type: e } = this.state, t = this.makeTypedColorInput();
    return /* @__PURE__ */ o("div", {
      class: "color-input"
    }, /* @__PURE__ */ o(St, {
      autoPosition: !0,
      menuStyle: {
        width: 80,
        itemPadding: "10px"
      },
      items: Ke.map((s) => ({
        title: s.toUpperCase(),
        selectable: !0,
        closable: !0,
        selected: e === s,
        onClick: () => {
          this.setState({
            type: s
          });
        }
      }))
    }, e.toUpperCase()), t);
  }
}
class Os extends h {
  constructor() {
    super(...arguments);
    $(this, "updateOpacity", (t) => {
      this.setState({
        a: t
      }), this.changeColor();
    });
    $(this, "updateHueColor", (t) => {
      t = t * 360;
      const { s, v: l, a: i } = this.state, { r, g: a, b: c } = it(t, s, l);
      this.setState({
        color: k({ r, g: a, b: c }, "rgb"),
        r,
        g: a,
        b: c,
        a: i,
        hueColor: Z(t / 360),
        h: t,
        s,
        v: l
      }), this.changeColor();
    });
    $(this, "updateColor", (t) => {
      const s = E(t), { r: l, g: i, b: r, a } = s, { h: c, s: d, v: u } = lt(l, i, r);
      this.setState({
        color: k({ r: l, g: i, b: r }, "rgb"),
        r: l,
        g: i,
        b: r,
        a,
        hueColor: Z(c / 360),
        h: c,
        s: d,
        v: u
      }), this.changeColor();
    });
  }
  initState() {
    const { color: t } = this.props, s = E(t), { r: l, g: i, b: r, a } = s, { h: c, s: d, v: u } = lt(l, i, r);
    return {
      type: s.type,
      color: k({ r: l, g: i, b: r }, "rgb"),
      width: 240,
      height: 240,
      r: l,
      g: i,
      b: r,
      a,
      hueColor: Z(c),
      h: c,
      s: d,
      v: u
    };
  }
  template() {
    const { type: t, h: s, s: l, v: i, width: r, height: a, r: c, g: d, b: u, a: p, hueColor: g, color: v } = this.state, y = r * l, S = a * (1 - i);
    return /* @__PURE__ */ o("div", {
      class: "elf--color-mixer"
    }, /* @__PURE__ */ o("div", {
      class: "elf--color-area",
      style: {
        backgroundColor: g
      }
    }, /* @__PURE__ */ o("div", {
      class: "saturation"
    }, /* @__PURE__ */ o("div", {
      class: "value"
    }, /* @__PURE__ */ o("div", {
      class: "drag-pointer",
      style: {
        backgroundColor: v,
        left: y,
        top: S
      }
    })))), /* @__PURE__ */ o("div", {
      class: "elf--color-slide-area"
    }, window.EyeDropper ? /* @__PURE__ */ o(je, {
      onChange: this.updateColor
    }) : void 0, /* @__PURE__ */ o("div", {
      class: "slide"
    }, /* @__PURE__ */ o(Ve, {
      value: s / 360,
      onChange: this.updateHueColor
    }), /* @__PURE__ */ o(ze, {
      r: c,
      g: d,
      b: u,
      value: p,
      onChange: this.updateOpacity
    }))), /* @__PURE__ */ o("div", {
      class: "elf--color-input-area"
    }, /* @__PURE__ */ o(Fe, {
      type: t,
      h: s,
      s: l,
      v: i,
      r: c,
      g: d,
      b: u,
      a: p,
      onChange: this.updateColor
    })));
  }
  formatedColor() {
    const { type: t, r: s, g: l, b: i, h: r, s: a, v: c, a: d } = this.state;
    let u = "";
    switch (t) {
      case "hex":
      case "rgb":
        u = k({ r: s, g: l, b: i, a: d }, t);
        break;
      case "hsl":
        var { h: p, s: g, l: v } = zt(r, a, c);
        u = k({ h: p, s: g, l: v, a: d }, t);
        break;
      case "hsv":
        u = k({ h: r, s: a, v: c, a: d }, t);
        break;
    }
    return u;
  }
  changeColor() {
    const { onChange: t } = this.props;
    let s = this.formatedColor();
    m(t) && t(s);
  }
  lastChangeColor() {
    const { onLastChange: t } = this.props;
    let s = this.formatedColor();
    m(t) && t(s);
  }
  async openEyeDropper() {
    const t = new window.EyeDropper();
    try {
      const s = await t.open();
      this.updateColor(s.sRGBHex);
    } catch (s) {
      console.warn(s);
    }
  }
  [H("$el .elf--color-area")](t) {
    this.setState(
      {
        clicked: !0,
        rect: this.$el.$(".elf--color-area").rect(),
        clientX: t.clientX,
        clientY: t.clientY
      },
      !1
    );
  }
  checkClicked() {
    return this.state.clicked;
  }
  [N("document") + C("checkClicked")](t) {
    const { x: s, y: l, width: i, height: r } = this.state.rect, a = s, c = a + i, d = l, u = d + r, p = Math.min(Math.max(a, t.clientX), c), g = Math.min(Math.max(d, t.clientY), u), v = (p - a) / i, y = 1 - (g - d) / r;
    this.updateSaturationValue(v, y);
  }
  [W("document") + C("checkClicked")](t) {
    this.setState(
      {
        clicked: !1
      },
      !1
    ), !(this.state.clientX === t.clientX && this.state.clientY === t.clientY) && this.lastChangeColor();
  }
  updateSaturationValue(t, s) {
    const { r: l, g: i, b: r } = it(this.state.h, t, s);
    this.setState({
      r: l,
      g: i,
      b: r,
      s: t,
      v: s,
      color: k({ r: l, g: i, b: r }, "rgb")
    }), this.changeColor();
  }
}
class Es extends h {
  initState() {
    return {
      selectedValue: this.props.selectedValue
    };
  }
  makeItems() {
    const { items: e } = this.props, { selectedValue: t } = this.state;
    return e.map((s) => ({
      title: s.title,
      selectable: !0,
      closable: !0,
      selected: s.value === t,
      onClick: () => {
        this.setState({
          selectedValue: s.value
        });
      }
    }));
  }
  template() {
    const { items: e } = this.props, { selectedValue: t } = this.state, s = e.find((l) => l.value === t) || e[0] || { title: "" };
    return /* @__PURE__ */ o("div", {
      class: "elf--color-grid"
    }, /* @__PURE__ */ o("div", {
      class: "elf--color-grid-header"
    }, /* @__PURE__ */ o(St, {
      items: this.makeItems()
    }, s.title)), /* @__PURE__ */ o("div", {
      class: "elf--color-grid-list"
    }, s.colors.map((l) => /* @__PURE__ */ o("div", {
      class: "elf--color-grid-item",
      onClick: () => this.selectColor(l)
    }, /* @__PURE__ */ o(wt, {
      color: l
    })))));
  }
  selectColor(e) {
    this.setState({ selectedColor: e }, !1), this.props.onSelect && this.props.onSelect(e);
  }
}
class Ue extends h {
  template() {
    const {
      as: e = "div",
      id: t,
      class: s = "",
      style: l = {},
      content: i,
      ...r
    } = this.props, { style: a, noneStyle: c } = V(r), d = {
      class: f(s),
      id: t,
      style: b({ ...l, ...a }, {}),
      ...c
    };
    return Object.keys(d).forEach((u) => {
      d[u] === void 0 && delete d[u];
    }), o(e, d, i);
  }
}
const He = {
  boxSizing: "border-box"
};
function Ne({ item: { value: n } }) {
  return /* @__PURE__ */ o(Me, {
    type: "text",
    value: n,
    width: "100%",
    display: "block",
    style: He
  });
}
function We({ item: { value: n, key: e } }) {
  return /* @__PURE__ */ o(Ue, {
    as: "div",
    key: e
  }, n);
}
function Ge({
  item: { gap: n, rowGap: e, columnGap: t, style: s, columns: l = [], items: i = [] },
  root: r
}) {
  return /* @__PURE__ */ o(st, {
    columns: l,
    gap: n,
    rowGap: e,
    columnGap: t,
    style: s
  }, i.map((a, c) => r.makeEditorItem(a, c)));
}
function Xe({ item: n }) {
  return /* @__PURE__ */ o(F, {
    onClick: n.onClick
  }, n.title);
}
function Ye({ item: { value: n, autoFocus: e } }) {
  return /* @__PURE__ */ o(Ee, {
    value: n,
    autoFocus: e
  });
}
function qe({ item: n }) {
  return /* @__PURE__ */ o(Jt, {
    onChange: n.onChange
  }, n.icon);
}
const Ze = x("--elf--data-editor", {
  backgroundColor: !0,
  color: !0,
  height: !0,
  width: !0,
  hoverColor: !0,
  borderColor: !0
}), Je = {
  title: We,
  text: Ne,
  grid: Ge,
  button: Xe,
  color: Ye,
  "toggle-button": qe
};
class Ts extends h {
  initState() {
    const { data: e = () => ({}), items: t = () => [], plugins: s = {} } = this.props, l = e();
    return {
      plugins: {
        ...Je,
        ...s
      },
      data: l,
      items: t(l)
    };
  }
  makeEditorItem(e, t) {
    const { plugins: s } = this.state;
    if (typeof e == "string") {
      const l = s.title;
      return /* @__PURE__ */ o(l, {
        key: t,
        item: { value: e }
      });
    } else {
      const l = s[e.type];
      if (l)
        return /* @__PURE__ */ o(l, {
          key: e.key || t,
          item: e,
          root: this
        });
    }
  }
  template() {
    const { style: e = {} } = this.props, { items: t } = this.state, s = {
      class: f("elf--data-editor"),
      style: b(e, Ze)
    };
    return /* @__PURE__ */ o("div", {
      ...s
    }, t.map((l, i) => /* @__PURE__ */ o("div", {
      class: f("elf--data-editor-item", { string: typeof l == "string" })
    }, l.title ? /* @__PURE__ */ o("div", {
      class: "title"
    }, l.title) : null, /* @__PURE__ */ o("div", {
      class: "editor"
    }, this.makeEditorItem(l, i)))));
  }
}
const ut = { x: 0, y: 0 }, Qe = { x: Number.MAX_SAFE_INTEGER, y: Number.MAX_SAFE_INTEGER }, pt = 0;
function ht(n, e) {
  return Math.sqrt(
    Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2)
  );
}
class Ds extends h {
  initialize() {
    super.initialize(), this.__initBodyMoves();
  }
  __initBodyMoves() {
    this.__firstMove = /* @__PURE__ */ new Set(), this.__moves = /* @__PURE__ */ new Set(), this.__ends = /* @__PURE__ */ new Set(), this.__modifyBodyMoveSecond(pt);
  }
  __modifyBodyMoveSecond(e = pt) {
    const t = e === 0 ? this.__loopBodyMoves.bind(this) : Vt(this.__loopBodyMoves.bind(this), e);
    this.__funcBodyMoves = t;
  }
  __loopBodyMoves() {
    var e = this.pos, t = this.$store.get(K), s = this.lastPos || Qe, l = !(s.x === e.x && s.y === e.y);
    if (l && this.__firstMove.size) {
      let i = 0;
      this.__firstMove.forEach((r) => {
        const a = ht(e, r.xy);
        if (Math.abs(a) > 0) {
          var c = e.x - r.xy.x, d = e.y - r.xy.y;
          r.func.call(r.context, c, d, "move", t.pressure), i++;
        }
      }), i > 0 && this.__firstMove.clear();
    }
    l && this.__moves.size && (this.__moves.forEach((i) => {
      const r = ht(e, i.xy);
      if (Math.abs(r) > 0.5) {
        var a = e.x - i.xy.x, c = e.y - i.xy.y;
        i.func.call(i.context, a, c, "move", t.pressure);
      }
    }), this.lastPos = e), window.requestAnimationFrame(this.__funcBodyMoves);
  }
  __removeBodyMoves() {
    var e = this.lastPos, t = this.$store.get(K);
    e && this.__ends.forEach((s) => {
      s.func.call(
        s.context,
        e.x - s.xy.x,
        e.y - s.xy.y,
        "end",
        t.pressure
      );
    }), this.__firstMove.clear(), this.__moves.clear(), this.__ends.clear();
  }
  [q(mt)](e, t, s) {
    this.__firstMove.add({ func: e, context: t, xy: s });
  }
  [q(yt)](e, t, s) {
    this.__moves.add({ func: e, context: t, xy: s });
  }
  [q(vt)](e, t, s) {
    this.__ends.add({ func: e, context: t, xy: s });
  }
  [H()](e) {
    var t = e.xy || ut;
    this.$store.init(K, e), this.pos = t;
  }
  [N()](e) {
    var t = e.xy || ut;
    this.$store.init(K, e), this.pos = t, this.__requestId || (this.__requestId = window.requestAnimationFrame(this.__funcBodyMoves));
  }
  [W()](e) {
    this.$store.set(K, e), this.__removeBodyMoves(), window.cancelAnimationFrame(this.__requestId), this.__requestId = null;
  }
}
class Rs extends h {
  bodyMouseFirstMove(e, t) {
    this[t] && this.emit(mt, this[t], this, e.xy);
  }
  bodyMouseMove(e, t) {
    this[t] && this.emit(yt, this[t], this, e.xy);
  }
  bodyMouseUp(e, t) {
    this[t] && this.emit(vt, this[t], this, e.xy);
  }
}
class ts extends h {
  template() {
    return /* @__PURE__ */ o("div", {
      ...{
        class: "elf--app-layout-resize-bar"
      }
    });
  }
  [H()](e) {
    this.startXY = e.xy;
  }
  isMoved(e) {
    if (!this.startXY)
      return !1;
    const { xy: t } = e, s = t.x - this.startXY.x, l = t.y - this.startXY.y;
    return s !== 0 || l !== 0;
  }
  [N("document") + C("isMoved")](e) {
    const { xy: t } = e, s = t.x - this.startXY.x, l = t.y - this.startXY.y;
    m(this.props.onResize) && this.props.onResize(s, l);
  }
  [W("document") + C("isMoved")](e) {
    const { xy: t } = e, s = t.x - this.startXY.x, l = t.y - this.startXY.y;
    m(this.props.onResizeEnd) && this.props.onResizeEnd(s, l), this.startXY = void 0;
  }
}
function Ps({
  direction: n,
  content: e,
  width: t = "auto",
  height: s = "auto",
  maxWidth: l = 500,
  minWidth: i = 0,
  maxHeight: r = 500,
  minHeight: a = 0,
  resizable: c = !1,
  style: d,
  onResize: u,
  onResizeEnd: p
}) {
  const [g, v] = T(t), [y, S] = T(s), [w, D] = T(g), [O, G] = T(y), A = j(
    (L) => {
      if (n === "left" || n === "right") {
        const I = Math.min(Math.max(i, L), l);
        D(I), w != I && m(u) && u(I, O);
      } else if (n === "top" || n === "bottom") {
        const I = Math.min(Math.max(a, L), r);
        G(I), O != I && m(u) && u(w, I);
      }
    },
    [w, O]
  ), X = j(
    (L, I) => {
      A(n === "left" || n === "right" ? n === "left" ? g + L : g - L : n === "top" ? y + I : y - I);
    },
    [n, g, y, A]
  ), Y = j(() => {
    v(w), S(O), m(p) && p(w, O);
  }, [w, O, v, S]);
  return /* @__PURE__ */ o("div", {
    class: "elf--app-layout-item",
    "data-direction": n,
    "data-resizable": c,
    style: { ...d, width: w, height: O }
  }, e, c ? /* @__PURE__ */ o(ts, {
    onResize: X,
    onResizeEnd: Y
  }) : void 0);
}
const es = x("--elf--toolbar", {
  backgroundColor: !0,
  color: !0,
  height: !0,
  align: !0
});
class Bs extends h {
  getItem(e) {
    return this.props.content.find((t) => t.props.direction === e);
  }
  template() {
    const { style: e = {} } = this.props, t = {
      class: "elf--app-layout",
      style: b(e, es)
    }, s = this.getItem("top"), l = this.getItem("bottom"), i = this.getItem("left"), r = this.getItem("right"), a = this.getItem("center");
    return /* @__PURE__ */ o("div", {
      ...t
    }, s || void 0, /* @__PURE__ */ o("div", {
      class: "elf--app-layout-body"
    }, i || void 0, a || void 0, r || void 0), l || void 0);
  }
}
export {
  mt as ADD_BODY_FIRST_MOUSEMOVE,
  yt as ADD_BODY_MOUSEMOVE,
  vt as ADD_BODY_MOUSEUP,
  Nt as Alert,
  Bs as AppLayout,
  Ps as AppLayoutItem,
  ts as AppResizeBar,
  K as BODY_MOVE_EVENT,
  F as Button,
  cs as ButtonGroup,
  ee as Checkbox,
  hs as CheckboxGroup,
  Es as ColorGrid,
  Os as ColorMixer,
  wt as ColorView,
  Ts as DataEditor,
  bs as Dialog,
  fs as Divider,
  ns as END,
  Rs as EventControlPanel,
  Ds as EventPanel,
  is as FIRSTMOVE,
  U as Flex,
  st as Grid,
  De as HexColorEditor,
  Jt as IconButton,
  Me as InputEditor,
  Ee as InputPaint,
  Ms as Layer,
  ws as Layout,
  ds as LinkButton,
  rs as MOVE,
  tt as Menu,
  vs as Notification,
  St as OptionMenu,
  gs as OptionStrip,
  xs as Panel,
  Pe as RGBColorEditor,
  te as Radio,
  ps as RadioGroup,
  Ss as Tab,
  $e as TabItem,
  Se as TabStrip,
  $s as TextAreaEditor,
  us as ToggleButton,
  ys as Toolbar,
  ge as ToolbarItem,
  he as Tools,
  de as ToolsCustomItem,
  ue as ToolsMenuItem,
  ks as Tooltip,
  ms as VBox,
  Ue as View,
  Is as VirtualScroll,
  ve as VisualBell,
  as as alert,
  Cs as bell
};
