import { useEffect, useRef, useRootContext } from "@elf-framework/sapa";

import { Test } from "./Test";

export function SampleApp() {
  const ref = useRef(null);
  useEffect(() => {
    console.log(
      "1. 새로고침 될 때 한번만 실행되어야 함",
      "SampleApp",
      ref.current
    );
  }, [ref]);
  const app = useRootContext("app");

  return <Test ref={ref} a={1} b={2} c={3} app={app} />;
}
