export * from "./App";
export * from "./Event";
export * from "./BaseStore";
export * from "./Hook";
export * from "./WebComponent";
export * from "./functions/Dom";
export * from "./UIElement";
export * from "./functions/func";
export * from "./functions/uuid";
export * from "./functions/registElement";
export * from "./functions/MagicMethod";
export * from "./functions/vnode/index";
export * from "./constant/vnode";
export * from "./functions/vnode/createVNodeByDom";
export * from "./functions/vnode/htmlToVNode";
export * from "./functions/vnode/jsonToVNode";
import * as jsxFunctions from "./functions/jsx";

const FragmentInstance = jsxFunctions.FragmentInstance;
const createElementJsx = jsxFunctions.createElementJsx;
const HTMLComment = jsxFunctions.HTMLComment;

// for jsx-runtime
const jsx = jsxFunctions.jsx;
const jsxs = jsxFunctions.jsxs;

export { FragmentInstance, createElementJsx, HTMLComment, jsx, jsxs };
export default {
  ...jsxFunctions,
};
