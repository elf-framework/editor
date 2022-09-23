import { makeChildrenHtml } from "./utils";

async function makeHtml(vNodeInstance, withChildren = false, options = {}) {
  return await makeChildrenHtml(vNodeInstance, withChildren, options);
}

export function VNodeFragmentRender(obj, withChildren, options) {
  return makeHtml(obj, withChildren, options);
}
