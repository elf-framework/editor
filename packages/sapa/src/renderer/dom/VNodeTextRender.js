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

function createElement(obj) {
  return makeNativeTextDom(obj.value);
}

function makeElement(obj) {
  obj.el = createElement(obj);
  return obj;
}

export function VNodeTextRender(obj) {
  return makeElement(obj);
}
