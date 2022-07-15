declare module "@elf-framework/sapa-router" {
  import { UIElement } from "@elf-framework/sapa";
  import type { VNode } from "@elf-framework/sapa";

  export interface RouterProps {
    target: string;
    forceUpdate: boolean;
    content: VNode | VNode[];
  }

  export class Router extends UIElement {
    props: RouterProps;
  }

  export interface SwitchProps {
    content: VNode | VNode[];
  }

  export class Switch extends UIElement {
    props: SwitchProps;
  }

  export interface RouteProps {
    content: VNode | VNode[];
  }

  export class Route extends UIElement {
    props: RouteProps;
  }
}
