import { VNodeType } from "../../constant/vnode";
import { isArray, isString } from "../../functions/func";
import { createVNodeText } from "../../functions/vnode";
import { VNodeCommentRender } from "./VNodeCommentRender";
import { VNodeComponentRender } from "./VNodeComponentRender";
import { VNodeElementRender } from "./VNodeElementRender";
import { VNodeFragmentRender } from "./VNodeFragmentRender";
import { VNodeTextRender } from "./VNodeTextRender";

const RendererList = {
  [VNodeType.TEXT]: VNodeTextRender,
  [VNodeType.NODE]: VNodeElementRender,
  [VNodeType.FRAGMENT]: VNodeFragmentRender,
  [VNodeType.COMPONENT]: VNodeComponentRender,
  [VNodeType.COMMENT]: VNodeCommentRender,
};

function VNodeRender(vNodeInstance, options) {
  const CurrentRenderer = RendererList[vNodeInstance.type];

  if (CurrentRenderer) {
    return CurrentRenderer(vNodeInstance, options);
  }
  return null;
}

export function DomRenderer(obj, options = {}) {
  if (isString(obj)) {
    obj = createVNodeText(obj);
  }

  if (isArray(obj) && obj.length === 1) {
    return DomRenderer(obj[0], options);
  }

  if (obj) {
    return VNodeRender(obj, options, options.container);
  }

  return obj;
}
