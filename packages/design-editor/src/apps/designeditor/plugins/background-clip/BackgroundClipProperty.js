import {
  LOAD,
  DEBOUNCE,
  SUBSCRIBE,
  SUBSCRIBE_SELF,
  createComponent,
} from "@elf-framework/sapa";

import { REFRESH_SELECTION } from "elf/editor/types/event";
import { BaseProperty } from "@elf-framework/editor";

export default class BackgroundClipProperty extends BaseProperty {
  getTitle() {
    return "Background Clip";
  }

  isFirstShow() {
    return false;
  }

  getTools() {
    return /*html*/ `<div ref='$backgroundClip' style='padding-top: 3px;'></div>`;
  }

  [LOAD("$backgroundClip")]() {
    var current = this.$context.selection.current || {};

    var clip = current.backgroundClip || "";
    return createComponent("SelectEditor", {
      ref: "$1",
      key: "backgroundClip",
      icon: true,
      value: clip,
      options: ["", "paddinb-box", "border-box", "content-box", "text"],
      onchange: "changeSelect",
    });
  }

  [SUBSCRIBE_SELF("changeSelect")](key, value) {
    this.$commands.executeCommand(
      "setAttribute",
      "change background clip",
      this.$context.selection.packByValue({
        [key]: value,
      })
    );
  }

  [SUBSCRIBE(REFRESH_SELECTION) + DEBOUNCE(100)]() {
    this.refreshShow(["rect", "circle", "text"]);
  }
}
