import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

import Page, { layout } from "./sample.mdx";

import { PageBoard } from "~/layouts/PageBoard";

const filename = "pages/introduction/contribute/sample.mdx";
start(<PageBoard layout={layout} filename={filename} page={Page} />);
