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

const cssProperties = makeStyleMap("--elf--visual-bell", {
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

export class VisualBell extends UIElement {
  template() {
    const { style = {}, content, delay = 0, direction = "bottom" } = this.props;
    const [localDelay, setLocalDelay] = useState(delay);
    const [hide, setHide] = useState(false);

    this.state.hideCallback = useCallback(
      (hideDelay = 0) => {
        setLocalDelay(hideDelay);
      },
      [setLocalDelay]
    );

    const styleObject = {
      class: classnames(
        "elf--visual-bell",
        `elf--visual-bell-direction-${direction}`,
        { hide }
      ),
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
        class="elf--visual-bell"
        {...styleObject}
        onContextMenu={(e) => e.preventDefault()}
        onTransitionEnd={() => {
          this.props.onHide && this.props.onHide();
          this.destroy(true);
        }}
      >
        <div class="elf--visual-bell-content">
          <div class="elf--visual-bell-text">{content}</div>
        </div>
        <div class="elf--visual-bell-tools">{this.props.tools || []}</div>
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
  tools = [],
  options = {},
  style = {},
}) {
  return potal(
    <VisualBell delay={delay} direction={direction} tools={tools} style={style}>
      {content}
    </VisualBell>,
    options
  );
}
