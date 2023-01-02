import { useSyncExternalStore } from "@elf-framework/sapa";
import { Badge } from "@elf-framework/ui";

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
      {counter > 0 ? <Badge variant="notice">{counter}</Badge> : undefined}
    </div>
  );
}
