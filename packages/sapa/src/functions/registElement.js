import { isString } from "./func";
import { uuidShort } from "./uuid";

const map = {};
const handlerMap = {};
const aliasMap = {};
const __rootInstance = new Set();
const __tempVariables = new Map();
const __tempVariablesGroup = new Map();
const _modules = {};
const _moduleMap = new WeakMap();

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
 * 객체를 key=value 문자열 리스트로 변환한다.
 *
 * @param {object} obj
 * @returns {string}
 */
export function spreadVariable(obj) {
  return Object.entries(obj)
    .map(([key, value]) => {
      return `${key}=${variable(value)}`;
    })
    .join(" ");
}

export function registElement(classes = {}) {
  Object.keys(classes).forEach((key) => {
    map[key] = classes[key];
  });
}

export function registAlias(a, b) {
  aliasMap[a] = b;
}

export function retriveAlias(key) {
  return aliasMap[key];
}

export function retriveElement(className) {
  return map[retriveAlias(className) || className];
}

export function registRootElementInstance(instance) {
  __rootInstance.add(instance);
}

export function getRootElementInstanceList() {
  return [...__rootInstance];
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
  // console.log("registerModule", id, modules);
  if (!_modules[id]) {
    // 처음 로드 된 것은 변하지 않는다.
    // 개별 파일에서 import 를 직접적으로 한 것이기 때문에
    // template 을 매번 생성 할 때마다 이전 함수 또는 클래스를 그대로 재활용 한다.
    // 그 말은 신규 리소스와 이전 리소스가 하나 밖에 존재하지 않는 다는 이야기다.
    _modules[id] = { new: modules, old: modules };

    Object.keys(modules).forEach((key) => {
      _moduleMap.set(modules[key], id);
    });
  } else {
    refreshModule(id, modules);
  }
}

export function refreshModule(id, newModules) {
  // console.log("refrshModule");
  // 처음 리소스 말고는
  // 모두 new 에 업데이트 된다.
  // old 에 해당하는 key 를 가진 New 로 대체해서 실행한다.
  _modules[id].new = newModules;

  Object.keys(newModules).forEach((key) => {
    _moduleMap.set(newModules[key], id);
  });

  // console.log(_modules[id]);
  // TODO: 로드된 모듈 old 에 대해서 전체를 검색 한다.
  // TODO: 로드된 모듈 old 의 instance 가 있으면 cleanup 시킨다.
  // TODO: 새로운 모듈 instance 로 생성한다.
  // TODO: 새로운 모듈 instance 에 old instance 의 props 와 state 를 전달한다.
  // TODO: 새로운 모듈 instance 의 render 를 실행한다.
  // TODO: VNode 의 Component 영역에 Old 가 있는지 조사해서
  // TODO: 있으면 New 로 교체한다.
  // TODO: 그런 다음 처음부터 다시 그린다.
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

  // return Component;
}
