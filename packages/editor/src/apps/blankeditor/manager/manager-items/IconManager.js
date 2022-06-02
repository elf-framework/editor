import { isFunction } from "@elf/sapa";

import { iconUse } from "@elf/icon";

export class IconManager {
  constructor(editor) {
    this.editor = editor;
    this.iconMap = {};
  }

  get(itemType, item) {
    const icon = this.iconMap[itemType];

    if (isFunction(icon)) {
      return icon(item);
    }

    return iconUse(icon || "rect");
  }

  set(itemType, value) {
    this.iconMap[itemType] = value;
  }

  /**
   * icon 기본 설정을 등록한다.
   */
  registerIcon(itemType, iconOrFunction) {
    this.set(itemType, iconOrFunction);
  }

  registerIconList(obj) {
    Object.keys(obj).forEach(key => {
      this.set(key, obj[key])
    })
  }

  load() {
    return this.iconMap;
  }
}
