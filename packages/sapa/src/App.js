import { Dom } from "./functions/Dom";
import { registRootElementInstance } from "./functions/registElement";
import { VNode } from "./functions/vnode";
// import { Router } from "./Router";
import { UIElement } from "./UIElement";

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

  const app = UIElement.createElementInstance(ElementClass, opt);

  // hmr 로 인해서 동일한 패턴으로 start 가 되었을 때
  // dom 이 살아있지 않으면 추가
  // dom 이 살아있으면 업데이트 하는 로직을 추가 한다.
  if ($targetElement) {
    app.$el = Dom.create($targetElement.el);
    app.render();
    app.$el.el.__component = app;
  } else {
    app.render($container);
    app.$el.el.__component = app;
  }

  registRootElementInstance(app);

  return app;
};

export async function renderToString(ElementClass, opt) {
  const app = UIElement.createElementInstance(ElementClass, opt);
  // server 인지 확인
  app.setServer(true);
  const instance = await app.render();

  return instance.html;
}
