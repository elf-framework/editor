import { renderRootElementInstanceList } from "./functions/registElement";

/**
 *
 * 함수 컴포넌트와 클래스 컴포넌트의 template 메소드 내부에서 사용할 수 있다.
 *
 * - [x] useState
 * - [x] useEffect
 * - [x] useContext
 * - [x] useMemo
 * - [x] useCallback
 * - [x] useRef
 *
 *
 * ps.
 *
 * Hook 은 하나의 컴포넌트에 종속적이다.
 * 즉, template 에서 리턴되기 전까지는 모두 실행 가능 영역으로 보고
 * 최종 vnode 의 집합이 diff 될 때 차이가 없으면 렌더링 하지 않는게 목적이다.
 *
 *
 *
 *
 */

// let currentHookIndex = 0;
let currentComponent = null;
let contextProviderList = {};

export function initContext() {
  Object.values(contextProviderList).forEach((context) => {
    context.index = -1;
  });
}

export function renderFromRoot() {
  // context index 초기화
  initContext();
  renderRootElementInstanceList(true);
}

/**
 * 글로벌 상태값을 저장하고 관리합니다.
 * hook을 사용하는 순서대로 값을 저장하고 있습니다.
 *
 * @param {any} initialState
 * @returns
 */
export function useState(initialState) {
  return currentComponent.useState(initialState);
}

/**
 * onMount, onUpdate, onDestroy 이벤트에서 실행되는 effect 함수를 정의합니다.
 *
 * effect 함수 실행 후 cleanup 함수를 리턴해서 자원을 해제할 수 있습니다.
 *
 * @param {function} callback
 * @param {array} deps
 */
export function useEffect(callback, deps) {
  return currentComponent.useEffect(callback, deps);
}

export function useReducer(reducer, initialState) {
  return currentComponent.useReducer(reducer, initialState);
}

export function useMemo(callback, deps) {
  return currentComponent.useMemo(callback, deps);
}

export function useCallback(callback, deps) {
  return currentComponent.useCallback(callback, deps);
}

export function useRef(initialValue) {
  return currentComponent.useRef(initialValue);
}

export let i = 0;

function createContextProvider(context) {
  contextProviderList[context.id] = {
    context,
    index: 0,
    providers: [],
  };
}

function addContextProvider(context, provider) {
  const contextInfo = contextProviderList[context.id];
  const index = contextInfo.index;
  if (!contextInfo.providers[index]) {
    // index 에 없는 경우 새로운 객체를 생성한다.
    contextInfo.providers[index] = provider;
  } else {
    // index 에 있는 경우 기존 객체를 변경한다.
    contextInfo.providers[index] = {
      ...contextInfo.providers[index],
      ...provider,
    };
  }
}

function getContextProvider(context) {
  const contextInfo = contextProviderList[context.id];

  return contextInfo.providers[contextInfo.index] || contextInfo.defaultValue;
}

/**
 *
 * Provider,Consumer 를 생성한다.
 * Provider와 Consumer 는 둘 다 컴포넌트에서 사용할 수 있다.
 * Provider 는 context 의 시작점과 값을 유지하고
 * Consumer 는 context 의 값을 사용한다.
 *
 *
 * @param {*} defaultValue
 * @returns
 */
export function createContext(defaultValue) {
  const context = {
    id: "context-" + i++,
    defaultValue,
    Provider: function ({ value, content }) {
      addContextProvider(context, { value });

      return content[0] || content;
    },
  };

  context.Consumer = ({ content: [children] }) => {
    const value = getContextProvider(context).value;
    return children(value);
  };

  createContextProvider(context);

  return context;
}

export function useContext(context) {
  return getContextProvider(context)?.value || context.defaultValue;
}
/**
 * 함수 컴포넌트가 실행되는 시점에 현재 생성된 컴포넌트 instance 를 저장합니다.
 * currentComponent 에서 hook을 관리 할 수 있게 됩니다.
 *
 * @param {*} component
 */
export function resetCurrentComponent(component) {
  currentComponent = component;
}
