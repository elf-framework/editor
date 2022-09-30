import tokens from "@elf-framework/design-tokens/tokens.json";

import { CopyText } from "../CopyText";
import "./FontSizeView.scss";

export function FontSizeView() {
  return (
    <div class="font-size-view">
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
          {Object.keys(tokens.font.size).map((key) => {
            return (
              <tr>
                <td>
                  <CopyText text={`--font-size-${key}`} />
                </td>
                <td>
                  <CopyText text={`$font-size-${key}`} />
                </td>
                <td>
                  <CopyText text={tokens.font.size[key]} />
                </td>
                <td>
                  <span style={{ fontSize: `var(--font-size-${key})` }}>
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
