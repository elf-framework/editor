import { format } from "./formatter";
import { HSVtoRGB } from "./fromHSV";
import { RGBtoHSV } from "./fromRGB";
import { parse, convertMatchesArray, parseGradient } from "./parser";
import { round } from "./utils/index";

/**
 * @deprecated
 *
 * instead of this,  use blend function
 *
 * @param {*} startColor
 * @param {*} endColor
 * @param {*} t
 */
export function interpolateRGB(
  startColor,
  endColor,
  t = 0.5,
  exportFormat = "hex"
) {
  var obj = interpolateRGBObject(startColor, endColor, t);

  return format(obj, exportFormat);
}

export function interpolateRGBObject(startColor, endColor, t = 0.5) {
  const startColorAlpha =
    typeof startColor.a === "undefined" ? 1 : startColor.a;
  const endColorAlpha = typeof endColor.a === "undefined" ? 1 : endColor.a;
  return {
    r: round(startColor.r + (endColor.r - startColor.r) * t),
    g: round(startColor.g + (endColor.g - startColor.g) * t),
    b: round(startColor.b + (endColor.b - startColor.b) * t),
    a: round(startColorAlpha + (endColorAlpha - startColorAlpha) * t, 100),
  };
}

export function scale(scale, count = 5) {
  if (!scale) return [];

  if (typeof scale === "string") {
    scale = convertMatchesArray(scale);
  }

  scale = scale || [];
  var len = scale.length;

  var colors = [];
  for (var i = 0; i < len - 1; i++) {
    for (var index = 0; index < count; index++) {
      colors.push(blend(scale[i], scale[i + 1], index / count));
    }
  }
  return colors;
}

export function blend(startColor, endColor, ratio = 0.5, format = "hex") {
  var s = parse(startColor);
  var e = parse(endColor);

  return interpolateRGB(s, e, ratio, format);
}

export function mix(startcolor, endColor, ratio = 0.5, format = "hex") {
  return blend(startcolor, endColor, ratio, format);
}

/**
 *
 * @param {Color|String} c
 */
export function contrast(c) {
  c = parse(c);
  return (
    (Math.round(c.r * 299) + Math.round(c.g * 587) + Math.round(c.b * 114)) /
    1000
  );
}

export function contrastColor(c) {
  return contrast(c) >= 128 ? "black" : "white";
}

// param: array [R, G, B]
export function luminance(r, g, b) {
  r = r / 255;
  g = g / 255;
  b = b / 255;

  r = r < 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  g = g < 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  b = b < 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

  return r * 0.2126 + g * 0.7152 + b * 0.0722;
}

export function contrastRatio(color1, color2) {
  color1 = parse(color1);
  color2 = parse(color2);

  const lum1 = luminance(color1.r, color1.g, color1.b);
  const lum2 = luminance(color2.r, color2.g, color2.b);

  return (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
}

/**
 *
 * Fail
 *   – Your text doesn't have enough contrast with the background. You probably want to make it darker. This is a score of less than 3.0.
 * AA Large
 *   – The smallest acceptable amount of contrast for type sizes of 18pt and larger. This is a score of at least 3.0.
 * AA
 *   – This is the sweet spot for text sizes below ~18pt. This is a score of at least 4.5.
 * AAA
 *   – This is enhanced contrast with a score of at least 7.0. Think longer form articles that will be read for a significant period of time.
 */
export function contrastScore(contrast) {
  if (contrast >= 7) {
    return "AAA";
  }

  if (contrast >= 4.5) {
    return "AA";
  }

  if (contrast >= 3) {
    return "AA Large";
  }

  return "Fail";
}

export function contrastScoreText(
  backgroundColor,
  textColor,
  fontSize,
  baseFontSize = 20
) {
  const score = contrastScore(contrastRatio(backgroundColor, textColor));

  const isLarge = fontSize > baseFontSize;
  let pass = "FAIL";

  if (isLarge) {
    if (score === "AA Large") {
      pass = "PASS";
    } else if (score === "AA") {
      pass = "PASS";
    } else if (score === "AAA") {
      pass = "PASS";
    }
  } else {
    if (score === "AA") {
      pass = "PASS";
    } else if (score === "AAA") {
      pass = "PASS";
    }
  }

  return pass;
}

export function gradient(colors, count = 10) {
  colors = parseGradient(colors);

  let newColors = [];
  let maxCount = count - (colors.length - 1);
  let allCount = maxCount;

  for (var i = 1, len = colors.length; i < len; i++) {
    var startColor = colors[i - 1][0];
    var endColor = colors[i][0];

    var rate = i == 1 ? colors[i][1] : colors[i][1] - colors[i - 1][1];

    var colorCount =
      i == colors.length - 1 ? allCount : Math.floor(rate * maxCount);

    newColors = newColors.concat(scale([startColor, endColor], colorCount), [
      endColor,
    ]);

    allCount -= colorCount;
  }
  return newColors;
}

export function scaleHSV(
  color,
  target = "h",
  count = 9,
  exportFormat = "rgb",
  min = 0,
  max = 1,
  dist = 100
) {
  var colorObj = parse(color);
  var hsv = RGBtoHSV(colorObj);
  var unit = ((max - min) * dist) / count;

  var results = [];
  for (var i = 1; i <= count; i++) {
    hsv[target] = Math.abs((dist - unit * i) / dist);
    results.push(format(HSVtoRGB(hsv), exportFormat));
  }

  return results;
}

export function scaleH(
  color,
  count = 9,
  exportFormat = "rgb",
  min = 0,
  max = 360
) {
  return scaleHSV(color, "h", count, exportFormat, min, max, 1);
}

export function scaleS(
  color,
  count = 9,
  exportFormat = "rgb",
  min = 0,
  max = 1
) {
  return scaleHSV(color, "s", count, exportFormat, min, max, 100);
}

export function scaleV(
  color,
  count = 9,
  exportFormat = "rgb",
  min = 0,
  max = 1
) {
  return scaleHSV(color, "v", count, exportFormat, min, max, 100);
}

/* predefined scale colors */
scale.parula = function (count) {
  return scale(["#352a87", "#0f5cdd", "#00b5a6", "#ffc337", "#fdff00"], count);
};

scale.jet = function (count) {
  return scale(
    [
      "#00008f",
      "#0020ff",
      "#00ffff",
      "#51ff77",
      "#fdff00",
      "#ff0000",
      "#800000",
    ],
    count
  );
};

scale.hsv = function (count) {
  return scale(
    [
      "#ff0000",
      "#ffff00",
      "#00ff00",
      "#00ffff",
      "#0000ff",
      "#ff00ff",
      "#ff0000",
    ],
    count
  );
};

scale.hot = function (count) {
  return scale(["#0b0000", "#ff0000", "#ffff00", "#ffffff"], count);
};
scale.pink = function (count) {
  return scale(["#1e0000", "#bd7b7b", "#e7e5b2", "#ffffff"], count);
};

scale.bone = function (count) {
  return scale(["#000000", "#4a4a68", "#a6c6c6", "#ffffff"], count);
};

scale.copper = function (count) {
  return scale(["#000000", "#3d2618", "#9d623e", "#ffa167", "#ffc77f"], count);
};
