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
export const convertStyleKey = (key) => {
  if (styleKeys[key]) {
    return styleKeys[key];
  }

  const upperKey = key.replace(uppercasePattern, "-$1").toLowerCase();

  styleKeys[key] = upperKey;

  return upperKey;
};

export function makeStyleMap(prefix, obj = {}) {
  const newObj = {};

  Object.keys(obj).forEach((key) => {
    newObj[key] = prefix + "-" + convertStyleKey(key);
  });
}
