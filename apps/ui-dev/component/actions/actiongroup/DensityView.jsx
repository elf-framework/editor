import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import EditFilled from "@elf-framework/icon/EditFilled";
import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { ActionGroup, Button, Grid, IconButton, VBox } from "@elf-framework/ui";

export function DensityView() {
  return (
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
      <Grid columns={2}>
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
        <VBox>
          <em>Compact Vertical</em>
          <ActionGroup
            compact={true}
            direction={"vertical"}
            style={{ gap: 10, margin: 10 }}
          >
            <Button>
              <DescriptionFilled />
              Document Setup
            </Button>
            <Button>
              <SettingsFilled /> Settings
            </Button>
          </ActionGroup>
          <ActionGroup
            compact={true}
            direction={"vertical"}
            style={{ gap: 10, margin: "10px 10px" }}
          >
            <Button iconOnly>
              <EditFilled />
            </Button>
            <IconButton selected>
              <DescriptionFilled />
            </IconButton>
            <IconButton>
              <SettingsFilled />
            </IconButton>
          </ActionGroup>
          <ActionGroup
            compact={true}
            direction={"vertical"}
            style={{ gap: 10, margin: "10px 10px" }}
          >
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
      </Grid>
    </VBox>
  );
}
