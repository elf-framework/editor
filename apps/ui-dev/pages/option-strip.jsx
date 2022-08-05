import AddChartFilled from "@elf-framework/icon/esm/AddChartFilled";
import { start } from "@elf-framework/sapa";
import { OptionStrip } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { Layout } from "../component/Layout";

start(function () {
  return (
    <Layout>
      <div>
        <div>
          <h2>Option Strip</h2>
          <OptionStrip
            options={[
              { value: "a", icon: <AddChartFilled /> },
              { value: "b", icon: <AddChartFilled /> },
              { value: "c", icon: <AddChartFilled /> },
              { value: "d", icon: <AddChartFilled /> },
            ]}
            onChange={(value) =>
              this.setState({
                selectedValue: value,
              })
            }
            selectedValue={this.state.selectedValue}
          />
        </div>
        <div>
          <h2>Option Strip with disabled</h2>
          <OptionStrip
            options={[
              { value: "a", icon: <AddChartFilled /> },
              { value: "b", icon: <AddChartFilled /> },
              { value: "c", icon: <AddChartFilled /> },
              { value: "d", icon: <AddChartFilled /> },
            ]}
            disabled
          />
        </div>
      </div>
    </Layout>
  );
});
