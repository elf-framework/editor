import { start, useState } from "@elf-framework/sapa";
import { Button, ButtonGroup } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

start(function () {
  const [selectedValue, setSelectedValue] = useState(0);

  return (
    <div>
      <div>
        <h1>Button Group</h1>
        <ButtonGroup>
          <Button
            type="primary"
            selected={selectedValue === 1}
            onClick={() => {
              console.log("1");
              setSelectedValue(1);
            }}
          >
            1
          </Button>
          <Button
            type="primary"
            selected={selectedValue === 2}
            onClick={() => setSelectedValue(2)}
          >
            2
          </Button>
          <Button
            type="primary"
            selected={selectedValue === 3}
            onClick={() => setSelectedValue(3)}
          >
            3
          </Button>
          <Button
            type="primary"
            selected={selectedValue === 4}
            onClick={() => setSelectedValue(4)}
          >
            4
          </Button>
        </ButtonGroup>
        &nbsp;
        <ButtonGroup>
          <Button selected={true}>1</Button>
          <Button>1</Button>
          <Button selected={true}>1</Button>
          <Button>1</Button>
        </ButtonGroup>
      </div>
    </div>
  );
});
