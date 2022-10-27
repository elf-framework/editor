import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

import Page, { layout } from "./index.mdx";

import { PageBoard } from "~/layouts/PageBoard";

const filename = "pages/base-editor/system/config/index.mdx";
start(<PageBoard layout={layout} filename={filename} page={Page} />);
