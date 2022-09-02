import { Field } from "./Field";

import { InputEditor } from ".";

export function TextField({ label, help, position, value }) {
  return (
    <Field label={label} help={help} position={position}>
      <InputEditor value={value} />
    </Field>
  );
}
