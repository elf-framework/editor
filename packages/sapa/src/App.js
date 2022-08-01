import { Dom } from "./functions/Dom";
import { registRootElementInstance } from "./functions/registElement";
import { VNode } from "./functions/vnode";
// import { Router } from "./Router";
import { createComponentInstance } from "./UIElement";

/**
 * UIElement 렌더링 하기
 *
 * @param {UIElement|Function} ElementClass
 * @returns {UIElement}
 */
export const start = (ElementClass, opt = {}) => {
  const $container = Dom.create(opt.container || document.body);

  const $targetElement = $container.children().find((it) => it.el.__component);

  if (ElementClass instanceof VNode) {
    const rootVNode = ElementClass;
    ElementClass = () => rootVNode;
  }

  const app = createComponentInstance(ElementClass, null, opt);

  // hmr 로 인해서 동일한 패턴으로 start 가 되었을 때
  // dom 이 살아있지 않으면 추가
  // dom 이 살아있으면 업데이트 하는 로직을 추가 한다.
  if ($targetElement) {
    app.$el = Dom.create($targetElement.el);
    // id 유지
    app.id = $targetElement.el.__component.id;
    app.render();
  } else {
    app.render($container);
  }
  app.$el.el.__component = app;
  registRootElementInstance(app, $container);

  return app;
};

export const render = start;

export async function renderToHtml(ElementClass, opt) {
  if (ElementClass instanceof VNode) {
    const rootVNode = ElementClass;
    ElementClass = () => rootVNode;
  }

  const app = createComponentInstance(ElementClass, null, opt);
  const html = await app.renderToHtml();

  return html;
}
