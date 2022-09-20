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

export function OrientationView() {
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
        <Card
          style={{
            width: 200,
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

        <Card
          orientation="horizontal"
          style={{
            width: 300,
          }}
        >
          <CardPreview
            style={{
              height: 120,
              width: 120,
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
                <Button quiet>
                  <MoreHorizFilled />
                </Button>,
              ]}
            />
            <CardBody>fdjsklafjdsklfjl</CardBody>
          </CardContainer>
        </Card>
      </VBox>
      <div>
        <p>
          Standard cards can be laid out vertically (components are organized in
          a column) or horizontally (components are organized in a row).
        </p>

        <p>
          Horizontal cards always have a square preview, and the image is
          cropped to fit inside the square. These can only be laid out in a tile
          grid where every card is the same size.
        </p>
      </div>
    </Grid>
  );
}
