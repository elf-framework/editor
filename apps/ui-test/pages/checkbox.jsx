import { start } from "@elf-framework/sapa";
import { Checkbox } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

start(function () {
  return (
    <div>
      <div>
        <h1>Checkbox</h1>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <Checkbox name="checkbox1" value={10} checked={this.state.value === 10}>10</Checkbox>
          <Checkbox name="checkbox2" value={20} checked={this.state.value === 20}>20</Checkbox>
        </div>                  
      </div>          
    </div>
  );
});
