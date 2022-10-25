import AddCardFilled from "@elf-framework/icon/AddCardFilled";
import FolderFilled from "@elf-framework/icon/FolderFilled";
import GridViewFilled from "@elf-framework/icon/GridViewFilled";
import HelpFilled from "@elf-framework/icon/HelpFilled";
import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { Button, Flex, VBox } from "@elf-framework/ui";

function MenuItem({ icon, label, selected = false }) {
  const selectedOptions = selected
    ? {
        backgroundColor: "var(--color-gray-2)",
      }
    : {};

  return (
    <Flex
      class="item"
      style={{
        width: 240,
        alignItems: "center",
        gap: 10,
        ...selectedOptions,
        padding: "4px 10px",
        borderRadius: 4,
      }}
    >
      <span
        style={{
          display: "flex",
          flex: "none",
          alignItems: "center",
          justifyContent: "center",
          width: 20,
          height: 20,
          backgroundColor: "var(--color-pink-3)",
        }}
      >
        {icon}
      </span>
      <Flex
        style={{
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        {label}
      </Flex>
    </Flex>
  );
}

export function WorkflowView() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-gray-0)",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        padding: "30px 10px",
        textAlign: "center",
        gap: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <Button>
          <span
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              // alignItems: "center",
              // justifyContent: "center",
              width: 20,
              height: 20,
              marginRight: 10,
              backgroundColor: "var(--color-pink-3)",
            }}
          >
            <AddCardFilled width={20} />
          </span>
          Document Setup
        </Button>
        <Button>
          <span
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              // alignItems: "center",
              // justifyContent: "center",
              width: 20,
              height: 20,
              marginRight: 10,
              backgroundColor: "var(--color-pink-3)",
            }}
          >
            <SettingsFilled width={20} />
          </span>
          Settings
        </Button>
      </div>

      <VBox style={{ gap: 10, margin: "0 auto" }}>
        <MenuItem
          icon={<SettingsFilled width={20} />}
          label={"Settings"}
          selected={true}
        />
        <MenuItem icon={<FolderFilled width={20} />} label={"Projects"} />
        <MenuItem icon={<GridViewFilled width={20} />} label={"Apps"} />
        <MenuItem icon={<HelpFilled width={20} />} label={"Support"} />
      </VBox>
    </div>
  );
}
