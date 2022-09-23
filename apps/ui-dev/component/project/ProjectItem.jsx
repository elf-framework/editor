import {
  Blank,
  Card,
  CardBody,
  CardContainer,
  CardFooter,
  CardHeader,
  Grid,
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
  docLinkText = "documentation",
  codeLinkText = "code",
}) {
  const cardProps = {
    selectable: true,
    selected,
    quiet,
  };

  return (
    <div class="project-item" style={style}>
      <Card style={{ width: "100%" }} {...cardProps}>
        <CardContainer>
          <CardHeader title={title} />
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
        <CardFooter>
          <Grid
            columns={2}
            style={{
              gap: 10,
              textAlign: "center",
            }}
          >
            <a href={docLink} target="_blank">
              {docLinkText}
            </a>
            <a href={codeLink} target="_blank">
              {codeLinkText}
            </a>
          </Grid>
        </CardFooter>
      </Card>
    </div>
  );
}
