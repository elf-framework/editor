import {
  ActionGroup,
  Badge,
  Blank,
  Button,
  Card,
  CardBody,
  CardContainer,
  CardFooter,
  CardHeader,
} from "@elf-framework/ui";

import { Version } from "../Version";
import "./ProjectItem.scss";
export function ProjectItem({
  title,
  npm,
  description,
  docLink,
  codeLink,
  selected = false,
  quiet = false,
  style = {},
  docLinkText = "Documentation",
  codeLinkText = "Code",
  full = false,
  type = "real",
}) {
  const cardProps = {
    selectable: true,
    selected,
    quiet,
    full,
  };

  return (
    <div class="project-item" style={style}>
      <Card style={{ width: "100%" }} {...cardProps}>
        <CardContainer>
          <CardHeader
            title={title}
            actions={[type === "beta" && <Badge variant="yellow">Beta</Badge>]}
          />
          <CardBody>
            {npm ? (
              <div>
                <Version npmPackage={npm} />
              </div>
            ) : undefined}
            <Blank />
            {description}
          </CardBody>
        </CardContainer>
        <CardFooter
          compact
          style={{
            padding: 0,
            sideOffset: 0,
          }}
          noDivider
        >
          <ActionGroup
            justified
            compact
            shape="rect"
            style={{
              gap: 10,
              textAlign: "center",
            }}
          >
            <Button as="link" href={docLink} size="large">
              {docLinkText}
            </Button>
            <Button as="link" href={codeLink} size="large">
              {codeLinkText}
            </Button>
          </ActionGroup>
        </CardFooter>
      </Card>
    </div>
  );
}
