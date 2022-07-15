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
  opacity: true,
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

function styleMap(key, value) {
  if (typeof value === "number") {
    if (NumberStyleKeys[key]) {
      value = value + "px";
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
    newStyles[styleKeyMap(styleKey)] = styleMap(styleKey, style[styleKey]);
  });

  return newStyles;
}
