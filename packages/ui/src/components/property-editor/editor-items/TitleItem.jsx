import { View } from "../../view";

export function TitleItem({ item: { value, key } }) {
  return (
    <View as="div" key={key}>
      {value}
    </View>
  );
}
