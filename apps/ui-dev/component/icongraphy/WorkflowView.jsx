import AddCardFilled from "@elf-framework/icon/AddCardFilled";
import FolderFilled from "@elf-framework/icon/FolderFilled";
import GridViewFilled from "@elf-framework/icon/GridViewFilled";
import HelpFilled from "@elf-framework/icon/HelpFilled";
import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { Button, Flex, Grid, VBox } from "@elf-framework/ui";

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
          width: 18,
          height: 18,
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
    <div class="size-view">
      <Grid columns={[1, 1]} gap={20}>
        <div>
          <strong>Workflow icons</strong>
          <div style={{ padding: 10 }}>
            <p>
              Workflow icons are graphical metaphors or symbols that users
              interact with to navigate and manipulate objects. They all appear
              at the same size within each platform.
            </p>
          </div>
        </div>
        <div>
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 18,
                    height: 18,
                    backgroundColor: "var(--color-pink-3)",
                  }}
                >
                  <AddCardFilled width={18} height={18} />
                </span>
                Document Setup
              </Button>
              <Button>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 18,
                    height: 18,
                    backgroundColor: "var(--color-pink-3)",
                  }}
                >
                  <SettingsFilled width={18} height={18} />
                </span>
                Settings
              </Button>
            </div>

            <VBox style={{ gap: 10, margin: "0 auto" }}>
              <MenuItem
                icon={<SettingsFilled width={18} height={18} />}
                label={"Settings"}
                selected={true}
              />
              <MenuItem
                icon={<FolderFilled width={18} height={18} />}
                label={"Projects"}
              />
              <MenuItem
                icon={<GridViewFilled width={18} height={18} />}
                label={"Apps"}
              />
              <MenuItem
                icon={<HelpFilled width={18} height={18} />}
                label={"Support"}
              />
            </VBox>
          </div>
        </div>
      </Grid>
    </div>
  );
}
