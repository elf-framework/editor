import MoreHorizFilled from "@elf-framework/icon/MoreHorizFilled";
import {
  Avatar,
  Button,
  Card,
  CardAvatar,
  CardContainer,
  CardFooter,
  CardHeader,
  CardPreview,
  Grid,
  Menu,
  Popover,
  VBox,
} from "@elf-framework/ui";

export function PreviewRatioView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "30px 20px",
          fontSize: 13,
          alignItems: "center",
        }}
      >
        <em>Preivew ratio - 4:1</em>
        <Card
          style={{
            width: 300,
          }}
          selectable
        >
          <CardPreview
            ratio="4:1"
            style={{
              backgroundColor: "var(--color-gray-3)",
            }}
          >
            <img src="https://pbs.twimg.com/profile_banners/52672213/1398217635/1500x500" />
          </CardPreview>
          <CardAvatar
            style={{
              top: 0,
              left: 0,
            }}
          >
            <Avatar size="small">
              <img src="https://avatars.githubusercontent.com/u/1680273?v=4" />
            </Avatar>
          </CardAvatar>
          <CardContainer>
            <CardHeader
              nowrap
              title="Prototypes in XXXX"
              actions={[
                <Popover
                  body={
                    <Menu
                      type="dropdown"
                      items={[{ type: "item", title: "Edit" }]}
                      style={{
                        width: 200,
                      }}
                    />
                  }
                  // show={true}
                  placement="bottom-right"
                >
                  <Button quiet>
                    <MoreHorizFilled />
                  </Button>
                </Popover>,
              ]}
            />
          </CardContainer>
          <CardFooter>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>Created by</div>
              <div>Updated by</div>
            </div>
          </CardFooter>
        </Card>
        <em>Preivew ratio - 3:4</em>
        <Card
          style={{
            width: 300,
          }}
        >
          <CardPreview
            ratio="3:4"
            style={{
              backgroundColor: "var(--color-gray-3)",
            }}
          >
            <img src="https://pbs.twimg.com/profile_banners/52672213/1398217635/1500x500" />
          </CardPreview>
          <CardAvatar
            style={{
              top: 0,
              left: 0,
            }}
          >
            <Avatar size="small">
              <img src="https://avatars.githubusercontent.com/u/1680273?v=4" />
            </Avatar>
          </CardAvatar>
          <CardContainer>
            <CardHeader
              nowrap
              title="Prototypes in XXXX"
              actions={[
                <Popover
                  body={
                    <Menu
                      type="dropdown"
                      items={[{ type: "item", title: "Edit" }]}
                      style={{
                        width: 200,
                      }}
                    />
                  }
                  // show={true}
                  placement="bottom-right"
                >
                  <Button quiet>
                    <MoreHorizFilled />
                  </Button>
                </Popover>,
              ]}
            />
          </CardContainer>
          <CardFooter>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>Created by</div>
              <div>Updated by</div>
            </div>
          </CardFooter>
        </Card>
      </VBox>
      <div>
        <p>
          Most cards are selectable. You can either turn on a "selection mode"
          in which checkboxes will appear in the top left corner of every card,
          or the checkbox can appear individually upon hover.
        </p>
      </div>
    </Grid>
  );
}
