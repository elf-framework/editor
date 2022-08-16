import { UIElement } from "@elf-framework/sapa";

interface LayoutProps {
  maxWidth: number | string;
  width: number | string;
  title: string;
  version: string;
  menu: any[];
}

export class Layout extends UIElement {
  props: LayoutProps;
}
