import { COMPONENT_INSTANCE } from "./constant/component";
import { Dom } from "./functions/Dom";
import { isFunction } from "./functions/func";
import { createElementJsx } from "./functions/jsx";
import {
  registRootElementInstance,
  renderComponent,
} from "./functions/registElement";
import { VNode } from "./functions/vnode/index";
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
export function start(ElementNode, opt = {}) {
  if (opt instanceof window.HTMLElement) {
    opt = { container: opt };
  }

  const $container = Dom.create(opt.container || document.body);

  const $targetElement = $container
    .children()
    .find((it) => it.el[COMPONENT_INSTANCE]);

  let RootElement = ElementNode;

  // 함수로 들어오면 컴포넌트로 변환한다.
  if (isFunction(ElementNode)) {
    RootElement = () => createElementJsx(ElementNode);
  } else if (ElementNode instanceof VNode) {
    // VNode 로 들어오면 컴포넌트로 변환한다.
    RootElement = () => ElementNode;
  }

  const app = createComponentInstance(RootElement, null, {
    ...opt,
    renderer: renderVNodeComponent,
  });

  // hmr 로 인해서 동일한 패턴으로 start 가 되었을 때
  // dom 이 살아있지 않으면 추가
  // dom 이 살아있으면 업데이트 하는 로직을 추가 한다.
  if ($targetElement) {
    // target 에 instance 가 있으면
    // 그 instance 를 기반으로 root instance 를 찾고
    // 그 root instance 의 child 를 찾아서
    // child 의 $el 을 다시 instance 로 설정한다.
    // 이렇게 하면 hot reload 이후 업데이트 하는 로직이랑 같아진다.
    const targetInstance = $targetElement.el[COMPONENT_INSTANCE];
    const rootInstance = targetInstance.getRootInstance();
    const childInstance = rootInstance.child || rootInstance;

    if (childInstance?.$el) {
      childInstance.$el.el[COMPONENT_INSTANCE] = childInstance;
    }

    // dom render 를 위해서 추가
    renderComponent(childInstance, null, true);
  } else {
    renderComponent(app, $container, true);
  }
  registRootElementInstance(app, $container);

  return app;
}

export const render = start;

/**
 * hydrates the app with the given state
 *
 */
export const hydrate = (ElementNode, opt = {}) => {
  if (opt instanceof window.HTMLElement) {
    opt = { container: opt };
  }

  const $container = Dom.create(opt.container || document.body);

  let RootElement = ElementNode;

  // 함수로 들어오면 컴포넌트로 변환한다.
  if (isFunction(ElementNode)) {
    RootElement = () => createElementJsx(ElementNode);
  } else if (ElementNode instanceof VNode) {
    // VNode 로 들어오면 컴포넌트로 변환한다.
    RootElement = () => ElementNode;
  }

  const app = createComponentInstance(RootElement, null, {
    ...opt,
    renderer: renderVNodeComponent,
  });

  const $targetElement = $container.firstChild;

  if ($targetElement && $targetElement.el) {
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
