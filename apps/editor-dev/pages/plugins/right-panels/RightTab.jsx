import { Divider } from "@elf-framework/ui";

import { SamplePanel } from "./SamplePanel";

export function RightTab() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        overflow: "auto",
      }}
    >
      <SamplePanel />
      <Divider height={1} margin={0} />
    </div>
  );
}
