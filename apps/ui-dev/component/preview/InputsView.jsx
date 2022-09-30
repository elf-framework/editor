import AddChartFilled from "@elf-framework/icon/AddChartFilled";
import {
  Checkbox,
  CheckboxGroup,
  ColorMixer,
  Field,
  Grid,
  HelpText,
  OptionMenu,
  RadioGroup,
  Slider,
  Switch,
  TextArea,
  TextField,
} from "@elf-framework/ui";

import { PreviewItem } from "./PreviewItem";

export function InputsView() {
  return (
    <div>
      <Grid columns={3} rows={[100, "minmax(100px, auto)"]} style={{ gap: 10 }}>
        <PreviewItem
          title={"Checkbox"}
          link={"/pages/design-system/components/inputs/checkbox/"}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              fontSize: 20,
              justifyContent: "flex-start",
            }}
          >
            <em style={{ color: "var(--color-gray-5)" }}>Interests</em>
            <Checkbox checked={true}>Illustration</Checkbox>

            <Checkbox checked={true}>Photo</Checkbox>

            <Checkbox indeterminate checked={true}>
              UI/UX Design
            </Checkbox>
          </div>
        </PreviewItem>

        <PreviewItem
          title={"Checkbox Group"}
          link={"/pages/design-system/components/inputs/checkbox-group/"}
        >
          <CheckboxGroup
            direction="vertical"
            value={[10]}
            options={[
              { value: 10, label: "Travel" },
              { value: 20, label: "Music" },
              { value: 30, label: "Shopping" },
            ]}
            onChange={(e, values) => console.log(values)}
          />
        </PreviewItem>
        <PreviewItem
          title={"Option Menu"}
          link={"/pages/design-system/components/inputs/option-menu/"}
        >
          <OptionMenu
            icon={<AddChartFilled />}
            items={[
              {
                type: "item",
                title: "Hello",
                shortcut: "⌃⌥⇧⌘A",
                onClick: (e, item) => {
                  console.log(item.selected);
                },
              },
              {
                type: "divider",
                dashed: true,
              },
              { type: "group", title: "Group" },
              {
                type: "item",
                title: "Menu Item",
                shortcut: "⌃⌥⇧⌘A",
              },
              { type: "divider" },
              { type: "group", title: "Section Title" },
              {
                type: "item",
                title: "Menu Item",
                items: [
                  { type: "item", title: "Hello", shortcut: "⌃⌥⇧⌘A" },
                  {
                    type: "divider",
                    dashed: true,
                  },
                  { type: "group", title: "Group" },
                  {
                    type: "item",
                    title: "Menu Item",
                    shortcut: "⌃⌥⇧⌘A",
                    onClick: (e, item) => {
                      console.log(e, item);
                    },
                  },
                ],
              },
            ]}
          >
            text overflow
          </OptionMenu>
        </PreviewItem>
        <PreviewItem
          title={"Radio Group"}
          link={"/pages/design-system/components/inputs/radio/"}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              fontSize: 13,
            }}
          >
            <em style={{ color: "var(--color-gray-5)" }}>Size *</em>
            <RadioGroup
              direction="vertical"
              value={10}
              options={[
                { value: 10, label: "Small" },
                { value: 20, label: "Medium" },
                { value: 30, label: "Large" },
              ]}
              onChange={(e, values) => console.log(values)}
            />
            <HelpText>Select a product size</HelpText>
          </div>
        </PreviewItem>
        <PreviewItem
          title={"Field label"}
          link={"/pages/design-system/components/inputs/field/"}
        >
          <Field label="Email address(label)">This is content</Field>
        </PreviewItem>
        <PreviewItem
          title={"Help text"}
          link={"/pages/design-system/components/inputs/help-text/"}
        >
          <HelpText>Select a product size</HelpText>
          <HelpText size="large">Select a product size</HelpText>
        </PreviewItem>
      </Grid>
      &nbsp;
      <Grid columns={3} rows={2} style={{ gap: 10 }}>
        <PreviewItem
          title={"Color Area"}
          style={{
            gridRow: "span 2",
          }}
          link={"/pages/design-system/components/inputs/colorarea/"}
        >
          <ColorMixer color="red" shadow />
        </PreviewItem>
        <PreviewItem
          title={"Slider"}
          link={"/pages/design-system/components/inputs/slider/"}
        >
          <Slider
            min={0}
            max={10000}
            step={20}
            value={2000}
            valuePlacement="top"
            showValue
            // eslint-disable-next-line no-undef
            valueFunc={(v) => new Intl.NumberFormat().format(v)}
          />
        </PreviewItem>
        <PreviewItem
          title={"Switch"}
          link={"/pages/design-system/components/inputs/switch/"}
        >
          <Switch
            variant="success"
            checked
            onClick={(e) => {
              console.log(e.target.checked ? "checked" : "unchecked");
            }}
          >
            Available offline
          </Switch>
        </PreviewItem>
        <PreviewItem
          title={"Text field"}
          link={"/pages/design-system/components/inputs/textfield/"}
        >
          <TextField
            label={"Title"}
            optional={true}
            help={<HelpText>Designer, lawyer, etc</HelpText>}
          />
        </PreviewItem>
        <PreviewItem
          title={"Text area"}
          link={"/pages/design-system/components/inputs/textarea/"}
        >
          <TextArea
            label={"Description"}
            value={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
            rows={7}
          />
        </PreviewItem>
      </Grid>
    </div>
  );
}
