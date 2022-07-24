import { Dom } from "./Dom";
import { isArray, isString } from "./func";
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

  if (isArray(obj) && obj.length === 1) {
    return VNodeToElement(obj[0], options);
  }

  if (obj) {
    return Dom.create(obj.makeElement(true, options).el);
  }

  return null;
}

export async function VNodeToHtml(obj, options = {}) {
  if (isString(obj)) {
    return obj;
  }

  if (isArray(obj) && obj.length === 1) {
    return await VNodeToHtml(obj[0], options);
  }

  if (obj) {
    return await obj.makeHtml(true, options);
  }

  return "";
}

const VoidTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true,
};

export function isVoidTag(tag) {
  return VoidTags[tag.toLowerCase()];
}
