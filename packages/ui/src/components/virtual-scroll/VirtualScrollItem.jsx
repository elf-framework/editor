export function VirtualScrollItem({ top, style, content }) {
  return (
    <div
      class="elf--virtual-scroll-item"
      style={{ ...style, "--elf--virtual-scroll-item-top": top + "px" }}
    >
      {content}
    </div>
  );
}
