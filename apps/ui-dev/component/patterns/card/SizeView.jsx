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

      <div>
        <Grid columns={3} gap={20}>
          <Card wide><CardBody>wide 1</CardBody></Card>
          <Card wide><CardBody>wide 2</CardBody></Card>
          <Card wide><CardBody>wide 3</CardBody></Card>
        </Grid>
      </div>
    </VBox>
  );
}
