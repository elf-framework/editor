import "./TextureView.scss";

import { EditorElement, Tabs, TabPanel } from "@elf/editor";
export default class TextureView extends EditorElement {
  template() {
    const isItemMode = this.$config.get("editor.design.mode") === "item";

    return (
      <div class="elf--texture">
        <Tabs
          ref="$tab"
          selectedValue={isItemMode ? "svg" : "css"}
          onchange={(value) => {
            this.$config.set("inspector.selectedValue", value);
          }}
        >
          {isItemMode ? (
            ""
          ) : (
            <TabPanel value="css" title="CSS">
              <object refClass="CSSTextureView" ref="$css" />
            </TabPanel>
          )}

          <TabPanel value="svg" title="SVG">
            <object refClass="SVGTextureView" ref="$svg" />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
