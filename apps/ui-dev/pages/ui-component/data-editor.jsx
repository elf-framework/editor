import AddFilled from "@elf-framework/icon/AddFilled";
import { start, SUBSCRIBE, UIElement, useSubscribe } from "@elf-framework/sapa";
import { DataEditor, View } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { UILayout } from "../../layouts/UILayout";

class Sample extends UIElement {
  template() {
    return <div>sample</div>;
  }

  [SUBSCRIBE("config:select.change")]() {
    console.log("config:select.change");
  }
}

function App() {
  useSubscribe("refreshIcon", () => {
    console.log("refreshIcon");
  });

  return (
    <UILayout>
      <View width={300}>
        <DataEditor
          data={() => ({
            title: "Data Editor",
          })}
          items={(data, root) => {
            return [
              {
                type: "button",
                title: "Add",
                icon: <AddFilled />,
                onClick: () => {
                  this.emit("config:select.change");
                  console.log("Button clicked");
                },
              },
              {
                type: "color",
                key: "color",
                value: "#ff0000",
              },
            ];
          }}
        />
        <Sample />
      </View>
    </UILayout>
  );
}

start(App);
