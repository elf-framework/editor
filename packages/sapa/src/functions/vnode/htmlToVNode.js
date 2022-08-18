import { Dom } from "../Dom";
import { createVNodeByDom } from "./createVNodeByDom";

export function htmlToVNode(html) {
  const $dom = Dom.createByHTML(html);
  return createVNodeByDom($dom.el);
}
