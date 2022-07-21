import { BaseEditor } from "@elf-framework/base-editor";
import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

start(function () {
  return (
    <div>
      <BaseEditor
        editorClass={{
          "my-editor": true,
        }}
        fullscreen={true}
        config={{
          "sample.text": "Hello World",
        }}
        plugins={[
          function (editor) {
            editor.registerCommand("sample.text", {
              exec: function (editor, args) {
                console.log(args);
              },
            });

            editor.addButton("sample.text", {
              label: "Sample",
              command: "sample.text",
            });

            editor.addMenuItem("sample.text", {
              label: "Sample",
              command: "sample.text",
              icon: "sample",
            });

            editor.addContextMenuGroup("sample.text", {
              label: "Sample",
              icon: "sample",
            });

            editor.addContextMenuItem("sample.text", {
              label: "Sample",
              command: "sample.text",
              icon: "sample",
            });

            editor.addContextMenu("sample.text", {
              label: "Sample",
              command: "sample.text",
              icon: "sample",
            });
          },
          function (editor) {
            editor.registerShortCut("sample.text", "Ctrl+Shift+S", function () {
              console.log("Sample");
            });

            editor.command("sample.text");

            editor.registerInspector("sample.text", {
              label: "Sample",
              icon: "sample",
              render: function (editor, args) {
                console.log(args);
              },
            });
          },
        ]}
      >
        <SampleConfig value="Hello World" />
        <HelloWorldPlugin />
        <SamplePlugin />
      </BaseEditor>
    </div>
  );
});
