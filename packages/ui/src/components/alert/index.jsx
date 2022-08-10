import {
  UIElement,
  classnames,
  useState,
  useCallback,
  potal,
} from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";

const cssProperties = {
  borderColor: "--elf--alert-border-color",
  backgroundColor: "--elf--alert-background-color",
  selectedBackgroundColor: "--elf--alert-selected-background-color",
  disabledColor: "--elf--alert-disabled-color",
  color: "--elf--alert-color",
  fontSize: "--elf--alert-font-size",
  fontWeight: "--elf--alert-font-weight",
  height: "--elf--alert-height",
  padding: "--elf--alert-padding",
  borderRadius: "--elf--alert-border-radius",
};

export class Alert extends UIElement {
  template() {
    const {
      type = "default",
      title = "",
      content = "",
      style = {},
      closable = false,
      onClose = undefined,
      delay = 0,
      ...extrProps
    } = this.props;
    const [localDelay, setLocalDelay] = useState(delay);
    const [hide, setHide] = useState(false);

    this.state.hideCallback = useCallback(
      (hideDelay = 0) => {
        setLocalDelay(hideDelay);
      },
      [setLocalDelay]
    );

    const styleObject = {
      class: classnames(["elf--alert", { [type]: true }, { hide }]),
      style: {
        ...propertyMap(style, cssProperties),
        ...{
          transition: `opacity ${localDelay}ms ease-in-out`,
          opacity: hide ? 0 : 1,
        },
      },
      ...extrProps,
    };

    return (
      <div
        {...styleObject}
        onContextMenu={(e) => e.preventDefault()}
        onTransitionEnd={() => {
          this.props.onHide && this.props.onHide();
          this.destroy(true);
        }}
      >
        {title ? <div class="elf--alert-title">{title}</div> : null}
        {content ? <div class="elf--alert-content">{content}</div> : null}
        {closable ? (
          <div
            class="elf--alert-close"
            onClick={() => {
              setHide(true);
              if (localDelay === 0) {
                this.props.onHide && this.props.onHide();
                this.destroy(true);
              }
            }}
          >
            &times;
          </div>
        ) : null}
      </div>
    );
  }

  hide(hideDelay = 0) {
    this.state?.hideCallback(hideDelay);
  }
}

export function alert({
  content = undefined,
  delay = 0,
  title = undefined,
  closable = false,
  options = {},
  style = {},
}) {
  return potal(
    <Alert title={title} delay={delay} closable={closable} style={style}>
      {content}
    </Alert>,
    options
  );
}
