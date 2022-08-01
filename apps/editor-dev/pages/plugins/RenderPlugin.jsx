import { AppLayout, AppLayoutItem } from "@elf-framework/ui";

export async function RenderPlugin(editor) {
  editor.registerGroupUI("renderView", {
    renderView: () => (
      <AppLayout>
        <AppLayoutItem direction="top" height={"auto"}>
          {editor.getUIList("Toolbar")}
        </AppLayoutItem>
        <AppLayoutItem
          direction="left"
          width={280}
          minWidth={280}
          maxWidth={350}
          resizable={true}
        >
          {editor.getUIList("left-panel")}
        </AppLayoutItem>
        <AppLayoutItem direction="right" width={300}>
          {editor.getUIList("right-panel")}
        </AppLayoutItem>
        <AppLayoutItem direction="center">
          {editor.getUIList("center-panel")}
        </AppLayoutItem>
      </AppLayout>
    ),
    tooltipView: () => undefined,
  });
}
