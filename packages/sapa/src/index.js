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
import * as jsx from "./functions/jsx";

const FragmentInstance = jsx.FragmentInstance;
const createElementJsx = jsx.createElementJsx;
const HTMLComment = jsx.HTMLComment;

export { FragmentInstance, createElementJsx, HTMLComment };
export default {
  ...jsx,
};
