import {
  ALTERNATE_TEMPLATE,
  COMPONENT_INSTANCE,
  ELEMENT_INSTANCE,
  IS_FRAGMENT_ITEM,
  SELF_COMPONENT_INSTANCE,
} from "../../constant/component";
import { VNodeType } from "../../constant/vnode";
import { Dom } from "../../functions/Dom";
import { DomRenderer } from "./DomRenderer";
import { Reconcile } from "./Reconcile";
import { commitMountFromElement } from "./utils";

/**
 * fragment 를 최대한 없애는 함수
 *
 * fragment.children 을 배열로 치환해서 일렬로 맞춘다.
 *
 * @param {*} template
 * @returns
 */
function flatTemplate(template) {
  let root = [template];

  root = root.filter(Boolean).flat(Infinity);

  return root;
}

async function runningUpdate(componentInstance, template) {
  template[SELF_COMPONENT_INSTANCE] = componentInstance;
  Reconcile(componentInstance, template, componentInstance.getVNodeOptions());

  if (template.type === VNodeType.FRAGMENT) {
    template.setEl(componentInstance.$el.el);

    // fragment vnode instance 를 element 에 등록한다.
    template.el[ELEMENT_INSTANCE] = template;
  }

  // element 에 component 속성 설정
  // componentInstance.$el.el[COMPONENT_INSTANCE] = componentInstance;
  // componentInstance.alternate = template;
  componentInstance.runUpdated();

  // 최초 렌더링 될 때 한번만 실행하는걸로 하자.
  await componentInstance.runHandlers("update");

  componentInstance[ALTERNATE_TEMPLATE] = template;

  // element 를 기준으로 판단할 것이기 때문에
  // fragment 는 children 을 어떻게 관리할 수 있는지 체크가 필요하다.
  // alternate_template 은 말그대로 템플릿을 참조하기 위한 용도, 실제 적용된 element 와 다르다.
  // 실제 적용된 element 를 구할려면 어떻게 해야할까?
}

/**
 * componentInstance 와 template 을 비교해서 변경된 부분을 업데이트 한다.
 *
 * 그 중에 mount 된 부분이 있으면, mount 된 부분을 다시 mount 한다.
 *
 * template[SELF_COMPONENT_INSTANCE] = componentInstance; 를 통해서
 *
 * template 에 componentInstance 를 연결해 놓는다.
 *
 *
 */
async function runningMount(componentInstance, template, containerElement) {
  // template 이 없는 경우 componentInstance 를 자동으로 mount 한다.
  if (!template) {
    componentInstance?.runMounted();
    await componentInstance.runHandlers("initialize");
    return;
  }
  template[SELF_COMPONENT_INSTANCE] = componentInstance;
  const newVNodeInstance = DomRenderer(template, {
    ...componentInstance.getVNodeOptions(),
    container: containerElement,
  });

  if (!template.Component) {
    componentInstance.$el = Dom.create(newVNodeInstance.el);
    componentInstance.refs.$el = componentInstance.$el;
  }

  componentInstance[ALTERNATE_TEMPLATE] = template;
  // element 에 component 속성 설정
  const el = componentInstance.getEl();
  if (el) {
    // component instance 가 없으면 component instance 지정
    // el 의 마지막에 지정된 component instance 이다.
    // A -> B -> C -> div 라고 있을 때 C의 instance 를 가리킨다.
    // 나머지 A, B 는 getFamily() 함수를 통해서 조회할 수 있다.
    // 기본적으로 컴포넌트를 생성하는 시점에 SELF_COMPONENT_INSTANCE 를 대입해주기 때문에
    // 연결고리를 찾을 수 있다.
    if (!el[COMPONENT_INSTANCE]) {
      el[COMPONENT_INSTANCE] = componentInstance;
    }

    // fragment 아이템인지 표시한다.
    if (el[IS_FRAGMENT_ITEM]) {
      componentInstance.isFragment = true;
    }
  }

  if (containerElement) {
    let $container = containerElement;
    if (!($container instanceof Dom)) {
      $container = Dom.create($container);
    }

    // $container 의 자식이 아닐 때만 추가
    if ($container.hasChild(el) === false) {
      if (el instanceof window.DocumentFragment) {
        /**
         * fragment 를 추가할 때 문제가 생긴다.
         * 원인을 생각해보면
         *
         * 1. fragment 는 documentFragment 의 instance 로 생성이 되는데
         * 2. main 컴포넌트 렌더링을 할 때 시점의 차이가 있어서 문제가 생기는 것 같다.
         * 3. containerElement 에 fragment 를 추가 할 때 순서가 맞지 않다.
         *
         * 좀 더 분석이 필요하다.
         *
         * 일단은 여기서는 추가하지 않고 makeChildren 할 때 추가하는걸로 바꿨다.
         *
         */

        // $container.append(el);
        // append 이후에는 항상 commitMount 를 실행한다.
        // fragment 기준으로 실행해야할 듯
        commitMountFromElement(el);
      } else {
        $container?.append(el);
        // append 이후에는 항상 commitMount 를 실행한다.
        // element 기준으로 실행해야할 듯
        commitMountFromElement(el);
      }
    }
  }

  // 최초 렌더링 될 때 한번만 실행하는걸로 하자.
  await componentInstance.runHandlers("initialize");
}

/**
 * template 을 렌더링 한다.
 *
 */
export async function renderVNodeComponent(
  componentInstance,
  /**
   * componentInstance 의 결과물로 만들어진 el 을 추가할 dom container element 를 지정한다.
   */
  containerElement = undefined
) {
  componentInstance.resetCurrentComponent();
  let template = componentInstance.template();

  // fragment 로 들어오는 children 리스트를 일렬로 다룬다.
  template = flatTemplate(template);

  const rootTemplate = template[0];

  if (componentInstance.getEl()) {
    await runningUpdate(componentInstance, rootTemplate);
  } else {
    await runningMount(componentInstance, rootTemplate, containerElement);
  }

  return componentInstance;
}

function renderComponentForVNode(vNode, options) {
  renderVNodeComponent(vNode.instance, options.container);
}

function makeElement(vNode, options = {}) {
  vNode.makeClassInstance(options);
  try {
    // 객체를 생성 후에는 렌더링을 한다.
    vNode.instance.setParentElement(vNode.parentElement);
    renderComponentForVNode(vNode, options);
  } catch (e) {
    console.error(e);
  }

  return vNode;
}

export function VNodeComponentRender(vNode, options) {
  return makeElement(vNode, options);
}
