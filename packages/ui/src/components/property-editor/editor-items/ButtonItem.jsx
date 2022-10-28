import { Button } from "../../button";
import "./ButtonItem.scss";

export function ButtonItem({ label, style, item }) {
  const { onClick, justified, iconOnly, shape, variant } = item;
  return (
    <Button
      onClick={onClick}
      style={{
        ...style,
        height: 26,
      }}
      justified={justified}
      iconOnly={iconOnly}
      shape={shape}
      variant={variant}
    >
      {label}
    </Button>
  );
}
