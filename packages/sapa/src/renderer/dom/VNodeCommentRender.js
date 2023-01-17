import { ELEMENT_INSTANCE, ELEMENT_PROPS } from "../../constant/component";

let TEMP_COMMENT;

function makeTempComment() {
  if (!TEMP_COMMENT) {
    TEMP_COMMENT = document.createComment("");
  }

  return TEMP_COMMENT;
}

function makeNativeCommentDom(value) {
  const text = makeTempComment().cloneNode();
  text.textContent = value;
  return text;
}

function createElement(vNodeInstance) {
  return makeNativeCommentDom(vNodeInstance.value);
}

function makeElement(vNodeInstance) {
  const el = createElement(vNodeInstance);

  el[ELEMENT_INSTANCE] = vNodeInstance;
  el[ELEMENT_PROPS] = { value: vNodeInstance.value };

  vNodeInstance.setEl(el);
  return vNodeInstance;
}

export function VNodeCommentRender(vNodeInstance, options) {
  return makeElement(vNodeInstance, options);
}
