import MoreHorizFilled from "@elf-framework/icon/MoreHorizFilled";
import {
  Avatar,
  Button,
  Card,
  CardAvatar,
  CardBody,
  CardContainer,
  CardFooter,
  CardHeader,
  CardPreview,
  Menu,
  Popover,
} from "@elf-framework/ui";

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
          maxWidth: 900,
          padding: [20, 100],
          textAlign: "center",
        }}
      >
        <Card
          style={{
            width: 300,
          }}
          selectable
          as="link"
        >
          <CardPreview
            ratio="2:1"
            style={{
              backgroundColor: "var(--color-gray-3)",
            }}
          >
            <img
              src="https://pbs.twimg.com/profile_banners/52672213/1398217635/1500x500"
              style={{
                objectFit: "cover",
              }}
            />
          </CardPreview>
          <CardAvatar
            style={{
              top: -20,
              left: 0,
            }}
          >
            <Avatar size="large">
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
            <CardBody>
              Learn how to work with green screen video with these tips for
              video makers.
            </CardBody>
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
      </div>
    </div>
  );
}
