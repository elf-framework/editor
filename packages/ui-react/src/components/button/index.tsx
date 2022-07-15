import classNames from "classnames";

import { propertyMap } from "../../utils/propertyMap";

const cssProperties = {
  borderColor: "--elf--button-border-color",
  backgroundColor: "--elf--button-background",
  disabledColor: "--elf--button-disabled-color",
  color: "--elf--button-color",
  fontSize: "--elf--button-font-size",
  fontWeight: "--elf--button-font-weight",
  height: "--elf--button-height",
  padding: "--elf--button-padding",
  borderRadius: "--elf--button-border-radius",
};

interface ButtonProps {
  type: "primary" | "secondary" | "outline";
  size?: "large" | "small" | "md";
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  shape?: "round" | "circle";
  destructive?: string;
}
export function Button(props: ButtonProps) {
  const {
    type,
    size,
    disabled,
    shape,
    destructive = false,
    style = {},
    onClick,
    children,
  } = props;

  const styleObject = {
    className: classNames([
      "elf--button",
      {
        primary: type === "primary",
        secondary: type === "secondary",
        outline: type === "outline",
      },
      destructive ? "destructive" : "",
      {
        "elf--button-lg": size === "large",
        "elf--button-sm": size === "small",
      },
      {
        "elf--button-shape-circle": shape === "circle",
        "elf--button-shape-round": shape === "round",
      },
    ]),
    disabled,
    style: {
      ...propertyMap(style, cssProperties),
    },
  };

  return (
    <button type="button" {...styleObject} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
}
