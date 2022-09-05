import { ComponentPropsToStylePropsMap } from "../consts/style";

// cache style keys
const styleKeys = {};
const uppercasePattern = /([A-Z])/g;

/**
 * convert style key to css key (camelCase to kebab-case)
 *
 * backgroundColor -> background-color
 *
 */
export const convertStyleKey = (key) => {
  // check cache
  if (styleKeys[key]) {
    return styleKeys[key];
  }

  const upperKey = key.replace(uppercasePattern, "-$1").toLowerCase();

  styleKeys[key] = upperKey;

  return upperKey;
};

/**
 * prefixed style key
 *
 * makeCssVariablePrefixMap("--elf--ui", { backgroundColor: true });
 * =>
 * {
 *  backgroundColor: "--elf--ui-background-color",
 * }
 *
 */
export function makeCssVariablePrefixMap(prefix, obj = {}) {
  const newObj = {};

  Object.keys(obj).forEach((key) => {
    newObj[key] = prefix + "-" + convertStyleKey(key);
  });

  return newObj;
}

/**
 * properties key 중에 style key가 있는지 확인
 * style key 와 none style key 를 분리해서 반환
 *
 */
export function splitStyleKeyAndNoneStyleKey(properties) {
  const style = {};
  const noneStyle = {};

  Object.keys(properties).forEach((key) => {
    const value = properties[key];
    const styleKey = ComponentPropsToStylePropsMap[key];
    if (styleKey) {
      style[styleKey] = value;
    } else {
      noneStyle[key] = value;
    }
  });

  return { style, noneStyle };
}
