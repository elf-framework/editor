import { potal, UIElement, useState } from "@elf-framework/sapa";

class PotalTest extends UIElement {
  template() {
    const props = this.props;
    return <div>potal test {props.a} </div>;
  }

  hide() {
    console.log(this.$el);

    this.destroy(true);

    console.log(this);
  }
}

export function SampleApp() {
  const [value, setValue] = useState(1);

  function click() {
    console.log("click");

    const instance = potal(<PotalTest />);

    instance.hide();
  }

  return (
    <div>
      <button onClick={click}>test 200 {value}</button>
      <>
        <div>1</div>
        <div>2</div>
        <div>{value}</div>
      </>
    </div>
  );
}
