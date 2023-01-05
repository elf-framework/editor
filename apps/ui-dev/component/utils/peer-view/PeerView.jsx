import { useSyncExternalStore } from "@elf-framework/sapa";
import { Badge, Tooltip } from "@elf-framework/ui";

import { yorkieStore } from "~/hooks/yorkieStore";

export function PeerView({ noLabel = false }) {
  const store = useSyncExternalStore(
    yorkieStore.subscribe,
    yorkieStore.getSnapShot
  );

  const counter = Object.entries(store.peers || {}).length;

  return (
    <div
      class="peer-view"
      onClick={() => {
        window.open("https://yorkie.dev");
      }}
    >
      {noLabel ? "" : "Users: "}
      {counter > 0 ? (
        <Tooltip message={"Powered by Yorkie"}>
          <Badge
            variant="notice"
            style={{
              cursor: "pointer",
            }}
          >
            {counter}
          </Badge>
        </Tooltip>
      ) : undefined}
    </div>
  );
}
