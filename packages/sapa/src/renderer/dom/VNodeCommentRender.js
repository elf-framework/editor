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
  vNodeInstance.el = createElement(vNodeInstance);

  return vNodeInstance;
}

export function VNodeCommentRender(vNodeInstance, withChildren, options) {
  return makeElement(vNodeInstance, withChildren, options);
}
