import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

import Page, { frontmatter } from "./icons.mdx";

import { PageBoard } from "~/layouts/PageBoard";

const filename = "pages/icon/icons.mdx";
start(<PageBoard {...frontmatter} filename={filename} page={Page} />);
