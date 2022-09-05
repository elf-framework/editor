import { CLICK, Dom, IF, UIElement } from "@elf-framework/sapa";

import { ArrowIcon } from "../../icon/arrow";
import { registerComponent } from "../../utils/component";
import { Menu } from "../menu";

export class OptionMenu extends UIElement {
  template() {
    const {
      icon,
      content,
      items,
      menuStyle = {},
      disabled = undefined,
      autoPosition = false,
    } = this.props;
    const { isOpen } = this.state;
    const showMenu = isOpen && items;
    return (
      <div class="elf--option-menu" disabled={disabled}>
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
