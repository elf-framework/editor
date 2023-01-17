import { ELEMENT_INSTANCE } from "../../constant/component";
import { makeChildren } from "./utils";

function makeElement(vNodeInstance, options) {
  if (vNodeInstance.el) return this;

  const el = document.createDocumentFragment();

  el[ELEMENT_INSTANCE] = vNodeInstance;
  vNodeInstance.setEl(el);

  makeChildren(vNodeInstance, options, true);

  return vNodeInstance;
}

export function VNodeFragmentRender(vNodeInstance, options) {
  return makeElement(vNodeInstance, options);
}
