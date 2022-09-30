import { children, createVNode, createVNodeText } from "./index";

function getProps(attributes) {
  var results = {};
  const len = attributes.length;

  // 일단 attribute 에는 없음
  // properties 에 있는지 봐야함.
  for (let i = 0; i < len; i++) {
    const t = attributes[i];
    const name = t.name;
    const value = t.value;

    results[name] = value;
  }

  return results;
}

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
