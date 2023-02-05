import {
  debounce,
  ifCheck,
  isArray,
  isFunction,
  isNotUndefined,
  makeRequestAnimationFrame,
  throttle,
} from "./functions/func";
import { uuidShort } from "./functions/uuid";

/**
 * @class BaseStore
 * @description BaseStore is the base class for all stores.
 *
 */
export class BaseStore {
  constructor() {
    this.id = uuidShort();
    this.cachedCallback = {};
    this.callbacks = {};
    this.settings = new Map();
  }

  get(key, defaultValue = undefined) {
    if (this.settings.has(key) === false) {
      return defaultValue;
    }

    return this.settings.get(key) || defaultValue;
  }

  set(key, value, hasChangeMessage = true) {
    const oldValue = this.settings.get(key);

    if (oldValue !== value) {
      this.settings.set(key, value);

      if (hasChangeMessage) {
        this.sendMessage(this, key, value);
      }
    }
  }

  setValue(key, valueFunction) {
    const oldValue = this.get(key);
    const newValue = valueFunction(oldValue);

    this.set(key, newValue);
  }

  initValue(key, valueFunction) {
    const oldValue = this.get(key);
    const newValue = valueFunction(oldValue);

    this.init(key, newValue);
  }

  init(key, value) {
    this.set(key, value, false);
  }

  toggle(key) {
    this.set(key, !this.get(key));
  }

  toggleWith(key, firstValue, secondValue) {
    if (this.get(key) === firstValue) {
      this.set(key, secondValue);
    } else {
      this.set(key, firstValue);
    }
  }

  true(key) {
    return this.get(key) === true;
  }

  false(key) {
    return this.get(key) === false;
  }

  /**
   * key 에 해당하는 config 의 값을 비교한다.
   *
   *
   * @param {string} key
   * @param {any} value
   * @returns {boolean}
   */
  is(key, value) {
    return this.get(key) === value;
  }

  remove(key) {
    this.settings.delete(key);
  }

  hasCallback(event, callback) {
    var list = this.getCachedCallbacks(event);

    return list.some((f) => f.originalCallback === callback);
  }

  getCallbacks(event) {
    if (!this.callbacks[event]) {
      this.callbacks[event] = [];
    }

    return this.callbacks[event];
  }

  setCallbacks(event, list = []) {
    this.callbacks[event] = list;
  }

  /**
   * 메세지 등록
   *
   * @param {string} event
   * @param {Function} originalCallback
   * @param {EventMachine} context
   * @param {number} debounceDelay
   * @param {number} throttleDelay
   * @param {boolean} enableAllTrigger
   * @param {boolean} enableSelfTrigger
   * @param {string[]} [beforeMethods=[]]
   * @returns {Function} off callback
   */
  on(
    event,
    originalCallback,
    context,
    debounceDelay = 0,
    throttleDelay = 0,
    enableAllTrigger = false,
    enableSelfTrigger = false,
    beforeMethods = [],
    frame = false
  ) {
    var callback = originalCallback;

    if (debounceDelay > 0) callback = debounce(originalCallback, debounceDelay);
    else if (throttleDelay > 0)
      callback = throttle(originalCallback, throttleDelay);

    if (beforeMethods.length) {
      callback = ifCheck(callback, context, beforeMethods);
    }

    if (frame) {
      // 모든 이벤트는 requestAnimationFrame 을 통과하도록 한다.
      callback = makeRequestAnimationFrame(
        callback,
        context,
        originalCallback.name
      );
    }

    this.getCallbacks(event).push({
      event,
      callback,
      context,
      originalCallback,
      enableAllTrigger,
      enableSelfTrigger,
    });

    // this.debug('add message event', event, context.sourceName);

    return () => {
      this.off(event, originalCallback);
    };
  }

  /**
   * 메세지 해제
   *
   * @param {string} event
   * @param {*} originalCallback
   */
  off(event, originalCallback) {
    if (arguments.length == 1) {
      this.setCallbacks(event);
    } else if (arguments.length == 2) {
      const filteredEvents = this.getCallbacks(event).filter((f) => {
        return f.originalCallback !== originalCallback;
      });

      this.setCallbacks(event, filteredEvents);
    }
  }

  offAll(context) {
    Object.keys(this.callbacks).forEach((event) => {
      this.setCallbacks(
        event,
        this.getCallbacks(event).filter((f) => {
          return f.context !== context;
        })
      );
    });
  }

  getCachedCallbacks(event) {
    return this.getCallbacks(event);
  }

  sendMessage(source, event, ...args) {
    this.sendMessageList(source, [[event, ...args]]);
  }

  runMessage(runnableFunction, args) {
    const result = runnableFunction.callback.apply(
      runnableFunction.context,
      args
    );

    if (isNotUndefined(result)) {
      if (result === false) {
        return;
      } else if (isFunction(result)) {
        result();
        return;
      }
    }
  }

  /**
   *
   * run multi messages
   *
   * message.callback can has a return value.
   *
   * if return value is false then message will be skip.
   * if return value is function then message will be skip after run return function.
   *
   * @param {string} source
   * @param {Command[]} messages
   */
  sendMessageList(source, messages = []) {
    window.Promise.resolve().then(() => {
      messages.forEach(([event, ...args]) => {
        var list = this.getCachedCallbacks(event);
        if (list && list.length) {
          const runnableFunctions = list
            .filter((f) => !f.enableSelfTrigger)
            .filter(
              (f) => f.enableAllTrigger || f.originalCallback.source !== source
            );

          let i = runnableFunctions.length;
          while (i--) {
            const f = runnableFunctions[i];
            this.runMessage(f, args);
          }
        } else {
          // this.debug(`message event ${event} is not exist.`);
        }
      });
    });
  }

  nextSendMessage(source, callback, ...args) {
    window.Promise.resolve().then(() => {
      callback(...args);
    });
  }

  triggerMessage(source, event, ...args) {
    window.Promise.resolve().then(() => {
      var list = this.getCachedCallbacks(event);

      if (list) {
        const runnableFunctions = list.filter((f) => {
          return f.context?.source === source;
        });

        runnableFunctions.forEach((f) => {
          f.callback.apply(f.context, args);
        });
      } else {
        // this.debug(event, " is not valid event");
      }
    });
  }

  emit(event, ...args) {
    if (isFunction(event)) {
      event(...args);
    } else if (isArray(event)) {
      this.sendMessageList(this.source, event);
    } else {
      this.sendMessage(this.source, event, ...args);
    }
  }

  /**
   * 마이크로 Task 를 실행
   *
   * @param {Function} callback  마이크로Task 형식으로 실행될 함수
   */
  nextTick(callback) {
    this.nextSendMessage(this.source, callback);
  }

  trigger(event, ...args) {
    if (isFunction(event)) {
      event(...args);
    } else {
      this.triggerMessage(this.source, event, ...args);
    }
  }
}
