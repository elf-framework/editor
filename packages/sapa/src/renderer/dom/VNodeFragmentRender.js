import { ELEMENT_INSTANCE } from "../../constant/component";
import { makeChildren } from "./utils";

function makeElement(vNodeInstance, withChildren, options) {
  if (vNodeInstance.el) return this;

  const el = document.createDocumentFragment();

  el[ELEMENT_INSTANCE] = vNodeInstance;
  vNodeInstance.el = el;

  makeChildren(vNodeInstance, withChildren, options, true);

  return vNodeInstance;
}

export function VNodeFragmentRender(vNodeInstance, withChildren, options) {
  return makeElement(vNodeInstance, withChildren, options);
}
