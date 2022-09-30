import tokens from "@elf-framework/design-tokens/tokens.json";

import { CopyText } from "../CopyText";
import "./FontWeightView.scss";

export function FontWeightView() {
  return (
    <div class="font-weight-view">
      <table
        style={{
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th>CSS</th>
            <th>SCSS</th>
            <th>Value</th>
            <th>Sample</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(tokens.font.weight).map((key) => {
            return (
              <tr>
                <td>
                  <CopyText text={`--font-weight-${key}`} />
                </td>
                <td>
                  <CopyText text={`$font-weight-${key}`} />
                </td>
                <td style={{ width: 100 }}>
                  <CopyText text={tokens.font.weight[key]} />
                </td>
                <td>
                  <span
                    style={{
                      fontWeight: `var(--font-weight-${key})`,
                      fontSize: 20,
                    }}
                  >
                    I can do it.
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
