import "./PageSubEditor.scss";
import { EditorElement } from "@elf/editor";

export default class PageSubEditor extends EditorElement {
  template() {
    return /*html*/ `
      <div class='elf--page-subeditor'>
        ${this.$injectManager.generate("page.subeditor.view")}         
      </div>
    `;
  }
}