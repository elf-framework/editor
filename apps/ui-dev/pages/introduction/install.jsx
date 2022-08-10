import { start } from "@elf-framework/sapa";
import { Divider } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { Layout } from "../../component/Layout";
import { Syntax } from "../../utils/Syntax";
import npmText from "./codes/npm.txt?raw";
import viteText from "./codes/vite.txt?raw";
import yarnText from "./codes/yarn.txt?raw";
import "./install.scss";

function Main() {
  return (
    <Layout maxWidth={1200}>
      <div class="install" style={{ padding: 20 }}>
        <h1>Install</h1>

        <p>
          먼저 설치를 해볼까요? npm 을 통해서 배포 되기 때문에 npm 명령어로
          설치를 할 수 있습니다.
        </p>

        <div>
          <h2>npm</h2>
          <code>{Syntax(npmText)}</code>
        </div>
        <div>
          <p>물론 Yarn 을 사용하셔도 됩니다.</p>

          <h2>yarn</h2>
          <code>{Syntax(yarnText)}</code>
        </div>

        <Divider margin={40} />

        <h1>Template - JSX</h1>
        <div>
          <p>
            Sapa is using{" "}
            <a
              href="https://ko.reactjs.org/docs/introducing-jsx.html"
              target="_jsx_window"
            >
              jsx
            </a>{" "}
            template.
          </p>

          <h2>Vite</h2>
          <p>
            <code enableHtml={true}>{Syntax(viteText)}</code>
          </p>
        </div>

        <h1>Usage</h1>
        <div>
          <h2>import</h2>
          <code enableHtml={true}>
            {Syntax(`
import { start } from "@elf-framework/sapa";

function App() {
  return (
    <Layout>
      <h1>Elf Framework</h1>
    </Layout>
  );
}
start(App);
          `)}
          </code>
        </div>
      </div>
    </Layout>
  );
}

start(Main);
