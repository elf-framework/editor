import AddFilled from "@elf-framework/icon/esm/AddFilled";
import { start, SUBSCRIBE, UIElement } from "@elf-framework/sapa";
import { DataEditor, View } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

class Sample extends UIElement {
  template() {
    return <div>sample</div>;
  }

  [SUBSCRIBE("config:select.change")]() {
    console.log("config:select.change");
  }
}

function App() {
  this.useSubscribe("refreshIcon", () => {
    console.log("refreshIcon");
  });

  return (
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
  );
}

start(
  <div>
    <App />
  </div>
);
