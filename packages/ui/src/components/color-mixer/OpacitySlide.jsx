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
