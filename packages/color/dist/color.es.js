const E = (r) => JSON.parse(JSON.stringify(r));
function V(r) {
  if (!(typeof r > "u"))
    return E(r);
}
function l(r, n) {
  return n = typeof n > "u" ? 1 : n, Math.round(r * n) / n;
}
function w(r, n, e = "rgba(0, 0, 0, 0)") {
  return Array.isArray(r) && (r = { r: r[0], g: r[1], b: r[2], a: r[3] }), n == "hex" ? z(r) : n == "rgb" ? B(r, e) : n == "hsl" ? P(r) : n == "hsv" ? Z(r) : n == "cmyk" ? _(r) : `${n}(${r.r},${r.g},${r.b})`;
}
function lr(r, n, e = "rgba(0, 0, 0, 0)") {
  const t = V(r);
  return t.a = 1, w(t, n, e);
}
function z(r) {
  Array.isArray(r) && (r = { r: r[0], g: r[1], b: r[2], a: r[3] });
  var n = r.r.toString(16);
  r.r < 16 && (n = "0" + n);
  var e = r.g.toString(16);
  r.g < 16 && (e = "0" + e);
  var t = r.b.toString(16);
  if (r.b < 16 && (t = "0" + t), r.a == 1 || typeof r.a > "u")
    return `#${n}${e}${t}`;
  {
    const g = Math.ceil(r.a * 255);
    var a = g.toString(16);
    return g < 16 && (a = "0" + a), `#${n}${e}${t}${a}`;
  }
}
function B(r, n = "rgba(0, 0, 0, 0)") {
  if (Array.isArray(r) && (r = { r: r[0], g: r[1], b: r[2], a: r[3] }), !(typeof r > "u"))
    return r.a == 1 || typeof r.a > "u" ? isNaN(r.r) ? n : `rgb(${r.r},${r.g},${r.b})` : `rgba(${r.r},${r.g},${r.b},${r.a})`;
}
function P(r) {
  return Array.isArray(r) && (r = { h: r[0], s: r[1], l: r[2], a: r[3] }), r.a == 1 || typeof r.a > "u" ? `hsl(${r.h}, ${r.s}%, ${r.l}%)` : `hsla(${r.h}, ${r.s}%, ${r.l}%, ${r.a})`;
}
function Z(r) {
  Array.isArray(r) && (r = { h: r[0], s: r[1], v: r[2], a: r[3] });
  const n = l(r.h), e = r.a, t = l(r.s * 100), a = l(r.v * 100);
  return r.a == 1 || typeof r.a > "u" ? `hsv(${n}, ${t}%, ${a}%)` : `hsva(${n}, ${t}%, ${a}%, ${e})`;
}
function _(r) {
  Array.isArray(r) && (r = { c: r[0], m: r[1], y: r[2], k: r[3] });
  const n = l(r.c * 100, 100), e = l(r.m * 100, 100), t = l(r.y * 100, 100), a = l(r.k * 100, 100);
  return `cmyk(${n}%,${e}%,${t}%,${a}%)`;
}
function m(r, n) {
  return Math.floor(Math.random() * (n - r + 1)) + r;
}
function or(r = 1) {
  let n = [];
  for (var e = 0; e < r; e++)
    n[n.length] = q();
  return n;
}
function q() {
  return B({
    r: m(0, 255),
    g: m(0, 255),
    b: m(0, 255)
  });
}
function cr() {
  return B({
    r: m(0, 255),
    g: m(0, 255),
    b: m(0, 255),
    a: m(0, 1e3) / 1e3
  });
}
function br(r, n, e, t) {
  if (arguments.length == 1)
    var { c: r, m: n, y: e, k: t } = arguments[0];
  const a = 255 * (1 - r) * (1 - t), g = 255 * (1 - n) * (1 - t), f = 255 * (1 - e) * (1 - t);
  return { r: a, g, b: f };
}
function y(r) {
  return Math.pow(r, 3) > 8856e-6 ? Math.pow(r, 3) : (r - 16 / 116) / 7.787;
}
function x(r) {
  return r > 31308e-7 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : 12.92 * r;
}
function K(r, n, e) {
  if (arguments.length == 1)
    var { x: r, y: n, z: e } = arguments[0];
  let t = r / 100, a = n / 100, g = e / 100, f = t * 3.2406 + a * -1.5372 + g * -0.4986, u = t * -0.9689 + a * 1.8758 + g * 0.0415, i = t * 0.0557 + a * -0.204 + g * 1.057;
  f = x(f), u = x(u), i = x(i);
  const s = l(f * 255), c = l(u * 255), h = l(i * 255);
  return { r: s, g: c, b: h };
}
function T(r, n, e) {
  if (arguments.length == 1)
    var { l: r, a: n, b: e } = arguments[0];
  let t = (r + 16) / 116, a = n / 500 + t, g = t - e / 200;
  t = y(t), a = y(a), g = y(g);
  const f = a * 95.047, u = t * 100, i = g * 108.883;
  return { x: f, y: u, z: i };
}
function A(r) {
  return r > 8856e-6 ? Math.pow(r, 1 / 3) : (7.787 * r + 16) / 116;
}
function J(r, n, e) {
  if (arguments.length == 1)
    var { x: r, y: n, z: e } = arguments[0];
  let t = r / 95.047, a = n / 100, g = e / 108.883;
  t = A(t), a = A(a), g = A(g);
  const f = 116 * a - 16, u = 500 * (t - a), i = 200 * (a - g);
  return { l: f, a: u, b: i };
}
function hr(r, n, e) {
  if (arguments.length == 1)
    var { l: r, a: n, b: e } = arguments[0];
  return K(T(r, n, e));
}
function O(r, n, e) {
  if (arguments.length == 1)
    var { r, g: n, b: e } = arguments[0];
  const t = r / 255, a = n / 255, g = e / 255, f = Math.max(t, a, g), u = Math.min(t, a, g), i = f - u;
  var s = 0;
  i == 0 ? s = 0 : f == t ? s = 60 * ((a - g) / i % 6) : f == a ? s = 60 * ((g - t) / i + 2) : f == g && (s = 60 * ((t - a) / i + 4)), s < 0 && (s = 360 + s);
  var c = 0;
  f == 0 ? c = 0 : c = i / f;
  var h = f;
  return { h: s, s: c, v: h };
}
function dr(r, n, e) {
  if (arguments.length == 1)
    var { r, g: n, b: e } = arguments[0];
  const t = r / 255, a = n / 255, g = e / 255, f = 1 - Math.max(t, a, g), u = (1 - t - f) / (1 - f), i = (1 - a - f) / (1 - f), s = (1 - g - f) / (1 - f);
  return { c: u, m: i, y: s, k: f };
}
function p(r, n, e) {
  if (arguments.length == 1)
    var { r, g: n, b: e } = arguments[0];
  r /= 255, n /= 255, e /= 255;
  var t = Math.max(r, n, e), a = Math.min(r, n, e), g, f, u = (t + a) / 2;
  if (t == a)
    g = f = 0;
  else {
    var i = t - a;
    switch (f = u > 0.5 ? i / (2 - t - a) : i / (t + a), t) {
      case r:
        g = (n - e) / i + (n < e ? 6 : 0);
        break;
      case n:
        g = (e - r) / i + 2;
        break;
      case e:
        g = (r - n) / i + 4;
        break;
    }
    g /= 6;
  }
  return { h: l(g * 360), s: l(f * 100), l: l(u * 100) };
}
function mr(r, n, e) {
  if (arguments.length == 1)
    var { r, g: n, b: e } = arguments[0];
  return S((r + n + e) / 3 > 90 ? 0 : 255);
}
function S(r) {
  return { r, g: r, b: r };
}
function vr(r, n, e) {
  if (arguments.length == 1)
    var { r, g: n, b: e } = arguments[0];
  return S(Math.ceil((r + n + e) / 3));
}
function pr(r, n, e) {
  if (arguments.length == 1)
    var { r, g: n, b: e } = arguments[0];
  return S(D(r, n, e).y);
}
function U(r, n, e) {
  return Math.ceil(r * 0.2126 + n * 0.7152 + e * 0.0722);
}
function D(r, n, e) {
  if (arguments.length == 1)
    var { r, g: n, b: e } = arguments[0];
  const t = U(r, n, e), a = 0.564 * (e - t), g = 0.713 * (r - t);
  return { y: t, cr: g, cb: a };
}
function k(r) {
  return (r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92) * 100;
}
function W(r, n, e) {
  if (arguments.length == 1)
    var { r, g: n, b: e } = arguments[0];
  let t = r / 255, a = n / 255, g = e / 255;
  t = k(t), a = k(a), g = k(g);
  const f = t * 0.4124 + a * 0.3576 + g * 0.1805, u = t * 0.2126 + a * 0.7152 + g * 0.0722, i = t * 0.0193 + a * 0.1192 + g * 0.9505;
  return { x: f, y: u, z: i };
}
function yr(r, n, e) {
  if (arguments.length == 1)
    var { r, g: n, b: e } = arguments[0];
  return J(W(r, n, e));
}
function M(r, n, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? r + (n - r) * 6 * e : e < 1 / 2 ? n : e < 2 / 3 ? r + (n - r) * (2 / 3 - e) * 6 : r;
}
function xr(r, n, e) {
  if (arguments.length == 1)
    var { h: r, s: n, l: e } = arguments[0];
  const t = $(r, n, e);
  return O(t.r, t.g, t.b);
}
function $(r, n, e) {
  if (arguments.length == 1)
    var { h: r, s: n, l: e } = arguments[0];
  var t, a, g;
  if (r /= 360, n /= 100, e /= 100, n == 0)
    t = a = g = e;
  else {
    var f = e < 0.5 ? e * (1 + n) : e + n - e * n, u = 2 * e - f;
    t = M(u, f, r + 1 / 3), a = M(u, f, r), g = M(u, f, r - 1 / 3);
  }
  return { r: l(t * 255), g: l(a * 255), b: l(g * 255) };
}
function H(r, n, e) {
  if (arguments.length == 1)
    var { h: r, s: n, v: e } = arguments[0];
  var t = r, a = n, g = e;
  t >= 360 && (t = 0);
  const f = a * g, u = f * (1 - Math.abs(t / 60 % 2 - 1)), i = g - f;
  let s = [];
  return 0 <= t && t < 60 ? s = [f, u, 0] : 60 <= t && t < 120 ? s = [u, f, 0] : 120 <= t && t < 180 ? s = [0, f, u] : 180 <= t && t < 240 ? s = [0, u, f] : 240 <= t && t < 300 ? s = [u, 0, f] : 300 <= t && t < 360 && (s = [f, 0, u]), {
    r: l((s[0] + i) * 255),
    g: l((s[1] + i) * 255),
    b: l((s[2] + i) * 255)
  };
}
function Ar(r, n, e) {
  if (arguments.length == 1)
    var { h: r, s: n, v: e } = arguments[0];
  const t = H(r, n, e);
  return p(t.r, t.g, t.b);
}
function kr(r, n, e, t) {
  if (arguments.length == 1) {
    var { y: r, cr: n, cb: e, bit: t } = arguments[0];
    t = t || 0;
  }
  const a = r + 1.402 * (n - t), g = r - 0.344 * (e - t) - 0.714 * (n - t), f = r + 1.772 * (e - t);
  return { r: Math.ceil(a), g: Math.ceil(g), b: Math.ceil(f) };
}
const I = {
  aliceblue: "rgb(240, 248, 255)",
  antiquewhite: "rgb(250, 235, 215)",
  aqua: "rgb(0, 255, 255)",
  aquamarine: "rgb(127, 255, 212)",
  azure: "rgb(240, 255, 255)",
  beige: "rgb(245, 245, 220)",
  bisque: "rgb(255, 228, 196)",
  black: "rgb(0, 0, 0)",
  blanchedalmond: "rgb(255, 235, 205)",
  blue: "rgb(0, 0, 255)",
  blueviolet: "rgb(138, 43, 226)",
  brown: "rgb(165, 42, 42)",
  burlywood: "rgb(222, 184, 135)",
  cadetblue: "rgb(95, 158, 160)",
  chartreuse: "rgb(127, 255, 0)",
  chocolate: "rgb(210, 105, 30)",
  coral: "rgb(255, 127, 80)",
  cornflowerblue: "rgb(100, 149, 237)",
  cornsilk: "rgb(255, 248, 220)",
  crimson: "rgb(237, 20, 61)",
  cyan: "rgb(0, 255, 255)",
  darkblue: "rgb(0, 0, 139)",
  darkcyan: "rgb(0, 139, 139)",
  darkgoldenrod: "rgb(184, 134, 11)",
  darkgray: "rgb(169, 169, 169)",
  darkgrey: "rgb(169, 169, 169)",
  darkgreen: "rgb(0, 100, 0)",
  darkkhaki: "rgb(189, 183, 107)",
  darkmagenta: "rgb(139, 0, 139)",
  darkolivegreen: "rgb(85, 107, 47)",
  darkorange: "rgb(255, 140, 0)",
  darkorchid: "rgb(153, 50, 204)",
  darkred: "rgb(139, 0, 0)",
  darksalmon: "rgb(233, 150, 122)",
  darkseagreen: "rgb(143, 188, 143)",
  darkslateblue: "rgb(72, 61, 139)",
  darkslategray: "rgb(47, 79, 79)",
  darkslategrey: "rgb(47, 79, 79)",
  darkturquoise: "rgb(0, 206, 209)",
  darkviolet: "rgb(148, 0, 211)",
  deeppink: "rgb(255, 20, 147)",
  deepskyblue: "rgb(0, 191, 255)",
  dimgray: "rgb(105, 105, 105)",
  dimgrey: "rgb(105, 105, 105)",
  dodgerblue: "rgb(30, 144, 255)",
  firebrick: "rgb(178, 34, 34)",
  floralwhite: "rgb(255, 250, 240)",
  forestgreen: "rgb(34, 139, 34)",
  fuchsia: "rgb(255, 0, 255)",
  gainsboro: "rgb(220, 220, 220)",
  ghostwhite: "rgb(248, 248, 255)",
  gold: "rgb(255, 215, 0)",
  goldenrod: "rgb(218, 165, 32)",
  gray: "rgb(128, 128, 128)",
  grey: "rgb(128, 128, 128)",
  green: "rgb(0, 128, 0)",
  greenyellow: "rgb(173, 255, 47)",
  honeydew: "rgb(240, 255, 240)",
  hotpink: "rgb(255, 105, 180)",
  indianred: "rgb(205, 92, 92)",
  indigo: "rgb(75, 0, 130)",
  ivory: "rgb(255, 255, 240)",
  khaki: "rgb(240, 230, 140)",
  lavender: "rgb(230, 230, 250)",
  lavenderblush: "rgb(255, 240, 245)",
  lawngreen: "rgb(124, 252, 0)",
  lemonchiffon: "rgb(255, 250, 205)",
  lightblue: "rgb(173, 216, 230)",
  lightcoral: "rgb(240, 128, 128)",
  lightcyan: "rgb(224, 255, 255)",
  lightgoldenrodyellow: "rgb(250, 250, 210)",
  lightgreen: "rgb(144, 238, 144)",
  lightgray: "rgb(211, 211, 211)",
  lightgrey: "rgb(211, 211, 211)",
  lightpink: "rgb(255, 182, 193)",
  lightsalmon: "rgb(255, 160, 122)",
  lightseagreen: "rgb(32, 178, 170)",
  lightskyblue: "rgb(135, 206, 250)",
  lightslategray: "rgb(119, 136, 153)",
  lightslategrey: "rgb(119, 136, 153)",
  lightsteelblue: "rgb(176, 196, 222)",
  lightyellow: "rgb(255, 255, 224)",
  lime: "rgb(0, 255, 0)",
  limegreen: "rgb(50, 205, 50)",
  linen: "rgb(250, 240, 230)",
  magenta: "rgb(255, 0, 255)",
  maroon: "rgb(128, 0, 0)",
  mediumaquamarine: "rgb(102, 205, 170)",
  mediumblue: "rgb(0, 0, 205)",
  mediumorchid: "rgb(186, 85, 211)",
  mediumpurple: "rgb(147, 112, 219)",
  mediumseagreen: "rgb(60, 179, 113)",
  mediumslateblue: "rgb(123, 104, 238)",
  mediumspringgreen: "rgb(0, 250, 154)",
  mediumturquoise: "rgb(72, 209, 204)",
  mediumvioletred: "rgb(199, 21, 133)",
  midnightblue: "rgb(25, 25, 112)",
  mintcream: "rgb(245, 255, 250)",
  mistyrose: "rgb(255, 228, 225)",
  moccasin: "rgb(255, 228, 181)",
  navajowhite: "rgb(255, 222, 173)",
  navy: "rgb(0, 0, 128)",
  oldlace: "rgb(253, 245, 230)",
  olive: "rgb(128, 128, 0)",
  olivedrab: "rgb(107, 142, 35)",
  orange: "rgb(255, 165, 0)",
  orangered: "rgb(255, 69, 0)",
  orchid: "rgb(218, 112, 214)",
  palegoldenrod: "rgb(238, 232, 170)",
  palegreen: "rgb(152, 251, 152)",
  paleturquoise: "rgb(175, 238, 238)",
  palevioletred: "rgb(219, 112, 147)",
  papayawhip: "rgb(255, 239, 213)",
  peachpuff: "rgb(255, 218, 185)",
  peru: "rgb(205, 133, 63)",
  pink: "rgb(255, 192, 203)",
  plum: "rgb(221, 160, 221)",
  powderblue: "rgb(176, 224, 230)",
  purple: "rgb(128, 0, 128)",
  rebeccapurple: "rgb(102, 51, 153)",
  red: "rgb(255, 0, 0)",
  rosybrown: "rgb(188, 143, 143)",
  royalblue: "rgb(65, 105, 225)",
  saddlebrown: "rgb(139, 69, 19)",
  salmon: "rgb(250, 128, 114)",
  sandybrown: "rgb(244, 164, 96)",
  seagreen: "rgb(46, 139, 87)",
  seashell: "rgb(255, 245, 238)",
  sienna: "rgb(160, 82, 45)",
  silver: "rgb(192, 192, 192)",
  skyblue: "rgb(135, 206, 235)",
  slateblue: "rgb(106, 90, 205)",
  slategray: "rgb(112, 128, 144)",
  slategrey: "rgb(112, 128, 144)",
  snow: "rgb(255, 250, 250)",
  springgreen: "rgb(0, 255, 127)",
  steelblue: "rgb(70, 130, 180)",
  tan: "rgb(210, 180, 140)",
  teal: "rgb(0, 128, 128)",
  thistle: "rgb(216, 191, 216)",
  tomato: "rgb(255, 99, 71)",
  turquoise: "rgb(64, 224, 208)",
  violet: "rgb(238, 130, 238)",
  wheat: "rgb(245, 222, 179)",
  white: "rgb(255, 255, 255)",
  whitesmoke: "rgb(245, 245, 245)",
  yellow: "rgb(255, 255, 0)",
  yellowgreen: "rgb(154, 205, 50)",
  transparent: "rgba(0, 0, 0, 0)",
  currentColor: "currentColor"
};
function Q(r) {
  return !!I[r];
}
function L(r) {
  return I[r];
}
const j = /(#(?:[\da-f]{3}){1,2}|#(?:[\da-f]{8})|rgb\((?:\s*\d{1,3},\s*){2}\d{1,3}\s*\)|rgba\((?:\s*\d{1,3},\s*){3}\d*\.?\d+\s*\)|hsl\(\s*\d{1,3}(?:,\s*\d{1,3}%){2}\s*\)|hsla\(\s*\d{1,3}(?:,\s*\d{1,3}%){2},\s*\d*\.?\d+\s*\)|([\w_-]+))/gi;
function R(r, n = "@") {
  return `${n}${r.startIndex}`.padEnd(10, "0");
}
function Mr(r) {
  return !!Y(r).length;
}
function Y(r) {
  const n = r.match(j);
  let e = [];
  if (!n)
    return e;
  for (var t = 0, a = n.length; t < a; t++)
    if (n[t].indexOf("#") > -1 || n[t].indexOf("rgb") > -1 || n[t].indexOf("hsl") > -1)
      e.push({ color: n[t] });
    else {
      var g = L(n[t]);
      g && e.push({ color: n[t], nameColor: g });
    }
  var f = { next: 0 };
  return e.forEach((u) => {
    const i = r.indexOf(u.color, f.next);
    u.startIndex = i, u.endIndex = i + u.color.length, f.next = u.endIndex;
  }), e;
}
function N(r, n = "@") {
  const e = Y(r);
  return e.forEach((t) => {
    r = r.replace(t.color, R(t, n));
  }), { str: r, matches: e };
}
function X(r, n = ",") {
  const e = N(r);
  return e.str.split(n).map((t, a) => (t = b(t), e.matches[a] && (t = t.replace(
    R(e.matches[a]),
    e.matches[a].color
  )), t));
}
function rr(r, n) {
  return n.forEach((e) => {
    r = r.replace(R(e), e.color);
  }), r;
}
const er = /^\s+|\s+$/g;
function b(r) {
  return r.replace(er, "");
}
function v(r) {
  if (typeof r == "string") {
    if (Q(r) && (r = L(r)), r.indexOf("rgb(") > -1) {
      for (var n = r.replace("rgb(", "").replace(")", "").split(","), e = 0, t = n.length; e < t; e++)
        n[e] = parseInt(b(n[e]), 10);
      var a = { type: "rgb", r: n[0], g: n[1], b: n[2], a: 1 };
      return a = { ...a, ...p(a) }, a;
    } else if (r.indexOf("rgba(") > -1) {
      for (var n = r.replace("rgba(", "").replace(")", "").split(","), e = 0, t = n.length; e < t; e++)
        t - 1 == e ? n[e] = parseFloat(b(n[e])) : n[e] = parseInt(b(n[e]), 10);
      var a = { type: "rgb", r: n[0], g: n[1], b: n[2], a: n[3] };
      return a = { ...a, ...p(a) }, a;
    } else if (r.indexOf("hsl(") > -1) {
      for (var n = r.replace("hsl(", "").replace(")", "").split(","), e = 0, t = n.length; e < t; e++)
        n[e] = parseFloat(b(n[e]));
      var a = { type: "hsl", h: n[0], s: n[1], l: n[2], a: 1 };
      return a = { ...a, ...$(a) }, a;
    } else if (r.indexOf("hsla(") > -1) {
      for (var n = r.replace("hsla(", "").replace(")", "").split(","), e = 0, t = n.length; e < t; e++)
        t - 1 == e ? n[e] = parseFloat(b(n[e])) : n[e] = parseInt(b(n[e]), 10);
      var a = { type: "hsl", h: n[0], s: n[1], l: n[2], a: n[3] };
      return a = { ...a, ...$(a) }, a;
    } else if (r.indexOf("#") == 0) {
      r = r.replace("#", "");
      var n = [], g = 1;
      if (r.length == 3)
        for (var e = 0, t = r.length; e < t; e++) {
          var f = r.substr(e, 1);
          n.push(parseInt(f + f, 16));
        }
      else if (r.length === 8) {
        for (var e = 0, t = r.length; e < t; e += 2)
          n.push(parseInt(r.substr(e, 2), 16));
        g = n.pop() / 255;
      } else
        for (var e = 0, t = r.length; e < t; e += 2)
          n.push(parseInt(r.substr(e, 2), 16));
      var a = { type: "hex", r: n[0], g: n[1], b: n[2], a: g };
      return a = { ...a, ...p(a) }, a;
    }
  } else if (typeof r == "number") {
    if (0 <= r && r <= 16777215) {
      const u = (r & 16711680) >> 16, i = (r & 65280) >> 8, s = (r & 255) >> 0;
      var a = { type: "hex", r: u, g: i, b: s, a: 1 };
      return a = { ...a, ...p(a) }, a;
    } else if (0 <= r && r <= 4294967295) {
      const u = (r & 4278190080) >> 24, i = (r & 16711680) >> 16, s = (r & 65280) >> 8, c = (r & 255) / 255;
      var a = { type: "hex", r: u, g: i, b: s, a: c };
      return a = { ...a, ...p(a) }, a;
    }
  }
  return r;
}
function nr(r) {
  typeof r == "string" && (r = X(r)), r = r.map((e) => {
    if (typeof e == "string") {
      const t = N(e);
      let a = b(t.str).split(" ");
      return a[1] ? a[1].indexOf("%") > -1 ? a[1] = parseFloat(a[1].replace(/%/, "")) / 100 : a[1] = parseFloat(a[1]) : a[1] = "*", a[0] = rr(a[0], t.matches), a;
    } else if (Array.isArray(e))
      return e[1] ? typeof e[1] == "string" && (e[1].indexOf("%") > -1 ? e[1] = parseFloat(e[1].replace(/%/, "")) / 100 : e[1] = +e[1]) : e[1] = "*", [...e];
  });
  const n = r.filter((e) => e[1] === "*").length;
  if (n > 0) {
    const e = r.filter((a) => a[1] != "*" && a[1] != 1).map((a) => a[1]).reduce((a, g) => a + g, 0), t = (1 - e) / n;
    r.forEach((a, g) => {
      a[1] == "*" && g > 0 && (r.length - 1 == g || (a[1] = t));
    });
  }
  return r;
}
function tr(r, n, e = 0.5, t = "hex") {
  var a = ar(r, n, e);
  return w(a, t);
}
function ar(r, n, e = 0.5) {
  const t = typeof r.a > "u" ? 1 : r.a, a = typeof n.a > "u" ? 1 : n.a;
  return {
    r: l(r.r + (n.r - r.r) * e),
    g: l(r.g + (n.g - r.g) * e),
    b: l(r.b + (n.b - r.b) * e),
    a: l(t + (a - t) * e, 100)
  };
}
function o(r, n = 5) {
  if (!r)
    return [];
  typeof r == "string" && (r = X(r)), r = r || [];
  for (var e = r.length, t = [], a = 0; a < e - 1; a++)
    for (var g = 0; g < n; g++)
      t.push(F(r[a], r[a + 1], g / n));
  return t;
}
function F(r, n, e = 0.5, t = "hex") {
  var a = v(r), g = v(n);
  return tr(a, g, e, t);
}
function gr(r, n, e = 0.5, t = "hex") {
  return F(r, n, e, t);
}
function fr(r) {
  return r = v(r), (Math.round(r.r * 299) + Math.round(r.g * 587) + Math.round(r.b * 114)) / 1e3;
}
function $r(r) {
  return fr(r) >= 128 ? "black" : "white";
}
function C(r, n, e) {
  return r = r / 255, n = n / 255, e = e / 255, r = r < 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4), n = n < 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4), e = e < 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4), r * 0.2126 + n * 0.7152 + e * 0.0722;
}
function ur(r, n) {
  r = v(r), n = v(n);
  const e = C(r.r, r.g, r.b), t = C(n.r, n.g, n.b);
  return (Math.max(e, t) + 0.05) / (Math.min(e, t) + 0.05);
}
function ir(r) {
  return r >= 7 ? "AAA" : r >= 4.5 ? "AA" : r >= 3 ? "AA Large" : "Fail";
}
function wr(r, n, e, t = 20) {
  const a = ir(ur(r, n)), g = e > t;
  let f = "FAIL";
  return g ? (a === "AA Large" || a === "AA" || a === "AAA") && (f = "PASS") : (a === "AA" || a === "AAA") && (f = "PASS"), f;
}
function Br(r, n = 10) {
  r = nr(r);
  let e = [], t = n - (r.length - 1), a = t;
  for (var g = 1, f = r.length; g < f; g++) {
    var u = r[g - 1][0], i = r[g][0], s = g == 1 ? r[g][1] : r[g][1] - r[g - 1][1], c = g == r.length - 1 ? a : Math.floor(s * t);
    e = e.concat(o([u, i], c), [
      i
    ]), a -= c;
  }
  return e;
}
function G(r, n = "h", e = 9, t = "rgb", a = 0, g = 1, f = 100) {
  for (var u = v(r), i = O(u), s = (g - a) * f / e, c = [], h = 1; h <= e; h++)
    i[n] = Math.abs((f - s * h) / f), c.push(w(H(i), t));
  return c;
}
function Sr(r, n = 9, e = "rgb", t = 0, a = 360) {
  return G(r, "h", n, e, t, a, 1);
}
function Rr(r, n = 9, e = "rgb", t = 0, a = 1) {
  return G(r, "s", n, e, t, a, 100);
}
function Gr(r, n = 9, e = "rgb", t = 0, a = 1) {
  return G(r, "v", n, e, t, a, 100);
}
o.parula = function(r) {
  return o(["#352a87", "#0f5cdd", "#00b5a6", "#ffc337", "#fdff00"], r);
};
o.jet = function(r) {
  return o(
    [
      "#00008f",
      "#0020ff",
      "#00ffff",
      "#51ff77",
      "#fdff00",
      "#ff0000",
      "#800000"
    ],
    r
  );
};
o.hsv = function(r) {
  return o(
    [
      "#ff0000",
      "#ffff00",
      "#00ff00",
      "#00ffff",
      "#0000ff",
      "#ff00ff",
      "#ff0000"
    ],
    r
  );
};
o.hot = function(r) {
  return o(["#0b0000", "#ff0000", "#ffff00", "#ffffff"], r);
};
o.pink = function(r) {
  return o(["#1e0000", "#bd7b7b", "#e7e5b2", "#ffffff"], r);
};
o.bone = function(r) {
  return o(["#000000", "#4a4a68", "#a6c6c6", "#ffffff"], r);
};
o.copper = function(r) {
  return o(["#000000", "#3d2618", "#9d623e", "#ffa167", "#ffc77f"], r);
};
const d = [
  { rgb: "#ff0000", start: 0 },
  { rgb: "#ffff00", start: 0.17 },
  { rgb: "#00ff00", start: 0.33 },
  { rgb: "#00ffff", start: 0.5 },
  { rgb: "#0000ff", start: 0.67 },
  { rgb: "#ff00ff", start: 0.83 },
  { rgb: "#ff0000", start: 1 }
];
function Cr(r) {
  for (var n, e, t = 0; t < d.length; t++)
    if (d[t].start >= r) {
      n = d[t - 1], e = d[t];
      break;
    }
  return n && e ? gr(
    n,
    e,
    (r - n.start) / (e.start - n.start)
  ) : d[0].rgb;
}
function sr() {
  for (var r = 0, n = d.length; r < n; r++) {
    var e = d[r], t = v(e.rgb);
    e.r = t.r, e.g = t.g, e.b = t.b;
  }
}
sr();
export {
  br as CMYKtoRGB,
  xr as HSLtoHSV,
  $ as HSLtoRGB,
  Ar as HSVtoHSL,
  H as HSVtoRGB,
  M as HUEtoRGB,
  hr as LABtoRGB,
  T as LABtoXYZ,
  k as PivotRGB,
  A as PivotXyz,
  dr as RGBtoCMYK,
  pr as RGBtoGray,
  p as RGBtoHSL,
  O as RGBtoHSV,
  yr as RGBtoLAB,
  vr as RGBtoSimpleGray,
  W as RGBtoXYZ,
  D as RGBtoYCrCb,
  x as ReverseRGB,
  y as ReverseXyz,
  J as XYZtoLAB,
  K as XYZtoRGB,
  kr as YCrCbtoRGB,
  F as blend,
  U as brightness,
  mr as c,
  Cr as checkHueColor,
  _ as cmyk,
  I as color_names,
  fr as contrast,
  $r as contrastColor,
  ur as contrastRatio,
  ir as contrastScore,
  wr as contrastScoreText,
  N as convertMatches,
  X as convertMatchesArray,
  w as format,
  lr as formatWithoutAlpha,
  L as getColorByName,
  R as getColorIndexString,
  Br as gradient,
  S as gray,
  z as hex,
  P as hsl,
  Z as hsv,
  d as hue_color,
  tr as interpolateRGB,
  ar as interpolateRGBObject,
  Mr as isColor,
  Q as isColorName,
  C as luminance,
  Y as matches,
  gr as mix,
  v as parse,
  nr as parseGradient,
  q as random,
  or as randomByCount,
  cr as randomRGBA,
  rr as reverseMatches,
  B as rgb,
  o as scale,
  Sr as scaleH,
  G as scaleHSV,
  Rr as scaleS,
  Gr as scaleV,
  b as trim
};
