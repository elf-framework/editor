import BaseHandler from "./BaseHandler";

/**
 * @example 실험기능
 *
 * root element 의 이벤트를 정의하는 용도로 사용된다.
 * root 에 설정하는 이유는 글로벌 이벤트 하나만 설정하기 위함.
 *
 * messaging root 를 타기위한 설정이다.
 *
 * 여기는 정해진 영역의 이벤트를 지정한다.
 *
 * click,
 * dblclick,
 * mousedown,
 * mouseup,
 * mousemove,
 *
 *
 * class Ex extends UIElement {
 *  [SUBSCRIBE("document:click")] (e) {
 *    console.log(e);
 *  }
 *
 *  [SUBSCRIBE("document:dblclick")] (e) {
 *
 *  }
 *
 *  [SUBSCRIBE("document:mousedown")] (e) {
 *
 *  }
 * }
 * <div></div>
 *
 * start(function () {
 *  return <div></div>
 *
 * }, {
 *  events: ['click', 'dblclick', 'mousedown', 'mouseup', 'mousemove']
 * })
 *
 *
 *
 *
 */
export default class RootHandler extends BaseHandler {
  initialize() {
    // this.destroy();

    if (!this._callbacks) {
      this._callbacks = this.context.filterMethodes("subscribe");
    }

    if (!this._bindings?.length && this._callbacks?.length) {
      this._callbacks.forEach((key) => this.parseSubscribe(key));
    }
  }

  destroy() {
    if (this.context.notEventRedefine) {
      // NOOP
    } else {
      // console.log("destroy store", this.context,  this.context.props.ref);
      this.context.$store.offAll(this.context);
    }
  }

  getCallback(field) {
    return this.context[field];
  }

  getBindings() {
    if (!this._bindings) {
      this.initBindings();
    }

    return this._bindings;
  }

  addBinding(obj) {
    this.getBindings().push(obj);
  }

  initBindings() {
    this._bindings = [];
  }

  createLocalCallback(event, callback) {
    var newCallback = callback.bind(this.context);
    newCallback.displayName = `${this.context.sourceName}.${event}`;
    newCallback.source = this.context.source;

    return newCallback;
  }

  /**
   * 이벤트 문자열 파싱하기
   *
   * @param {string} key
   */
  parseSubscribe(magicMethod) {
    const events = magicMethod.args.join(" ");

    const checkMethodList = [];
    const eventList = [];

    let debounce = 0;
    let throttle = 0;
    let isAllTrigger = false;
    let isSelfTrigger = false;
    let isFrameTrigger = false;

    // 함수 체크
    const debounceFunction = magicMethod.getFunction("debounce");
    const throttleFunction = magicMethod.getFunction("throttle");
    const allTriggerFunction = magicMethod.getFunction("allTrigger");
    const selfTriggerFunction = magicMethod.getFunction("selfTrigger");
    const frameFunction = magicMethod.getFunction("frame");

    if (debounceFunction) {
      debounce = +(debounceFunction.args?.[0] || 0);
    }

    if (throttleFunction) {
      throttle = +(throttleFunction.args?.[0] || 0);
    }

    if (allTriggerFunction) {
      isAllTrigger = true;
    }

    if (selfTriggerFunction) {
      isSelfTrigger = true;
    }

    if (frameFunction) {
      isFrameTrigger = true;
    }

    /** 키워드 체크  */
    magicMethod.keywords.forEach((keyword) => {
      const method = keyword;
      if (this.context[method]) {
        checkMethodList.push(method);
      } else {
        eventList.push(method);
      }
    });

    const originalCallback = this.context[magicMethod.originalMethod];
    [...eventList, events].filter(Boolean).forEach((e) => {
      var callback = this.createLocalCallback(e, originalCallback);
      this.context.$store.on(
        e,
        callback,
        this.context,
        debounce,
        throttle,
        isAllTrigger,
        isSelfTrigger,
        checkMethodList,
        isFrameTrigger
      );
    });

    this.addBinding(magicMethod);
  }
}
