import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

import { MainLayout } from "../../component/MainLayout";
import "./getting-started.scss";

function Main() {
  return (
    <MainLayout maxWidth={1200}>
      <div class="getting-started" style={{ padding: 20 }}>
        <h1>Getting Started</h1>

        <div>
          <h2>Introduction</h2>
          <p>
            Elf Framework is a UI library that is designed to be used as a
            starting point for building your own UI library.
          </p>
          <p>
            <h3>Packages</h3>
            <p>
              Elf Framework is built with{" "}
              <ul>
                <li>
                  <label>@elf-framework/sapa</label> - a ui library like React
                </li>
                <li>
                  <label>@elf-framework/sapa-router</label> - a router for sapa
                </li>
                <li>
                  <label>@elf-framework/design-tokens</label> - a set of design
                  tokens
                </li>
                <li>
                  <label>@elf-framework/design-system</label> - a set of design
                  system
                </li>
                <li>
                  <label>@elf-framework/icon</label> - a set of icons
                </li>
                <li>
                  <label>@elf-framework/ui</label> - a UI component for sapa
                </li>
                <li>
                  <label>@elf-framework/base-editor</label> - an editor
                  framework for sapa
                </li>
              </ul>
              <h3>Utilities</h3>
              <ul>
                <li>
                  <label>vite-plugin-sapa</label> - a plugin for vite that
                  support hmr(Hot Module Replacement) for sapa
                </li>
              </ul>
              <h3>Docs</h3>
              <ul>
                <li>
                  <label>@elf-framework/ui-dev</label> - docs and examples for
                  sapa
                </li>
                <li>
                  <label>@elf-framework/editor-dev</label> - base editor test
                </li>
              </ul>
            </p>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}

start(Main);
