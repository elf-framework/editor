import MoreHorizFilled from "@elf-framework/icon/MoreHorizFilled";
import {
  Button,
  Card,
  CardContainer,
  CardHeader,
  CardPreview,
  VBox,
} from "@elf-framework/ui";

export function OptionsView() {
  return (
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
  );
}
