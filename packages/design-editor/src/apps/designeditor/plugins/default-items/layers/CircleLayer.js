import { LayerModel } from "elf/editor/model/LayerModel";

export class CircleLayer extends LayerModel {
  getDefaultObject(obj = {}) {
    return super.getDefaultObject({
      itemType: "circle",
      name: "New Circle",
      borderRadius: "100%",
      ...obj,
    });
  }

  getDefaultTitle() {
    return "Circle";
  }
}
