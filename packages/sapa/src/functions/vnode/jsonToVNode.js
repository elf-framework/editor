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
 *    type: "div",
 *    props: {
 *      id: "test",
 *      class: "test",
 *      style: {
 *        color: "red"
 *      }
 *    },
 *    children: [
 *      {
 *        type: "span",
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
export function jsonToVNode(json, options = {}) {
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
    const realCompoent =
      options?.retrieveComponent?.(rest.Component, rest) || rest.Component;

    return createVNodeComponent({
      ...rest,
      Component: realCompoent,
      children: children.map((it) => jsonToVNode(it)),
    });
  }

  return createVNode({
    ...rest,
    children: children.map((it) => jsonToVNode(it)),
  });
}
