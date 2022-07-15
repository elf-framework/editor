export function propertyMap(styles: any, mapper: any = {}): any {
  const styleObj: any = {};
  Object.keys(styles).forEach((key) => {
    styleObj[mapper[key] || key] = styles[key as any];
  });
  return styleObj;
}
