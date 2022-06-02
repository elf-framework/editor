import { CLICK } from "@elf/sapa";

import "./ExportProperty.scss";

import { BaseProperty, iconUse } from "@elf/editor";

export default class ExportProperty extends BaseProperty {
  getTitle() {
    return this.$i18n("export.property.title");
  }

  isFirstShow() {
    return true;
  }

  getClassName() {
    return "elf--export-property";
  }

  getBody() {
    return /*html*/ `
        <div class='export-item svg'>
          <label>SVG</label>
          <button ref='$svg'>${iconUse("archive")} ${this.$i18n(
      "export.property.download"
    )}</button>
        </div>
        <div class='export-item png'>
          <label>PNG</label>
          <button ref='$png'>${iconUse("archive")} ${this.$i18n(
      "export.property.download"
    )}</button>
        </div> 
      `;
  }

  [CLICK("$svg")]() {
    this.$commands.emit("downloadSVG");
  }

  [CLICK("$png")]() {
    this.$commands.emit("downloadPNG");
  }
}
