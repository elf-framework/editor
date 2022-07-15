import { Dom } from "./Dom";
import { isArray, isNumber, isString } from "./func";
import { createVNodeText } from "./vnode";
/**
 * element tree 의 최상위 element 를 리턴한다.
 *
 * @example
 *
 * ```js
 * Dom.VNodeToElement({
 *  tag: 'div',
 *  props: {
 *   className: 'test',
 *  },
 *  children: [
 *    {tag: 'span', props: {className: 'test'}, },
 *    {tag: 'span', props: {className: 'test'} },
 *  ],
 * })
 *
 * ```
 *
 * @returns {Dom}
 * @memberof Dom
 * @example
 */
export function VNodeToElement(obj, options = {}) {
  if (isString(obj)) {
    obj = createVNodeText(obj);
  }

  return Dom.create(obj.makeElement(true, options).el);
}

/**
 * 항상 element 의 list 를 만들어준다.
 *
 * @param {string|string[]|HTMLElement|HTMLElement[]} html
 * @returns
 */
let TEMP_DIV;
export function makeElementList(html) {
  if (!TEMP_DIV) {
    TEMP_DIV = Dom.create("div");
  }

  let list = [];

  if (!isArray(html)) {
    html = [html];
  }

  for (let i = 0, len = html.length; i < len; i++) {
    const item = html[i];
    if (isString(item)) {
      list.push(...(TEMP_DIV.html(item).childNodes || []));
    } else if (isNumber(item)) {
      list.push(Dom.createText(item));
    } else if (item) {
      list.push(Dom.create(item));
    } else {
      // noop
      console.log("noop");
    }
  }

  return list;
}
