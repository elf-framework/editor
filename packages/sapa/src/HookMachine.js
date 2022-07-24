import { isFunction } from "./functions/func";
import { resetCurrentComponent } from "./Hook";
import { MagicHandler } from "./MagicHandler";

/**
 * 초기값 기준으로 새로운 값을 반환하는 함수를 만들어준다.
 *
 * @returns
 */
function createState({ value, component }) {
  let localValue = { value, component };

  function getValue(v) {
    if (typeof v === "function") {
      return v(localValue.value);
    }

    return v;
  }

  const update = (newValue) => {
    const _newValue = getValue(newValue);

    if (value.value !== _newValue) {
      localValue.value = _newValue;

      // createState 를 하는 시점에 저장된 component 를 렌더링 한다.
      localValue.component.render();
    }
  };

  return [localValue, update];
}

export class HookMachine extends MagicHandler {
  // 컴포넌트 내부에서 Hook 을 관리하는 리스트
  #__effectHooks = [];
  #__stateHooks = [];
  #__stateHooksIndex = 0;
  #__effectHooksIndex = 0;
  __context = {};

  /***** hook ********/

  resetCurrentComponent() {
    this.#__stateHooksIndex = 0;
    this.#__effectHooksIndex = 0;
    resetCurrentComponent(this);
  }

  /**
   * 글로벌 상태값을 저장하고 관리합니다.
   * hook을 사용하는 순서대로 값을 저장하고 있습니다.
   *
   * @param {any} initialState
   * @returns
   */
  useState(initialState) {
    if (!this.#__stateHooks[this.#__stateHooksIndex]) {
      this.#__stateHooks[this.#__stateHooksIndex] = createState({
        value: initialState,
        component: this,
      });
    }

    const [value, update] = this.#__stateHooks[this.#__stateHooksIndex++];
    return [value.value, update];
  }

  useEffect(callback, deps) {
    const hasDeps = !deps;
    const { deps: currentDeps } =
      this.#__stateHooks[this.#__stateHooksIndex] || {};
    const hasChangedDeps = currentDeps
      ? !deps.every((d, i) => d === currentDeps[i])
      : true;

    if (hasDeps || hasChangedDeps) {
      this.#__stateHooks[this.#__stateHooksIndex] = { deps };
      // component hook 정의
      this.addHook({ type: "useEffect", callback, deps });
    }

    this.#__stateHooksIndex++;
  }

  useReducer(reducer, initialState) {
    const [state, setState] = this.useState(initialState);

    function dispatch(action) {
      setState((prevState) => reducer(prevState, action));
    }

    return [state, dispatch];
  }

  useMemo(callback, deps) {
    const hasDeps = !deps;
    const { deps: currentDeps } =
      this.#__stateHooks[this.#__stateHooksIndex] || {};
    const hasChangedDeps = currentDeps
      ? !deps.every((d, i) => d === currentDeps[i])
      : true;

    if (hasDeps || hasChangedDeps) {
      const newValue = callback();
      this.#__stateHooks[this.#__stateHooksIndex] = { deps, value: newValue };
      // component hook 정의
    }

    const lastHookValue = this.#__stateHooks[this.#__stateHooksIndex] || {};

    this.#__stateHooksIndex++;

    return lastHookValue.value;
  }

  useCallback(callback, deps) {
    return this.useMemo(() => callback, deps);
  }

  useRef(initialValue) {
    return this.useMemo(() => ({ current: initialValue }), []);
  }

  /** utility function for hooks */

  // initHook(currentHookIndex) {
  //   this.currentComponentHooksIndex = 0;
  //   this.currentHookIndex = currentHookIndex;
  // }

  addHook(hook) {
    // 순서에 맞춰서 추가한다.
    const currentHook = this.#__effectHooks[this.#__effectHooksIndex];
    this.#__effectHooks[this.#__effectHooksIndex] = {
      ...currentHook,
      ...hook,
      done: false,
    };

    // 실행 여부를 설정한다. done 이 false 면 실행해야함을 의미
    this.#__effectHooksIndex++;
  }

  runHooks() {
    // hooks
    this.#__effectHooks.forEach((it) => {
      // 완료 되지 않은 useEffect 만 실행
      // if (!it.done) {
      if (isFunction(it.cleanup)) it.cleanup();
      it.cleanup = it.callback();
      it.done = true;
      // }
    });
  }

  cleanHooks() {
    this.#__effectHooks.forEach((it) => {
      if (isFunction(it.cleanup)) {
        it.cleanup();
      }
    });

    this.#__effectHooks = [];
    this.#__effectHooksIndex = 0;
  }

  /** utility function for hooks */

  destroy() {}

  /**
   * 컴포넌트가 mount 된 이후에 실행된다.
   *
   */
  onMounted() {
    this.runHooks();
  }

  onUpdated() {
    this.runHooks();
  }

  onDestroyed() {
    // hooks
    this.cleanHooks();
  }
}
