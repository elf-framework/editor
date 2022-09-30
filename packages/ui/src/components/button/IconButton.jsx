import { registerComponent } from "../../utils/component";
import { RoundButton } from "./RoundButton";

export function IconButton({ content, ...props }) {
  return (
    <RoundButton {...props} iconOnly={true}>
      {content}
    </RoundButton>
  );
}

registerComponent("icon-button", IconButton);
registerComponent("iconbutton", IconButton);
registerComponent("IconButton", IconButton);
