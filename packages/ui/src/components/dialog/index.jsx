import { UIElement, classnames, isFunction } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";
import { Button } from "../button/index";

const cssProperties = makeCssVariablePrefixMap("--elf--dialog", {
  position: true,
  backgroundColor: true,
  color: true,
  fontSize: true,
  fontWeight: true,
  height: true,
  padding: true,
  borderRadius: true,
  borderColor: true,
  boxShadow: true,
  width: true,
});

export class Dialog extends UIElement {
  initState() {
    const { visible = false, style = {}, center } = this.props;

    return {
      visible,
      style,
      center,
    };
  }

  close() {
    const { onClose } = this.props;

    if (isFunction(onClose)) {
      onClose(this);
    }
  }

  ok() {
    const { onOk } = this.props;

    if (isFunction(onOk)) {
      onOk(this);
    }
  }

  cancel() {
    const { onCancel } = this.props;

    if (isFunction(onCancel)) {
      onCancel(this);
    }
  }

  makeDefaultTools() {
    const {
      footer,
      cancelText = "Cancel",
      okText = "OK",
      okProps = {},
      cancelProps = {},
    } = this.props;

    if (!footer) {
      return [
        <Button shape="round" {...cancelProps} onClick={() => this.cancel()}>
          {cancelText}
        </Button>,
        <Button
          shape="round"
          variant="primary"
          {...okProps}
          onClick={() => this.ok()}
        >
          {okText}
        </Button>,
      ];
    }

    return "";
  }

  template() {
    const { style = {}, visible, center } = this.state;
    const { noBorder, title, closable = true, footer } = this.props;
    const styleObject = {
      class: classnames("elf--dialog", {
        visible,
        center,
        "no-border": noBorder,
      }),
      style: {
        ...propertyMap(style, cssProperties),
      },
    };

    return (
      <div {...styleObject}>
        <div class="elf--dialog-title">
          <div class="elf--dialog-title-text">{title}</div>
          {this.props.tools ? (
            <div class="elf--dialog-title-tools" ref="$tools">
              {this.props.tools}
            </div>
          ) : undefined}
          {closable ? (
            <div
              class="elf--dialog-title-close"
              ref="$close"
              onClick={() => this.close()}
            >
              &times;
            </div>
          ) : undefined}
        </div>
        {noBorder ? undefined : <div class="elf--dialog-divider" />}
        <div class="elf--dialog-content">
          <div class="elf--dialog-text">{this.props.content || ""}</div>
          <div class="elf--dialog-content-tools">
            {footer ? footer : this.makeDefaultTools()}
          </div>
        </div>
      </div>
    );
  }
}

registerComponent("dialog", Dialog);
registerComponent("Dialog", Dialog);
