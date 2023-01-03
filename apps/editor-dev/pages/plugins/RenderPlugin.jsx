import { useEditor } from "@elf-framework/base-editor";
import { useComponentRender } from "@elf-framework/sapa";
import { AppLayout, AppLayoutItem } from "@elf-framework/ui";

function ApplicationLayout() {
  const editor = useEditor();

  useComponentRender("config:editor.layout.show.left");
  useComponentRender("config:editor.layout.show.right");
  useComponentRender("config:editor.layout.show.top");
  useComponentRender("config:editor.layout.show.bottom");

  const isShowTop = editor.configs.get("editor.layout.show.top");
  const isShowLeft = editor.configs.get("editor.layout.show.left");
  const isShowRight = editor.configs.get("editor.layout.show.right");
  // const isShowBottom = editor.configs.get("editor.layout.show.bottom");

  return (
    <AppLayout>
      <AppLayoutItem direction="top" height={isShowTop ? "auto" : 0}>
        {editor.getUIList("Toolbar")}
      </AppLayoutItem>
      <AppLayoutItem
        direction="left"
        width={isShowLeft ? 280 : 0}
        maxWidth={350}
        resizable={true}
        style={{
          overflow: "hidden",
        }}
      >
        {editor.getUIList("left-panel")}
      </AppLayoutItem>
      <AppLayoutItem direction="right" width={isShowRight ? 300 : 0}>
        {editor.getUIList("right-panel")}
      </AppLayoutItem>
      <AppLayoutItem direction="center">
        {editor.getUIList("center-panel")}
      </AppLayoutItem>
    </AppLayout>
  );
}

export async function RenderPlugin(editor) {
  editor.registerGroupUI("renderView", {
    renderView: <ApplicationLayout />,
    tooltipView: () => undefined,
  });
}
