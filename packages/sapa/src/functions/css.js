import { isArray } from "./func";

const NumberStyleKeys = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontSize: true,
  // fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  width: true,
  maxWidth: true,
  maxHeight: true,
  height: true,
  top: true,
  left: true,
  right: true,
  bottom: true,
  border: true,
  borderWidth: true,
  borderRadius: true,
  padding: true,
  margin: true,
  paddingLeft: true,
  paddingRight: true,
  paddingTop: true,
  paddingBottom: true,
  marginLeft: true,
  marginRight: true,
  marginTop: true,
  marginBottom: true,
  gap: true,
  columnGap: true,
  rowGap: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
};

const styleKeys = {};
const uppercasePattern = /([A-Z])/g;

/**
 * style key convert to css key
 *
 * backgroundColor -> background-color
 *
 * @param {*} key
 * @returns
 */
const convertStyleKey = (key) => {
  if (styleKeys[key]) {
    return styleKeys[key];
  }

  const upperKey = key.replace(uppercasePattern, "-$1").toLowerCase();

  styleKeys[key] = upperKey;

  return upperKey;
};

const ArrayNumberStyleKeys = {
  padding: true,
};

/**
 *
 * convertNumberStyleValue("width", 10) -> "width: 10px"
 * convertNumberStyleValue("borderWidth", 10) -> "border-width: 10px"
 *
 */
function convertNumberStyleValue(key, value) {
  if (typeof value === "number") {
    if (NumberStyleKeys[key]) {
      value = value + "px";
    }
  } else if (isArray(value)) {
    if (ArrayNumberStyleKeys[key]) {
      value = value.map((v) => convertNumberStyleValue(key, v)).join(" ");
    }
  }

  return value;
}

function styleKeyMap(key) {
  return convertStyleKey(key);
}

export function css(style) {
  const newStyles = {};
  Object.keys(style).forEach((styleKey) => {
    newStyles[styleKeyMap(styleKey)] = convertNumberStyleValue(styleKey, style[styleKey]);
  });

  return newStyles;
}
