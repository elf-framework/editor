import {
  LOAD,
  INPUT,
  FOCUS,
  BLUR,
  POINTERSTART,
  createComponent,
  classnames,
} from "@elf/sapa";

import "./RangeEditor.scss";

import { END } from "apps/blankeditor/types/event";
import { EditorElement } from "elf/editor/ui/common/EditorElement";
import { Length } from "elf/editor/unit/Length";
import { iconUse } from "@elf/icon";

export class RangeEditor extends EditorElement {
  initState() {
    var units = this.props.units || ["px", "em", "%"];
    var value = Length.parse(this.props.value || 0);

    return {
      compact: this.props.compact === "true" ? true : false,
      label: this.props.label || "",
      min: +this.props.min || 0,
      max: +this.props.max || 100,
      step: +this.props.step || 1,
      key: this.props.key,
      params: this.props.params || "",
      layout: this.props.layout || "",
      units,
      value,
    };
  }

  template() {
    return /*html*/ `<div class='small-editor' ref='$body'></div>`;
  }

  [LOAD("$body")]() {
    var { min, max, step, label, layout, compact } = this.state;

    label = iconUse(label);

    var value = +this.state.value.value.toString();

    if (isNaN(value)) {
      value = 0;
    }

    var layoutClass = layout;

    var realValue = (+value).toString();

    if (this.state.units === "%") {
      throw new Error("%");
    }

    var units = this.state.units.map((it) => {
      let description = it;
      if (description === "number") {
        description = "";
      }
      return { value: it, text: description };
    });

    return /*html*/ `
        <div 
            ref="$range"
            class="${classnames({
              "elf--range--editor": true,
              "has-label": !!label,
              compact: !!compact,
              [layoutClass]: true,
            })}"
        >
            ${label ? `<label title="${label}">${label}</label>` : ""}
            <div class='range--editor-type' data-type='range'>
                <input type='range' ref='$property' value="${realValue}" min="${min}" max="${max}" step="${step}" /> 
                <div class='area' ref='$rangeArea'>
                    <input type='number' ref='$propertyNumber' value="${realValue}" min="${min}" max="${max}" step="${step}" tabIndex="1" />
                    ${createComponent("SelectEditor", {
                      ref: "$unit",
                      key: "unit",
                      value: this.state.value.unit,
                      options: units,
                      onchange: (key, value) => {
                        this.changeUnit(key, value);
                      }
                    })}
                </div>
            </div>
        </div>
    `;
  }

  getValue() {
    return this.state.value.clone();
  }

  setValue(value) {
    this.setState({
      value: Length.parse(value),
    });
  }

  [FOCUS('$body input[type="number"]')]() {
    this.refs.$rangeArea.addClass("focused");
  }

  [BLUR('$body input[type="number"]')]() {
    this.refs.$rangeArea.removeClass("focused");
  }

  updateData(data) {
    this.setState(data, false);
    this.parent.trigger(
      this.props.onchange,
      this.props.key,
      this.state.value,
      this.props.params
    );
  }

  initValue() {
    if (this.state.value == "") {
      this.state.value = new Length(0, this.children.$unit.getValue());
    }
  }

  [INPUT('$body input[type="number"]')]() {
    var value = +this.refs.$propertyNumber.value;
    this.getRef("$property").val(value);

    this.initValue();

    this.updateData({
      value: new Length(value, this.children.$unit.getValue()),
    });
  }

  [INPUT('$body input[type="range"]')]() {
    this.changeRangeValue();
  }

  [POINTERSTART('$body input[type="range"]') + END()]() {}

  end() {
    this.changeRangeValue();
  }

  changeRangeValue() {
    var value = +this.getRef("$property").value;
    this.refs.$propertyNumber.val(value);

    this.initValue();

    this.updateData({
      value: new Length(value, this.children.$unit.getValue()),
    });
  }

  changeUnit(key, value) {
    this.initValue();

    this.updateData({
      value: this.state.value.toUnit(value),
    });
  }
}
