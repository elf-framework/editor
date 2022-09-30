import { UIElement } from "@elf-framework/sapa";
import type { ContentType } from "@elf-framework/ui";

interface PageBoardProps {
  Page: ContentType;
  filename: string;
  layout: string;
}
export class PageBoard extends UIElement {
  props: PageBoardProps;
}
