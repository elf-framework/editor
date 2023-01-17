import {
  UIElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "@elf-framework/sapa";

import { Sample } from "./Sample";

export class Test extends UIElement {
  initState() {
    return {
      value: 0,
    };
  }

  template() {
    const { value } = this.state;
    const props = this.props;

    const ref = useRef(null);
    const b = useMemo(() => {
      return value + 1;
    }, [value]);

    const c = useCallback(() => {
      this.setState({ value: value + 2 });
    }, [value]);

    useEffect(() => {
      console.log(
        "새로고침 될 때 한번만 실행되어야 함",
        "Test",
        ref.current,
        this.$el.el
      );
    }, [ref]);

    return (
      <div {...props} b={b} ref={ref} class="test-component">
        <button type="button" onClick={c}>
          {b} 1 fd 10 30
        </button>
        <Sample />
      </div>
    );
  }
}
