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
          margin: "0 auto",
          gap: 30,
          maxWidth: 900,
          padding: [20, 100],
          textAlign: "center",
        }}
      >
        <em style={{ textAlign: "left" }}>Link</em>
        <Card
          style={{
            width: 200,
          }}
          selectable
          as="link"
        >
          <CardPreview
            ghost
            ratio="2:1"
            style={{
              backgroundColor: "var(--color-gray-3)",
            }}
          />
          <CardAvatar
            style={{
              top: 0,
              left: 0,
            }}
          >
            <Avatar size="small" shape="square">
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
          />
          <CardAvatar
            style={{
              top: 0,
              left: 0,
            }}
          >
            <Avatar size="small" shape="square">
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
          />
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
                <Button shape="round" outline variant="primary">
                  Open Tools
                </Button>
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
      </div>
    </div>
  );
}
