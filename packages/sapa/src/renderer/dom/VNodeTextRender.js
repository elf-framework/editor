import { ELEMENT_INSTANCE, ELEMENT_PROPS } from "../../constant/component";

let TEMP_TEXT;

function makeTempText() {
  if (!TEMP_TEXT) {
    TEMP_TEXT = document.createTextNode("");
  }

  return TEMP_TEXT;
}

function makeNativeTextDom(value) {
  const text = makeTempText().cloneNode();
  text.textContent = value;
  return text;
}

function createElement(vNodeInstance) {
  return makeNativeTextDom(vNodeInstance.value);
}

function makeElement(vNodeInstance, options) {
  const el = createElement(vNodeInstance);
  el[ELEMENT_INSTANCE] = vNodeInstance;
  el[ELEMENT_PROPS] = { value: vNodeInstance.value };

  vNodeInstance.setEl(el);
  return vNodeInstance;
}

export function VNodeTextRender(vNodeInstance, options) {
  return makeElement(vNodeInstance, options);
}
