import { clone, round } from "./utils/index";

/**
 * @method format
 *
 * convert color to format string
 *
 * ```js
 *     ## hex
 *     color.format({ r : 255, g : 255, b : 255 }, 'hex')
 *
 *     ## rgb
 *     color.format({ r : 255, g : 255, b : 255 }, 'rgb')
 *
 *     ## rgba
 *     color.format({ r : 255, g : 255, b : 255, a : 0.5 }, 'rgb')
 * ```
 *
 * @param {Object} obj  obj has r, g, b and a attributes
 * @param {hex|rgb|hsl} type  format string type
 * @returns {*}
 */
export function format(obj, type, defaultColor = "rgba(0, 0, 0, 0)") {
  if (Array.isArray(obj)) {
    obj = { r: obj[0], g: obj[1], b: obj[2], a: obj[3] };
  }

  if (type == "hex") {
    return hex(obj);
  } else if (type == "rgb") {
    return rgb(obj, defaultColor);
  } else if (type == "hsl") {
    return hsl(obj);
  } else if (type == "hsv") {
    return hsv(obj);
  } else if (type == "cmyk") {
    return cmyk(obj);
  }

  return `${type}(${obj.r},${obj.g},${obj.b})`;
}

export function formatWithoutAlpha(
  obj,
  type,
  defaultColor = "rgba(0, 0, 0, 0)"
) {
  const newColorObj = clone(obj);
  newColorObj.a = 1;
  return format(newColorObj, type, defaultColor);
}

export function hex(obj) {
  if (Array.isArray(obj)) {
    obj = { r: obj[0], g: obj[1], b: obj[2], a: obj[3] };
  }

  var r = obj.r.toString(16);
  if (obj.r < 16) r = "0" + r;

  var g = obj.g.toString(16);
  if (obj.g < 16) g = "0" + g;

  var b = obj.b.toString(16);
  if (obj.b < 16) b = "0" + b;

  if (obj.a == 1 || typeof obj.a === "undefined") {
    return `#${r}${g}${b}`;
  } else {
    const alpha = Math.ceil(obj.a * 255);
    var a = alpha.toString(16);
    if (alpha < 16) a = "0" + a;

    return `#${r}${g}${b}${a}`;
  }
}

export function rgb(obj, defaultColor = "rgba(0, 0, 0, 0)") {
  if (Array.isArray(obj)) {
    obj = { r: obj[0], g: obj[1], b: obj[2], a: obj[3] };
  }

  if (typeof obj === "undefined") {
    return undefined;
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

export function hsl(obj) {
  if (Array.isArray(obj)) {
    obj = { h: obj[0], s: obj[1], l: obj[2], a: obj[3] };
  }

  if (obj.a == 1 || typeof obj.a === "undefined") {
    return `hsl(${obj.h}, ${obj.s}%, ${obj.l}%)`;
  } else {
    return `hsla(${obj.h}, ${obj.s}%, ${obj.l}%, ${obj.a})`;
  }
}

export function hsv(obj) {
  if (Array.isArray(obj)) {
    obj = { h: obj[0], s: obj[1], v: obj[2], a: obj[3] };
  }

  const h = round(obj.h);
  const a = obj.a;
  const s = round(obj.s * 100);
  const v = round(obj.v * 100);

  if (obj.a == 1 || typeof obj.a === "undefined") {
    return `hsv(${h}, ${s}%, ${v}%)`;
  } else {
    return `hsva(${h}, ${s}%, ${v}%, ${a})`;
  }
}

export function cmyk(obj) {
  if (Array.isArray(obj)) {
    obj = { c: obj[0], m: obj[1], y: obj[2], k: obj[3] };
  }

  const c = round(obj.c * 100, 100);
  const m = round(obj.m * 100, 100);
  const y = round(obj.y * 100, 100);
  const k = round(obj.k * 100, 100);

  return `cmyk(${c}%,${m}%,${y}%,${k}%)`;
}
