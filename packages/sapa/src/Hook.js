import { renderRootElementInstanceList } from "./functions/registElement";

/**
 * 함수 컴포넌트를 위한 간단한 글로벌 Hook을 제공한다.
 *
 * - [x] useState
 * - [x] useEffect
 * - [x] useContext
 * - [x] useMemo
 * - [x] useCallback
 * - [ ] useRef
 *
 * class 컴포넌트에서는 되도록이면 사용하지 말자.
 *
 * ps.
 *
 * hook 은 연산을 안하는 것이 아니라 연산된 결과물을 동일하게 유지하는게 목적이다.
 * 즉, template 에서 리턴되기 전까지는 모두 실행 가능 영역으로 보고
 * 최종 vnode 의 집합이 diff 될 때 차이가 없으면 렌더링 하지 않는게 목적이다.
 *
 *
 */

const hookList = [];
let currentHookIndex = 0;
let currentComponent = null;
let contextProviderList = {};

export function initHook() {
  // hook index 초기화
  currentHookIndex = 0;
  // context index 초기화
  Object.values(contextProviderList).forEach((context) => {
    context.index = -1;
  });
}

function render() {
  initHook();
  renderRootElementInstanceList();
}

export function renderFromRoot() {
  initHook();
  renderRootElementInstanceList(true);
}

/**
 * 초기값 기준으로 새로운 값을 반환하는 함수를 만들어준다.
 *
 * @returns
 */
function createState({ init }) {
  let value = { value: init };

  function getValue(v) {
    if (typeof v === "function") {
      return v(value.value);
    }

    return v;
  }

  const update = (newValue) => {
    value.value = getValue(newValue);

    render();
  };

  return [value, update];
}

/**
 * 글로벌 상태값을 저장하고 관리합니다.
 * hook을 사용하는 순서대로 값을 저장하고 있습니다.
 *
 * @param {any} initialState
 * @returns
 */
export function useState(initialState) {
  if (!hookList[currentHookIndex]) {
    hookList[currentHookIndex] = createState({
      init: initialState,
    });
  }

  const [value, update] = hookList[currentHookIndex++];
  return [value.value, update];
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
  const hasDeps = !deps;
  const { deps: currentDeps } = hookList[currentHookIndex] || {};
  const hasChangedDeps = currentDeps
    ? !deps.every((d, i) => d === currentDeps[i])
    : true;

  if (hasDeps || hasChangedDeps) {
    hookList[currentHookIndex] = { deps };
    // component hook 정의
    currentComponent.addHook({ callback, deps });
  }

  currentHookIndex++;
}

export function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    setState((prevState) => reducer(prevState, action));
  }

  return [state, dispatch];
}

export function useMemo(callback, deps) {
  const hasDeps = !deps;
  const { deps: currentDeps } = hookList[currentHookIndex] || {};
  const hasChangedDeps = currentDeps
    ? !deps.every((d, i) => d === currentDeps[i])
    : true;

  if (hasDeps || hasChangedDeps) {
    const newValue = callback();
    hookList[currentHookIndex] = { deps, value: newValue };
    // component hook 정의
  }

  const lastHookValue = hookList[currentHookIndex] || {};

  currentHookIndex++;

  return lastHookValue.value;
}

export function useCallback(callback, deps) {
  return useMemo(() => callback, deps);
}

export let i = 0;

function createContextProvider(context) {
  contextProviderList[context.id] = {
    context,
    index: -1,
    providers: [],
  };
}

function addContextProvider(context, provider) {
  const contextInfo = contextProviderList[context.id];
  const index = ++contextInfo.index;
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

  if (contextInfo.index === -1) {
    return { value: contextInfo.defaultValue };
  }

  return (
    contextInfo.providers[contextInfo.index] ||
    contextInfo.providers[contextInfo.index + 1]
  );
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
      addContextProvider(context, { value, provider: this });

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
  currentComponent.initHook();
}
