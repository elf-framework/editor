import HelpOutlineFilled from "@elf-framework/icon/HelpOutlineFilled";
import InfoOutlined from "@elf-framework/icon/InfoOutlined";
import {
  Alert,
  Button,
  Dialog,
  Grid,
  Notification,
  Panel,
  Popover,
  RoundButton,
  Toast,
  Tooltip,
} from "@elf-framework/ui";

import { PreviewItem } from "./PreviewItem";

function Tools() {
  return (
    <>
      <Button onClick={() => console.log("action")}>Action</Button>
      <Button onClick={() => console.log("Dismiss")}>Dismiss</Button>
    </>
  );
}

export function FeedbacksView() {
  return (
    <div>
      <Grid columns={1} rows={[100, "minmax(100px, auto)"]} style={{ gap: 10 }}>
        <PreviewItem
          title={"Alert"}
          link={"/pages/design-system/components/feedback/alert/"}
        >
          <Alert
            shape="round"
            variant="primary"
            closable={true}
            title={"title"}
          >
            Your trial has expired. Please purchase to continue.
          </Alert>
          &nbsp;
          <Alert variant="secondary" closable={true}>
            Your trial has expired. Please purchase to continue.
          </Alert>
        </PreviewItem>

        <PreviewItem
          title={"Notification"}
          link={"/pages/design-system/components/feedback/notification/"}
        >
          <Notification
            tools={<Tools />}
            style={{
              position: "relative",
              width: "100%",
              height: 100,
            }}
          >
            Your trial has expired. Please purchase to continue. Please send
            email to elf-framework.com. This sample
          </Notification>
        </PreviewItem>
        <PreviewItem
          title={"Toast"}
          link={"/pages/design-system/components/feedback/toast/"}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 200,
              backgroundColor: "white",
            }}
          >
            <Toast
              direction="bottom-right"
              icon={<InfoOutlined />}
              style={{
                position: "absolute",
              }}
              tools={[
                <RoundButton
                  outline
                  // variant="danger"
                  place="toast"
                  onClick={() => console.log("action")}
                >
                  Action
                </RoundButton>,
              ]}
              closable
            >
              Hello World yellow 234
            </Toast>
          </div>
        </PreviewItem>
      </Grid>
      &nbsp;
      <Grid columns={2} rows={2} style={{ gap: 10 }}>
        <PreviewItem
          title={"Dialog"}
          link={"/pages/design-system/components/feedback/dialog/"}
          style={{
            gridRow: "span 2",
          }}
        >
          <Dialog
            visible={true}
            style={{
              width: 300,
            }}
            noBorder
            title="Dialog"
          >
            <div>
              The following typefaces are not available. Please either install
              these on your computer or in Figma. Alternatively you can replace
              them with other fonts.
            </div>
          </Dialog>
        </PreviewItem>
        <PreviewItem
          title={"Tooltip"}
          link={"/pages/design-system/components/feedback/tooltip/"}
        >
          <Tooltip placement="top" message={"text message"} show>
            <Button>
              <HelpOutlineFilled />
            </Button>
          </Tooltip>
        </PreviewItem>
        <PreviewItem
          title={"Contextual help"}
          link={"/pages/design-system/components/feedback/contextual-help/"}
          align={"left"}
          style={{
            flex: "none",
            position: "relative",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 10,
          }}
        >
          <Popover
            show
            body={
              <Panel title={"Permission required"}>
                <p>Your admin must grant you permission to create segments.</p>
                <a href="#">Learn about permissions</a>
              </Panel>
            }
            placement="right-bottom"
          >
            <Button iconOnly quiet size="extra-small" selected>
              <InfoOutlined />
            </Button>
          </Popover>
        </PreviewItem>
      </Grid>
    </div>
  );
}
