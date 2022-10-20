import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

import Page, { layout } from "./icons.mdx";

import { PageBoard } from "~/layouts/PageBoard";

const filename = "pages/icon/icons.mdx";
start(<PageBoard layout={layout} filename={filename} page={Page} />);
