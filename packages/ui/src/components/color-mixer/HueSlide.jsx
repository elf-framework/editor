import { BaseSlide } from "./BaseSlide";

export function HueSlide({ value, onChange }) {
  return (
    <BaseSlide
      value={value}
      containerClass="hue-slide"
      slideClass="hue-slide-bg"
      onChange={onChange}
    />
  );
}
