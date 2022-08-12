import { Grid, VBox } from "@elf-framework/ui";

import "./Footer.scss";

export function Footer() {
  return (
    <footer class="layout-footer">
      <Grid columns={[1, 1, 1]}>
        <div>
          <a href="https://elf-framework.com" class="logo">
            ELF
          </a>
          <div class="text">
            <span class="main-text">E</span>asy<span class="main-text">L</span>
            ogic <span class="main-text">F</span>ramework
          </div>
        </div>

        <div>
          <VBox>
            <div class="title">Docs</div>
            <a href="https://elf-framework.org/pages/sapa/">Sapa</a>
            <a href="https://elf-framework.org/pages/ui/">UI</a>
            <a href="https://elf-framework.org/pages/router/">Router</a>
            <a href="https://elf-framework.org/pages/icon/">Icon</a>
            <a href="https://elf-framework.org/pages/design-system/">
              Design System
            </a>
          </VBox>
        </div>
        <div>
          <VBox>
            <div class="title">Contact</div>
            <a href="https://github.com/elf-framework/editor/issues">Github</a>
          </VBox>
        </div>
      </Grid>
    </footer>
  );
}
