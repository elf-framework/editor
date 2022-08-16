import { DesignLayout } from "./DesignLayout";
import { EditorLayout } from "./EditorLayout";
import { IconLayout } from "./IconLayout";
import { MainLayout } from "./MainLayout";
import { SapaLayout } from "./SapaLayout";
import { UILayout } from "./UILayout";

export default {
  items: {
    MainLayout,
    IconLayout,
    UILayout,
    SapaLayout,
    DesignLayout,
    EditorLayout,
  },
  get(layout) {
    return this.items[layout];
  },
};
