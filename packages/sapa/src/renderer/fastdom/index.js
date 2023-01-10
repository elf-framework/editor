import { VNodeType } from "../../constant/vnode";
import { VNodeElementRender } from "./VNodeElementRender";

function VNodeTextRender(container, vnode) {
  if (vnode.el) {
    vnode.el.textContent = vnode.text;
  } else {
    vnode.el = document.createTextNode(vnode.text);
    container.appendChild(vnode.el);
  }
}
/**
 * 렌더링 시작점
 *
 * vnode 를 기준으로 container 에 추가한다.
 *
 */
export function fastdom(container, { vnode }) {
  if (vnode) {
    // vnode 는 하나의 데이타이다.
    // 그래서 렌더링을 처리하는 방식을 별도로 만들어줘야 한다.

    // vnode 를 기준으로 렌더링을 처리한다.
    // vnode 는 하나의 데이타이다.

    switch (vnode.type) {
      case VNodeType.ELEMENT:
        return VNodeElementRender(vnode, true);
      case VNodeType.TEXT:
        return VNodeTextRender(vnode, true, options);
      case VNodeType.FRAGMENT:
        return VNodeFragmentRender(vnode, true, options);
      case VNodeType.COMPONENT:
        return VNodeComponentRender(vnode, true, options);
      case VNodeType.COMMENT:
        return VNodeCommentRender(vnode, true, options);
    }
  }

  return null;
}
