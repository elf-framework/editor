import { children, createVNode, createVNodeText, getProps } from "./index";

export function createVNodeByDom(el) {
  if (typeof el === "string") {
    return createVNodeText(el);
  }

  if (el.nodeType === 3) {
    return createVNodeText(el.textContent);
  }

  return createVNode({
    tag: el.tagName, // tag 이름 그대로 넣어야함. 예를들어 <div> 이면 div 를 넣어야 함.
    props: getProps(el.attributes),
    children: children(el).map((it) => {
      return createVNodeByDom(it);
    }),
  });
}
