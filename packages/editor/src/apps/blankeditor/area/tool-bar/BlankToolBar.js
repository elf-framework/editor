import { createComponent, SUBSCRIBE } from "@elf/sapa";

import "./BlankToolBar.scss";

import { EditorElement } from "elf/editor/ui/common/EditorElement";
import ToolBarRenderer from "./ToolBarRenderer";

export default class BlankToolBar extends EditorElement {
  components() {
    return {
      ToolBarRenderer,
    };
  }
  template() {
    return /*html*/ `
            <div class='elf--blank-tool-bar'>
              <div class="logo-area">
                ${createComponent("ToolBarRenderer", {
                  items: this.$menu.getTargetMenu("toolbar.logo"),
                })}
              </div>            
              <div class="toolbar-area">
                <div class='left'>
                    ${createComponent("ToolBarRenderer", {
                      items: this.$menu.getTargetMenu("toolbar.left"),
                    })}
                    ${this.$injectManager.generate(
                      "toolbar.left"
                    )}                                        
                </div>
                <div class='center'>
                    ${createComponent("ToolBarRenderer", {
                      items: this.$menu.getTargetMenu("toolbar.center"),
                    })}
                    ${this.$injectManager.generate(
                      "toolbar.center"
                    )}                                        
                </div>
                <div class='right'>
                    ${createComponent("ToolBarRenderer", {
                      items: this.$menu.getTargetMenu("toolbar.right", "desc"),
                    })}                
                    ${this.$injectManager.generate(
                      "toolbar.right"
                    )}                    
                </div>
              </div>
            </div>
        `;
  }

  [SUBSCRIBE("updateMenu")](target) {
    if (
      target === "toolbar.log" ||
      target === "toolbar.left" ||
      target === "toolbar.center" ||
      target === "toolbar.right"
    ) {
      this.refresh();
    }
  }
}
