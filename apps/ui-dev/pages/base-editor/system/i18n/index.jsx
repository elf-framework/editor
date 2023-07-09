import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

import Page, { frontmatter } from "./index.mdx";

import { PageBoard } from "~/layouts/PageBoard";

const filename = "pages/base-editor/system/i18n/index.mdx";
start(<PageBoard {...frontmatter} filename={filename} page={Page} />);
