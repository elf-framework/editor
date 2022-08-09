const CLONE_FUNCTION = (obj) => JSON.parse(JSON.stringify(obj));
function clone(obj) {
  if (typeof obj === "undefined")
    return void 0;
  return CLONE_FUNCTION(obj);
}
function round(n, k) {
  k = typeof k === "undefined" ? 1 : k;
  return Math.round(n * k) / k;
}
function format(obj, type, defaultColor = "rgba(0, 0, 0, 0)") {
  if (Array.isArray(obj)) {
    obj = { r: obj[0], g: obj[1], b: obj[2], a: obj[3] };
  }
  if (type == "hex") {
    return hex(obj);
  } else if (type == "rgb") {
    return rgb(obj, defaultColor);
  } else if (type == "hsl") {
    return hsl(obj);
  }
  return `${type}(${obj.r},${obj.g},${obj.b})`;
}
function formatWithoutAlpha(obj, type, defaultColor = "rgba(0, 0, 0, 0)") {
  const newColorObj = clone(obj);
  newColorObj.a = 1;
  return format(newColorObj, type, defaultColor);
}
function hex(obj) {
  if (Array.isArray(obj)) {
    obj = { r: obj[0], g: obj[1], b: obj[2], a: obj[3] };
  }
  var r = obj.r.toString(16);
  if (obj.r < 16)
    r = "0" + r;
  var g = obj.g.toString(16);
  if (obj.g < 16)
    g = "0" + g;
  var b = obj.b.toString(16);
  if (obj.b < 16)
    b = "0" + b;
  if (obj.a == 1 || typeof obj.a === "undefined") {
    return `#${r}${g}${b}`;
  } else {
    const alpha = Math.ceil(obj.a * 255);
    var a = alpha.toString(16);
    if (alpha < 16)
      a = "0" + a;
    return `#${r}${g}${b}${a}`;
  }
}
function rgb(obj, defaultColor = "rgba(0, 0, 0, 0)") {
  if (Array.isArray(obj)) {
    obj = { r: obj[0], g: obj[1], b: obj[2], a: obj[3] };
  }
  if (typeof obj === "undefined") {
    return void 0;
  }
  if (obj.a == 1 || typeof obj.a === "undefined") {
    if (isNaN(obj.r)) {
      return defaultColor;
    }
    return `rgb(${obj.r},${obj.g},${obj.b})`;
  } else {
    return `rgba(${obj.r},${obj.g},${obj.b},${obj.a})`;
  }
}
function hsl(obj) {
  if (Array.isArray(obj)) {
    obj = { r: obj[0], g: obj[1], b: obj[2], a: obj[3] };
  }
  if (obj.a == 1 || typeof obj.a === "undefined") {
    return `hsl(${obj.h},${obj.s}%,${obj.l}%)`;
  } else {
    return `hsla(${obj.h},${obj.s}%,${obj.l}%,${obj.a})`;
  }
}
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomByCount(count = 1) {
  let arr = [];
  for (var i = 0; i < count; i++) {
    arr[arr.length] = random();
  }
  return arr;
}
function random() {
  return rgb({
    r: randomNumber(0, 255),
    g: randomNumber(0, 255),
    b: randomNumber(0, 255)
  });
}
function randomRGBA() {
  return rgb({
    r: randomNumber(0, 255),
    g: randomNumber(0, 255),
    b: randomNumber(0, 255),
    a: randomNumber(0, 1e3) / 1e3
  });
}
function CMYKtoRGB(c2, m, y, k) {
  if (arguments.length == 1) {
    var { c: c2, m, y, k } = arguments[0];
  }
  const R = 255 * (1 - c2) * (1 - k);
  const G = 255 * (1 - m) * (1 - k);
  const B = 255 * (1 - y) * (1 - k);
  return { r: R, g: G, b: B };
}
function ReverseXyz(n) {
  return Math.pow(n, 3) > 8856e-6 ? Math.pow(n, 3) : (n - 16 / 116) / 7.787;
}
function ReverseRGB(n) {
  return n > 31308e-7 ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055 : 12.92 * n;
}
function XYZtoRGB(x, y, z) {
  if (arguments.length == 1) {
    var { x, y, z } = arguments[0];
  }
  let X = x / 100;
  let Y = y / 100;
  let Z = z / 100;
  let R = X * 3.2406 + Y * -1.5372 + Z * -0.4986;
  let G = X * -0.9689 + Y * 1.8758 + Z * 0.0415;
  let B = X * 0.0557 + Y * -0.204 + Z * 1.057;
  R = ReverseRGB(R);
  G = ReverseRGB(G);
  B = ReverseRGB(B);
  const r = round(R * 255);
  const g = round(G * 255);
  const b = round(B * 255);
  return { r, g, b };
}
function LABtoXYZ(l, a, b) {
  if (arguments.length == 1) {
    var { l, a, b } = arguments[0];
  }
  let Y = (l + 16) / 116;
  let X = a / 500 + Y;
  let Z = Y - b / 200;
  Y = ReverseXyz(Y);
  X = ReverseXyz(X);
  Z = ReverseXyz(Z);
  const x = X * 95.047;
  const y = Y * 100;
  const z = Z * 108.883;
  return { x, y, z };
}
function PivotXyz(n) {
  return n > 8856e-6 ? Math.pow(n, 1 / 3) : (7.787 * n + 16) / 116;
}
function XYZtoLAB(x, y, z) {
  if (arguments.length == 1) {
    var { x, y, z } = arguments[0];
  }
  let X = x / 95.047;
  let Y = y / 100;
  let Z = z / 108.883;
  X = PivotXyz(X);
  Y = PivotXyz(Y);
  Z = PivotXyz(Z);
  const l = 116 * Y - 16;
  const a = 500 * (X - Y);
  const b = 200 * (Y - Z);
  return { l, a, b };
}
function LABtoRGB(l, a, b) {
  if (arguments.length == 1) {
    var { l, a, b } = arguments[0];
  }
  return XYZtoRGB(LABtoXYZ(l, a, b));
}
function RGBtoHSV(r, g, b) {
  if (arguments.length == 1) {
    var { r, g, b } = arguments[0];
  }
  const R1 = r / 255;
  const G1 = g / 255;
  const B1 = b / 255;
  const MaxC = Math.max(R1, G1, B1);
  const MinC = Math.min(R1, G1, B1);
  const DeltaC = MaxC - MinC;
  var H = 0;
  if (DeltaC == 0) {
    H = 0;
  } else if (MaxC == R1) {
    H = 60 * ((G1 - B1) / DeltaC % 6);
  } else if (MaxC == G1) {
    H = 60 * ((B1 - R1) / DeltaC + 2);
  } else if (MaxC == B1) {
    H = 60 * ((R1 - G1) / DeltaC + 4);
  }
  if (H < 0) {
    H = 360 + H;
  }
  var S = 0;
  if (MaxC == 0)
    S = 0;
  else
    S = DeltaC / MaxC;
  var V = MaxC;
  return { h: H, s: S, v: V };
}
function RGBtoCMYK(r, g, b) {
  if (arguments.length == 1) {
    var { r, g, b } = arguments[0];
  }
  const R1 = r / 255;
  const G1 = g / 255;
  const B1 = b / 255;
  const K = 1 - Math.max(R1, G1, B1);
  const C = (1 - R1 - K) / (1 - K);
  const M = (1 - G1 - K) / (1 - K);
  const Y = (1 - B1 - K) / (1 - K);
  return { c: C, m: M, y: Y, k: K };
}
function RGBtoHSL(r, g, b) {
  if (arguments.length == 1) {
    var { r, g, b } = arguments[0];
  }
  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;
  if (max == min) {
    h = s = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return { h: round(h * 360), s: round(s * 100), l: round(l * 100) };
}
function c(r, g, b) {
  if (arguments.length == 1) {
    var { r, g, b } = arguments[0];
  }
  return gray((r + g + b) / 3 > 90 ? 0 : 255);
}
function gray(gray2) {
  return { r: gray2, g: gray2, b: gray2 };
}
function RGBtoSimpleGray(r, g, b) {
  if (arguments.length == 1) {
    var { r, g, b } = arguments[0];
  }
  return gray(Math.ceil((r + g + b) / 3));
}
function RGBtoGray(r, g, b) {
  if (arguments.length == 1) {
    var { r, g, b } = arguments[0];
  }
  return gray(RGBtoYCrCb(r, g, b).y);
}
function brightness(r, g, b) {
  return Math.ceil(r * 0.2126 + g * 0.7152 + b * 0.0722);
}
function RGBtoYCrCb(r, g, b) {
  if (arguments.length == 1) {
    var { r, g, b } = arguments[0];
  }
  const Y = brightness(r, g, b);
  const Cb = 0.564 * (b - Y);
  const Cr = 0.713 * (r - Y);
  return { y: Y, cr: Cr, cb: Cb };
}
function PivotRGB(n) {
  return (n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92) * 100;
}
function RGBtoXYZ(r, g, b) {
  if (arguments.length == 1) {
    var { r, g, b } = arguments[0];
  }
  let R = r / 255;
  let G = g / 255;
  let B = b / 255;
  R = PivotRGB(R);
  G = PivotRGB(G);
  B = PivotRGB(B);
  const x = R * 0.4124 + G * 0.3576 + B * 0.1805;
  const y = R * 0.2126 + G * 0.7152 + B * 0.0722;
  const z = R * 0.0193 + G * 0.1192 + B * 0.9505;
  return { x, y, z };
}
function RGBtoLAB(r, g, b) {
  if (arguments.length == 1) {
    var { r, g, b } = arguments[0];
  }
  return XYZtoLAB(RGBtoXYZ(r, g, b));
}
function HUEtoRGB(p, q, t) {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  if (t < 1 / 6)
    return p + (q - p) * 6 * t;
  if (t < 1 / 2)
    return q;
  if (t < 2 / 3)
    return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function HSLtoHSV(h, s, l) {
  if (arguments.length == 1) {
    var { h, s, l } = arguments[0];
  }
  const rgb2 = HSLtoRGB(h, s, l);
  return RGBtoHSV(rgb2.r, rgb2.g, rgb2.b);
}
function HSLtoRGB(h, s, l) {
  if (arguments.length == 1) {
    var { h, s, l } = arguments[0];
  }
  var r, g, b;
  h /= 360;
  s /= 100;
  l /= 100;
  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = HUEtoRGB(p, q, h + 1 / 3);
    g = HUEtoRGB(p, q, h);
    b = HUEtoRGB(p, q, h - 1 / 3);
  }
  return { r: round(r * 255), g: round(g * 255), b: round(b * 255) };
}
function HSVtoRGB(h, s, v) {
  if (arguments.length == 1) {
    var { h, s, v } = arguments[0];
  }
  var H = h;
  var S = s;
  var V = v;
  if (H >= 360) {
    H = 0;
  }
  const C = S * V;
  const X = C * (1 - Math.abs(H / 60 % 2 - 1));
  const m = V - C;
  let temp = [];
  if (0 <= H && H < 60) {
    temp = [C, X, 0];
  } else if (60 <= H && H < 120) {
    temp = [X, C, 0];
  } else if (120 <= H && H < 180) {
    temp = [0, C, X];
  } else if (180 <= H && H < 240) {
    temp = [0, X, C];
  } else if (240 <= H && H < 300) {
    temp = [X, 0, C];
  } else if (300 <= H && H < 360) {
    temp = [C, 0, X];
  }
  return {
    r: round((temp[0] + m) * 255),
    g: round((temp[1] + m) * 255),
    b: round((temp[2] + m) * 255)
  };
}
function HSVtoHSL(h, s, v) {
  if (arguments.length == 1) {
    var { h, s, v } = arguments[0];
  }
  const rgb2 = HSVtoRGB(h, s, v);
  return RGBtoHSL(rgb2.r, rgb2.g, rgb2.b);
}
function YCrCbtoRGB(y, cr, cb, bit) {
  if (arguments.length == 1) {
    var { y, cr, cb, bit } = arguments[0];
    bit = bit || 0;
  }
  const R = y + 1.402 * (cr - bit);
  const G = y - 0.344 * (cb - bit) - 0.714 * (cr - bit);
  const B = y + 1.772 * (cb - bit);
  return { r: Math.ceil(R), g: Math.ceil(G), b: Math.ceil(B) };
}
const color_names = {
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
function isColorName(name) {
  return !!color_names[name];
}
function getColorByName(name) {
  return color_names[name];
}
const color_regexp = /(#(?:[\da-f]{3}){1,2}|#(?:[\da-f]{8})|rgb\((?:\s*\d{1,3},\s*){2}\d{1,3}\s*\)|rgba\((?:\s*\d{1,3},\s*){3}\d*\.?\d+\s*\)|hsl\(\s*\d{1,3}(?:,\s*\d{1,3}%){2}\s*\)|hsla\(\s*\d{1,3}(?:,\s*\d{1,3}%){2},\s*\d*\.?\d+\s*\)|([\w_-]+))/gi;
function getColorIndexString(it, prefix = "@") {
  return `${prefix}${it.startIndex}`.padEnd(10, "0");
}
function isColor(str) {
  const results = matches(str);
  return !!results.length;
}
function matches(str) {
  const matches2 = str.match(color_regexp);
  let result = [];
  if (!matches2) {
    return result;
  }
  for (var i = 0, len = matches2.length; i < len; i++) {
    if (matches2[i].indexOf("#") > -1 || matches2[i].indexOf("rgb") > -1 || matches2[i].indexOf("hsl") > -1) {
      result.push({ color: matches2[i] });
    } else {
      var nameColor = getColorByName(matches2[i]);
      if (nameColor) {
        result.push({ color: matches2[i], nameColor });
      }
    }
  }
  var pos = { next: 0 };
  result.forEach((item) => {
    const startIndex = str.indexOf(item.color, pos.next);
    item.startIndex = startIndex;
    item.endIndex = startIndex + item.color.length;
    pos.next = item.endIndex;
  });
  return result;
}
function convertMatches(str, prefix = "@") {
  const m = matches(str);
  m.forEach((it) => {
    str = str.replace(it.color, getColorIndexString(it, prefix));
  });
  return { str, matches: m };
}
function convertMatchesArray(str, splitStr = ",") {
  const ret = convertMatches(str);
  return ret.str.split(splitStr).map((it, index) => {
    it = trim(it);
    if (ret.matches[index]) {
      it = it.replace(
        getColorIndexString(ret.matches[index]),
        ret.matches[index].color
      );
    }
    return it;
  });
}
function reverseMatches(str, matches2) {
  matches2.forEach((it) => {
    str = str.replace(getColorIndexString(it), it.color);
  });
  return str;
}
const REG_TRIM = /^\s+|\s+$/g;
function trim(str) {
  return str.replace(REG_TRIM, "");
}
function parse(str) {
  if (typeof str === "string") {
    if (isColorName(str)) {
      str = getColorByName(str);
    }
    if (str.indexOf("rgb(") > -1) {
      var arr = str.replace("rgb(", "").replace(")", "").split(",");
      for (var i = 0, len = arr.length; i < len; i++) {
        arr[i] = parseInt(trim(arr[i]), 10);
      }
      var obj = { type: "rgb", r: arr[0], g: arr[1], b: arr[2], a: 1 };
      obj = { ...obj, ...RGBtoHSL(obj) };
      return obj;
    } else if (str.indexOf("rgba(") > -1) {
      var arr = str.replace("rgba(", "").replace(")", "").split(",");
      for (var i = 0, len = arr.length; i < len; i++) {
        if (len - 1 == i) {
          arr[i] = parseFloat(trim(arr[i]));
        } else {
          arr[i] = parseInt(trim(arr[i]), 10);
        }
      }
      var obj = { type: "rgb", r: arr[0], g: arr[1], b: arr[2], a: arr[3] };
      obj = { ...obj, ...RGBtoHSL(obj) };
      return obj;
    } else if (str.indexOf("hsl(") > -1) {
      var arr = str.replace("hsl(", "").replace(")", "").split(",");
      for (var i = 0, len = arr.length; i < len; i++) {
        arr[i] = parseFloat(trim(arr[i]));
      }
      var obj = { type: "hsl", h: arr[0], s: arr[1], l: arr[2], a: 1 };
      obj = { ...obj, ...HSLtoRGB(obj) };
      return obj;
    } else if (str.indexOf("hsla(") > -1) {
      var arr = str.replace("hsla(", "").replace(")", "").split(",");
      for (var i = 0, len = arr.length; i < len; i++) {
        if (len - 1 == i) {
          arr[i] = parseFloat(trim(arr[i]));
        } else {
          arr[i] = parseInt(trim(arr[i]), 10);
        }
      }
      var obj = { type: "hsl", h: arr[0], s: arr[1], l: arr[2], a: arr[3] };
      obj = { ...obj, ...HSLtoRGB(obj) };
      return obj;
    } else if (str.indexOf("#") == 0) {
      str = str.replace("#", "");
      var arr = [];
      var a = 1;
      if (str.length == 3) {
        for (var i = 0, len = str.length; i < len; i++) {
          var char = str.substr(i, 1);
          arr.push(parseInt(char + char, 16));
        }
      } else if (str.length === 8) {
        for (var i = 0, len = str.length; i < len; i += 2) {
          arr.push(parseInt(str.substr(i, 2), 16));
        }
        a = arr.pop() / 255;
      } else {
        for (var i = 0, len = str.length; i < len; i += 2) {
          arr.push(parseInt(str.substr(i, 2), 16));
        }
      }
      var obj = { type: "hex", r: arr[0], g: arr[1], b: arr[2], a };
      obj = { ...obj, ...RGBtoHSL(obj) };
      return obj;
    }
  } else if (typeof str === "number") {
    if (0 <= str && str <= 16777215) {
      const r = (str & 16711680) >> 16;
      const g = (str & 65280) >> 8;
      const b = (str & 255) >> 0;
      var obj = { type: "hex", r, g, b, a: 1 };
      obj = { ...obj, ...RGBtoHSL(obj) };
      return obj;
    } else if (0 <= str && str <= 4294967295) {
      const r = (str & 4278190080) >> 24;
      const g = (str & 16711680) >> 16;
      const b = (str & 65280) >> 8;
      const a2 = (str & 255) / 255;
      var obj = { type: "hex", r, g, b, a: a2 };
      obj = { ...obj, ...RGBtoHSL(obj) };
      return obj;
    }
  }
  return str;
}
function parseGradient(colors) {
  if (typeof colors === "string") {
    colors = convertMatchesArray(colors);
  }
  colors = colors.map((it) => {
    if (typeof it === "string") {
      const ret = convertMatches(it);
      let arr = trim(ret.str).split(" ");
      if (arr[1]) {
        if (arr[1].indexOf("%") > -1) {
          arr[1] = parseFloat(arr[1].replace(/%/, "")) / 100;
        } else {
          arr[1] = parseFloat(arr[1]);
        }
      } else {
        arr[1] = "*";
      }
      arr[0] = reverseMatches(arr[0], ret.matches);
      return arr;
    } else if (Array.isArray(it)) {
      if (!it[1]) {
        it[1] = "*";
      } else if (typeof it[1] === "string") {
        if (it[1].indexOf("%") > -1) {
          it[1] = parseFloat(it[1].replace(/%/, "")) / 100;
        } else {
          it[1] = +it[1];
        }
      }
      return [...it];
    }
  });
  const count = colors.filter((it) => {
    return it[1] === "*";
  }).length;
  if (count > 0) {
    const sum = colors.filter((it) => {
      return it[1] != "*" && it[1] != 1;
    }).map((it) => it[1]).reduce((total, cur) => {
      return total + cur;
    }, 0);
    const dist = (1 - sum) / count;
    colors.forEach((it, index) => {
      if (it[1] == "*" && index > 0) {
        if (colors.length - 1 == index)
          ;
        else {
          it[1] = dist;
        }
      }
    });
  }
  return colors;
}
function interpolateRGB(startColor, endColor, t = 0.5, exportFormat = "hex") {
  var obj = interpolateRGBObject(startColor, endColor, t);
  return format(obj, exportFormat);
}
function interpolateRGBObject(startColor, endColor, t = 0.5) {
  const startColorAlpha = typeof startColor.a === "undefined" ? 1 : startColor.a;
  const endColorAlpha = typeof endColor.a === "undefined" ? 1 : endColor.a;
  return {
    r: round(startColor.r + (endColor.r - startColor.r) * t),
    g: round(startColor.g + (endColor.g - startColor.g) * t),
    b: round(startColor.b + (endColor.b - startColor.b) * t),
    a: round(startColorAlpha + (endColorAlpha - startColorAlpha) * t, 100)
  };
}
function scale(scale2, count = 5) {
  if (!scale2)
    return [];
  if (typeof scale2 === "string") {
    scale2 = convertMatchesArray(scale2);
  }
  scale2 = scale2 || [];
  var len = scale2.length;
  var colors = [];
  for (var i = 0; i < len - 1; i++) {
    for (var index = 0; index < count; index++) {
      colors.push(blend(scale2[i], scale2[i + 1], index / count));
    }
  }
  return colors;
}
function blend(startColor, endColor, ratio = 0.5, format2 = "hex") {
  var s = parse(startColor);
  var e = parse(endColor);
  return interpolateRGB(s, e, ratio, format2);
}
function mix(startcolor, endColor, ratio = 0.5, format2 = "hex") {
  return blend(startcolor, endColor, ratio, format2);
}
function contrast(c2) {
  c2 = parse(c2);
  return (Math.round(c2.r * 299) + Math.round(c2.g * 587) + Math.round(c2.b * 114)) / 1e3;
}
function contrastColor(c2) {
  return contrast(c2) >= 128 ? "black" : "white";
}
function gradient(colors, count = 10) {
  colors = parseGradient(colors);
  let newColors = [];
  let maxCount = count - (colors.length - 1);
  let allCount = maxCount;
  for (var i = 1, len = colors.length; i < len; i++) {
    var startColor = colors[i - 1][0];
    var endColor = colors[i][0];
    var rate = i == 1 ? colors[i][1] : colors[i][1] - colors[i - 1][1];
    var colorCount = i == colors.length - 1 ? allCount : Math.floor(rate * maxCount);
    newColors = newColors.concat(scale([startColor, endColor], colorCount), [
      endColor
    ]);
    allCount -= colorCount;
  }
  return newColors;
}
function scaleHSV(color, target = "h", count = 9, exportFormat = "rgb", min = 0, max = 1, dist = 100) {
  var colorObj = parse(color);
  var hsv = RGBtoHSV(colorObj);
  var unit = (max - min) * dist / count;
  var results = [];
  for (var i = 1; i <= count; i++) {
    hsv[target] = Math.abs((dist - unit * i) / dist);
    results.push(format(HSVtoRGB(hsv), exportFormat));
  }
  return results;
}
function scaleH(color, count = 9, exportFormat = "rgb", min = 0, max = 360) {
  return scaleHSV(color, "h", count, exportFormat, min, max, 1);
}
function scaleS(color, count = 9, exportFormat = "rgb", min = 0, max = 1) {
  return scaleHSV(color, "s", count, exportFormat, min, max, 100);
}
function scaleV(color, count = 9, exportFormat = "rgb", min = 0, max = 1) {
  return scaleHSV(color, "v", count, exportFormat, min, max, 100);
}
scale.parula = function(count) {
  return scale(["#352a87", "#0f5cdd", "#00b5a6", "#ffc337", "#fdff00"], count);
};
scale.jet = function(count) {
  return scale(
    [
      "#00008f",
      "#0020ff",
      "#00ffff",
      "#51ff77",
      "#fdff00",
      "#ff0000",
      "#800000"
    ],
    count
  );
};
scale.hsv = function(count) {
  return scale(
    [
      "#ff0000",
      "#ffff00",
      "#00ff00",
      "#00ffff",
      "#0000ff",
      "#ff00ff",
      "#ff0000"
    ],
    count
  );
};
scale.hot = function(count) {
  return scale(["#0b0000", "#ff0000", "#ffff00", "#ffffff"], count);
};
scale.pink = function(count) {
  return scale(["#1e0000", "#bd7b7b", "#e7e5b2", "#ffffff"], count);
};
scale.bone = function(count) {
  return scale(["#000000", "#4a4a68", "#a6c6c6", "#ffffff"], count);
};
scale.copper = function(count) {
  return scale(["#000000", "#3d2618", "#9d623e", "#ffa167", "#ffc77f"], count);
};
const hue_color = [
  { rgb: "#ff0000", start: 0 },
  { rgb: "#ffff00", start: 0.17 },
  { rgb: "#00ff00", start: 0.33 },
  { rgb: "#00ffff", start: 0.5 },
  { rgb: "#0000ff", start: 0.67 },
  { rgb: "#ff00ff", start: 0.83 },
  { rgb: "#ff0000", start: 1 }
];
function checkHueColor(p) {
  var startColor, endColor;
  for (var i = 0; i < hue_color.length; i++) {
    if (hue_color[i].start >= p) {
      startColor = hue_color[i - 1];
      endColor = hue_color[i];
      break;
    }
  }
  if (startColor && endColor) {
    return mix(
      startColor,
      endColor,
      (p - startColor.start) / (endColor.start - startColor.start)
    );
  }
  return hue_color[0].rgb;
}
function initHueColors() {
  for (var i = 0, len = hue_color.length; i < len; i++) {
    var hue = hue_color[i];
    var obj = parse(hue.rgb);
    hue.r = obj.r;
    hue.g = obj.g;
    hue.b = obj.b;
  }
}
initHueColors();
export { CMYKtoRGB, HSLtoHSV, HSLtoRGB, HSVtoHSL, HSVtoRGB, HUEtoRGB, LABtoRGB, LABtoXYZ, PivotRGB, PivotXyz, RGBtoCMYK, RGBtoGray, RGBtoHSL, RGBtoHSV, RGBtoLAB, RGBtoSimpleGray, RGBtoXYZ, RGBtoYCrCb, ReverseRGB, ReverseXyz, XYZtoLAB, XYZtoRGB, YCrCbtoRGB, blend, brightness, c, checkHueColor, color_names, contrast, contrastColor, convertMatches, convertMatchesArray, format, formatWithoutAlpha, getColorByName, getColorIndexString, gradient, gray, hex, hsl, hue_color, interpolateRGB, interpolateRGBObject, isColor, isColorName, matches, mix, parse, parseGradient, random, randomByCount, randomRGBA, reverseMatches, rgb, scale, scaleH, scaleHSV, scaleS, scaleV, trim };
