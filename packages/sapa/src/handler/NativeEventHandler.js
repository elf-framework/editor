import { recoverVariable } from "../functions/registElement";
import BaseHandler from "./BaseHandler";

/**
 * jsx 실행되는 tag 의 native dom event 를 관리한다.
 *
 * ```jsx
 * <button onClick={() => {console.log("click")}}>Sample Button</button>
 * ```
 *
 * 순수하게 dom string 으로 사용할려면
 *
 * ```js
 * return `
 *  <button onClick="${variable(() => {console.log("click")})}" has-event="true">Sample Button</button>
 * `
 * ```
 *
 */

const NATIVE_EVENT_PREFIX = "on";

export default class NativeEventHandler extends BaseHandler {
  #eventList = [];
  #eventMap = new window.WeakMap();

  async initialize() {
    // 이미 정의된 domEvents 가 있고 notEventRedefine 설정이 true 로 되어 있으면 이벤트를 한번만 설정한다.
    if (this.#eventList?.length && this.context.notEventRedefine) {
      return;
    }

    this.parseHasEvent();
  }

  /**
   * element 를 기준으로 내부 component 리스트를 생성한다.
   *
   * @return {object[]}
   */
  loadHasEventList() {
    const $el = this.context.$el;
    if (!$el) return;

    // 하위에 refclass 를 가진 element 중에 마지막 지점인 컴포넌트만 조회한다.
    // 부모에 refclass 를 가지고 있는 경우는 그 다음 컴포넌트로 넘겨서 생성한다.
    // 이렇게 하지 않으면 최상위 부모에서 모든 하위 refclass 를 컴포넌트로 생성해버리는 문제가 생긴다.
    let targets = $el.$$("[has-event='true']");

    if (!targets.length) {
      return;
    }

    targets.map(($dom) => {
      if (!this.#eventMap.has($dom.el)) {
        this.#eventMap.set($dom.el, {});
      }

      // dom 에 정의된 리스트만 조회
      const results = this.#eventMap.get($dom.el);

      for (var t of $dom.attributes) {
        if (t.nodeName.startsWith(NATIVE_EVENT_PREFIX)) {
          const eventName = t.nodeName.replace(NATIVE_EVENT_PREFIX, "");

          // 이미 이벤트가 등록되어 있으면 다시 등록하지 않는다.
          if (!results[eventName]) {
            results[eventName] = {
              applied: false,
              attributeName: t.nodeName,
              $dom,
              eventName: eventName,
              eventHandler: recoverVariable(t.nodeValue),
            };

            this.#eventList.push(results[eventName]);
          } else {
            // 새로운 callback 은 지우자.
            // 이걸 안할려면 공용 callback 을 만들어서 넣어줘야 하는데
            // context 가 달라질 수 있으므로 일단은 그냥 두는 걸로 한다.
            recoverVariable(t.nodeValue);
          }
        }
      }
    });
  }

  parseHasEvent() {
    // event 리스트를 생성한다.
    this.loadHasEventList();

    // 해당 이벤트 리스트를 적용한다.
    this.#eventList.forEach((it) => {
      if (!it.applied) {
        // dom event 를 적용한다.
        it.$dom.on(it.eventName, it.eventHandler);
        it.applied = true;
      }

      // attribute 을 제거한다.
      // onClick 이라고 치면 onClick="v:idxxxxx" 형태로 들어가있는 코드를 지운다.
      it.$dom.removeAttr(it.attributeName);
      it.$dom.removeAttr("has-event");
    });
  }

  destroy() {
    this.#eventList = [];
    this.#eventMap = new window.WeakMap();
  }
}
