import MoreHorizFilled from "@elf-framework/icon/MoreHorizFilled";
import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import {
  Button,
  Card,
  CardActions,
  CardContainer,
  CardHeader,
  CardPreview,
  Grid,
} from "@elf-framework/ui";

export function QuickActionsView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "30px 20px",
          fontSize: 13,
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <em>Quick actions: align right</em>
        <Card
          style={{
            width: 240,
          }}
        >
          <CardPreview
            ratio="2:1"
            ghost
            style={{
              backgroundColor: "var(--color-gray-3)",
            }}
          >
            <img src="https://pbs.twimg.com/profile_banners/52672213/1398217635/1500x500" />
          </CardPreview>
          <CardActions align="right">
            <Button quiet>
              <SettingsFilled />
            </Button>
            <Button quiet>
              <MoreHorizFilled />
            </Button>
          </CardActions>
          <CardContainer>
            <CardHeader title={<span>Prototypes in XXXX</span>} />
          </CardContainer>
        </Card>
        <em>Quick actions: align left</em>
        <Card
          style={{
            width: 240,
          }}
        >
          <CardPreview
            ratio="2:1"
            style={{
              backgroundColor: "var(--color-gray-3)",
            }}
          >
            <img src="https://pbs.twimg.com/profile_banners/52672213/1398217635/1500x500" />
          </CardPreview>
          <CardActions align="left">
            <Button quiet>
              <SettingsFilled />
            </Button>
            <Button quiet>
              <MoreHorizFilled />
            </Button>
          </CardActions>
          <CardContainer>
            <CardHeader title={<span>Prototypes in XXXX</span>} />
          </CardContainer>
        </Card>
      </div>
      <div>
        <p>
          Card-level actions can either be shown in an action menu or as quick
          actions. Because quick actions have limited space and only work with
          desktop experiences, use either an exposed action menu or bulk
          actions.
        </p>
      </div>
    </Grid>
  );
}
