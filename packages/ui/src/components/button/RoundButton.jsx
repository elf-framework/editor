import { Button } from ".";

export function RoundButton({ content, ...props }) {
  return (
    <Button {...props} shape="round">
      {content}
    </Button>
  );
}
