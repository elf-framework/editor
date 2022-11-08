import {
  classnames,
  CLICK,
  Dom,
  IF,
  UIElement,
  useMemo,
} from "@elf-framework/sapa";

import { ArrowIcon } from "../../icon/arrow";
import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";
import { Menu } from "../menu";

const cssProperties = makeCssVariablePrefixMap("--elf--option-menu", {
  backgroundColor: true,
  color: true,
  width: true,
});

export class OptionMenu extends UIElement {
  template() {
    const {
      icon,
      content,
      items,
      quiet,
      menuStyle = {},
      disabled = undefined,
      autoPosition = false,
      style,
    } = this.props;
    const { isOpen } = this.state;
    const showMenu = isOpen && items;

    const localClass = useMemo(() => {
      return classnames("elf--option-menu", {
        quiet,
      });
    }, [quiet]);

    const styleObject = {
      class: localClass,
      disabled,
      style: propertyMap(style, cssProperties),
    };

    return (
      <div {...styleObject}>
        <div
          class="content"
          onClick={() => {
            this.setState({
              isOpen: !this.state.isOpen,
            });
          }}
        >
          {icon ? <div class="elf--option-menu-icon">{icon}</div> : undefined}
          <div class="text">{content}</div>
          <div class="arrow">
            <ArrowIcon />
          </div>
        </div>
        {showMenu ? (
          <div class="menu-area">
            <Menu
              type="dropdown"
              autoPosition={autoPosition}
              rootClose={() => {
                this.close();
              }}
              style={menuStyle}
              items={items}
            />
          </div>
        ) : undefined}
      </div>
    );
  }

  close() {
    this.setState({
      isOpen: false,
    });
  }

  checkClickable(e) {
    const $menu = Dom.create(e.target).closest("menu-area");

    // 메뉴가 클릭 될 때는 버튼 클릭으로 인식하지 않음.
    if ($menu) return false;

    return true;
  }

  checkNotInMenu(e) {
    const $menu = Dom.create(e.target).closest("elf--option-menu");

    if (!$menu) return true;

    // 해당 객체가 아닐 때
    return this.$el.is($menu) === false;
  }

  [CLICK("document") + IF("checkClickable") + IF("checkNotInMenu")]() {
    this.close();
  }
}

registerComponent("OptionMenu", OptionMenu);
registerComponent("optionmenu", OptionMenu);
registerComponent("option-menu", OptionMenu);
