import BaseHandler from "./BaseHandler";

export default class PropsHandler extends BaseHandler {
  getProps() {
    // 이미 정의된 domEvents 가 있고 notEventRedefine 설정이 true 로 되어 있으면 이벤트를 한번만 설정한다.
    if (!this._props) {
      this._props = this.context.filterMethodes("props");
    }

    // binding 되어 있지 않고, domEvents 에 정의된 것만 있는 경우
    if (!this._bindings?.length && this._props?.length) {
      this._props.forEach((it) => this.parseProps(it));
    }

    return this.getBindings();
  }

  destroy() {
    this.removeAll();
  }

  getCallback(field) {
    return this.context[field];
  }

  removeAll() {
    this.initBindings();
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
    // this._props = [];
  }

  bindingProps(propsObject) {
    this.addBinding(propsObject);
  }

  createProps(magicMethod, originalCallback) {
    const [refKey] = magicMethod.args || [];

    if (!refKey) {
      return undefined;
    }

    return {
      ref: refKey,
      props: originalCallback(),
    };
  }

  /**
   * 이벤트 문자열 파싱하기
   *
   * @param {MagicMethod} it
   */
  parseProps(it) {
    const context = this.context;

    var originalCallback = this.getCallback(it.originalMethod).bind(context);

    this.bindingProps(this.createProps(it, originalCallback));
  }
}
