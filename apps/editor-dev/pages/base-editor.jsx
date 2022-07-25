import { BaseEditor, useEditor } from "@elf-framework/base-editor";
import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

function InjectView({ components }) {
  const editor = useEditor();
  return (
    <div>
      injectView ,{" "}
      {components.map((c) => {
        const View = editor.getUI(c);

        return <View />;
      })}
    </div>
  );
}

function SplitLayoutItem({ direction, content }) {
  return (
    <div
      class="split-layout-item"
      direction={direction}
      style={{ backgroundColor: "yellow" }}
    >
      {content}
    </div>
  );
}

function SplitLayout({ content }) {
  return <div class="split-layout">{content}</div>;
}

start(function () {
  return (
    <div>
      <BaseEditor
        editorClass={{
          "my-editor": true,
        }}
        fullscreen={true}
        plugins={[
          async function (editor) {
            editor.registerCommand({
              command: "my-command",
              title: "My Command",
              execute: async () => {
                return 10;
              },
            });
          },

          function (editor) {
            editor.registerUI({
              view: () => {
                const editor = useEditor();
                return (
                  <button
                    type="button"
                    onClick={async () => {
                      const ret = await editor.commands.emit("my-command");

                      console.log("return", ret);
                    }}
                  >
                    Sample
                  </button>
                );
              },
            });
          },
        ]}
      >
        <SplitLayout>
          <SplitLayoutItem direction="top">
            <h1>Header</h1>
          </SplitLayoutItem>
          <SplitLayoutItem direction="left">
            <h1>Left</h1>
            <InjectView key="" components={["view"]} />
          </SplitLayoutItem>
          <SplitLayoutItem direction="body">
            <h1>Body</h1>
          </SplitLayoutItem>
          <SplitLayoutItem direction="right">
            <h1>Right</h1>
          </SplitLayoutItem>
          <SplitLayoutItem direction="bottom">
            <h1>Bottom</h1>
          </SplitLayoutItem>
        </SplitLayout>
      </BaseEditor>
    </div>
  );
});
