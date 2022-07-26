import { isFunction } from "./functions/func";
import {
  addProviderSubscribe,
  getContextProvider,
  renderComponent,
  resetCurrentComponent,
} from "./Hook";
import { MagicHandler } from "./MagicHandler";

const USE_STATE = Symbol("useState");
const USE_EFFECT = Symbol("useEffect");
const USE_MEMO = Symbol("useMemo");
const USE_CONTEXT = Symbol("useContext");
const USE_SUBSCRIBE = Symbol("useSubscribe");

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
      renderComponent(localValue.component);
    }
  };

  return [localValue, update];
}

export class HookMachine extends MagicHandler {
  // 컴포넌트 내부에서 Hook 을 관리하는 리스트
  #__stateHooks = [];
  #__stateHooksIndex = 0;

  /***** hook ********/

  copyHooks() {
    return {
      __stateHooks: this.#__stateHooks,
      __stateHooksIndex: this.#__stateHooksIndex,
    };
  }

  reloadHooks(hooks) {
    this.#__stateHooks = hooks.__stateHooks || [];
    this.#__stateHooksIndex = hooks.__stateHooksIndex || 0;
  }

  resetCurrentComponent() {
    this.resetHookIndex();
    resetCurrentComponent(this);
  }

  resetHookIndex() {
    this.#__stateHooksIndex = 0;
  }

  increaseHookIndex() {
    this.#__stateHooksIndex++;
  }

  getHook() {
    return this.#__stateHooks[this.#__stateHooksIndex];
  }

  setHook(type, hookInfo) {
    this.#__stateHooks[this.#__stateHooksIndex] = {
      type,
      hookInfo,
    };
  }

  /**
   * 글로벌 상태값을 저장하고 관리합니다.
   * hook을 사용하는 순서대로 값을 저장하고 있습니다.
   *
   * @param {any} initialState
   * @returns
   */
  useState(initialState) {
    if (!this.getHook()) {
      this.setHook(
        USE_STATE,
        createState({ value: initialState, component: this })
      );
    }

    const [value, update] = this.getHook().hookInfo;

    this.increaseHookIndex();

    return [value.value, update];
  }

  isChangedDeps(deps) {
    const hasDeps = !deps;
    const {
      hookInfo: { deps: currentDeps },
    } = this.getHook() || { hookInfo: {} };
    const hasChangedDeps = currentDeps
      ? !deps.every((d, i) => d === currentDeps[i])
      : true;

    return hasDeps || hasChangedDeps;
  }

  useEffect(callback, deps) {
    const hasChangedDeps = this.isChangedDeps(deps);

    if (hasChangedDeps) {
      this.setHook(USE_EFFECT, {
        deps,
        callback,
      });
    }

    this.increaseHookIndex();
  }

  useReducer(reducer, initialState) {
    const [state, setState] = this.useState(initialState);

    function dispatch(action) {
      setState((prevState) => reducer(prevState, action));
    }

    return [state, dispatch];
  }

  useMemo(callback, deps) {
    const hasChangedDeps = this.isChangedDeps(deps);

    if (hasChangedDeps) {
      this.setHook(USE_MEMO, {
        deps,
        value: callback(),
      });
    }

    const lastHookValue = this.getHook().hookInfo || {};

    this.increaseHookIndex();

    return lastHookValue.value;
  }

  useCallback(callback, deps) {
    return this.useMemo(() => callback, deps);
  }

  useRef(initialValue) {
    return this.useMemo(() => ({ current: initialValue }), []);
  }

  refreshProvider(provider) {
    const hookInfo = this.filterHooks(USE_CONTEXT).find(
      (it) => it.provider.id === provider.id
    );

    if (hookInfo) {
      hookInfo.provider = provider;
    }
  }

  useContext(context) {
    if (!this.getHook()) {
      this.setHook(USE_CONTEXT, {
        provider: getContextProvider(context),
        component: this,
      });
    }
    const { provider } = this.getHook().hookInfo;

    // 이벤트로 처리안하고 subscribe 함수를 다이렉트로 등록해서 함수를 실행시킨다.
    addProviderSubscribe(provider.id, this, () => {
      renderComponent(this);
    });

    this.increaseHookIndex();

    return provider?.value || context.defaultValue;
  }

  useSubscribe(
    name,
    callback,
    debounceSecond = 0,
    throttleSecond = 0,
    isSelf = false
  ) {
    if (!this.getHook()) {
      this.setHook(USE_SUBSCRIBE, {
        name,
        callback,
        component: this,
        unsubscribe: this.$store.on(
          name,
          callback,
          this,
          debounceSecond,
          throttleSecond,
          false,
          isSelf
        ),
      });
    }

    const { unsubscribe } = this.getHook().hookInfo;

    this.increaseHookIndex();

    return unsubscribe;
  }

  useSelf(name, callback, debounceSecond = 0, throttleSecond = 0) {
    return this.useSubscribe(
      name,
      callback,
      debounceSecond,
      throttleSecond,
      true
    );
  }

  useEmit(name, ...args) {
    return this.emit(name, ...args);
  }

  useStore(key) {
    return this.$store.get(key);
  }

  /** utility function for hooks */

  filterHooks(type) {
    return this.#__stateHooks
      .filter((it) => it.type === type)
      .map((it) => it.hookInfo);
  }

  getUseEffects() {
    return this.filterHooks(USE_EFFECT);
  }

  getUseStates() {
    return this.filterHooks(USE_STATE).map((it) => it.value);
  }

  runHooks() {
    // hooks
    this.getUseEffects().forEach((it) => {
      if (isFunction(it.cleanup)) it.cleanup();
      it.cleanup = it.callback();
    });
  }

  cleanHooks() {
    this.getUseEffects().forEach((it) => {
      if (isFunction(it.cleanup)) {
        it.cleanup();
      }
    });
  }

  /** utility function for hooks */

  destroy() {}

  /**
   * 컴포넌트가 mount 된 이후에 실행된다.
   *
   */
  onMounted() {
    this.isMounted = true;
    this.runHooks();
  }

  onUpdated() {
    this.runHooks();
  }

  onDestroyed() {
    this.isMounted = false;
    // hooks
    this.cleanHooks();
  }
}
