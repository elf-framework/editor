import { LayerModel } from "elf/editor/model/LayerModel";

export class RectLayer extends LayerModel {
  getDefaultObject(obj = {}) {
    return super.getDefaultObject({
      itemType: "rect",
      name: "New Rect",
      ...obj,
    });
  }

  getDefaultTitle() {
    return "Rect";
  }
}
