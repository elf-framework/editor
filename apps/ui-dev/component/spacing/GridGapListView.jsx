import tokens from "@elf-framework/design-tokens/tokens.json";

import { CopyText } from "../CopyText";

export function GridGapListView() {
  return (
    <div class="grid-gap-list-view">
      <table
        style={{
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th>CSS</th>
            <th>CSS Class</th>
            <th>SCSS</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(tokens.gap).map((key) => {
            return (
              <tr>
                <td>
                  <CopyText text={`--gap-${key}`} />
                </td>
                <td>
                  <CopyText text={`.gap-${key}`} />
                </td>
                <td>
                  <CopyText text={`$gap-${key}`} />
                </td>
                <td>
                  <CopyText text={tokens.gap[key]} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
