import { registerComponent } from "../../utils/component";
import { BaseSlide } from "./BaseSlide";

export function OpacitySlide({ value, onChange }) {
  return (
    <BaseSlide
      value={value}
      containerClass="opacity-slide"
      slideClass="opacity-slide-bg"
      onChange={onChange}
    />
  );
}

registerComponent("OpacitySlide", OpacitySlide);
registerComponent("opacity-slide", OpacitySlide);
registerComponent("opacityslide", OpacitySlide);
