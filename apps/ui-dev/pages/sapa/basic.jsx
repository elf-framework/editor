import { start } from "@elf-framework/sapa";
import { Alert } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { SapaLayout } from "../../component/SapaLayout";
import { Syntax } from "../../utils/Syntax";
import appJsText from "./codes/app.js.txt?raw";
import classJsText from "./codes/class.js.txt?raw";
import importJsText from "./codes/import.js.txt?raw";
import startJsText from "./codes/start.js.txt?raw";
import vnodeJsText from "./codes/vnode.js.txt?raw";

function Main() {
  return (
    <SapaLayout>
      <h1>Basic</h1>
      <p>Let's learn the basics of Sapa.</p>
      <p>Sapa was created to make UI creation with JavaScript easy.</p>

      <p>
        To use the JS library, you need a few things. Let's find out one by one.
      </p>

      <p>
        <h2>1. Import</h2>
        <p>
          Import the library into your project.
          <pre>
            <code>{Syntax(importJsText)}</code>
          </pre>
        </p>

        <h2>2. Start</h2>
        <p>
          Start to rendering.
          <pre>
            <code>{Syntax(startJsText)}</code>
          </pre>
          <p>
            <h3>App</h3>
            <p>
              The App is the root component of your application.
              <pre>
                <code>{Syntax(appJsText)}</code>
              </pre>
            </p>
          </p>
        </p>

        <h2>3. Render</h2>
        <p>
          Render the component.
          <pre>
            <code>{Syntax(startJsText)}</code>
          </pre>
          <Alert type="info" weak={true}>
            You can use <strong>render</strong> function instead of{" "}
            <strong>start</strong>.
          </Alert>
          <p>
            start is a function that takes a Sapa component as a parameter.
            <h3>VNode</h3>
            <p>
              A VNode is a virtual DOM node.
              <pre>
                <code>{Syntax(vnodeJsText)}</code>
              </pre>
            </p>
            <h3>Class Component</h3>
            <p>
              A class component is a component that is defined in a class.
              <pre>
                <code>{Syntax(classJsText)}</code>
              </pre>
            </p>
            <h3>Function Component</h3>
            <p>
              A function component is a component that is defined in a function.
              <pre>
                <code>{Syntax(appJsText)}</code>
              </pre>
            </p>
          </p>
        </p>

        <p>이제 Sapa 를 시작 할 수 있게 되었어요.</p>
      </p>
    </SapaLayout>
  );
}

start(Main);
