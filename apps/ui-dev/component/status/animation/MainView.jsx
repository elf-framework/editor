import { Animation, ProgressCircle, VBox } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 100],
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 50,
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {[
            "spin",
            "ping",
            "fade",
            "scaledown",
            "bounce",
            "flash",
            "pulse",
            "rubberBand",
            "shake",
            "headShake",
            "swing",
            "tada",
            "wobble",
            "jello",
            "heartBeat",
          ].map((it) => {
            const A = Animation[it];
            return (
              <div>
                <A duration="2s" play>
                  <ProgressCircle size="large" variant="primary" value={30} />
                </A>
                <div>{it}</div>
              </div>
            );
          })}
        </div>
      </div>
    </VBox>
  );
}
