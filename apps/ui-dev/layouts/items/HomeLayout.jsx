import { Blank, Button, Flex } from "@elf-framework/ui";

import "./HomeLayout.scss";
import { Logo } from "./Logo";

import { data } from "~/component/main/data.jsx";
import { ProjectItem } from "~/component/project/ProjectItem.jsx";
import { PeerView } from "~/component/utils/peer-view/PeerView";
import { ThemeButton } from "~/component/utils/theme-button/ThemeButton";
import mainMenus from "~/constants/main-menus";
import { useTheme } from "~/hooks/useTheme";
import { url } from "~/utils/url";

export function HomeLayout() {
  useTheme();

  return (
    <div class="home-layout">
      <div class="home-layout-header">
        <div class="background"></div>
        <div class="layout-header">
          <div>
            <Logo />
          </div>
          <nav class="tools">
            <ul>
              {mainMenus.map((it) => {
                return (
                  <li>
                    <a href={it.link}>{it.title}</a>
                  </li>
                );
              })}
              {/* <li>
                <PeerView />
              </li> */}
              <li>
                <ThemeButton />
              </li>
            </ul>
          </nav>
        </div>
        <section class="content">
          <div class="hero">
            <h1>Let's make the editor easy and fun.</h1>
          </div>
          <div class="description">
            Sapa, UI component, Base editor system for web.
          </div>
          <div>
            <Button
              size="extra-large"
              outline
              // shape="round"
              variant="primary"
              as="link"
              href={url("pages/introduction/")}
            >
              Go to introduction
            </Button>
          </div>
          <Blank />
          <Flex class="project-item-list" style={{ gap: 20 }}>
            {data.map((it) => {
              return (
                <ProjectItem
                  full
                  title={it.title}
                  npm={it.npm}
                  description={it.description}
                  docLink={it.docLink}
                  codeLinkText={it.codeLinkText}
                  codeLink={it.codeLink}
                  type={it.type}
                  selected={it.selected}
                />
              );
            })}
          </Flex>
        </section>
      </div>
      <div class="layout-content">
        <section>
          <h4>What is ELF?</h4>
          <p class="message">
            easy &nbsp;&nbsp;+&nbsp;&nbsp; logic &nbsp;&nbsp;=&nbsp;&nbsp;
            framework
          </p>

          <p>
            ELF is an easy framework for developers who want to create a single
            editor.
            <br />
            ELF collects the functions necessary to create an editor, and
            through this, you can create an editor quickly and easily.
            <br />
          </p>
          <p>
            <a href={url("pages/introduction/getting-started/")}>Go</a>
          </p>
        </section>
        <section>
          <h4>What is Sapa?</h4>
          <p>
            Sapa is a UI framework for creating editors on which ELF is based.
            It can be used similarly to React based on JSX.
            <br />
            The concept of <code>Hook</code> is also supported so that even
            React users can use it easily.
          </p>
          <p>
            <a href={url("pages/sapa/getting-started/")}>Go</a>
          </p>
        </section>
        <section>
          <h4>How to use Sapa?</h4>
          <p>
            Sapa can be installed with npm. Let's create a simple button.
            <pre>
              <code>{`npm install @elf-framework/sapa`}</code>
            </pre>
          </p>
          <p>
            <pre>
              <code>{`import { start } from "@elf-framework/sapa";

function App() {
  return <button>Click me !</button>;
}

start(<App />, {
  container: document.getElementById("root")
});`}</code>
            </pre>
          </p>

          <p>
            Let's use Hook as well.
            <pre>
              <code>{`import { useState } from "@elf-framework/sapa";

function App() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Click me ! {count}</button>;
}

start(<App />, {
  container: document.getElementById("root")
});`}</code>
            </pre>
          </p>
          <p>
            <a href={url("pages/sapa/hook/")}>Go to Hook</a>
          </p>
        </section>
        <section>
          <h4>Design System & UI Component</h4>
          <p>
            ELF provides UI Component made with Sapa. You can easily create a UI
            using some of Sapa's features.
          </p>
          <p>
            <pre>
              <code>{`import { Button } from "@elf-framework/ui";

function App() {
  return <Button onClick={() => {
    alert("Hello World!");
  }}>Click me !</Button>;
}

start(<App />, {
  container: document.getElementById("root")
});

`}</code>
            </pre>
          </p>
          <p>
            <a href={url("pages/design-system/getting-started/")}>
              Go to UI Component
            </a>
          </p>
        </section>
        <section>
          <h4>Editor System</h4>
          <p>
            It allows you to combine various plugins of the editor through
            BaseEditor.
          </p>
          <p>
            <pre>
              <code>{`import { BaseEditor } from "@elf-framework/base-editor";

function App() {
  return <BaseEditor config={{
      "sample.text": "yellow",
    }},
    function (editorContext) {
      // print "sample.text" config
      console.log(editorContext.configs.get("sample.text"));

      // register command 
      editorContext.registerCommand({
        command: "sample.action",
        execute: () => {
          alert("Hello World!");

          return 10;
        },
      })

      
      // register document shortcut
      editorContext.registerShortcut({
          key: "meta+shift+e",
          command: (editorContext) => {
            console.log("sample shortcut", editorContext.commands.execute("sample.action));
          }
      });
    }

  
  />;
}

start(<App />, {
  container: document.getElementById("root")
});`}</code>
            </pre>
          </p>
          <p>
            <a href={url("pages/base-editor/getting-started/")}>
              Go to BaseEditor
            </a>
          </p>
        </section>
        <section>
          <h4>Why use ELF?</h4>
          <p>ELF contains all the processes to create one editor. </p>
          <p>This is important for consistency. </p>

          <p>
            You can also add desired functions by directly modifying the core of
            your desired UI framework.
          </p>

          <p>It's not complicated. </p>

          <p>Don't lock up your thoughts.</p>

          <p>
            <a href={url("pages/introduction/core/")}>Go to core concept</a>
          </p>
        </section>
      </div>
      <div class="layout-footer">
        <footer>
          <div class="column-1">
            <Logo />
          </div>

          <div class="column-2">
            <h3>Community</h3>
            <ul>
              <li>
                <a href={"https://github.com/elf-framework"}>Github</a>
              </li>
            </ul>
          </div>
          <div class="column-3">
            <h3>Documentation</h3>
            <ul>
              {mainMenus.map((it) => {
                return (
                  <li>
                    <a href={it.link}>{it.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div class="column-4">
            <h3>More</h3>
            <ul>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">Gitter</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
