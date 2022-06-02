import { createComponent } from "@elf/sapa";

import "./LibraryItems.scss";

import { EditorElement } from "@elf/editor"

export default class LibraryItems extends EditorElement {
  template() {
    return /*html*/ `
      <div class='elf--library-items'>
        <div>
          ${createComponent("TextEditor", {
            label: "Search",
            key: "search",
            onchange: this.subscribe((key, value) => {
              this.broadcast("search", value);
            }, 300),
          })}
        </div>
        ${this.$injectManager.generate("library")}
      </div>
    `;
  }
}
