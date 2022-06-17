export const NumberStyleKeys = {
  width: true,
  height: true,
  top: true,
  left: true,
  right: true,
  bottom: true,
  maxWidth: true,
  maxHeight: true,
  minWidth: true,
  minHeight: true,
  margin: true,
  marginTop: true,
  marginRight: true,
  marginBottom: true,
  marginLeft: true,
  padding: true,
  paddingTop: true,
  paddingRight: true,
  paddingBottom: true,
  paddingLeft: true,
  border: true,
  borderTop: true,
  borderRight: true,
  borderBottom: true,
  borderLeft: true,
  borderWidth: true,
  borderTopWidth: true,
  borderRightWidth: true,
  borderBottomWidth: true,
  borderLeftWidth: true,
  gap: true,
};

export function styleMap(key, value) {
  if (typeof value === "number") {
    if (NumberStyleKeys[key]) {
      value = value + "px";
    }
  }

  return value;
}

export function propertyMap(styles, mapper = {}) {
  const styleObj = {};
  Object.keys(styles).forEach((key) => {
    styleObj[mapper[key] || key] = styleMap(key, styles[key]);
  });
  return styleObj;
}
