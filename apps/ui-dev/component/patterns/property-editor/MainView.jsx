import { format, parse } from "@elf-framework/color";
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
          maxWidth: 500,
          padding: [20, 100],
          textAlign: "center",
        }}
      >
        <PropertyEditor
          // direction="vertical"
          value={{
            name: "John",
            lastName: "Doe",
            age: 20,
            gender: "male",
            background: {
              r: 255,
              g: 255,
              b: 0,
              a: 1,
            },
            active: false,
            translate: [0, 0, 0],
          }}
          sync
          inspector={(value) => {
            return [
              {
                type: "grid",
                label: " ",
                columns: 3,
                style: {
                  textAlign: "center",
                },
                items: ["x", "y", "z"],
              },
              {
                type: "number",
                step: 0.01,
                key: "translate.0",
                label: "Translate",
                onChange: (value) => {
                  console.log(value);
                },
              },
              "-",

              value.active ? "active" : "inactive",

              "*",
              "--",
              "=",
              "==",
              "===",
              {
                type: "switch",
                variant: "toggle",
                key: "active",
                label: "Active",
              },
              {
                type: "slider",
                key: "age",
                label: "Age",
                min: 0,
                max: 100,
                fitted: true,
              },
              {
                type: "color",
                label: "Background",
                key: "background",
                value: (v) => format(v.background, "hex"),
                valueType: "valueByObject",
                valueFunc: (v) => {
                  console.log(v);
                  const newValue = parse(v);

                  console.log("parsed", newValue);

                  return {
                    background: newValue,
                  };
                },
                onChange: (color) => {
                  console.log("property editor", color);
                },
                onClickColorView: (e, color) => {
                  console.log(color);
                },
              },
              {
                type: "button",
                label: "Button",
                title: "Button",
                justified: true,
                variant: "primary",
                onClick: () => {
                  console.log("click");
                },
              },
              {
                type: "select",
                label: "Select",
                key: "gender",
                options: [
                  {
                    label: "Male",
                    value: "male",
                  },
                  {
                    label: "Female",
                    value: "female",
                  },
                ],
              },
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
              {
                key: "age",
                type: "number",
                label: "Age",
                min: 10,
                max: 100,
                onChange: (value) => {
                  console.log("inner change", value);
                },
              },
              {
                type: "tab",
                activeKey: 1,
                stripType: "group",
                fitted: true,
                compact: true,
                items: [
                  {
                    label: "Tab 1",
                    key: 1,
                    items: [
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
                    ],
                  },
                  {
                    label: "Tab 2",
                    key: 2,
                    items: [
                      {
                        key: "age",
                        type: "number",
                        label: "Age",
                        min: 10,
                        max: 100,
                        onChange: (value) => {
                          console.log("inner change", value);
                        },
                      },
                    ],
                  },
                ],
              },
              {
                label: "Actions",
                type: "grid",
                columns: 2,
                gap: 4,
                items: [
                  {
                    key: "name",
                    label: "Name",
                    type: "text",
                    onChange: (value) => {
                      console.log("grid, inner change", value);
                    },
                  },
                  {
                    key: "lastName",
                    label: "Last name",
                    type: "text",
                    onChange: (value) => {
                      console.log("grid, inner change", value);
                    },
                  },
                ],
              },
            ];
          }}
          onChange={(key, value, editor) => {
            console.log(key, value, editor.getValue());
          }}
        />
      </div>
    </div>
  );
}
