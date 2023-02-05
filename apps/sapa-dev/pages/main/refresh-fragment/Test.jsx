import { Test2 } from "./Test2";

export function Test() {
  return (
    <div class="test">
      <div>Fragment Test 1</div>
      <div>Test2</div>
      <Test2 a="1" b="2" c="3" />
      <div>Fragment End 1</div>
    </div>
  );
}
