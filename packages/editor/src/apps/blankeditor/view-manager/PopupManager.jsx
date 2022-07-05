import { createComponent } from "@elf-framework/sapa";
import { EditorElement } from "elf/editor/ui/common/EditorElement";
import NotificationView from "elf/editor/ui/view/NotificationView";
import "elf/editor/ui/window-list";

import "./PopupManager.scss";

export class PopupManager extends EditorElement {
  components() {
    return {
      NotificationView,
    };
  }

  template() {
    return (
      <div class="elf--popup-manager">
        {createComponent("ShortcutWindow")}
        {createComponent("NotificationView")}
        {this.$injectManager.generate("popup", true)}
      </div>
    );
  }
}
