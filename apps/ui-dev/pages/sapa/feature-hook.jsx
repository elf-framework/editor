import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

import { SapaLayout } from "../../layouts/SapaLayout";
import { Syntax } from "../../utils/Syntax";
import hookUseCallbackText from "./codes/hook-use-callback.js.txt?raw";
import hookUseEffectDepNoneText from "./codes/hook-use-effect-dep-none.js.txt?raw";
import hookUseEffectText from "./codes/hook-use-effect.js.txt?raw";
import hookUseMemoText from "./codes/hook-use-memo.js.txt?raw";
import hookUseStateMultiText from "./codes/hook-use-state-multi.js.txt?raw";
import hookUseStateText from "./codes/hook-use-state.js.txt?raw";

function Main() {
  return (
    <SapaLayout>
      <h1>Hook</h1>
      <p>Sapa 는 React 와 비슷한 Hook 을 지원합니다.</p>
      <p>Hook 은 컴포넌트의 상태를 저장하고 사용하는 방법입니다.</p>
      <p>
        잠깐 사용법을 볼까요?
        <h2>useState</h2>
        <p>
          컴포넌트의 상태를 저장합니다. 컴포넌트의 상태는 hook 의 실행 순서에
          영향을 받습니다.
        </p>
        <code>{Syntax(hookUseStateText)}</code>
        <p>
          여러개의 Hook 을 동시에 사용할 수도 있습니다.
          <code>{Syntax(hookUseStateMultiText)}</code>
        </p>
      </p>

      <h2>useEffect</h2>
      <p>useEffect hook 은 dom 이 추가 될때 반응합니다.</p>
      <p>
        <code>{Syntax(hookUseEffectText)}</code>
      </p>
      <p>
        useEffect 는 callback 과 dependency 를 입력합니다. dependency 입력에
        따라 다양한 효과가 발생합니다.
        <code>{Syntax(hookUseEffectDepNoneText)}</code>
      </p>

      <h2>useCallback</h2>
      <p>
        useCallback hook 은 상태를 가지고 있는 Callback 을 저장하는 방법입니다.
      </p>
      <p>
        기본 사용 법은 useEffect 와 유사합니다. 최종적으로 callback 함수를
        리턴하는 것만 다릅니다.
      </p>
      <p>
        <code>{Syntax(hookUseCallbackText)}</code>
      </p>
      <p>
        useCallback 을 사용할 때는 기억해야할 것이 있습니다. dependency 적용 한
        것에 따라서 함수가 달라지기 때문에 변경된 다른 상태 값이 필요 할 경우
        dependency 에 꼭 넣어주셔야 합니다.
      </p>

      <h2>useMemo</h2>
      <p>useMemo hook 은 특정한 상태의 값을 유지하기 위한 방법입니다.</p>
      <p>
        특정 상태에 따라 값을 저장하기 때문에 상태가 변경 되지 않을 때는 기존
        값으로 유지할 수 있습니다. 이것은 속성 비교 할 때 매번 변경되지 않는
        이점을 줍니다.
      </p>
      <p>
        <code>{Syntax(hookUseMemoText)}</code>
      </p>
    </SapaLayout>
  );
}

start(Main);
