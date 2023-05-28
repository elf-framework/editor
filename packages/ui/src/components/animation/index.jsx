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
  playState: true,
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
      play = false,
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
          playState: play ? "running" : "paused",
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

Animation.spin = function (props) {
  return <Animation {...props} name="spin" />;
};
Animation.ping = function (props) {
  return <Animation {...props} name="ping" />;
};
Animation.fade = function (props) {
  return <Animation {...props} name="fade" />;
};
Animation.scaledown = function (props) {
  return <Animation {...props} name="scaledown" />;
};
Animation.bounce = function (props) {
  return <Animation {...props} name="bounce" />;
};
Animation.flash = function (props) {
  return <Animation {...props} name="flash" />;
};
Animation.pulse = function (props) {
  return <Animation {...props} name="pulse" />;
};
Animation.rubberBand = function (props) {
  return <Animation {...props} name="rubberBand" />;
};
Animation.shake = function (props) {
  return <Animation {...props} name="shake" />;
};
Animation.headShake = function (props) {
  return <Animation {...props} name="headShake" />;
};
Animation.swing = function (props) {
  return <Animation {...props} name="swing" />;
};
Animation.tada = function (props) {
  return <Animation {...props} name="tada" />;
};
Animation.wobble = function (props) {
  return <Animation {...props} name="wobble" />;
};
Animation.jello = function (props) {
  return <Animation {...props} name="jello" />;
};
Animation.heartBeat = function (props) {
  return <Animation {...props} name="heartBeat" />;
};

registerComponent("animation", Animation);
registerComponent("Animation", Animation);
