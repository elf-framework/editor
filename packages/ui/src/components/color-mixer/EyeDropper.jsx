import { isFunction } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { IconButton } from "../button/IconButton";

export function EyeDropper(props) {
  return (
    <div class="eye-dropper">
      <IconButton
        // size="large"
        shape="rect"
        quiet
        style={{
          color: "var(--color-gray-9)",
        }}
        onClick={async () => {
          const eyeDropper = new window.EyeDropper();

          try {
            const result = await eyeDropper.open();

            isFunction(props.onChange) && props.onChange(result.sRGBHex);
          } catch (e) {
            console.warn(e);
          }
        }}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4473 0.6C12.6473 -0.2 11.4473 -0.2 10.6473 0.6L7.84725 3.4L7.04725 2.7C6.64725 2.3 6.04725 2.3 5.64725 2.7C5.24725 3.1 5.24725 3.7 5.64725 4.1L6.34725 4.8L0.547255 10.6C0.147255 11 -0.452745 12.5 0.547255 13.5C1.54725 14.5 3.04725 13.9 3.44725 13.5L9.24725 7.7L9.94725 8.4C10.3473 8.8 10.9473 8.8 11.3473 8.4C11.7473 8 11.7473 7.4 11.3473 7L10.6473 6.3L13.4473 3.5C14.2473 2.6 14.2473 1.4 13.4473 0.6ZM2.54725 12.5H1.54725V11.5L7.34725 5.7L8.34725 6.7C8.24725 6.7 2.54725 12.5 2.54725 12.5Z"
            fill="currentColor"
          />
        </svg>
      </IconButton>
    </div>
  );
}

registerComponent("eye-dropper", EyeDropper);
registerComponent("eyedropper", EyeDropper);
registerComponent("EyeDropper", EyeDropper);
