import { UIElement } from "@elf-framework/sapa";

interface DiagramProps {
  graph: string;
  diagram: string;
}

export class Diagram extends UIElement {
  props: DiagramProps;
}
