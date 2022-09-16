import { UIElement } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--animation", {
  name: true,
  iterationCount: true,
  timingFunction: true,
  duration: true,
  delay: true,
});

export class Animation extends UIElement {
  template() {
    const {
      name = "spin",
      delay = "0s",
      iterationCount,
      timingFunction,
      duration = "1s",
      style = {},
      content,
      onEnd: onAnimationEnd,
      onIteration: onAnimationIteration,
      onStart: onAnimationStart,
      onCancel: onAnimationCancel,
    } = this.props;

    const styleObject = {
      class: "elf--animation",
      style: propertyMap(
        {
          ...style,
          duration,
          name,
          iterationCount,
          timingFunction,
          delay,
        },
        cssProperties
      ),
      onAnimationStart,
      onAnimationEnd,
      onAnimationIteration,
      onAnimationCancel,
    };

    return <div {...styleObject}>{content}</div>;
  }
}

[
  "spin",
  "ping",
  "fade",
  "scaledown",
  "bounce",
  "flash",
  "pulse",
  "rubberBand",
  "shake",
  "headShake",
  "swing",
  "tada",
  "wobble",
  "jello",
  "heartBeat",
].forEach((name) => {
  Animation[name] = (props) => {
    return <Animation {...props} name={name} />;
  };
});

registerComponent("animation", Animation);
registerComponent("Animation", Animation);
