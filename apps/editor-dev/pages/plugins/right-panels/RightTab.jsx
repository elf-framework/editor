import { PropertyEditor } from "@elf-framework/ui";

export function RightTab() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        overflow: "auto",
      }}
    >
      <PropertyEditor
        // direction="vertical"
        value={{
          name: "John",
          lastName: "Doe",
          age: 20,
          gender: "male",
          background: "yellow",
          active: false,
        }}
        style={{
          itemLabelWidth: "100px",
          gap: 5,
        }}
        sync
        inspector={(value) => {
          return [
            {
              type: "label",
              label: value.active ? "active" : "inactive",
            },
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
              onChange: (color) => {
                console.log("property editor", color);
              },
            },
            {
              type: "button",
              label: "Button",
              justified: true,
              variant: "primary",
              title: "Click",
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
          // console.log(key, value, editor.getValue());
        }}
      />
    </div>
  );
}
