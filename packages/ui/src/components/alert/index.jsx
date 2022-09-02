import {
  UIElement,
  classnames,
  useState,
  useCallback,
  potal,
} from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeStyleMap } from "../../utils/styleKeys";

const cssProperties = makeStyleMap("--elf--alert", {
  borderColor: true,
  backgroundColor: true,
  selectedBackgroundColor: true,
  disabledColor: true,
  color: true,
  fontSize: true,
  fontWeight: true,
  height: true,
  padding: true,
  borderRadius: true,
});

export class Alert extends UIElement {
  template() {
    const {
      variant = "default",
      title = "",
      content = "",
      style = {},
      closable = false,
      weak = false,
      delay = 0,
      icon,
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
      class: classnames([
        "elf--alert",
        { [variant]: true, weak },
        { hide, closable },
      ]),
      style: {
        ...propertyMap(style, cssProperties),
        ...{
          transition: `opacity ${localDelay}ms ease-in-out`,
          opacity: hide ? 0 : 1,
        },
      },
      ...extrProps,
    };

    const titleIcon = title && icon ? icon : undefined;
    const contentIcon = content && icon && !title ? icon : undefined;

    return (
      <div
        {...styleObject}
        onContextMenu={(e) => e.preventDefault()}
        onTransitionEnd={() => {
          this.props.onHide && this.props.onHide();
          this.destroy(true);
        }}
      >
        {title ? (
          <div class="elf--alert-title">
            {titleIcon} {title}
          </div>
        ) : null}
        {content ? (
          <div class="elf--alert-content">
            {contentIcon} {content}
          </div>
        ) : null}
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
