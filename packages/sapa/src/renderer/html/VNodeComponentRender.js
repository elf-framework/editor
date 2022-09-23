import { HtmlRenderer } from "./HtmlRenderer";

/**
 * component 를 html 로 렌더링 한다.
 */
export async function renderVNodeComponentToHtml(
  componentInstance,
  options = {}
) {
  // 렌더 하기 전에 hook에 현재 컴포넌트를 등록한다.
  componentInstance.resetCurrentComponent();
  const template = componentInstance.template();
  const html = await HtmlRenderer(template, options);

  return html;
}

/**
 * vnode 를 html 로 렌더링 한다.
 */
async function renderHtml(vNodeInstance, parentOptions) {
  vNodeInstance.makeClassInstance(parentOptions);

  const instance = vNodeInstance.instance;

  return await renderVNodeComponentToHtml(instance, instance.getVNodeOptions());
}

async function makeHtml(vNodeInstance, withChildren, options = {}) {
  return await renderHtml(vNodeInstance, options);
}

export async function VNodeComponentRender(
  vNodeInstance,
  withChildren,
  options
) {
  return await makeHtml(vNodeInstance, withChildren, options);
}
