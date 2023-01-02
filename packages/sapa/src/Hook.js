import { COMPONENT_ROOT_CONTEXT } from "./constant/component";
import { debounce, isFunction } from "./functions/func";
import {
  getCurrentComponent,
  renderComponent,
  renderRootElementInstanceList,
} from "./functions/registElement";

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
 * - [x] useSubscribe
 * - [x] useId
 * - [x] useSyncExternalStore
 * - [x] useBatch
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

let contextProviderList = {};

const renderFromRootCallback = debounce(() => {
  renderRootElementInstanceList(true);
}, 10);

export function renderFromRoot() {
  renderFromRootCallback();
}

export function useBatch(callback) {
  getCurrentComponent().useBatch(callback);
}

export function useRender(component) {
  renderComponent(component);
}

export function useId() {
  return getCurrentComponent().useId();
}

export function useSyncExternalStore(subscribe, getSnapshot) {
  return getCurrentComponent().useSyncExternalStore(subscribe, getSnapshot);
}
/**
 * 글로벌 상태값을 저장하고 관리합니다.
 * hook을 사용하는 순서대로 값을 저장하고 있습니다.
 *
 * @param {any} initialState
 * @returns
 */
export function useState(initialState) {
  return getCurrentComponent().useState(initialState);
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
  return getCurrentComponent().useEffect(callback, deps);
}

/**
 * reducer 를 통해서 값을 관리합니다.
 *
 * @returns
 */
export function useReducer(reducer, initialState) {
  return getCurrentComponent().useReducer(reducer, initialState);
}

/**
 * useMemo 를 통해서 변경 사항에 대해서만 값을 캐슁 할 수 있습니다.
 *
 */
export function useMemo(callback, deps) {
  return getCurrentComponent().useMemo(callback, deps);
}

/**
 * useCallback 을 통해서 변경 사항에 대해서 함수를 캐시합니다.
 */
export function useCallback(callback, deps) {
  return getCurrentComponent().useCallback(callback, deps);
}

/**
 * 특정 값을 유지할 때 사용합니다.
 *
 * @returns
 */
export function useRef(initialValue) {
  return getCurrentComponent().useRef(initialValue);
}

/**
 * context 에 있는 마지막 provider 값을 읽어옵니다.
 *
 * useContext 를 사용하면
 * provider 에서 값이 변경 될 때 마다 값을 변경시켜줍니다.
 *
 * @param {*} context
 * @returns
 */
export function useContext(context) {
  return getCurrentComponent().useContext(context);
}

function createContextProvider(context) {
  contextProviderList[context.id] = {
    context,
    index: 0,
    lastProvider: null,
  };
}

/**
 * context provider 의 value 를 저장하는 클래스
 * provider 의 값의 참조를 유지하기 위한 클래스
 *
 * 초기 provider 값은 value 자체를 저장하고 있다.
 * 다른 행위로 값이 바뀌더라도 기존의 참조가 유지되지 않기 때문에
 * 참조 유지를 위한 값을 클래스로 생성해서 전달한다.
 */
class InnerProvider {
  constructor(context, provider) {
    this.context = context;
    this.provider = provider;
  }

  get id() {
    return this.provider.id;
  }

  get value() {
    return this.provider.value;
  }

  set(provider) {
    this.provider = provider;
  }
}

function pushContextProvider(context, provider) {
  const innerProvider = new InnerProvider(context, provider);

  const contextInfo = contextProviderList[context.id];

  if (!contextInfo.lastProvider) {
    contextInfo.prevProvider = contextInfo.lastProvider;
    contextInfo.lastProvider = innerProvider;
    contextInfo.lastProvider.prev = contextInfo.prevProvider;

    // todo: mesage
  } else {
    const lastProvider = contextInfo.lastProvider;
    const lastProviderValue = lastProvider.value;
    const lastProviderId = lastProvider.id;

    if (lastProviderId === innerProvider.id) {
      // 마지막 시점의 provider Id 가 같다면 새로운 값을 저장하지 않는다.
      contextInfo.lastProvider.set(innerProvider);
    } else {
      // 새로운 provider 생성
      contextInfo.lastProvider.next = innerProvider;
      innerProvider.prev = contextInfo.lastProvider;
      contextInfo.lastProvider = innerProvider;
    }

    // 새로운 provider 의 value 가 이전 provider 와 다르다면 메세지를 보냄
    if (lastProviderValue !== innerProvider.value) {
      // component 에서 메세지 보내기
      runProviderSubscribe(innerProvider);
    }
  }
}

/**
 * provider 를 context 순서에서 제거
 *
 *
 * @param {*} context
 */
export function popContextProvider(context) {
  const contextInfo = contextProviderList[context.id];

  if (contextInfo.lastProvider && contextInfo.lastProvider.prev) {
    contextInfo.lastProvider = contextInfo.lastProvider.prev;
    if (contextInfo.lastProvider) {
      contextInfo.lastProvider.next = null;
    }
  }
}

/**
 * 현재 컨텍스트의 마지막 provider 를 조회
 *
 * @param {*} context
 * @returns
 */
export function getContextProvider(context) {
  const contextInfo = contextProviderList[context.id];

  return contextInfo.lastProvider;
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
let contextIndex = 0;
export function createContext(defaultValue) {
  const context = {
    id: "context-" + contextIndex++,
    defaultValue,
    lastProvider: null,
    Provider: function ({ value, content }) {
      pushContextProvider(context, {
        value,
        id: this.id,
        component: this,
      });

      useEffect(() => {
        popContextProvider(context);
      }, []);

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

const providerEvents = {};
/**
 * provider 가 갱신될 때 실행할 수 있는 함수 등록
 *
 * useContext() 를 통해서 자동으로 등록되는 개념
 *
 */
export function addProviderSubscribe(providerId, component, callback) {
  if (!providerEvents[providerId]) {
    providerEvents[providerId] = {};
  }

  providerEvents[providerId][component.id] = callback;
}

export function runProviderSubscribe(provider) {
  const components = providerEvents[provider.id];
  if (components) {
    Object.values(components).forEach((callback) => {
      callback(provider);
    });
  }
}

/**
 * Utility Hooks
 *
 * @todo support useComponentRender
 *
 */
export function useStore(key, defaultValue) {
  return getCurrentComponent().useStore(key, defaultValue);
}

/**
 * Use useStoreValue instead this function
 *
 * @deprecated
 */
export function useStoreSet(key, value) {
  return getCurrentComponent().useStoreSet(key, value);
}

/**
 * useStoreValue returns the current value and settter together.
 *
 * If you don't need the setter, use useStore instead.
 *
 *
 * ```js
 * const [value, setValue] = useStoreValue('key');
 *
 * // or
 *
 * const [value] = useStoreValue('key');
 * ```
 *
 * @param {string} key
 * @returns
 */
export function useStoreValue(key, defaultValue) {
  return getCurrentComponent().useStoreValue(key, defaultValue);
}

/**
 * return callback to get the current value of the store.
 *
 */
export function useGetStoreValue(key, defaultValue) {
  return getCurrentComponent().useGetStoreValue(key, defaultValue);
}

/**
 * useSetStoreValue returns the setter of the store.
 *
 * ```js
 * const setValue = useSetStoreValue('key');
 * ```
 *
 */
export function useSetStoreValue(key) {
  return getCurrentComponent().useSetStoreValue(key);
}

export function useRootContext(key) {
  return useStore(COMPONENT_ROOT_CONTEXT)[key];
}

export function useSubscribe(
  name,
  callback,
  debounceSecond = 0,
  throttleSecond = 0,
  isSelf = false
) {
  return getCurrentComponent().useSubscribe(
    name,
    callback,
    debounceSecond,
    throttleSecond,
    isSelf
  );
}

export function useComponentRender(
  name,
  options = {
    debounce: 0,
    throttle: 0,
    isSelf: false,
    checkFunction: null,
  }
) {
  const component = getCurrentComponent();

  return component.useSubscribe(
    name,
    (...args) => {
      if (isFunction(options.checkFunction)) {
        if (options.checkFunction(...args)) {
          useRender(component);
        }
      } else {
        useRender(component);
      }
    },
    options.debounce,
    options.throttle,
    options.isSelf
  );
}

export function useSelf(
  name,
  callback,
  debounceSecond = 0,
  throttleSecond = 0
) {
  return getCurrentComponent().useSelf(
    name,
    callback,
    debounceSecond,
    throttleSecond
  );
}

export function useEmit(name, ...args) {
  return getCurrentComponent().emit(name, ...args);
}

export function useTrigger(name, ...args) {
  return getCurrentComponent().trigger(name, ...args);
}

export function useMagicMethod(methodName, callback) {
  return getCurrentComponent().initMagicMethod(methodName, callback);
}

export function forwardRef(callback) {
  return getCurrentComponent().forwardRef(callback);
}
