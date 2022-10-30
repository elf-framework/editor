import { Button } from "../../button";
import "./ButtonItem.scss";

export function ButtonItem({ style, item }) {
  const { onClick, justified, iconOnly, shape, variant, title } = item;
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
      {title}
    </Button>
  );
}
