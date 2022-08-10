import { start } from "@elf-framework/sapa";
import { Alert } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { Layout } from "../../component/Layout";
import { Diagram } from "../../utils/Diagram";
import { Syntax } from "../../utils/Syntax";
import componentBasicText from "./codes/component-basic.js.txt?raw";
import componentHookText from "./codes/component-hook.js.txt?raw";
import componentPropsContentUseText from "./codes/component-props-content-use.js.txt?raw";
import componentPropsContentText from "./codes/component-props-content.js.txt?raw";
import componentPropsUseText from "./codes/component-props-use.js.txt?raw";
import componentPropsText from "./codes/component-props.js.txt?raw";
import componentStateUpdateText from "./codes/component-state-update.js.txt?raw";
import componentStateText from "./codes/component-state.js.txt?raw";
import lifeCycleText from "./codes/lifecycle.mmd?raw";

function Main() {
  return (
    <Layout>
      <h1>Component</h1>
      <p>Sapa 는 Class Component 와 Function Component 를 지원합니다.</p>
      <p>하지만 두개가 다른 것이 아닙니다. 둘은 완전히 동일합니다.</p>
      <p>
        <p>
          Function Component 는 Class Component 의 template() 메소드 영역만
          분리시켜서 간단하게 만든 부분만 다릅니다. 본질적으로 둘은 같습니다. 두
          컴포넌트 모두 클래스의 인스턴스화 되어서 실행됩니다.
        </p>
        <code>{Syntax(componentBasicText)}</code>
        <p>
          <p>
            그렇기 때문에 template()함수와 function 은 동일한 패턴의 코드를 작성
            할 수 있습니다. 예를 들어 hook 이 좋은 예가 될 수 있습니다.
          </p>

          <code>{Syntax(componentHookText)}</code>

          <p>두 구문은 완전히 동일하게 동작합니다.</p>

          <Alert title={"여기서 잠깐!"}>
            React는 Class Component 와 Function Component 가 분리되어 있는
            구조라서 클래스 안에서 Hook 을 사용하는 것을 권장하지 않습니다.
            <p>
              하지만 Sapa 는 완전히 동일한 매커니즘으로 움직이기 때문에 클래스
              컴포넌트에서 할 수 있는 대부분을 함수 컴포넌트에서도 할 수
              있습니다. 거꾸로 함수 컴포넌트에서 할 수 있는 것들도 클래스
              컴포넌트에서 그대로 사용가능합니다.
            </p>
          </Alert>
        </p>
      </p>

      <p>
        <h2>Life Cycle</h2>
        <p>
          Sapa에서는 왜 Class Component 와 Function Component 는 동일하게
          움직일까요? 기본적인 실행구조 라이프사이클을 알아보도록 하겠습니다.
        </p>
        <p>
          <code>
            <Diagram diagram={lifeCycleText} />
          </code>
        </p>
        <p>
          라이프 사이클은 몇가지 원칙에 의해서 동작합니다.
          <ul>
            <li>
              Class , Function Component 는 기본적으로 실행하는 구조가
              동일합니다.{" "}
            </li>
            <li>
              최초 렌더링 될 때는 FirstRender, 업데이트 될 때는 Reconcile 을
              통해서 처리합니다.{" "}
            </li>
          </ul>
        </p>
      </p>
      <p>
        <h2>Component Props & States</h2>
        <p>
          Component 는 기본적으로 props 와 state 를 가지고 있습니다.
          <p>
            props 는 외부에서 넘어오는 파라미터이고 state 는 컴포넌트 내부에서
            저장되는 데이타입니다.
          </p>
          이 2가지 요소는 보통 렌더링을 다시 하기 위해서 사용되어 집니다.
          <p>
            <ol>
              <li>props 가 달라지면 render 를 수행한다.</li>
              <li>state 가 달라지면 render 를 수행한다.</li>
            </ol>
          </p>
        </p>

        <p>
          <h3>Props 넘기기</h3>

          <p>
            props 는 외부에서 지정해줄 수 있습니다.
            <code>{Syntax(componentPropsText)}</code>
          </p>
          <p>
            content 가 있는 code는 아래와 같이 작성합니다.
            <code>{Syntax(componentPropsContentText)}</code>
          </p>
        </p>
        <p>
          <h3>Props 사용하기</h3>

          <p>
            외부에서 넘어온 props 는 내부에서 재사용 될 수 있습니다.
            <code>{Syntax(componentPropsUseText)}</code>
          </p>
          <p>
            <h4>Props 에서 Content 사용하기</h4>
            content 는 jsx 의 children 과 의미가 동일합니다.
            <code>{Syntax(componentPropsContentUseText)}</code>
          </p>
        </p>
      </p>
      <p>
        <h2>States</h2>
        state 는 컴포넌트 내부에서 저장되는 데이타입니다.
        <p>
          <h3>State 설정하기</h3>
          state 는 컴포넌트 내부에서 저장되는 데이타입니다.
          <code>{Syntax(componentStateText)}</code>
        </p>
        <p>
          <h3>State 변경하기</h3>
          <code>{Syntax(componentStateUpdateText)}</code>
          initState 로 초기화 한 이후 setState() 로 값을 설정할 수 있다.
        </p>
      </p>
    </Layout>
  );
}

start(Main);
