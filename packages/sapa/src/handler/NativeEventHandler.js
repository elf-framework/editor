import { VNodeType } from "../constant/vnode";
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

  checkHasEvent(vNode) {
    if (vNode.type === VNodeType.ELEMENT || vNode.type === VNodeType.TEXT) {
      return false;
    }

    if (
      vNode.type === VNodeType.NODE &&
      vNode.tagProps["has-event"] === "true"
    ) {
      return true;
    }

    return vNode.children.some((it) => {
      return this.checkHasEvent(it);
    });
  }

  async initialize() {
    console.warn("deprecated NativeEventHandler");
    // 이미 정의된 domEvents 가 있고 notEventRedefine 설정이 true 로 되어 있으면 이벤트를 한번만 설정한다.
    if (this.#eventList?.length && this.context.notEventRedefine) {
      return;
    }

    if (this.checkHasEvent(this.context.prevTemplate)) {
      // 매번 호출 되지 않을려면 어떻게 하지?
      // 이벤트 정의는 해당 vnode 에서 직접 할까?
      // 그럼 끝나는거랑 context 유지를 할 수가 없는데...
      // 다만 이걸 매번 정의할 필요가 없단 말이지
      // 매번 호출 하는 것에는 동적으로 객체가 추가 될 수 있기 때문에 매번 체크 하는게 있음.
      this.parseHasEvent();
    }
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

    // root element 에 has-event 가 있으면 이벤트 적용하기
    if ($el.attr("has-event") === "true") {
      targets.unshift($el);
    }

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
            const newCallback = recoverVariable(t.nodeValue);
            results[eventName] = {
              applied: false,
              attributeName: t.nodeName,
              $dom,
              eventName: eventName,
              eventHandler: newCallback,
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

    if (!this.#eventList.length) return;

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

    // 해당 이벤트 리스트를 해제합니다.
    this.#eventList.forEach((it) => {
      if (it.applied) {
        it.$dom.off(it.eventName, it.eventHandler);
      }
    });

    this.#eventMap = new window.WeakMap();
  }
}
