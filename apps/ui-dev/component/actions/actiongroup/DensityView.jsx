import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import EditFilled from "@elf-framework/icon/EditFilled";
import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { ActionGroup, Button, Grid, IconButton, VBox } from "@elf-framework/ui";

export function DensityView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 20 }}
      >
        <VBox>
          <em>Regular</em>
          <ActionGroup style={{ gap: 10, margin: 10 }}>
            <Button>
              <DescriptionFilled />
              Document Setup
            </Button>
            <Button>
              <SettingsFilled /> Settings
            </Button>
          </ActionGroup>
          <ActionGroup style={{ gap: 10, margin: "10px 10px" }}>
            <IconButton>
              <EditFilled />
            </IconButton>
            <IconButton>
              <DescriptionFilled />
            </IconButton>
            <IconButton>
              <SettingsFilled />
            </IconButton>
          </ActionGroup>
          <ActionGroup style={{ gap: 10, margin: "10px 10px" }}>
            <IconButton quiet={true}>
              <EditFilled />
            </IconButton>
            <IconButton quiet={true}>
              <DescriptionFilled />
            </IconButton>
            <IconButton quiet={true}>
              <SettingsFilled />
            </IconButton>
          </ActionGroup>
        </VBox>
        <VBox>
          <em>Compact</em>
          <ActionGroup compact={true} style={{ gap: 10, margin: 10 }}>
            <Button>
              <DescriptionFilled />
              Document Setup
            </Button>
            <Button>
              <SettingsFilled /> Settings
            </Button>
          </ActionGroup>
          <ActionGroup compact={true} style={{ gap: 10, margin: "10px 10px" }}>
            <IconButton>
              <EditFilled />
            </IconButton>
            <IconButton>
              <DescriptionFilled />
            </IconButton>
            <IconButton>
              <SettingsFilled />
            </IconButton>
          </ActionGroup>
          <ActionGroup compact={true} style={{ gap: 10, margin: "10px 10px" }}>
            <IconButton quiet={true}>
              <EditFilled />
            </IconButton>
            <IconButton quiet={true}>
              <DescriptionFilled />
            </IconButton>
            <IconButton quiet={true}>
              <SettingsFilled />
            </IconButton>
          </ActionGroup>
        </VBox>
      </VBox>
      <div>
        <p>
          Action groups come in 2 densities: regular and compact. The compact
          density retains the same font and icon sizes, but has tighter spacing.
          The action buttons also become connected for non-quiet action groups.
        </p>
      </div>
    </Grid>
  );
}
