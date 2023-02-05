import { useState } from "@elf-framework/sapa";

function NonBooleanComponent(props) {
  return <div {...props}>NonBooleanComponent</div>;
}
export function ElementComponentSwitch(props) {
  const [isBoolean, setBoolean] = useState(true);

  console.log(isBoolean);

  return (
    <div>
      <button onClick={() => setBoolean(!isBoolean)}>Toggle</button>
      {isBoolean ? (
        <div {...props}>true</div>
      ) : (
        <NonBooleanComponent {...props} />
      )}
    </div>
  );
}
