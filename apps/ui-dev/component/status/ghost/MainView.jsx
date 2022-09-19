import {
  Avatar,
  Card,
  CardBody,
  CardContainer,
  CardHeader,
  CardPreview,
  Ghost,
  Button,
  VBox,
} from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 100],
        position: "relative",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 50,
            alignItems: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          <em>Default</em>
          <div
            style={{
              width: 100,
              height: 100,
            }}
          >
            <Ghost />
          </div>

          <em>Animated</em>
          <div
            style={{
              width: 100,
              height: 100,
            }}
          >
            <Ghost animated />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 50,
            alignItems: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          <em>Avatar</em>
          <div
            style={{
              width: 100,
              height: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar ghost size="700">
              <img src="https://avatars.githubusercontent.com/u/12592949?v=4" />
            </Avatar>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 50,
            alignItems: "center",
            width: "100%",
          }}
        >
          <div>
            <em>Card Preview </em>
            <Card>
              <CardPreview ratio="2:1" ghost />
            </Card>
          </div>
          <div>
            <em>Card Preview </em>
            <Card>
              <CardPreview ratio="2:1" ghost />
              <CardContainer>
                <CardHeader
                  title={"sample"}
                  ghost
                  actions={[<Button>fdsaf</Button>]}
                />
                <CardBody ghost></CardBody>
              </CardContainer>
            </Card>
          </div>
        </div>
      </div>
    </VBox>
  );
}
