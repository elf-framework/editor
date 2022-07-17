import AddFilled from "@elf-framework/icon/esm/AddFilled";
import { start } from "@elf-framework/sapa";
import { DataEditor, View } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

function App() {
  return (
    <View width={300}>
      <DataEditor
        data={() => ({
          title: "Data Editor",
        })}
        items={(data, root) => {
          return [
            {
              type: "color",
              key: "color",
              value: "#ff0000",
              autoFocus: true,
              onClick: () => {
                console.log("Button clicked");
              },
            },
          ];
        }}
      />
    </View>
  );
}

start(
  <div>
    <App />
  </div>
);
