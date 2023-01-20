import {
  ALTERNATE_TEMPLATE,
  CHILD_ITEM_TYPE_ELEMENT,
  CHILD_ITEM_TYPE_FRAGMENT,
  COMPONENT_INSTANCE,
  IS_FRAGMENT_ITEM,
  SELF_COMPONENT_INSTANCE,
} from "../../constant/component";
import { VNodeType } from "../../constant/vnode";
import { Dom } from "../../functions/Dom";
import { DomRenderer } from "./DomRenderer";
import {
  Reconcile,
  updateChildren,
  updateChildrenWithFragment,
  updateFragment,
} from "./Reconcile";
import { commitMountFromElement } from "./utils";

const children = (el) => {
  var element = el?.firstChild;

  if (!element) {
    return [];
  }

  var results = [];
  do {
    results[results.length] = element;
    element = element.nextSibling;
  } while (element);

  return results;
};

/** fragment item 을 수집한다. */
function collectFragmentList(element) {
  const rootList = [];
  let rootListIndex = 0;
  children(element).forEach((it) => {
    if (it[IS_FRAGMENT_ITEM] === true) {
      if (!rootList[rootListIndex]) {
        rootList[rootListIndex] = {
          type: CHILD_ITEM_TYPE_FRAGMENT,
          items: [it],
        };
      } else {
        if (rootList[rootListIndex]) {
          if (rootList[rootListIndex].type === CHILD_ITEM_TYPE_FRAGMENT) {
            rootList[rootListIndex].items.push(it);
          } else {
            rootListIndex++;
            rootList[rootListIndex] = {
              type: CHILD_ITEM_TYPE_FRAGMENT,
              items: [it],
            };
          }
        }
      }
    } else {
      if (!rootList[rootListIndex]) {
        rootList[rootListIndex] = { type: CHILD_ITEM_TYPE_ELEMENT, items: it };
        rootListIndex++;
      } else {
        rootListIndex++;
        rootList[rootListIndex] = { type: CHILD_ITEM_TYPE_ELEMENT, items: it };
      }
    }
  });

  return rootList;
}

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

function hasFragmentInList(list) {
  return list.some((it) => it.type === CHILD_ITEM_TYPE_FRAGMENT);
}

function runningUpdateFragment(componentInstance, template) {
  const rootList = collectFragmentList(componentInstance.parentElement);

  if (hasFragmentInList(rootList)) {
    const length = 1;
    const fragmentList = [];

    for (let i = 0; i < rootList.length; i++) {
      if (rootList[i].type === CHILD_ITEM_TYPE_FRAGMENT) {
        fragmentList.push(rootList[i]);
      }

      if (fragmentList.length === length) {
        break;
      }
    }

    // text node 도 fragment 에 포함되어 있을 수 있으므로, fragmentList 에서 text node도 표시할 수 있도록 한다.

    updateFragment(
      componentInstance.parentElement,
      fragmentList[0],
      template,
      componentInstance.getVNodeOptions()
    );
  }
}

async function runningUpdate(componentInstance, template) {
  template[SELF_COMPONENT_INSTANCE] = componentInstance;
  // 첫 컴포넌트가 Fragment 인 경우 개별로 처리한다.
  // Fragment 는 여러개가 같은 레벨로 올 수 없다.
  if (template.isType(VNodeType.FRAGMENT)) {
    runningUpdateFragment(componentInstance, template);
  } else {
    // 하위 리스트에 fragment 가 있는 경우
    const rootList = collectFragmentList(componentInstance.getEl());

    const options = componentInstance.getVNodeOptions();

    /**
     * el 기준으로 is-fragment-item="true" 를 가지고 있는 children 을 재구성한다.
     * 리스트 중에 fragment 가 있는지 체크한다.
     * 정해진 순서대로 재구성한다.
     *
     * [
     *    {type: "fragment", items: [element, element]},
     *    {type: "element", items: element},
     * ]
     *
     * 이렇게 구성하면 vnode.children 과 비교를 할수 있게 된다.
     */
    if (hasFragmentInList(rootList)) {
      // fragment 가 검색되면 fragment 업데이트 로직을 실행한다.
      updateChildrenWithFragment(
        componentInstance.getEl(),
        rootList,
        template,
        options
      );
      // fragment 는 parentElement 의 자식 기준으로 렌더링 된다.
    } else if (template.isType(VNodeType.FRAGMENT)) {
      updateChildren(componentInstance.parentElement, template, options);
    } else {
      // Reconcile 를 실행한다.
      Reconcile(componentInstance, template, options);
    }
  }

  // element 에 component 속성 설정
  // componentInstance.$el.el[COMPONENT_INSTANCE] = componentInstance;
  // componentInstance.alternate = template;
  componentInstance.runUpdated();

  // 최초 렌더링 될 때 한번만 실행하는걸로 하자.
  await componentInstance.runHandlers("update");

  componentInstance[ALTERNATE_TEMPLATE] = template;
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
        containerElement.appendChild(el);
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
