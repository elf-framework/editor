import { useCallback, useEffect, useMemo, useState } from "@elf-framework/sapa";

function Grid({ content }) {
  return <div>{content}</div>;
}

export function Test2(props) {
  const [value, setValue] = useState(0);

  console.log(value, this.id, this.sourceName);
  return (
    <Grid>
      <div {...props} class="test-component">
        Test2 2324324324 fdsafdsf {value}
        <button type="button" onClick={() => setValue(value + 1)}>
          aaaaa
        </button>
      </div>
    </Grid>
  );
}
