import { isFunction } from "@elf-framework/sapa";

import {icons} from "@elf-framework/icon";

export class CursorManager {
  async load(iconName = "default", ...args) {
    if (icons[iconName]) {
      const iconContent = isFunction(icons[iconName])
        ? icons[iconName].call(icons[iconName], ...args)
        : icons[iconName];
      const blob = new window.Blob([iconContent], { type: "image/svg+xml" });

      return new Promise((resolve) => {
        const reader = new window.FileReader();
        reader.onload = (e) => {
          const datauri = e.target.result;
          resolve(`url(${datauri}) 12 12, auto`);
        };
        reader.readAsDataURL(blob);
      });
    } else {
      return iconName;
    }
  }
}
