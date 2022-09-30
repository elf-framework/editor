import { useCallback, useEffect, useMemo, useState } from "@elf-framework/sapa";

export function Test(props) {
  const [value, setValue] = useState(0);
  const b = useMemo(() => {
    return value + 1;
  }, [value]);
  const c = useCallback(() => {
    setValue(value + 1);
  }, [value, setValue]);
  useEffect(() => {
    console.log("여긴 새로고침 fdsafsdf 될 때 한번만 실행되어야 함 234324");
  }, []);
  return (
    <div {...props} class="test-component">
      Test 2324324324 fdsafdsf {value} {b + value + 3}
      <p>
        --{value}--fdsafdsf--{b}
      </p>
      <button type="button" onClick={c}>
        aaaaa
      </button>
    </div>
  );
}
