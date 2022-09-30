import { makeChildren } from "./utils";

function makeElement(obj, withChildren, options) {
  if (obj.el) return this;

  const el = document.createDocumentFragment();

  obj.el = el;

  makeChildren(obj, withChildren, options, true);

  return obj;
}

export function VNodeFragmentRender(obj, withChildren, options) {
  return makeElement(obj, withChildren, options);
}
