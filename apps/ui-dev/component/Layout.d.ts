import { UIElement } from "@elf-framework/sapa";

interface LayoutProps {
  maxWidth: number | string;
  width: number | string;
}

export class Layout extends UIElement {
  props: LayoutProps;
}
