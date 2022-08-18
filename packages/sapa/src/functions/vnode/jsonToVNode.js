import {
  createVNode,
  createVNodeComment,
  createVNodeComponent,
  createVNodeFragment,
  createVNodeText,
} from "./index";

/**
 *
 * jsonToVNode({
 *    tag: "div",
 *    props: {
 *      id: "test",
 *      class: "test",
 *      style: {
 *        color: "red"
 *      }
 *    },
 *    children: [
 *      {
 *        tag: "span",
 *        props: {
 *          id: "test",
 *          class: "test",
 *          style: {
 *          color: "red"
 *        }
 *      }
 *    ]
 * })
 *
 * @param {*} json
 * @returns
 */
export function jsonToVNode(json) {
  const { children = [], ...rest } = json;

  if (typeof json === "string" || typeof json === "number") {
    return createVNodeText(json);
  }

  if (rest.type === "comment") {
    return createVNodeComment(rest.text);
  }

  if (rest.type === "text") {
    return createVNodeText(rest.text);
  }

  if (rest.type === "fragment") {
    return createVNodeFragment({
      ...rest,
      children: children.map((it) => jsonToVNode(it)),
    });
  }

  if (rest.type === "component" || rest.Component) {
    return createVNodeComponent({
      ...rest,
      children: children.map((it) => jsonToVNode(it)),
    });
  }

  return createVNode({
    ...rest,
    children: children.map((it) => jsonToVNode(it)),
  });
}
