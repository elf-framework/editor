import { VNodeType } from "../../constant/vnode";
import { isArray } from "../../functions/func";
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

async function VNodeRender(vNodeInstance, withChildren, options) {
  const CurrentRenderer = RendererList[vNodeInstance.type];

  //   console.log(CurrentRenderer, vNodeInstance);

  if (CurrentRenderer) {
    const result = CurrentRenderer(vNodeInstance, withChildren, options);
    return await result;
  }

  return null;
}

export async function HtmlRenderer(obj, options = {}) {
  if (isArray(obj) && obj.length === 1) {
    return await HtmlRenderer(obj[0], options);
  }

  if (obj) {
    const html = await VNodeRender(obj, true, options);
    return html;
  }

  return await obj;
}
