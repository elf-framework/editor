import { css } from "../../functions/css";
import { isVoidTag } from "../../functions/DomUtil";
import { isObject, isString } from "../../functions/func";
import { makeChildrenHtml } from "./utils";

/**
 * context 에서 사용할 수 있는 속성을 추출한다.
 */
function getContextProps(context, props) {
  const newProps = context.filterFunction("getProps").flat(Infinity);
  const newPropList = newProps.filter((it) => {
    return it.ref === props.ref;
  });

  newPropList.forEach((it) => {
    if (isObject(it.props)) {
      Object.assign(props, it.props);
    }
  });
}

function stringifyStyle(styleObject) {
  const newStyle = css(styleObject);
  return Object.keys(newStyle)
    .map((key) => {
      return `${key}: ${newStyle[key]};`;
    })
    .join(" ");
}

async function makeHtml(vNodeInstance, withChildren = false, options = {}) {
  const tempProps = [];
  const props = vNodeInstance.memoizedProps;
  if (props) {
    if (props.ref) {
      // ref 가 있을 때는 context 에서 props 를 가지고 온다.
      getContextProps(vNodeInstance, options.context, props);
    }

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
    const childrenHtml = await makeChildrenHtml(
      vNodeInstance,
      withChildren,
      options
    );

    return `<${tag} ${tempProps.join(" ")}>${childrenHtml}</${tag}>`;
  }
}

export async function VNodeElementRender(vNodeInstance, withChildren, options) {
  return await makeHtml(vNodeInstance, withChildren, options);
}
