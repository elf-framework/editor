import AddChartFilled from "@elf-framework/icon/esm/AddChartFilled";
import { start } from "@elf-framework/sapa";
import { InputEditor, TextAreaEditor } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { UILayout } from "../../layouts/UILayout";

start(function () {
  return (
    <UILayout>
      <div
        style={{
          padding: 50,
          height: "calc(100vh - 120px)",
          backgroundColor: "#f5f5f5",
        }}
      >
        <div style="display: grid; grid-template-columns: 300px 1fr 1fr;column-gap: 30px;">
          <div>
            <h1>Input Editor</h1>
            <div style="display: flex; flex-direction: column; row-gap: 30px;">
              <div>
                <h3>Text</h3>
                <InputEditor value={this.state.value} />
              </div>
              <div>
                <h3>Placeholder</h3>
                <InputEditor
                  value={this.state.value}
                  placeholder="Value,...."
                />
              </div>
              <div>
                <h3>Number</h3>
                <InputEditor
                  type="number"
                  value={"11123213213"}
                  hover={true}
                  onSelect={() => console.log("selected")}
                />
              </div>
              <div>
                <h3>Password</h3>
                <InputEditor type="password" value={"abc"} autoFocus={true} />
              </div>
              <div>
                <h3>Disabled</h3>
                <InputEditor value={"Talk to me"} disabled={true} />
              </div>
              <div>
                <InputEditor
                  type="textarea"
                  focus={true}
                  onBlur={(_, item) => console.log(item.value)}
                />
              </div>
            </div>
          </div>

          <div>
            <h1>Input Editor</h1>
            <div style="display: flex; flex-direction: column; row-gap: 30px;">
              <div>
                <h3>Text with icon</h3>
                <InputEditor
                  value={this.state.value}
                  icon={<AddChartFilled />}
                />
              </div>
              <div>
                <h3>Multi line</h3>
                <TextAreaEditor
                  value={`
Hellow world,
I am a text area,
I am a text area,
I am a text area,
I am a text area,
              `.trim()}
                  style={{ height: 300 }}
                />
              </div>
            </div>
          </div>

          <div>
            <h1>Input Editor</h1>
          </div>
        </div>
      </div>
    </UILayout>
  );
});
