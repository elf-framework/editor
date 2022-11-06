import { COMPONENT_INSTANCE } from "./constant/component";
import { Dom } from "./functions/Dom";
import {
  registRootElementInstance,
  renderComponent,
} from "./functions/registElement";
import { VNode, VNodeComponent } from "./functions/vnode/index";
import { DomRenderer } from "./renderer/dom/DomRenderer";
import { renderVNodeComponent } from "./renderer/dom/VNodeComponentRender";
import { renderVNodeComponentToHtml } from "./renderer/html/VNodeComponentRender";
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

  const $targetElement = $container
    .children()
    .find((it) => it.el[COMPONENT_INSTANCE]);

  if (ElementClass instanceof VNode) {
    const rootVNode = ElementClass;
    ElementClass = () => rootVNode;
  }

  const app = createComponentInstance(ElementClass, null, {
    ...opt,
    renderer: renderVNodeComponent,
  });

  // hmr 로 인해서 동일한 패턴으로 start 가 되었을 때
  // dom 이 살아있지 않으면 추가
  // dom 이 살아있으면 업데이트 하는 로직을 추가 한다.
  if ($targetElement) {
    app.$el = Dom.create($targetElement.el);
    // id 유지
    app.id = $targetElement.el[COMPONENT_INSTANCE].id;

    // dom render 를 위해서 추가
    renderComponent(app, null, true);
  } else {
    renderComponent(app, $container, true);
  }
  registRootElementInstance(app, $container);

  return app;
};

export const render = start;

/**
 * hydrates the app with the given state
 *
 */
export const hydrate = (ElementClass, opt = {}) => {
  const $container = Dom.create(opt.container || document.body);

  if (ElementClass instanceof VNode) {
    const rootVNode = ElementClass;
    ElementClass = () => rootVNode;
  }

  const app = createComponentInstance(ElementClass, null, {
    ...opt,
    renderer: renderVNodeComponent,
  });

  const $targetElement = $container.firstChild;

  if ($targetElement) {
    app.$el = $targetElement;
    app.$el.el[COMPONENT_INSTANCE] = app;
    renderComponent(app);
  } else {
    renderComponent(app, $container);
  }
  registRootElementInstance(app, $container);

  return app;
};

/**
 * 특정 컴포넌트에 렌더링하기
 *
 */
export const potal = (ElementClass, opt = {}) => {
  const $container = Dom.create(opt.container || document.body);

  if (ElementClass instanceof VNode) {
    const rootVNode = ElementClass;
    ElementClass = () => rootVNode;
  }

  const app = createComponentInstance(ElementClass, null, {
    ...opt,
    renderer: renderVNodeComponent,
  });

  renderComponent(app, $container);

  return app;
};

export async function renderToHtml(ElementClass, opt) {
  if (ElementClass instanceof VNode) {
    const rootVNode = ElementClass;
    ElementClass = () => rootVNode;
  }

  const app = createComponentInstance(ElementClass, null, {
    ...opt,
    renderer: renderVNodeComponentToHtml,
  });

  const html = await renderVNodeComponentToHtml(app);

  return html;
}
