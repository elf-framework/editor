import { start } from "@elf-framework/sapa";
import { Radio, RadioGroup } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { Layout } from "../../component/Layout";

start(function () {
  // this.state.value = 10;

  const a = (value) => {
    this.setState({
      value,
    });
  };

  return (
    <Layout>
      <div>
        <h1>Radio</h1>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <Radio
            name="radio"
            value={10}
            checked={this.state.value === 10}
            onChange={() => a(10)}
            disabled={true}
          >
            10
          </Radio>
          <Radio
            name="radio"
            value={20}
            checked={this.state.value === 20}
            onChange={() => a(20)}
          >
            20
          </Radio>
          <Radio
            name="radio"
            value={30}
            checked={this.state.value === 30}
            onChange={() => a(30)}
          >
            30
          </Radio>
          <Radio
            name="radio"
            value={40}
            checked={this.state.value === 40}
            onChange={() => a(40)}
          >
            40
          </Radio>
        </div>
      </div>
      <div>
        <h1>Radio Group</h1>
        <div>
          <RadioGroup
            name="radioGroup"
            value={this.state.value}
            onChange={(e, value) => a(value)}
          >
            <Radio value={10}>10</Radio>
            <Radio value={20}>20</Radio>
            <Radio value={30}>30</Radio>
            <Radio value={40}>40</Radio>
          </RadioGroup>
        </div>
      </div>
      <div>
        <h1>Radio</h1>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <Radio
            name="radio1"
            value={10}
            checked={this.state.value === 10}
            onChange={() => a(10)}
          >
            10
          </Radio>
          <Radio
            name="radio2"
            value={20}
            checked={this.state.value === 20}
            onChange={() => a(20)}
          >
            20
          </Radio>
          <Radio
            name="radio3"
            value={30}
            checked={this.state.value === 30}
            onChange={() => a(30)}
          >
            30
          </Radio>
          <Radio
            name="radio4"
            value={40}
            checked={this.state.value === 40}
            onChange={() => a(40)}
          >
            40
          </Radio>
        </div>
      </div>
      <div>
        <h1>Radio Group</h1>
        <div>
          <RadioGroup
            name="radioGroup2"
            value={this.state.value}
            onChange={(e, value) => a(value)}
          >
            <Radio value={10}>10</Radio>
            <Radio value={20}>20</Radio>
            <Radio value={30}>30</Radio>
            <Radio value={40}>40</Radio>
          </RadioGroup>
        </div>
      </div>
    </Layout>
  );
});
