import { EditorElement } from "@elf/editor"

export default class AssetItems extends EditorElement {
  template() {
    return /*html*/ `
      <div class='asset-items'>
        ${this.$injectManager.generate("asset")}
      </div>
    `;
  }
}
