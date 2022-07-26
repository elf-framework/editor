import {
  BaseEditor,
  InjectView,
  useCommand,
  useSetConfig,
} from "@elf-framework/base-editor";
import { start } from "@elf-framework/sapa";
import { AppLayout, AppLayoutItem } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

start(function () {
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

            editor.registerGroupUI("right-panel", {
              view: () => {
                return (
                  <div>
                    <button
                      type="button"
                      onClick={async () => {
                        const ret = await useCommand("my-command");

                        console.log("return", ret);
                      }}
                    >
                      Sample
                    </button>
                  </div>
                );
              },
            });
          },
        ]}
      >
        <AppLayout>
          <AppLayoutItem direction="top" height={40}>
            <InjectView views={["top-panel"]} />
          </AppLayoutItem>
          <AppLayoutItem
            direction="left"
            width={280}
            maxWidth={350}
            resizable={true}
          >
            <InjectView views={["left-panel"]} />
          </AppLayoutItem>
          <AppLayoutItem direction="right" width={300}>
            <InjectView groups={["right-panel"]} />
          </AppLayoutItem>
          <AppLayoutItem direction="center">
            <InjectView views={["center-panel"]} />
          </AppLayoutItem>
        </AppLayout>
      </BaseEditor>
    </div>
  );
});
