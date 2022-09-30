import { useEffect, useState } from "@elf-framework/sapa";
import {
  Animation,
  Badge,
  Blank,
  Ghost,
  Grid,
  ProgressBar,
  ProgressCircle,
} from "@elf-framework/ui";

import { PreviewItem } from "./PreviewItem";

export function StatusView() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let id;
    setTimeout(() => {
      function run() {
        id = setInterval(() => {
          setValue((value) => {
            const newValue = Math.max(0, Math.min(value + 1, 100));

            if (newValue === 100) {
              clearInterval(id);

              setTimeout(() => {
                setValue(0);
                run();
              }, 3000);
            }
            return newValue;
          });
        }, 10);
      }

      run();
    }, 1000);

    return () => {
      if (id) clearInterval(id);
    };
  }, []);
  return (
    <div>
      <Grid columns={2} style={{ gap: 10 }}>
        <PreviewItem
          title={"Animation"}
          link={"/pages/design-system/components/status/animation/"}
        >
          <Animation.spin duration="2s" play>
            <ProgressCircle size="large" variant="primary" value={30} />
          </Animation.spin>
          <div
            style={{
              marginTop: 10,
            }}
          >
            spin
          </div>
        </PreviewItem>

        <PreviewItem
          title={"Ghost"}
          link={"/pages/design-system/components/status/ghost/"}
        >
          <div
            style={{
              width: 100,
              height: 100,
            }}
          >
            <Ghost animated />
          </div>
        </PreviewItem>

        <PreviewItem
          title={"Blank"}
          link={"/pages/design-system/components/status/blank/"}
        >
          <Blank stripe="default" />
        </PreviewItem>

        <PreviewItem
          title={"Badge"}
          link={"/pages/design-system/components/status/badge/"}
        >
          <div
            style={{
              display: "flex",
              gap: 10,
            }}
          >
            <Badge variant="neutral" size="small">
              Archived
            </Badge>
            <Badge variant="notice" size="small">
              Approved
            </Badge>
            <Badge variant="celery" size="small">
              Beta
            </Badge>
          </div>
        </PreviewItem>
        <PreviewItem
          title={"Progress bar"}
          link={"/pages/design-system/components/status/progressbar/"}
        >
          <ProgressBar
            title="Loading data..."
            value={value}
            valueText={`${value}%`}
          />
        </PreviewItem>
        <PreviewItem
          title={"Progress circle"}
          link={"/pages/design-system/components/status/progress-circle/"}
        >
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <ProgressCircle
              size="extra-large"
              value={10}
              indeterminate
              variant="danger"
            />
            <ProgressCircle size="large" value={50} variant="primary" />
            <ProgressCircle animated />
            <ProgressCircle
              animated
              animationType="spin"
              value={30}
              style={{
                duration: "1s",
              }}
            />
          </div>
        </PreviewItem>
      </Grid>
    </div>
  );
}
