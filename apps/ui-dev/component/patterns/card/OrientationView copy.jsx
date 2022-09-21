import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import EditFilled from "@elf-framework/icon/EditFilled";
import MoreHorizFilled from "@elf-framework/icon/MoreHorizFilled";
import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import {
  ActionGroup,
  Avatar,
  Blank,
  Button,
  Card,
  CardActions,
  CardAvatar,
  CardBody,
  CardContainer,
  CardFooter,
  CardHeader,
  CardPreview,
  Grid,
  Menu,
  Popover,
  RoundButton,
  VBox,
} from "@elf-framework/ui";

export function OptionsView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "30px 20px",
          fontSize: 13,
        }}
      >
        <em style={{ textAlign: "left" }}>Div</em>
        <Card
          style={{
            width: 200,
          }}
          selectable
          selected
        >
          <CardPreview
            ghost
            ratio="2:1"
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
        <Card
          style={{
            width: 200,
          }}
        >
          <CardPreview
            ghost
            ratio="2:1"
            style={{
              backgroundColor: "var(--color-gray-3)",
            }}
          >
            <img src="https://pbs.twimg.com/profile_banners/52672213/1398217635/1500x500" />
          </CardPreview>
          <CardActions>
            <ActionGroup compact>
              <Button quiet>
                <EditFilled />
              </Button>
              <Button quiet>
                <DescriptionFilled />
              </Button>
              <Button quiet>
                <SettingsFilled />
              </Button>
            </ActionGroup>
          </CardActions>

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
          style={{
            width: 300,
          }}
        >
          <CardPreview
            ghost
            ratio="2:1"
            style={{
              backgroundColor: "var(--color-gray-3)",
            }}
          />
          <CardActions align="left">
            <ActionGroup compact>
              <Button quiet>
                <EditFilled />
              </Button>
              <Button quiet>
                <DescriptionFilled />
              </Button>
              <Button quiet>
                <SettingsFilled />
              </Button>
            </ActionGroup>
          </CardActions>
          <CardActions align="right">
            <ActionGroup compact>
              <Button quiet>
                <SettingsFilled />
              </Button>
            </ActionGroup>
          </CardActions>
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
          style={{
            width: 300,
          }}
        >
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
            <CardBody ghost>
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
              <div>
                <RoundButton outline variant="primary">
                  Open Tools
                </RoundButton>
              </div>
            </div>
          </CardFooter>
        </Card>
        <div>
          <Card
            orientation="horizontal"
            style={{
              width: 400,
            }}
          >
            <CardPreview
              style={{
                height: 150,
                width: 160,
                backgroundColor: "var(--color-gray-3)",
              }}
            />
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
                          width: 100,
                        }}
                      />
                    }
                    show
                    placement="bottom-right"
                  >
                    <Button quiet selected>
                      <MoreHorizFilled />
                    </Button>
                  </Popover>,
                ]}
              />
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
            </CardContainer>
          </Card>
          <Blank />
          <Card
            orientation="horizontal"
            style={{
              width: 400,
            }}
          >
            <CardPreview
              ghost
              style={{
                height: 150,
                width: 160,
                backgroundColor: "var(--color-gray-3)",
              }}
            />
            <CardContainer>
              <CardHeader
                nowrap
                ghost
                title="Prototypes in XXXX"
                actions={[
                  <Popover
                    body={
                      <Menu
                        type="dropdown"
                        items={[{ type: "item", title: "Edit" }]}
                        style={{
                          width: 100,
                        }}
                      />
                    }
                    placement="bottom-right"
                  >
                    <Button quiet>
                      <MoreHorizFilled />
                    </Button>
                  </Popover>,
                ]}
              />
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
            </CardContainer>
          </Card>
        </div>
      </VBox>
      <div>
        <p>
          Cards can either be standard or quiet style. Use standard style for a
          footer with buttons and more information. Quiet style is reserved for
          very simple cards with little metadata.
        </p>
      </div>
    </Grid>
  );
}
