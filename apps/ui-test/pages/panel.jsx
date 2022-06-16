import { start } from "@elf/sapa";
import "@elf/ui/style.css";
import { Button, Panel } from "@elf/ui";
import { iconUse } from "@elf/icon";

start(() => {

  return (
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width:100vw;height:100vh;background-color: #f5f5f5">

      <Panel title={<Button>fdsafds</Button>} tools={[
        <Button>{iconUse("close")}</Button>,
      ]} footer={
        <Button>Panel</Button>  
      } style={
        {
          width: 300
        }
      }>
         This is a panel.
      </Panel>
      <div>&nbsp;</div>
      <Panel title={"sample"} tools={[
        <Button>{iconUse("close")}</Button>,
      ]} footer={
        <Button>Panel</Button>  
      } mode="stroke" style={
        {
          width: 300
        }
      }>
         This is a panel.
      </Panel>
      <div>&nbsp;</div>
      <Panel title={"sample"} tools={[
        <Button>{iconUse("close")}</Button>,
      ]} footer={
        <Button>Panel</Button>  
      } mode="stroke" style={
        {
          width: 300
        }
      }>
         This is a panel.
      </Panel>      

    </div>
  );
});
