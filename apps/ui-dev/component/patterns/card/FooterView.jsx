import MoreHorizFilled from "@elf-framework/icon/MoreHorizFilled";
import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import {
  Button,
  Card,
  CardActions,
  CardContainer,
  CardFooter,
  CardHeader,
  CardPreview,
  Grid,
} from "@elf-framework/ui";

export function FooterView() {
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
            style={{
              backgroundColor: "var(--color-gray-3)",
            }}
          >
            <img src="https://pbs.twimg.com/profile_banners/52672213/1398217635/1500x500" />
          </CardPreview>
          <CardContainer>
            <CardHeader title={<span>Prototypes in XXXX</span>} />
          </CardContainer>
          <CardFooter>
            <Grid columns={2}>
              <span>Footer</span>
              <Button outline shape="round" variant="primary">
                Open
              </Button>
            </Grid>
          </CardFooter>
        </Card>
      </div>
      <div>
        <p>
          Only standard cards have a footer. The footer has a content area that
          can hold buttons on the right side and indicators (badges, icons,
          status lights, etc.) on the left. The footer is always divided from
          the card body using a small divider.
        </p>
      </div>
    </Grid>
  );
}
