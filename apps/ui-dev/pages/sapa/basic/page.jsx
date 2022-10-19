import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

import Page, { layout, filename } from "./page.mdx";

import { PageBoard } from "~/layouts/PageBoard";

start(<PageBoard layout={layout} filename={filename} page={Page} />);
