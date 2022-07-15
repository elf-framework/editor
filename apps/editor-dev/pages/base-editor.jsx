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
        plugins={[function (editor) {}]}
      >
        <SampleConfig value="Hello World" />
        <HelloWorldPlugin />
        <SamplePlugin />
        
      </BaseEditor>
    </div>
  );
});
