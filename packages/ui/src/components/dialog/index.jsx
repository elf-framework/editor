import {
  BIND,
  CLICK,
  UIElement,
  classnames,
  IF,
  isFunction,
  LOAD,
} from "@elf/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { Button } from "../button";

export class Dialog extends UIElement {
  initState() {
    const { visible = false, style = {} } = this.props;

    return {
      visible,
      style,
    };
  }

  template() {
    return (
      <div class="elf--dialog">
        <div class="elf--dialog-title">
          <div class="elf--dialog-title-text">Dialog</div>
          <div class="elf--dialog-title-tools" ref="$tools"></div>
          <div class="elf--dialog-title-close" ref="$close">
            &times;
          </div>
        </div>
        <div class="elf--dialog-content">
          <div class="elf--dialog-text">Hello, I'm a dialog</div>
          <div class="elf--dialog-content-tools">
            <button class="elf--button">Action</button>
            <button class="elf--button">Dismiss</button>
          </div>
        </div>
      </div>
    );
  }

  [LOAD("$tools")]() {
    return [
      <Button
        type="primary"
        ref="$action"
        onClick={() => {
          console.log("Action");
        }}
      >
        Action
      </Button>,
      <Button
        ref="$outline"
        type="outline"
        onClick={() => {
          console.log("Dismiss");
        }}
      >
        Dismiss
      </Button>,
    ];
  }

  [BIND("$el")]() {
    const { style = {}, visible } = this.state;
    return {
      class: classnames("elf--dialog", {
        visible,
      }),
      style: {
        ...propertyMap(style, {
          backgroundColor: "--elf--dialog-background",
          color: "--elf--dialog-color",
          fontSize: "--elf--dialog-font-size",
          fontWeight: "--elf--dialog-font-weight",
          height: "--elf--dialog-height",
          padding: "--elf--dialog-padding",
          borderRadius: "--elf--dialog-border-radius",
          borderColor: "--elf--dialog-border-color",
          boxShadow: "--elf--dialog-box-shadow",
          width: "--elf--dialog-width",
        }),
      },
    };
  }

  [CLICK("$close")]() {
    const { onClose } = this.props;

    if (isFunction(onClose)) {
      onClose(this);
    }
  }
}
