import { css } from "../../functions/css";
import { isVoidTag } from "../../functions/DomUtil";
import { isString } from "../../functions/func";
import { makeChildrenHtml } from "./utils";

function stringifyStyle(styleObject) {
  const newStyle = css(styleObject);
  return Object.keys(newStyle)
    .map((key) => {
      return `${key}: ${newStyle[key]};`;
    })
    .join(" ");
}

async function makeHtml(vNodeInstance, options = {}) {
  const tempProps = [];
  const props = vNodeInstance.memoizedProps;
  if (props) {

    Object.keys(props).forEach((key) => {
      const value = props[key];
      if (key === "style") {
        if (isString(value)) {
          // noop
        } else {
          props[key] = stringifyStyle(css(value));
        }
      } else {
        if (key) {
          if (value !== undefined) {
            // 이벤트는 단일 속성 이벤트로 정의
            if (key.startsWith("on")) {
              // onXXX 이벤트는 정의하지 않는다.
              return;
            }
          }
        }
      }

      if (key === "ref") {
        return;
      }

      if (value) {
        tempProps.push(`${key}="${value}"`);
      }
    });
  }

  const tag = vNodeInstance.tag;
  if (isVoidTag(tag)) {
    return `<${tag} ${tempProps.join(" ")} />`;
  } else {
    const childrenHtml = await makeChildrenHtml(vNodeInstance, options);

    return `<${tag} ${tempProps.join(" ")}>${childrenHtml}</${tag}>`;
  }
}

export async function VNodeElementRender(vNodeInstance, options) {
  return await makeHtml(vNodeInstance, options);
}
