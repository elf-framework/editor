import { Button } from ".";

export function OutlineButton({ content, ...props }) {
  return (
    <Button {...props} outline>
      {content}
    </Button>
  );
}
