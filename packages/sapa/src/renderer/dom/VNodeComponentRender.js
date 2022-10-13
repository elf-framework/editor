import {
  CHILD_ITEM_TYPE_ELEMENT,
  CHILD_ITEM_TYPE_FRAGMENT,
  COMPONENT_INSTANCE,
  IS_FRAGMENT_ITEM,
} from "../../constant/component";
import { VNodeType } from "../../constant/vnode";
import { Dom } from "../../functions/Dom";
import { isArray, isFunction, isString } from "../../functions/func";
import { RefClass } from "../../HookMachine";
import { DomRenderer } from "./DomRenderer";
import {
  Reconcile,
  updateChildren,
  updateChildrenWithFragment,
  updateFragment,
} from "./Reconcile";

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

  root = root
    .filter(Boolean)
    .map((it) => {
      if (it.type === VNodeType.FRAGMENT) {
        return it.children.map(flatTemplate);
      }

      if (it.type === VNodeType.COMPONENT) {
        it.children = it.children
          ?.map((child) => {
            return flatTemplate(child);
          })
          .flat(Infinity);

        // 실제로 dom 에 적용될 영역에 다시 넣는다.
        it.memoizedProps.content = it.children;
      } else if (it.type === VNodeType.NODE) {
        it.children = it.children
          ?.map((child) => {
            return flatTemplate(child);
          })
          .flat(Infinity);
        // 실제로 dom 에 적용될 영역에 다시 넣는다.
        it.memoizedProps.content = it.children;
      }

      return it;
    })
    .flat(Infinity);

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
  // 첫 컴포넌트가 Fragment 인 경우 개별로 처리한다.
  // Fragment 는 여러개가 같은 레벨로 올 수 없다.
  if (template.isType(VNodeType.FRAGMENT)) {
    runningUpdateFragment(componentInstance, template);
  } else {
    // 하위 리스트에 fragment 가 있는 경우
    const rootList = collectFragmentList(componentInstance.$el.el);

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
        componentInstance.$el.el,
        rootList,
        template,
        options
      );
      // fragment 는 parentElement 의 자식 기준으로 렌더링 된다.
    } else if (template.isType(VNodeType.FRAGMENT)) {
      updateChildren(componentInstance.parentElement, template, options);
    } else {
      Reconcile(componentInstance.$el.el, template, options);
    }
  }

  // element 에 component 속성 설정
  componentInstance.$el.el[COMPONENT_INSTANCE] = componentInstance;
  // this.alternate = template;
  componentInstance.alternate = template;
  componentInstance.runUpdated();

  // 최초 렌더링 될 때 한번만 실행하는걸로 하자.
  await componentInstance.runHandlers("update");
}

async function runningMount(componentInstance, template, $container) {
  const newDomElement = DomRenderer(template, {
    ...componentInstance.getVNodeOptions(),
  });

  componentInstance.alternate = template;
  componentInstance.$el = newDomElement;
  componentInstance.refs.$el = componentInstance.$el;
  // this.alternate = template;
  // element 에 component 속성 설정
  if (componentInstance.$el?.el) {
    componentInstance.$el.el[COMPONENT_INSTANCE] = componentInstance;

    if (componentInstance.$el.isFragment) {
      componentInstance.isFragment = true;
    }
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
  // 렌더 하기 전에 hook에 현재 컴포넌트를 등록한다.
  componentInstance.resetCurrentComponent();
  let template = componentInstance.template();

  // fragment 로 들어오는 children 리스트를 일렬로 다룬다.
  template = flatTemplate(template);

  if (isArray(template) && template.length > 1) {
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

  const rootTemplate = template[0];

  if (componentInstance.$el) {
    await runningUpdate(componentInstance, rootTemplate);
  } else {
    await runningMount(componentInstance, rootTemplate, $container);
  }

  return componentInstance;
}

function render(vNode, options) {
  vNode.makeClassInstance(options);
  try {
    // 객체를 생성 후에는 렌더링을 한다.
    vNode.instance.setParentElement(vNode.parentElement);
    renderVNodeComponent(vNode.instance, options.$container);
  } catch (e) {
    console.error(e);
  }
}

function makeElement(vNode, withChildren, options = {}) {
  render(vNode, options);

  // 렌더링 된 객체에서 element 를 얻는다.
  vNode.el = vNode.instance?.$el?.el;

  if (vNode.el) {
    // props.ref 가 있으면 등록한다.
    const id = isString(vNode.props.ref) ? vNode.props.ref : vNode.instance.id;

    if (vNode.props.ref instanceof RefClass) {
      // ref 가 있으면 component 의 instance 를 등록한다.
      vNode.props.ref.setCurrent(vNode.instance);
    }

    // 상위 컨텍스트 에서 내부 children 을 관리한다.
    isFunction(options.registerChildComponent) &&
      options.registerChildComponent(vNode.el, vNode.instance, id);
  }

  return vNode;
}

export function VNodeComponentRender(vNode, withChildren, options) {
  return makeElement(vNode, withChildren, options);
}
