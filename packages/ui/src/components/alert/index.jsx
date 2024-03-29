import {
  UIElement,
  classnames,
  useState,
  useCallback,
  potal,
  useMemo,
} from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--alert", {
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
      shape = "rect",
      style = {},
      closable = false,
      dismissable = false,
      delay = 0,
      actions,
      weak,
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

    const localClass = useMemo(() => {
      return classnames("elf--alert", {
        [variant]: true,
        weak,
        hide,
        closable,
        [shape]: true,
        dismissable,
      });
    }, [variant, weak, hide, closable, shape, dismissable]);

    const styleObject = {
      class: localClass,
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

    const titleActions = title && actions ? actions : undefined;
    const contentActions = content && actions && !title ? actions : undefined;

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
            {titleIcon} <span>{title}</span>{" "}
            {titleActions ? (
              <div class="elf--alert-actions">{titleActions}</div>
            ) : undefined}
          </div>
        ) : null}
        {content ? (
          <div class="elf--alert-content">
            {contentIcon} <span>{content}</span>{" "}
            {contentActions ? (
              <div class="elf--alert-actions">{contentActions}</div>
            ) : undefined}
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

export function alert({ content = undefined, options = {}, ...extraProps }) {
  return potal(<Alert {...extraProps}>{content}</Alert>, options);
}

registerComponent("Alert", Alert);
registerComponent("alert", Alert);
