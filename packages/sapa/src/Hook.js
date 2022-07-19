import { renderRootElementInstanceList } from "./functions/registElement";

/**
 * 함수 컴포넌트를 위한 간단한 글로벌 Hook을 제공한다.
 *
 * - useState
 * - useEffect
 *
 * class 컴포넌트에서는 되도록이면 사용하지 말자.
 *
 */

const hookList = [];
let currentHookIndex = 0;
let currentComponent = null;

function render() {
  currentHookIndex = 0;
  renderRootElementInstanceList();
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
