import { UIElement, classnames } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";
import {
  ButtonItem,
  ColorItem,
  GridItem,
  TextInputItem,
  TitleItem,
  ToggleButtonItem,
} from "./editor-items";

const cssProperties = makeCssVariablePrefixMap("--elf--data-editor", {
  backgroundColor: true,
  color: true,
  height: true,
  width: true,
  hoverColor: true,
  borderColor: true,
});

const predefinedPlugins = {
  title: TitleItem,
  text: TextInputItem,
  grid: GridItem,
  button: ButtonItem,
  color: ColorItem,
  "toggle-button": ToggleButtonItem,
};

export class DataEditor extends UIElement {
  initState() {
    const { data = () => ({}), items = () => [], plugins = {} } = this.props;

    const currentData = data();

    return {
      plugins: {
        ...predefinedPlugins,
        ...plugins,
      },
      data: currentData,
      items: items(currentData),
    };
  }

  makeEditorItem(item, index) {
    const { plugins } = this.state;
    if (typeof item === "string") {
      const TitleItem = plugins["title"];
      return <TitleItem key={index} item={{ value: item }} />;
    } else {
      const TypedItem = plugins[item.type];

      if (TypedItem) {
        return <TypedItem key={item.key || index} item={item} root={this} />;
      }
    }

    return undefined;
  }

  template() {
    const { style = {} } = this.props;
    const { items } = this.state;

    const styleObject = {
      class: classnames("elf--data-editor"),
      style: propertyMap(style, cssProperties),
    };

    return (
      <div {...styleObject}>
        {items.map((item, index) => {
          const isString = typeof item === "string";

          return (
            <div
              class={classnames("elf--data-editor-item", { string: isString })}
            >
              {item.title ? <div class="title">{item.title}</div> : null}
              <div class="editor">{this.makeEditorItem(item, index)}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
