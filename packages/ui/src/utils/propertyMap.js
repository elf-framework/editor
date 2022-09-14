import { NumberStyleKeys } from "../consts/style";

/**
 * convertNumberStyleValue("width", 10) => "10px"
 */
export function convertNumberStyleValue(key, value) {
  if (typeof value === "number") {
    if (NumberStyleKeys[key]) {
      value = value + "px";
    }
  }

  return value;
}

export function propertyMap(styles = {}, mapper = {}) {
  const styleObj = {};
  Object.keys(styles).forEach((key) => {
    if (typeof styles[key] !== "undefined") {
      styleObj[mapper[key] || key] = convertNumberStyleValue(key, styles[key]);
    }
  });
  return Object.keys(styleObj).length ? styleObj : undefined;
}
