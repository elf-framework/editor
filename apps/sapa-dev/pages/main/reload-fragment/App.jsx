import { Second } from "./Second";

function GetFragmentElement() {
  return (
    <>
      <div>afdsafsdf 234324 4 5</div>
      <Second />
    </>
  );
}

export function App() {
  return (
    <div class="root">
      <div>Fragment 시작합니다. 1</div>
      <GetFragmentElement />
      <div>Fragment 끝입니다. 1</div>
    </div>
  );
}
