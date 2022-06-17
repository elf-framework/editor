import { LOAD, DOMDIFF, SUBSCRIBE } from "@elf-framework/sapa";

import "./HistoryProperty.scss";

import {BaseProperty, iconUse} from "@elf-framework/editor";

export default class HistoryProperty extends BaseProperty {
  afterRender() {
    this.show();
  }

  getTitle() {
    return "History";
  }

  getBody() {
    return /*html*/ `
      <div class="elf--history-list-view" ref='$body'></div>
    `;
  }

  [LOAD("$body") + DOMDIFF]() {
    return this.$editor.context.history.map((it, index) => {
      if (it === "-") {
        return /*html*/ `<div class='divider'>-</div>`;
      }
      return /*html*/ `
        <div class='history-item'>
          <span>${
            index === this.$editor.context.history.currentIndex
              ? iconUse("arrowRight")
              : ""
          }</span>
          <span>${it.message}</span>
        </div>
      `;
    });
  }

  [SUBSCRIBE("refreshHistoryList")]() {
    this.refresh();
  }
}
