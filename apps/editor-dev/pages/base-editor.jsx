import {
  BaseEditor,
  useCommand,
  useConfig,
  useEditor,
  useSetConfig,
} from "@elf-framework/base-editor";
import { start, useSubscribe } from "@elf-framework/sapa";
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
  useSubscribe("config:yellow", (value) => {
    // console.log(value);
    console.log(useConfig("yellow"));
  });

  return (
    <div>
      <BaseEditor
        plugins={[
          async function (editor) {
            editor.registerConfig({
              key: "yellow",
              defaultValue: "yellow",
              title: "Yellow Title",
              description: "Description Yellow",
              type: "string",
            });

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
                return (
                  <button
                    type="button"
                    onClick={async () => {
                      const ret = await useCommand("my-command");

                      console.log("return", ret);

                      useSetConfig("yellow", "red" + Math.random());
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
