import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

import { PageBoard } from "../../../../layouts/PageBoard";
import Page, { layout, filename } from "./page.mdx";

start(<PageBoard layout={layout} filename={filename} page={Page} />);
