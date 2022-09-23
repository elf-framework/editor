import { COMPONENT_INSTANCE } from "../../constant/component";
import { VNodeType } from "../../constant/vnode";
import { Dom } from "../../functions/Dom";
import { isArray, isFunction, isString } from "../../functions/func";
import { Reconcile, updateChildren } from "../../functions/Reconcile";
import { RefClass } from "../../HookMachine";
import { DomRenderer } from "./DomRenderer";

async function runningUpdate(componentInstance, template) {
  if (template.isType(VNodeType.FRAGMENT)) {
    updateChildren(componentInstance.parentElement, template);
  } else {
    Reconcile(
      componentInstance.$el.el,
      template,
      componentInstance.getVNodeOptions()
    );
  }

  // element 에 component 속성 설정
  componentInstance.$el.el[COMPONENT_INSTANCE] = componentInstance;
  // this.prevTemplate = template;
  componentInstance.runUpdated();

  // 최초 렌더링 될 때 한번만 실행하는걸로 하자.
  await componentInstance.runHandlers("update");
}

async function runningMount(componentInstance, template, $container) {
  const newDomElement = DomRenderer(
    template,
    componentInstance.getVNodeOptions()
  );

  componentInstance.$el = newDomElement;
  componentInstance.refs.$el = componentInstance.$el;
  // this.prevTemplate = template;
  // element 에 component 속성 설정
  if (componentInstance.$el) {
    componentInstance.$el.el[COMPONENT_INSTANCE] = componentInstance;
  }

  if ($container) {
    if (!($container instanceof Dom)) {
      $container = Dom.create($container);
    }

    // $container 의 자식이 아닐 때만 추가
    if ($container.hasChild(componentInstance.$el) === false) {
      $container.append(componentInstance.$el);
      componentInstance.runMounted();
    }
  }
  // 최초 렌더링 될 때 한번만 실행하는걸로 하자.
  await componentInstance.runHandlers("initialize");

  await componentInstance.afterRender();
}

/**
 * template 을 렌더링 한다.
 *
 * @param {Dom|undefined} $container  컴포넌트가 그려질 대상
 */
export async function renderVNodeComponent(componentInstance, $container) {
  //   if (!componentInstance.isPreLoaded) {
  //     componentInstance.checkLoad($container);
  //     return;
  //   }

  // 렌더 하기 전에 hook에 현재 컴포넌트를 등록한다.
  componentInstance.resetCurrentComponent();
  const template = componentInstance.template();
  if (isArray(template)) {
    throw new Error(
      [
        `Error Component - ${componentInstance.sourceName}`,
        "Template root is not must an array, however You can use Fragment instead of it",
        "Fragment Samples: ",
        " <>{list}</> ",
        " <Fragment>{list}</Fragment>",
      ].join("\n")
    );
  }
  if (componentInstance.$el) {
    await runningUpdate(componentInstance, template);
  } else {
    await runningMount(componentInstance, template, $container);
  }

  return componentInstance;
}

function render(vNodeInstance, options) {
  vNodeInstance.makeClassInstance(options);
  try {
    // 객체를 생성 후에는 렌더링을 한다.
    vNodeInstance.instance.setParentElement(vNodeInstance.parentElement);
    renderVNodeComponent(vNodeInstance.instance, options.$container);
  } catch (e) {
    console.error(e);
  }
}

function makeElement(vNodeInstance, withChildren, options = {}) {
  const node = vNodeInstance;

  render(node, options);

  // 렌더링 된 객체에서 element 를 얻는다.
  node.el = node.instance?.$el?.el;

  if (node.el) {
    // props.ref 가 있으면 등록한다.
    const id = isString(node.props.ref) ? node.props.ref : node.instance.id;

    if (node.props.ref instanceof RefClass) {
      // ref 가 있으면 component 의 instance 를 등록한다.
      node.props.ref.setCurrent(node.instance);
    }

    // 상위 컨텍스트 에서 내부 children 을 관리한다.
    isFunction(options.registerChildComponent) &&
      options.registerChildComponent(node.el, node.instance, id);
  }

  return node;
}

export function VNodeComponentRender(vNodeInstance, withChildren, options) {
  return makeElement(vNodeInstance, withChildren, options);
}
