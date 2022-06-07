export function propertyMap(styles, mapper = {}) {
  const styleObj = {};
  Object.keys(styles).forEach((key) => {
    styleObj[mapper[key]] = styles[key];
  });
  return styleObj;
}
