import { useComponentRender, useEffect } from "@elf-framework/sapa";

function draw(ctx) {
  const canvas = ctx.canvas;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(100, 100, 200, 200);
  ctx.clearRect(120, 120, 160, 160);
  ctx.strokeRect(160, 160, 80, 80);

  requestAnimationFrame(() => draw(ctx));
}

export function Canvas3D() {
  useComponentRender("resize.window");

  useEffect(() => {
    const ctx = this.$el.el.getContext("2d");
    const rect = this.$el.rect();

    const width = +this.$el.attr("width");

    if (!width) {
      const devicePixelRatio = window.devicePixelRatio || 1;
      const backingStoreRatio = ctx.backingStorePixelRatio || 1;
      const ratio = devicePixelRatio / backingStoreRatio;

      this.$el.attr("width", rect.width * ratio);
      this.$el.attr("height", rect.height * ratio);

      // ctx.scale(ratio, ratio);
    }

    requestAnimationFrame(() => draw(ctx));
  }, [window.innerWidth, window.innerHeight]);

  return (
    <canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        backgroundColor: "#ececec",
      }}
    ></canvas>
  );
}
