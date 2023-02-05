import { ELEMENT_INSTANCE } from "../../constant/component";
import { makeChildren } from "./utils";

function makeElement(vNodeInstance, options) {
  // fragment 는 DocumentFragment 를 대상으로 구조를 맞춘다.
  // 하위 element들은 DocumentFragment 에 넣어두고 DOM 에 추가한다.
  const el = document.createDocumentFragment();

  el[ELEMENT_INSTANCE] = vNodeInstance;
  vNodeInstance.setEl(el);

  makeChildren(
    vNodeInstance,
    {
      ...options,
      container: el,
    },
    true
  );

  return vNodeInstance;
}

export function VNodeFragmentRender(vNodeInstance, options) {
  return makeElement(vNodeInstance, options);
}
