import { debounce, isString } from "./func";
import { uuidShort } from "./uuid";

const handlerMap = {};
const __rootInstance = new Set();
const __rootInstanceMap = new WeakMap();
const __tempVariables = new Map();
const __tempVariablesGroup = new Map();
const _modules = {};
const _moduleMap = new WeakMap();
const RenderCallbackList = new WeakMap();
const GlobalState = {
  currentComponent: null,
};

export function getCurrentComponent() {
  return GlobalState.currentComponent;
}

/**
 * 함수 컴포넌트가 실행되는 시점에 현재 생성된 컴포넌트 instance 를 저장합니다.
 * currentComponent 에서 hook을 관리 할 수 있게 됩니다.
 *
 * @param {*} component
 */
export function resetCurrentComponent(component) {
  GlobalState.currentComponent = component;
}

function createRenderCallback(component, delay = 1) {
  if (!RenderCallbackList.has(component)) {
    RenderCallbackList.set(
      component,
      debounce(($container = undefined) => {
        component.render($container);
      }, delay)
    );
  }

  return RenderCallbackList.get(component);
}

export function removeRenderCallback(component) {
  if (RenderCallbackList.has(component)) {
    RenderCallbackList.delete(component);
  }
}

export function renderComponent(component, $container = undefined) {
  window.requestIdleCallback(() => {
    createRenderCallback(component)?.($container);
  });
}

export const VARIABLE_SAPARATOR = "v:";

/**
 * props 를 넘길 때 해당 참조를 그대로 넘기기 위한 함수
 *
 * @param {any} value
 * @returns {string} 참조 id 생성
 */
export function variable(value, groupId = "") {
  const id = `${VARIABLE_SAPARATOR}${uuidShort()}`;

  __tempVariables.set(id, value);

  if (groupId) {
    __tempVariablesGroup.has(groupId) ||
      __tempVariablesGroup.set(groupId, new Set());
    __tempVariablesGroup.get(groupId).add(id);
  }

  return id;
}

/**
 * groupId 로 지정된 변수를 초기화 해준다.
 *
 * @copilot
 * @param {*} groupId
 */
export function initializeGroupVariables(groupId) {
  if (__tempVariablesGroup.has(groupId)) {
    __tempVariablesGroup.get(groupId).forEach((id) => {
      __tempVariables.delete(id);
    });
    __tempVariablesGroup.delete(groupId);
  }
}

/**
 * 참조 id 를 가지고 있는 variable 을 복구한다.
 *
 * @param {string} id
 * @param {boolean} [removeVariable=true]
 * @returns {any}
 */
export function recoverVariable(id, removeVariable = true) {
  if (isString(id) === false) {
    return id;
  }

  let value = id;

  if (__tempVariables.has(id)) {
    value = __tempVariables.get(id);

    if (removeVariable) {
      __tempVariables.delete(id);
    }
  }

  return value;
}

export function getVariable(idOrValue) {
  if (__tempVariables.has(idOrValue)) {
    return __tempVariables.get(idOrValue);
  }

  return idOrValue;
}

export function hasVariable(id) {
  return __tempVariables.has(id);
}

/**
 * root instance 를 등록한다.
 *
 * @param {UIElement} instance
 */
export function registRootElementInstance(instance, containerElement) {
  const rootContainerElement = containerElement.el || containerElement;
  __rootInstance.add(instance);

  // 기존에 있던 root instance 는 지운다.
  if (__rootInstanceMap.has(rootContainerElement)) {
    removeRootElementInstance(__rootInstanceMap.get(rootContainerElement));
  }
  __rootInstanceMap.set(rootContainerElement, instance);
}

export function removeRootElementInstance(instance) {
  instance?.destroy();
  __rootInstance.delete(instance);
}

export function getRootElementInstanceList() {
  return [...__rootInstance];
}

let globalForceRender = undefined;

export function isGlobalForceRender() {
  return globalForceRender;
}

export function setGlobalForceRender(isForceRender = false) {
  if (typeof globalForceRender === "undefined") {
    globalForceRender = isForceRender;
  }
}
/**
 * root instance 를 모두 그린다.
 */
export function renderRootElementInstanceList(isForce = false) {
  getRootElementInstanceList().forEach((instance) => {
    if (isForce) {
      instance.forceRender();
    } else {
      instance.render();
    }
  });
}

export function registHandler(handlers) {
  Object.keys(handlers).forEach((key) => {
    handlerMap[key] = handlers[key];
  });
}

export function retriveHandler(className) {
  return handlerMap[className];
}

export function createHandlerInstance(context, localHanders = {}) {
  return [
    ...Object.keys(handlerMap).map((key) => {
      const HandlerClass = handlerMap[key];
      return new HandlerClass(context);
    }),
    ...Object.keys(localHanders).map((key) => {
      const HandlerClass = localHanders[key];
      return new HandlerClass(context);
    }),
  ];
}

export function registerModule(id, modules = {}) {
  if (!_modules[id]) {
    _modules[id] = { new: modules, old: modules };

    Object.keys(modules).forEach((key) => {
      _moduleMap.set(modules[key], id);
    });
  } else {
    refreshModule(id, modules);
  }
}

export function refreshModule(id, newModules) {
  _modules[id].new = newModules;

  Object.keys(newModules).forEach((key) => {
    _moduleMap.set(newModules[key], id);
  });
}

export function getModule(Component) {
  const id = _moduleMap.get(Component);
  if (!id) {
    return Component;
  }
  const m = _modules[id];
  if (!m) {
    return Component;
  }

  // FIXED: function name is always same
  const newModule = m.new[Component.name];

  if (newModule) {
    return newModule;
  }

  // 새로운 모듈로 변경된 경우
  const currentNewComponent = Object.values(m.new).find((it) => {
    return it === Component;
  });

  if (currentNewComponent) {
    return currentNewComponent;
  }

  let oldKey = "";
  const currentOldComponent = Object.entries(m.old).find(([key, it]) => {
    if (it === Component) {
      oldKey = key;
      return true;
    }

    return false;
  });

  if (currentOldComponent) {
    return m.new[oldKey];
  }

  return Component;
}
