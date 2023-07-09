import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

import Page, { frontmatter } from "./index.mdx";

import { PageBoard } from "~/layouts/PageBoard";

const filename = "pages/design-system/getting-started/preview/index.mdx";
start(<PageBoard {...frontmatter} filename={filename} page={Page} />);
