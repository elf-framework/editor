import { SUBSCRIBE_SELF, createComponent } from "@elf/sapa";

import { EditorElement } from "@elf/editor"

export default class LayoutSelector extends EditorElement {
  template() {
    var layouts = ["all", "css", "svg"].map((layout) => {
      var label = this.$i18n(`app.layout.${layout}`);
      return { value: layout, text: label };
    });

    return /*html*/ `
            <div class='status-selector'>
                <div class='item'>
                    ${createComponent("SelectEditor", {
                      ref: "$locale",
                      options: layouts,
                      value: this.$editor.layout,
                      onchange: "changeEditorLayoutValue",
                    })}
                        
                    /> 
                </div>
            </div>
        `;
  }

  [SUBSCRIBE_SELF("changeEditorLayoutValue")](key, layout) {
    this.$config.set("editor.layout.mode", layout);
  }
}
