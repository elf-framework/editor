import MoreHorizFilled from "@elf-framework/icon/MoreHorizFilled";
import {
  Button,
  Card,
  CardBody,
  CardContainer,
  CardFooter,
  CardHeader,
  CardPreview,
  Grid,
  Menu,
  Popover,
  VBox,
} from "@elf-framework/ui";

export function SizeView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "30px 20px",
          fontSize: 13,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card size="extra-large">
          <CardPreview
            ratio="2:1"
            style={{
              backgroundColor: "var(--color-gray-3)",
            }}
          >
            <img src="https://pbs.twimg.com/profile_banners/52672213/1398217635/1500x500" />
          </CardPreview>
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
        <Card size="small">
          <CardPreview
            ratio="2:1"
            style={{
              backgroundColor: "var(--color-gray-3)",
            }}
          >
            <img src="https://pbs.twimg.com/profile_banners/52672213/1398217635/1500x500" />
          </CardPreview>
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
            <CardBody>fjdkslafjdkslf</CardBody>
          </CardContainer>
        </Card>
      </VBox>
      <div>
        <p>
          Medium is the default size for a card. Use large cards in large views
          when it's necessary to present a lot of content at once.
        </p>
        <p>
          Small cards are best for small containers such as dialogs, panels,
          popovers, or trays. These should only have a preview, title,
          description, badge(s), and/or action menu. More details should be
          reserved for a one-up or detail view.
        </p>
      </div>
    </Grid>
  );
}
