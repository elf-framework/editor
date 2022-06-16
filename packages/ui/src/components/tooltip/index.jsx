import { UIElement, classnames, CLICK, POINTERENTER, IF, POINTERLEAVE } from "@elf/sapa";

import { propertyMap } from "../../utils/propertyMap";


export class Tooltip extends UIElement {

  initState() {
    return {
      trigger: this.props.trigger || "hover",
      show: this.props.show || false,
    }    
  }

  template() {
    const { style = {}, message = "", content, position = "bottom" } = this.props;
    const { show } = this.state;

    const styleObject = {
      class: classnames("elf--tooltip", `elf--tooltip-position-${position}`),
      style: {
        ...propertyMap(style, {
          backgroundColor: "--elf--tooltip-background",
          color: "--elf--tooltip-color",
          height: "--elf--tooltip-height",
          hoverColor: "--elf--tooltip-hover-color",
          borderColor: "--elf--tooltip-border-color",
          boxShadow: "--elf--tooltip-box-shadow",
          toolsBorderColor: "--elf--tooltip-tools-border-color",
          toolsBorderRadius: "--elf--tooltip-tools-border-radius",
          hgap: "--elf--tooltip-hgap",
          vgap: "--elf--tooltip-vgap",        
          delay: "--elf--tooltip-delay",
        }),
      },
    };

    return (
      <div class="elf--tooltip" {...styleObject}>
        <div class="elf--tooltip-content">
          {content}
        </div>
        {(show || this.props.show) ? (
          <div class="elf--tooltip-message">
            <div class="arrow"></div>
            <div class="elf--toolltip-message-content">
              {message}
            </div>

          </div>
        ) : undefined}
      </div>
    );
  }

  open () {

    this.setState({
      show: true,
    });
  }

  close () {
    this.setState({
      show: false,
    });
  }

  toggle () {
    this.setState({
      show: !this.state.show,
    });
  }

  checkClickable(e) {
    const $menu = Dom.create(e.target).closest("elf--tooltip");

    // 메뉴가 클릭 될 때는 버튼 클릭으로 인식하지 않음.
    if ($menu) return false;

    return true;
  }

  checkTriggerClick () {
    return this.state.trigger === 'click';
  }

  checkTriggerOver () {
    return this.state.trigger === 'hover';
  }

  [POINTERENTER('$el') + IF('checkTriggerOver')] () {
    this.open();
  }

  checkNotInTooltip(e) {
    const $menu = Dom.create(e.target).closest("elf--tooltip");

    // pointerout 한 최상위 target 이 현재 메뉴가 아닐 때 메뉴를 닫는다.
    if (!$menu) return true;

    // 해당 객체가 아닐 때 
    return this.$el.is($menu) === false;
  }

  [POINTERLEAVE('$el') + IF('checkTriggerOver')] (e) {
    this.close();
  }  


  [CLICK("$el") + IF("checkClickable") + IF('checkTriggerClick')](e) {
    this.toggle();
  }
}
