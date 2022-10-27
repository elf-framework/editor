import { PropertyEditor } from "@elf-framework/ui";

export function MainView() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-gray-0)",
        padding: [20, 2, 10],
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          gap: 30,
          maxWidth: 900,
          padding: [20, 100],
          textAlign: "center",
        }}
      >
        <PropertyEditor
          value={{
            name: "John",
            lastName: "Doe",
          }}
          inspector={[
            {
              key: "name",
              label: "Name",
              type: "text",
              onChange: (value, item, editor) => {
                console.log("inner change", value, editor.getValue());
              },
            },
            {
              key: "lastName",
              label: "Last name",
              type: "text",
              onChange: (value) => {
                console.log("inner change", value);
              },
            },
          ]}
          onChange={(key, value, editor) => {
            console.log(key, value, editor.getValue());
          }}
        />
      </div>
    </div>
  );
}
