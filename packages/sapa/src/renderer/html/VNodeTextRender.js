function makeHtml(vNodeInstance) {
  return vNodeInstance.value;
}

export function VNodeTextRender(vNodeInstance) {
  return makeHtml(vNodeInstance);
}
