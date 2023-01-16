import { isArray, isFunction } from "../../functions/func";
import { VNode } from "../../functions/vnode";
import { HtmlRenderer } from "./HtmlRenderer";

export async function makeChildrenHtml(vNodeInstance, options) {
  const tempChildren = [];
  const children = vNodeInstance.children;
  if (children && children.length) {
    // element 수집
    const tempArray = await Promise.all(
      children.map(async (child) => {
        if (child instanceof VNode || child.makeHtml) {
          return await HtmlRenderer(child, options);
        } else if (isArray(child)) {
          return await Promise.all(
            child.map(async (it) => {
              if (it) {
                return await HtmlRenderer(it, options);
              }

              return undefined;
            })
          ).filter((it) => typeof it !== "undefined");
        } else if (isFunction(child)) {
          return await child();
        } else {
          return await child;
        }
      })
    );

    tempChildren.push(...tempArray);
  }

  return tempChildren.join("");
}
