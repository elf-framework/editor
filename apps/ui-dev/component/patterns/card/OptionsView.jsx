import MoreHorizFilled from "@elf-framework/icon/MoreHorizFilled";
import {
  Button,
  Card,
  CardContainer,
  CardHeader,
  CardPreview,
  Grid,
  VBox,
} from "@elf-framework/ui";

export function OptionsView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "30px 20px",
          fontSize: 13,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 10,
          }}
        >
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
            </CardContainer>
          </Card>

          <Card
            style={{
              width: 200,
            }}
            quiet
          >
            <CardPreview
              ghost
              ratio="2:1"
              style={{
                backgroundColor: "var(--color-gray-3)",
              }}
            />
            <CardContainer>
              <CardHeader title="Prototypes in XXXX" />
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
