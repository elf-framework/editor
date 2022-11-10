import {
  UIElement,
  classnames,
  useEffect,
  useState,
  useCallback,
  potal,
  useMemo,
  isFunction,
} from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";
import { Button } from "../button";

const cssProperties = makeCssVariablePrefixMap("--elf--toast", {
  backgroundColor: true,
  color: true,
  height: true,
  hoverColor: true,
  borderColor: true,
  boxShadow: true,
  toolsBorderColor: true,
  toolsBorderRadius: true,
  hgap: true,
  vgap: true,
});

export class Toast extends UIElement {
  template() {
    const {
      style = {},
      content,
      delay = 0,
      icon,
      direction = "bottom",
      closable,
      variant = undefined,
      onClose,
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
      return classnames("elf--toast", {
        hide,
        [direction]: true,
        [variant]: true,
      });
    }, [hide, direction, variant]);

    const styleObject = {
      class: localClass,
      style: {
        ...propertyMap(style, cssProperties),
        transition: `opacity ${localDelay}ms ease-in-out, transform  ${localDelay}ms ease-in-out`,
        opacity: hide ? 0 : 1,
        transform: hide ? "scale(0.3)" : "scale(1)",
        transformOrigin: "center top",
      },
    };

    useEffect(() => {
      if (localDelay > 0) {
        // show 상태일 때
        if (!hide) {
          this.props.onShow && this.props.onShow();
        }

        setTimeout(() => {
          if (!hide) {
            setHide(true);
          }
        }, localDelay);
      }
    }, [localDelay, hide]);

    return (
      <div
        {...styleObject}
        onContextMenu={(e) => e.preventDefault()}
        onTransitionEnd={() => {
          isFunction(onClose) && onClose();
          this.destroy(true);
        }}
      >
        {icon ? <div class="icon">{icon}</div> : undefined}
        <div class="content">
          <div class="elf--toast-text">{content}</div>
        </div>
        <div class="tools">{this.props.tools || []}</div>
        {closable ? (
          <div class="close-area">
            <Button
              size="small"
              variant={variant}
              iconOnly
              quiet
              closable
              onClick={() => this.hide(1)}
            >
              &times;
            </Button>
          </div>
        ) : undefined}
      </div>
    );
  }

  hide(hideDelay = 0) {
    this.state?.hideCallback(hideDelay);
  }
}

export function toast({ content = "", options = {}, ...extraProps }) {
  const rootInstance = potal(<Toast {...extraProps}>{content}</Toast>, options);

  return rootInstance.firstChild;
}

registerComponent("toast", Toast);
registerComponent("Toast", Toast);
