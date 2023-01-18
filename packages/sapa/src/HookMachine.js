import { isFunction, isUndefined } from "./functions/func";
import {
  pendingComponent,
  removePendingComponent,
  renderComponent,
  resetCurrentComponent,
} from "./functions/registElement";
import { uuid } from "./functions/uuid";
import { addProviderSubscribe, getContextProvider } from "./Hook";
import { MagicHandler } from "./MagicHandler";

const USE_STATE = Symbol("useState");
const USE_EFFECT = Symbol("useEffect");
const USE_MEMO = Symbol("useMemo");
const USE_CALLBACK = Symbol("useCallback");
const USE_REF = Symbol("useRef");
const USE_CONTEXT = Symbol("useContext");
const USE_SUBSCRIBE = Symbol("useSubscribe");
const USE_ID = Symbol("useId");
const USE_SYNC_EXTERNAL_STORE = Symbol("useSyncExternalStore");
const USE_STORE_VALUE = Symbol("useStoreValue");
const USE_SET_STORE_VALUE = Symbol("useSetStoreValue");
const USE_GET_STORE_VALUE = Symbol("useGetStoreValue");

export class RefClass {
  constructor(current) {
    // this.id = uuid();
    this.current = current;
  }

  setCurrent(current) {
    if (this.current !== current) {
      this.current = current;
    }
  }
}

function createRef(current = undefined) {
  const refInstance = new RefClass(current);

  return refInstance;
}

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

  localValue.update = (newValue) => {
    const _newValue = getValue(newValue);

    if (localValue.value !== _newValue) {
      localValue.value = _newValue;

      // createState 를 하는 시점에 저장된 component 를 렌더링 한다.
      renderComponent(localValue.component);
    }
  };

  return localValue;
}

function createExternalStore({ subscribe, getSnapshot, isEqual, component }) {
  let localValue = {
    value: getSnapshot(),
    subscribe,
    getSnapshot,
    unsubscribe: null,
    component,
  };

  const update = () => {
    const _newValue = getSnapshot();

    const isDiff = isFunction(isEqual)
      ? isEqual(localValue, _newValue) === false
      : localValue.value !== _newValue;
    if (isDiff) {
      localValue.value = _newValue;

      // createState 를 하는 시점에 저장된 component 를 렌더링 한다.
      renderComponent(localValue.component);
    }
  };

  // subscribe 를 해야지만 update 가 실행된다.
  localValue.unsubscribe = subscribe(update);

  return localValue;
}

function createStoreValue({ key, defaultValue, component }) {
  let localValue = Object.assign(
    {},
    createGetStoreValue({ key, defaultValue, component }),
    createSetStoreValue({ key, defaultValue, component })
  );

  return localValue;
}

function createGetStoreValue({ key, defaultValue, component }) {
  let localValue = {
    key,
    component,
    getValue: () => {
      return component.$store.get(key, defaultValue);
    },
  };

  return localValue;
}

function createSetStoreValue({ key, defaultValue, component }) {
  let localValue = {
    key,
    component,
    defaultValue,
    update: (value) => {
      let _newValue = value;
      if (isFunction(value)) {
        _newValue = value(component.$store.get(key) || defaultValue);
      }
      component.$store.set(key, _newValue);
    },
  };

  return localValue;
}

function createEffect({ callback, deps, component, hasChangedDeps }) {
  return {
    callback,
    deps,
    hasChangedDeps,
    component,
  };
}

function createMemo({ callback, deps, component, value }) {
  const localValue = {
    callback,
    deps,
    component,
    value: null,
  };

  localValue.value = isUndefined(value) ? callback.call(component) : value;

  return localValue;
}

function createSubscribe({
  name,
  callback,
  debounceSecond,
  throttleSecond,
  isSelf,
  component,
}) {
  const localValue = {
    name,
    callback,
    component,
    debounceSecond,
    throttleSecond,
    isSelf,
  };

  // register callback to store
  // create unsubscribe
  localValue.unsubscribe = component.$store.on(
    name,
    callback,
    component,
    debounceSecond,
    throttleSecond,
    false,
    isSelf
  );

  return localValue;
}

export class HookMachine extends MagicHandler {
  // 컴포넌트 내부에서 Hook 을 관리하는 리스트
  __stateHooks = [];
  __stateHooksIndex = 0;

  /***** hook ********/

  copyHooks() {
    return {
      __stateHooks: this.__stateHooks,
      __stateHooksIndex: this.__stateHooksIndex,
    };
  }

  initHooks() {
    this.__stateHooks = [];
    this.__stateHooksIndex = 0;
  }

  reloadHooks(hooks) {
    this.__stateHooks = hooks.__stateHooks || [];
    this.__stateHooksIndex = hooks.__stateHooksIndex || 0;

    this.__stateHooks.forEach((hook, index) => {
      switch (hook?.type) {
        case USE_STATE:
          hook.hookInfo = createState({
            value: hook.hookInfo.value,
            component: this,
          });
          break;
        case USE_MEMO:
        case USE_CALLBACK:
        case USE_REF:
          var newData = {
            callback: hook.hookInfo.callback,
            deps: hook.hookInfo.deps,
            component: this,
          };

          if (hook.type === USE_REF || hook.type === USE_MEMO) {
            newData.value = hook.hookInfo.value;
          }

          hook.hookInfo = createMemo(newData);
          break;
        case USE_STORE_VALUE:
          hook.hookInfo = createStoreValue({
            key: hook.hookInfo.key,
            defaultValue: hook.hookInfo.defaultValue,
            component: this,
          });
          break;
        case USE_GET_STORE_VALUE:
          hook.hookInfo = createGetStoreValue({
            key: hook.hookInfo.key,
            defaultValue: hook.hookInfo.defaultValue,
            component: this,
          });
          break;
        case USE_SET_STORE_VALUE:
          hook.hookInfo = createSetStoreValue({
            key: hook.hookInfo.key,
            defaultValue: hook.hookInfo.defaultValue,
            component: this,
          });
          break;
        case USE_SYNC_EXTERNAL_STORE:
          hook.hookInfo = createExternalStore({
            subscribe: hook.hookInfo.subscribe,
            getSnapshot: hook.hookInfo.getSnapshot,
            isEqual: hook.hookInfo.isEqual,
            component: this,
          });
          break;
        case USE_SUBSCRIBE:
          // 이전 이벤트는 삭제한다.
          if (hook.hookInfo.unsubscribe) {
            hook.hookInfo.unsubscribe();
          }

          hook.hookInfo = createSubscribe({
            name: hook.hookInfo.name,
            // callback의 context 를 새로운 컴포넌트로 변경을 해줘야 한다.
            // 그렇지 않으면 이전 컴포넌트를 destroy 이 하는 시점에 이벤트가 삭제되어서
            // 새로운 컴포넌트에서 이벤트가 발생하지 않는다.
            callback: hook.hookInfo.callback.bind(this),
            debounceSecond: hook.hookInfo.debounceSecond,
            throttleSecond: hook.hookInfo.throttleSecond,
            isSelf: hook.hookInfo.isSelf,
            component: this,
          });
          break;
        case USE_EFFECT:
        default:
          // 훅이 새로 로드될 때는 항상 새로운 값을 반환해야하기 때문에
          // hook 의 저장된 값을 모두 삭제하고 다시 생성한다.

          this.__stateHooks[index] = undefined;
          break;
      }
    });
  }

  resetCurrentComponent() {
    this.resetHookIndex();
    resetCurrentComponent(this);
  }

  resetHookIndex() {
    this.__stateHooksIndex = 0;
  }

  increaseHookIndex() {
    this.__stateHooksIndex++;
  }

  getHook(hookType) {
    const hookInfo = this.__stateHooks[this.__stateHooksIndex];

    /**
     * hookType 이 있으면 hookInfo 의 type 이 hookType 과 같은지 확인한다.
     * 같지 않으면 undefined 를 반환한다.
     *
     * undefined 로 리턴되면 새로운 hook을 지정할 수 있다.
     */
    if (hookType && hookInfo?.type !== hookType) {
      return undefined;
    }

    return hookInfo;
  }

  setHook(type, hookInfo) {
    this.__stateHooks[this.__stateHooksIndex] = {
      type,
      hookInfo,
    };
  }

  /**
   * useState 의 updater 를 모아서 수행한다.
   *
   * useBatch(() => {
   *   setState1(1);
   *   setState2(2);
   * })
   */
  useBatch(callback) {
    pendingComponent(this);
    callback && callback();
    removePendingComponent(this);
    renderComponent(this);
  }

  /**
   *
   * useId is a hook for generating unique IDs
   */
  useId() {
    if (!this.getHook(USE_ID)) {
      this.setHook(USE_ID, { value: uuid(), component: this });
    }

    const { value } = this.getHook().hookInfo;

    this.increaseHookIndex();

    return value;
  }

  useSyncExternalStore(subscribe, getSnapshot, isEqual) {
    if (!this.getHook(USE_SYNC_EXTERNAL_STORE)) {
      this.setHook(
        USE_SYNC_EXTERNAL_STORE,
        createExternalStore({
          subscribe,
          getSnapshot,
          isEqual,
          component: this,
        })
      );
    }

    const { value } = this.getHook().hookInfo;

    this.increaseHookIndex();

    return value;
  }

  /**
   * 글로벌 상태값을 저장하고 관리합니다.
   * hook을 사용하는 순서대로 값을 저장하고 있습니다.
   *
   * @param {any} initialState
   * @returns
   */
  useState(initialState) {
    if (!this.getHook(USE_STATE)) {
      this.setHook(
        USE_STATE,
        createState({ value: initialState, component: this })
      );
    }

    const value = this.getHook().hookInfo;

    this.increaseHookIndex();

    return [value.value, value.update];
  }

  isChangedDeps(deps) {
    const hasDeps = !deps;
    const {
      hookInfo: { deps: currentDeps },
    } = this.getHook() || { hookInfo: {} };
    const hasChangedDeps = currentDeps
      ? !deps.every((d, i) => d === currentDeps[i])
      : true;

    if (deps?.length === 0 && currentDeps?.length === 0) {
      return false;
    }

    return hasDeps || hasChangedDeps;
  }

  /**
   * useEffect 는 렌더링이 완료된 후에 실행되는 hook입니다.
   *
   * useEffect 가 실행되면 callback 은 항상 재생성되고, deps 변경 유무를 설정해줍니다.
   *
   * deps 의 변경 유무는 isChangedDeps 에서 확인하고 mounted 상태에서는 deps 가 변경되었을
   * 때만 callback 을 실행합니다. (runHook() 참조). callback 을 실행한 이후에 나오는
   * cleanup 함수는 destroy 될 때 실행됩니다.
   *
   */
  useEffect(callback, deps) {
    this.setHook(
      USE_EFFECT,
      createEffect({
        deps,
        callback,
        // 현재 인덱스의 기존 deps 와 새로운 deps 를 비교해서 변경여부 설정
        hasChangedDeps: this.isChangedDeps(deps),
        component: this,
      })
    );

    this.increaseHookIndex();
  }

  useReducer(reducer, initialState) {
    const [state, setState] = this.useState(initialState);

    function dispatch(action) {
      setState((prevState) => reducer(prevState, action));
    }

    return [state, dispatch];
  }

  useMemo(callback, deps, useType = USE_MEMO) {
    const hasChangedDeps = this.isChangedDeps(deps);

    if (hasChangedDeps) {
      this.setHook(
        useType,
        createMemo({
          deps,
          callback,
          component: this,
        })
      );
    }

    const lastHookValue = this.getHook().hookInfo || {};

    this.increaseHookIndex();

    return lastHookValue.value;
  }

  useCallback(callback, deps) {
    return this.useMemo(() => callback, deps, USE_CALLBACK);
  }

  useRef(initialValue) {
    return this.useMemo(() => createRef(initialValue), [], USE_REF);
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
    if (!this.getHook(USE_CONTEXT)) {
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
    if (!this.getHook(USE_SUBSCRIBE)) {
      this.setHook(
        USE_SUBSCRIBE,
        createSubscribe({
          name,
          callback,
          component: this,
          debounceSecond,
          throttleSecond,
          isSelf,
        })
      );
    }

    this.increaseHookIndex();
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

  /**
   *
   * ```js
   * const [ value, setValue ] = useStoreValue('key');
   *
   * setValue('value');
   *
   * ```
   *
   */
  useStoreValue(key, defaultValue) {
    // register store event listener
    this.useSubscribe(key, () => {
      renderComponent(this);
    });

    if (!this.getHook(USE_STORE_VALUE)) {
      this.setHook(
        USE_STORE_VALUE,
        createStoreValue({
          key,
          defaultValue,
          component: this,
        })
      );
    }

    const value = this.getHook().hookInfo;

    this.increaseHookIndex();

    return [value.getValue(), value.update];
  }
  /**
   *
   * return callback to get store value.
   *
   */
  useGetStoreValue(key, defaultValue) {
    if (!this.getHook(USE_GET_STORE_VALUE)) {
      this.setHook(
        USE_GET_STORE_VALUE,
        createGetStoreValue({
          key,
          defaultValue,
          component: this,
        })
      );
    }

    const value = this.getHook().hookInfo;

    this.increaseHookIndex();

    return value.getValue;
  }

  /**
   * useSetStoreValue returns setter function for store value.
   *
   */
  useSetStoreValue(key) {
    if (!this.getHook(USE_SET_STORE_VALUE)) {
      this.setHook(
        USE_SET_STORE_VALUE,
        createSetStoreValue({
          key,
          component: this,
        })
      );
    }

    const value = this.getHook().hookInfo;

    this.increaseHookIndex();

    return value.update;
  }

  /**
   * Use useStoreValue instead of this function.
   *
   * @deprecated
   */
  useStore(key, defaultValue) {
    return this.$store.get(key, defaultValue);
  }

  /**
   * Use useSetStoreValue or useStoreValue instead of this function.
   *
   * @deprecated
   */
  useStoreSet(key, value, hasChangeMessage = true) {
    this.$store.set(key, value, hasChangeMessage);
  }

  /** utility function for hooks */

  filterHooks(type) {
    return this.__stateHooks
      .filter((it) => it?.type === type)
      .map((it) => it.hookInfo);
  }

  getUseEffects() {
    return this.filterHooks(USE_EFFECT);
  }

  getUseSyncExternalStore() {
    return this.filterHooks(USE_SYNC_EXTERNAL_STORE);
  }

  getUseSubscribe() {
    return this.filterHooks(USE_SUBSCRIBE);
  }

  getUseStates() {
    return this.filterHooks(USE_STATE).map((it) => it.value);
  }

  runHooks() {
    // hooks
    this.getUseEffects().forEach((it) => {
      if (it.hasChangedDeps) {
        // deps: [] 는 한번만 실행하도록 해야한다.
        it.cleanup = it.callback();
      }
    });
  }

  cleanHooks() {
    this.getUseEffects().forEach((it) => {
      if (isFunction(it.cleanup)) {
        it.cleanup();
      }
    });

    /** unscribe external store  */
    this.getUseSyncExternalStore().forEach((it) => {
      if (isFunction(it.unsubscribe)) {
        it.unsubscribe();
      }
    });

    this.getUseSubscribe().forEach((it) => {
      if (isFunction(it.unsubscribe)) {
        it.unsubscribe();
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

  onUnmounted() {
    this.isMounted = false;
    // hooks
    this.cleanHooks();
  }
}
