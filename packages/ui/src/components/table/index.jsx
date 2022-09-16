import { classnames, UIElement, useMemo } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";
import { Checkbox } from "../checkbox";

const cssProperties = makeCssVariablePrefixMap("--elf--table", {
  backgroundColor: true,
  color: true,
  duration: true,
  offset: true,
  width: true,
  cellTextAlign: true,
});

const headCssProperties = makeCssVariablePrefixMap("--elf--table-head", {
  cellAlign: true,
  cellPadding: true,
});

export class Table extends UIElement {
  template() {
    const {
      quiet = false,
      columns = [],
      data = [],
      style = {},
      selectionStyle = "highlight",
      selectionType = "multiple",
    } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf--table", {
        quiet,
        [selectionStyle]: true,
        [selectionType]: true,
      });
    }, [quiet, selectionStyle, selectionType]);
    const styleObject = {
      class: localClass,
      style: propertyMap(style, cssProperties),
    };

    let allChecked = false;
    let indeterminate = false;

    if (selectionStyle === "checkbox") {
      const filterData = data.filter((item) => item.selected);

      if (filterData.length === data.length) {
        allChecked = true;
      } else if (filterData.length > 0 && filterData.length < data.length) {
        indeterminate = true;
      }
    }

    return (
      <table {...styleObject}>
        <thead>
          <tr>
            {selectionStyle === "checkbox" ? (
              <th class="elf--table-head-cell">
                <Checkbox checked={allChecked} indeterminate={indeterminate} />
              </th>
            ) : undefined}

            {columns.map((column) => {
              if (column.style?.display === "none") {
                return undefined;
              }

              return (
                <th
                  class={classnames({
                    divider: column.showDivider,
                  })}
                  style={propertyMap(column?.style, headCssProperties)}
                >
                  <div class="head-content">
                    <label>{column.title}</label>
                    {column.tools ? (
                      <div class="tools">{column.tools}</div>
                    ) : undefined}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            return (
              <tr
                class={classnames({
                  selected: row.selected,
                })}
              >
                {selectionStyle === "checkbox" ? (
                  <td class="elf--table-cell">
                    <Checkbox
                      checked={row.selected}
                      indeterminate={row.indeterminate}
                    />
                  </td>
                ) : undefined}
                {columns.map((column) => {
                  if (column.style?.display === "none") {
                    return undefined;
                  }

                  return (
                    <td
                      class={classnames({
                        divider: column.showDivider,
                      })}
                      style={{
                        textAlign: column.style?.textAlign,
                        display: column.style?.display,
                      }}
                    >
                      {column.render
                        ? column.render(column.key, row[column.key], row, data)
                        : row[column.key]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

registerComponent("table", Table);
registerComponent("Table", Table);
