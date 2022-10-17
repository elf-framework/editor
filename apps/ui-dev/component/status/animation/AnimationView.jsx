import { Animation, Grid, ProgressCircle, VBox } from "@elf-framework/ui";

export function AnimationView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "30px 20px",
          fontSize: 13,
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Grid columns={4} gap={20}>
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
          </Grid>
        </div>
      </VBox>
      <div>
        <p>
          <p>
            Supports small animation. If you use Animation well, you can convey
            information more effectively.
            <ul>
              <li>spin</li>
              <li>ping</li>
              <li>fade</li>
              <li>scaledown</li>
              <li>bounce</li>
              <li>flash</li>
              <li>pulse</li>
              <li>rubberBand</li>
              <li>shake</li>
              <li>headShake</li>
              <li>swing</li>
              <li>tada</li>
              <li>wobble</li>
              <li>jello</li>
              <li>heartBeat</li>
            </ul>
          </p>
        </p>
      </div>
    </Grid>
  );
}
