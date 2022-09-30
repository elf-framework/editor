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
  Grid,
  Table,
} from "@elf-framework/ui";

import { columns, data } from "./main";
import { PreviewItem } from "./PreviewItem";

export function PatternsView() {
  return (
    <div>
      <Grid columns={1} style={{ gap: 10 }}>
        <PreviewItem title={"Card"}>
          <div
            style={{
              display: "flex",
              gap: 30,
              justifyContent: "flex-start",
              alignItems: "center",
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
                    <Button quiet>
                      <MoreHorizFilled />
                    </Button>,
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
          </div>
        </PreviewItem>

        <PreviewItem title={"Table"}>
          <Table columns={columns} data={data} />
        </PreviewItem>
      </Grid>
    </div>
  );
}
