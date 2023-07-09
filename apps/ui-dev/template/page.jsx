import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

import Page, { frontmatter } from "{{mdxFilePath}}";

import { PageBoard } from "~/layouts/PageBoard";

const filename = "{{filename}}";
start(<PageBoard {...frontmatter} filename={filename} page={Page} />);
