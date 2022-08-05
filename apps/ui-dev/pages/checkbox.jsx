import { start } from "@elf-framework/sapa";
import { Checkbox, CheckboxGroup } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { Layout } from "../component/Layout";

start(function () {
  return (
    <Layout>
      <div>
        <h1>Checkbox</h1>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <Checkbox
            name="checkbox1"
            value={10}
            checked={this.state.value === 10}
          >
            10
          </Checkbox>
          <Checkbox
            name="checkbox2"
            value={20}
            checked={this.state.value === 20}
          >
            20
          </Checkbox>
        </div>
      </div>
      <div>
        <h1>Checkbox Group</h1>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <CheckboxGroup
            value={[20, 30]}
            options={[
              { value: 10, label: "10" },
              { value: 20, label: "20" },
              { value: 30, label: "30" },
              { value: 40, label: "40" },
            ]}
            onChange={(e, values) => console.log(values)}
          />
        </div>
      </div>
    </Layout>
  );
});
