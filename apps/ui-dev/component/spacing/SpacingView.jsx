import tokens from "@elf-framework/design-tokens/tokens.json";

import { CopyText } from "../CopyText";

const mapper = {
  0: "xxxs",
  1: "xxs",
  2: "xs",
  3: "sm",
  4: "md",
  5: "lg",
  6: "xl",
  7: "xxl",
  8: "xxxl",
};

export function SpacingView() {
  return (
    <div class="spacing-view">
      <div
        class="size-preview"
        style={{
          backgroundColor: tokens.color.gray["0"],
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          height: 80,
          marginBottom: 50,
          gap: 30,
          padding: 50,
        }}
      >
        {Object.keys(tokens.spacing).map((key) => {
          if (key === "size") return undefined;

          return (
            <div>
              <div
                class="size-item"
                style={{
                  backgroundColor: tokens.color.blue["5"],
                  width: tokens.spacing[key],
                  height: tokens.spacing[key],
                }}
              ></div>
              <div
                style={{
                  fontSize: 12,
                  textAlign: "center",
                  paddingTop: 10,
                }}
              >
                {tokens.spacing[key]}
              </div>
            </div>
          );
        })}
      </div>

      <table
        style={{
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th>CSS</th>
            <th>CSS Alias</th>
            <th>SCSS</th>
            <th>SCSS Alias</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(tokens.spacing).map((key) => {
            if (key === "size") return undefined;
            return (
              <tr>
                <td>
                  <CopyText text={`--spacing-${key}`} />
                </td>
                <td>
                  <CopyText text={`--spacing-size-${mapper[key]}`} />
                </td>
                <td>
                  <CopyText text={`$spacing-${key}`} />
                </td>
                <td>
                  <CopyText text={`$spacing-${mapper[key]}`} />
                </td>
                <td>
                  <CopyText text={tokens.spacing[key]} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
