import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

import Page, { layout } from "{{mdxFilePath}}";

import { PageBoard } from "~/layouts/PageBoard";

const filename = "{{filename}}";
start(<PageBoard layout={layout} filename={filename} page={Page} />);
