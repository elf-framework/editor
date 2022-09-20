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
} from "@elf-framework/ui";

export function GhostLoadingView() {
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
        <em>Preview</em>
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
        </Card>
        <em>Avatar</em>
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
          <CardAvatar>
            <Avatar size="large" ghost>
              <img src="https://avatars.githubusercontent.com/u/1680273?v=4" />
            </Avatar>
          </CardAvatar>
        </Card>

        <em>Header</em>
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
            <CardHeader
              ghost
              actions={[
                <Button>
                  <MoreHorizFilled />{" "}
                </Button>,
              ]}
            >
              <h3>Card Title</h3>
              <p>Card Subtitle</p>
            </CardHeader>
          </CardContainer>
        </Card>
        <em>Body</em>
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
            <CardHeader
              title={"Card Title"}
              actions={[
                <Button quiet>
                  <MoreHorizFilled />{" "}
                </Button>,
              ]}
            >
              <h3>Card Title</h3>
              <p>Card Subtitle</p>
            </CardHeader>
            <CardBody ghost>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt, nunc ut aliquam aliquet, nunc nisl aliquet nisl, nec
                aliquam nisl nisl sit amet lorem. Sed tincidunt, nunc ut aliquam
                aliquet, nunc nisl aliquet nisl, nec aliquam nisl nisl sit amet
                lorem.
              </p>
            </CardBody>
          </CardContainer>
        </Card>
        <em>Footer</em>
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
            <CardHeader
              title={"Card Title"}
              actions={[
                <Button quiet>
                  <MoreHorizFilled />{" "}
                </Button>,
              ]}
            >
              <h3>Card Title</h3>
              <p>Card Subtitle</p>
            </CardHeader>
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt, nunc ut aliquam aliquet, nunc nisl aliquet nisl, nec
                aliquam nisl nisl sit amet lorem. Sed tincidunt, nunc ut aliquam
                aliquet, nunc nisl aliquet nisl, nec aliquam nisl nisl sit amet
                lorem.
              </p>
            </CardBody>
            <CardFooter ghost></CardFooter>
          </CardContainer>
        </Card>
      </div>
      <div>
        <p>
          When a group of cards are loading, they follow the ghost loading
          convention. There are 5 phases for ghost loading:
        </p>

        <p>
          <ol>
            <li>Card group (including metadata) ghost loads.</li>
            <li>
              If metadata for all cards is loaded before all preview images are
              loaded, the metadata is displayed for all cards as soon as the
              last piece of metadata loads. Previews continue to ghost load.
            </li>
            <li>
              If all preview images load within the x period (a period of time,
              usually measured in seconds, that you need to specify depending on
              the use case), they are shown as soon as the last preview loads.
            </li>
            <li>
              If all previews have not finished loading at the end of the x
              period, the loaded previews are shown, and the pending previews
              each receive an individual progress circle. The group is no longer
              in a ghost loading state.
            </li>
            <li>
              If the preview load times out, an error is shown along with a
              mechanism to retry loading.
            </li>
          </ol>
        </p>
      </div>
    </Grid>
  );
}
