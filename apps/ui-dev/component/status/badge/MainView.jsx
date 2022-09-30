import { Badge, VBox } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 300],
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          width: 240,
          gap: 30,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          <div>
            <Badge variant="neutral" size="small">
              Archived
            </Badge>
          </div>
          <div>
            <Badge variant="positive" size="small">
              Approved
            </Badge>
          </div>
          <div>
            <Badge variant="celery" size="small">
              Beta
            </Badge>
          </div>
          <div>
            <Badge variant="informative" size="small">
              Active
            </Badge>
          </div>
          <div>
            <Badge variant="magenta" size="small">
              Advanced
            </Badge>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          <div>
            <Badge variant="notice" size="small">
              Scheduled
            </Badge>
          </div>
          <div>
            <Badge variant="purple" size="small">
              Beginner
            </Badge>
          </div>
          <div>
            <Badge variant="negative" size="small">
              Trial
            </Badge>
          </div>
          <div>
            <Badge variant="negative" size="small">
              Reject
            </Badge>
          </div>
          <div>
            <Badge variant="yellow" size="small">
              Beta deal
            </Badge>
          </div>
        </div>
      </div>
    </VBox>
  );
}
