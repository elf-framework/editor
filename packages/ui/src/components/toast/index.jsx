import {
  UIElement,
  classnames,
  useEffect,
  useState,
  useCallback,
  potal,
} from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeStyleMap } from "../../utils/styleKeys";

const cssProperties = makeStyleMap("--elf--toast", {
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
      class: classnames("elf--toast", {
        hide,
        [direction]: true,
        [variant]: true,
      }),
      style: {
        ...propertyMap(style, cssProperties),
        ...{
          transition: `opacity ${localDelay}ms ease-in-out`,
          opacity: hide ? 0 : 1,
        },
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
          this.props.onHide && this.props.onHide();
          this.destroy(true);
        }}
      >
        {icon ? <div class="icon">{icon}</div> : undefined}
        <div class="content">
          <div class="elf--toast-text">{content}</div>
        </div>
        <div class="tools">{this.props.tools || []}</div>
        {closable ? (
          <div class="close" onClick={() => this.hide()}>
            &times;
          </div>
        ) : undefined}
      </div>
    );
  }

  hide(hideDelay = 0) {
    this.state?.hideCallback(hideDelay);
  }
}

export function bell({
  content = "",
  delay = 0,
  direction = "bottom",
  cloasable = false,
  onClose,
  tools = [],
  options = {},
  style = {},
}) {
  return potal(
    <Toast
      delay={delay}
      direction={direction}
      tools={tools}
      style={style}
      cloasable={cloasable}
      onClose={onClose}
    >
      {content}
    </Toast>,
    options
  );
}
