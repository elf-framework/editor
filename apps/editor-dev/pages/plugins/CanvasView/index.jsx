import { useComponentRender, useEffect, useRef } from "@elf-framework/sapa";

export function Canvas3D() {
  const canvasRef = useRef();
  useComponentRender("resize.window");

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    const rect = canvasRef.current.getBoundingClientRect();

    const width = +canvasRef.current.getAttribute("width");

    if (!width) {
      const devicePixelRatio = window.devicePixelRatio || 1;
      const backingStoreRatio = ctx.backingStorePixelRatio || 1;
      const ratio = devicePixelRatio / backingStoreRatio;

      canvasRef.current.setAttribute("width", rect.width * ratio);
      canvasRef.current.setAttribute("height", rect.height * ratio);

      // ctx.scale(ratio, ratio);
    }

    let requestId;

    function draw() {
      const canvas = ctx.canvas;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgb(100, 100, 255)";
      ctx.fillRect(100, 100, 200, 200);
      ctx.clearRect(120, 120, 160, 160);
      ctx.strokeStyle = "rgb(200, 5, 255)";
      ctx.lineWidth = 5;
      ctx.strokeRect(160, 160, 80, 80);
    }

    function render() {
      draw();

      requestId = requestAnimationFrame(render);
    }

    render();
    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
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
