import { UIElement, useCallback, useMemo } from "@elf-framework/sapa";

export class Test extends UIElement {
  initState() {
    return {
      value: 0,
    };
  }

  template() {
    const { value } = this.state;
    const props = this.props;

    const b = useMemo(() => {
      return value + 1;
    }, [value]);

    const c = useCallback(() => {
      this.setState({ value: value + 2 });
    }, [value]);

    return (
      <div {...props} class="test-component">
        Test {value} {b + value + 3}
        <p>
          --{value}--fdsafdsf--{b}
        </p>
        <button type="button" onClick={c}>
          aaaaa fdsafdsafdsafdsa fdsa fdsa fdsa fdsaf dsafd sf
        </button>
      </div>
    );
  }
}
